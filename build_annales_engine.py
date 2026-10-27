import fitz, os, asyncio, re, json, sys, unicodedata, glob
from winsdk.windows.media.ocr import OcrEngine
from winsdk.windows.globalization import Language
from winsdk.windows.graphics.imaging import BitmapDecoder
from winsdk.windows.storage import StorageFile

sys.stdout.reconfigure(encoding='utf-8')

ROOT = "ANNALES DFGSM2"
OUT = os.path.join("data", "annales_qcm.js")

IMAGE_MAP = {
    ("UE3.S3 Pneumologie/UE3.S3 Pneumologie 1/SQI2.pdf", 3): "data/images/annales/UE3-Pneumo1-SQI2-p2-xref62.jpeg",
    ("UE3.S3 Pneumologie/UE3.S3 Pneumologie 1/SQI2.pdf", 8): "data/images/annales/UE3-Pneumo1-SQI2-p5-xref180.jpeg",
    ("UE3.S3 Pneumologie/UE3.S3 Pneumologie 2/DP1.pdf", 1): "data/images/annales/UE3-Pneumo2-DP1-p2-xref15.jpeg",
    ("UE3.S3 Pneumologie/UE3.S3 Pneumologie 2/DP1.pdf", 2): "data/images/annales/UE3-Pneumo2-DP1-p3-xref41.jpeg",
    ("UE3.S3 Pneumologie/UE3.S3 Pneumologie 2/SQUI N.pdf", 2): "data/images/annales/UE3-Pneumo2-SQUIN-p2-xref37.jpeg",
    ("UE3.S3 Pneumologie/UE3.S3 Pneumologie 2/SQUI N.pdf", 4): "data/images/annales/UE3-Pneumo2-SQUIN-p4-combined.jpeg",
    ("UE3.S3 Pneumologie/UE3.S3 Pneumologie 2/SQUI.pdf", 7): "data/images/annales/UE3-Pneumo2-SQUI-p5-xref165.jpeg",
    ("UE3.S3 Pneumologie/UE3.S3 Pneumologie 2/SQUI.pdf", 15): "data/images/annales/UE3-Pneumo2-SQUI-p10-xref352.jpeg",
    ("UE3.S3 Pneumologie/UE3.S3 Pneumologie 2/mDP1.pdf", 2): "data/images/annales/UE3-Pneumo2-mDP1-p2-xref37.jpeg",
    ("UE3.S3 Pneumologie/UE3.S3 Pneumologie 3/DP1.pdf", 3): "data/images/annales/UE3-Pneumo3-DP1-p3-xref66.jpeg",
    ("UE3.S3 Pneumologie/UE3.S3 Pneumologie 4/SQI1.pdf", 9): "data/images/annales/UE3-Pneumo4-SQI1-p5-xref202.jpeg",
    ("UE3.S3 Pneumologie/UE3.S3 Pneumologie 4/SQI1.pdf", 12): "data/images/annales/UE3-Pneumo4-SQI1-p7-xref268.jpeg",
    ("UE3.S3 Pneumologie/UE3.S3 Pneumologie 5/DP1.pdf", 2): "data/images/annales/UE3-Pneumo5-DP1-p2-xref39.jpeg",
    ("UE3.S3 Pneumologie/UE3.S3 Pneumologie 5/DP1.pdf", 3): "data/images/annales/UE3-Pneumo5-DP1-p4-xref64.jpeg",
    ("UE3.S3 Pneumologie/UE3.S3 Pneumologie 5/mDP3.pdf", 1): "data/images/annales/UE3-Pneumo5-mDP3-p2-xref17.jpeg",
    ("UE3.S3 Pneumologie/UE3.S3 Pneumologie 5/mDP6.pdf", 3): "data/images/annales/UE3-Pneumo5-mDP6-p3-xref59.jpeg",
    ("UE3.S3 Pneumologie/UE3.S3 Pneumologie 5/mDP6.pdf", 4): "data/images/annales/UE3-Pneumo5-mDP6-p4-xref59.jpeg",
    ("UE3.S3 Pneumologie/UE3.S3 Pneumologie 6/DP1.pdf", 2): "data/images/annales/UE3-Pneumo6-DP1-p2-combined.jpeg",
    ("UE5.S3 Néphrologie/UE5.S3 Néphrologie 1/DP1.pdf", 2): "data/images/annales/UE5-Nephro1-DP1-p2-xref37.jpeg",
    ("UE5.S3 Néphrologie/UE5.S3 Néphrologie 1/DP1.pdf", 3): "data/images/annales/UE5-Nephro1-DP1-p3-xref62.jpeg",
    ("UE6.S3 Immunologie/UE6.S3 Immunologie 1/SQI1.pdf", 1): "data/images/annales/UE6-Immuno1-SQI1-p1-xref11.jpeg",
    ("UE6.S3 Immunologie/UE6.S3 Immunologie 1/SQI1.pdf", 8): "data/images/annales/UE6-Immuno1-SQI1-p5-xref11.jpeg",
}

def norm(s):
    if not s: return ""
    s = unicodedata.normalize('NFKD', s)
    s = s.replace("’", "'").replace("‘", "'").replace("\xa0", " ")
    s = re.sub(r'[\s\W_]+', '', s.lower())
    return s

def clean_opt_text(txt):
    txt = txt.strip()
    txt = re.sub(r'\s+[XxVv✓√]$', '', txt)
    return txt.strip()

async def ocr_pdf(path, engine):
    doc = fitz.open(path)
    os.makedirs("scratch_ocr", exist_ok=True)
    all_pages = []
    for pno in range(len(doc)):
        pix = doc[pno].get_pixmap(dpi=150)
        tmp = os.path.abspath(f"scratch_ocr/p_{pno}.png")
        pix.save(tmp)
        file = await StorageFile.get_file_from_path_async(tmp)
        stream = await file.open_async(1)
        decoder = await BitmapDecoder.create_async(stream)
        bitmap = await decoder.get_software_bitmap_async()
        res = await engine.recognize_async(bitmap)
        lines = [l.text.strip() for l in res.lines if l.text.strip()]
        all_pages.append(lines)
    return all_pages

def parse_pdf_lines(pages_lines, tag, rel_path):
    flat_lines = []
    for pno, lines in enumerate(pages_lines):
        for l in lines:
            if re.match(r'^\d{1,2}/\d{1,2}/\d{4}', l): continue
            if 'http://' in l or 'https://' in l: continue
            if re.match(r'^\d+/\d+$', l): continue
            if re.match(r'^:?\s*relecture de tentative', l, re.I): continue
            if 'relecture de tentative I Annales' in l or 'relecture de tentative | Annales' in l: continue
            if l in ['Commencé le', 'État', 'Terminé le', 'Temps mis', 'Points', 'Note', 'Note de', 'SQII', 'SQI1', 'DPI', 'DP1', 'SQUI', 'mDP', 'mDPI', 'mDP1']: continue
            if re.match(r'^(lundi|mardi|mercredi|jeudi|vendredi|samedi|dimanche)\s+\d+', l, re.I): continue
            if re.match(r'^\d+\s+(jours?|heures?|min|s)\b', l, re.I): continue
            if re.match(r'^\d+,\d+\s+sur\s+\d+,\d+', l): continue
            if re.match(r'^\d+,\d+/\d+', l): continue
            if re.match(r'^Note de \d+.*sur \d+', l): continue
            flat_lines.append(l)

    questions = []
    cur_q = None
    state = "init"
    general_stem = ""
    ans_buffer = ""

    q_head_re = re.compile(r'^Question\s+([0-9IVXLCDM]+)', re.I)
    # Option pattern: letter A-J with dot or paren
    opt_re = re.compile(r'^(?:[^\w\n]*|[A-Za-z0-9\(\)\[\]"\':\s]{0,4})\b([a-jA-J])[\.\)]\s*(.*)$')
    opt_letter_only_re = re.compile(r'^(?:[^\w\n]*|[A-Za-z0-9\(\)\[\]"\':\s]{0,4})\b([a-jA-J])[\.\)]?\s*$')
    feed_re = re.compile(r'^(La réponse n.est pas correcte|La réponse est correcte|Votre réponse est|Vous avez sélectionné|Veuillez|Partiellement correct|Incorrect|Correct)', re.I)
    ans_start_re = re.compile(r'^(La réponse correcte est|Les réponses correctes sont)\s*:\s*(.*)$', re.I)

    for i, line in enumerate(flat_lines):
        if line.lower() == 'énoncé général' or line.lower() == 'enoncé général':
            state = "general"
            continue

        m_q = q_head_re.match(line)
        if m_q:
            if cur_q and cur_q.get("options"):
                finalize_q(cur_q, ans_buffer, tag, rel_path, len(questions) + 1)
                questions.append(cur_q)
            cur_q = {
                "num": len(questions) + 1,
                "stem_lines": [],
                "options": {},
                "cur_opt": None,
                "teacher_remarks": [],
                "correctAnswers": []
            }
            if general_stem:
                cur_q["general_context"] = general_stem
            state = "stem"
            ans_buffer = ""
            continue

        if state == "general":
            if not m_q:
                general_stem += (" " if general_stem else "") + line
            continue

        if not cur_q:
            continue

        if state == "stem":
            if line in ['Correct', 'Incorrect', 'Partiellement correct', 'Pas de réponse', 'Non répondue', 'Non répondu']:
                continue
            if re.match(r'^Note de .*', line):
                continue
            m_opt = opt_re.match(line)
            m_opt_only = opt_letter_only_re.match(line)
            if m_opt and m_opt.group(1).upper() in 'ABCDEFGHIJ' and m_opt.group(2).strip():
                let = m_opt.group(1).upper()
                txt = clean_opt_text(m_opt.group(2))
                cur_q["options"][let] = txt
                cur_q["cur_opt"] = let
                state = "opts"
            elif m_opt_only and m_opt_only.group(1).upper() in 'ABCDEFGHIJ':
                let = m_opt_only.group(1).upper()
                cur_q["options"][let] = ""
                cur_q["cur_opt"] = let
                state = "opts"
            else:
                cur_q["stem_lines"].append(line)

        elif state == "opts":
            m_opt = opt_re.match(line)
            m_opt_only = opt_letter_only_re.match(line)
            m_ans = ans_start_re.match(line)
            m_feed = feed_re.match(line)

            if m_ans:
                state = "ans"
                ans_buffer = m_ans.group(2).strip()
            elif m_feed:
                state = "feed"
            elif m_opt and m_opt.group(1).upper() in 'ABCDEFGHIJ' and m_opt.group(2).strip():
                let = m_opt.group(1).upper()
                txt = clean_opt_text(m_opt.group(2))
                cur_q["options"][let] = txt
                cur_q["cur_opt"] = let
            elif m_opt_only and m_opt_only.group(1).upper() in 'ABCDEFGHIJ':
                let = m_opt_only.group(1).upper()
                cur_q["options"][let] = ""
                cur_q["cur_opt"] = let
            else:
                if cur_q["cur_opt"]:
                    if not cur_q["options"][cur_q["cur_opt"]]:
                        cur_q["options"][cur_q["cur_opt"]] = clean_opt_text(line)
                    else:
                        cur_q["options"][cur_q["cur_opt"]] += " " + clean_opt_text(line)

        elif state == "feed":
            m_ans = ans_start_re.match(line)
            if m_ans:
                state = "ans"
                ans_buffer = m_ans.group(2).strip()
            else:
                if not feed_re.match(line):
                    cur_q["teacher_remarks"].append(line)

        elif state == "ans":
            ans_buffer += " " + line

    if cur_q and cur_q.get("options"):
        finalize_q(cur_q, ans_buffer, tag, rel_path, len(questions) + 1)
        questions.append(cur_q)

    return questions

def finalize_q(q, ans_buf, tag, rel_path, q_num):
    stem = " ".join(q["stem_lines"]).strip()
    stem = re.sub(r'^(Terminée|Terminé)\s*', '', stem, flags=re.I).strip()
    # Strip running title from stem if present
    stem = re.sub(r'^(SQII|SQI1|DPI|DP1|SQUI|mDP|mDPI|mDP1)\s*', '', stem).strip()
    if q.get("general_context") and not stem.startswith("[Cas clinique"):
        stem = f"[Cas clinique : {q['general_context']}]\n{stem}"
    q["text"] = stem

    # Answer matching
    clauses = re.split(r'\s*,\s*(?=[A-Za-zÀ-ÿ0-9])|\s*;\s*', ans_buf)
    matched = []
    for clause in clauses:
        nc = norm(clause)
        if not nc: continue
        best_let = None
        best_score = 0
        for let, text in q["options"].items():
            nt = norm(text)
            if not nt: continue
            if nc == nt:
                best_let = let
                best_score = 100
                break
            if nc in nt or nt in nc:
                score = min(len(nc), len(nt)) / max(len(nc), len(nt))
                if score > best_score:
                    best_score = score
                    best_let = let
            # Check prefix
            if len(nc) >= 8 and len(nt) >= 8 and nc[:12] == nt[:12]:
                score = 0.85
                if score > best_score:
                    best_score = score
                    best_let = let
        if best_let and best_let not in matched and best_score >= 0.4:
            matched.append(best_let)
            # If the option text was blurred or incomplete, replace with official clause text
            if len(q["options"][best_let]) < len(clause) * 0.6:
                q["options"][best_let] = clause.strip()

    # Fallback if no clause matched
    if not matched:
        n_ans = norm(ans_buf)
        for let, text in q["options"].items():
            nt = norm(text)
            if len(nt) > 4 and (nt in n_ans or (len(nt) > 10 and nt[:12] in n_ans)):
                matched.append(let)

    q["correctAnswers"] = sorted(matched)

    # Attach image if mapped
    img_key = (rel_path.replace("\\", "/"), q["num"])
    if img_key in IMAGE_MAP:
        q["image"] = IMAGE_MAP[img_key]

    # Generate clean ID
    # Tag is like UE3/UE3.S3 Pneumologie 1/SQI1.pdf
    parts = tag.split("/")
    ue = parts[0]
    grp = parts[1].replace(" ", "").replace(".", "")
    fname = parts[2].replace(".pdf", "").replace(" ", "").replace("-", "")
    q["id"] = f"ANN-{ue}-{grp}-{fname}-{q['num']:02d}"

    # Build explanation
    if q["correctAnswers"]:
        expl = "Correction officielle de l'annale — bonnes réponses : " + " ; ".join(
            f"{k}) {q['options'][k]}" for k in q["correctAnswers"] if k in q["options"]
        )
    else:
        expl = f"Correction officielle : {ans_buf}" if ans_buf else "Correction non spécifiée."
    if q["teacher_remarks"]:
        expl += " — Remarques : " + " ".join(q["teacher_remarks"])
    q["explanation"] = expl

    # Cleanup temp fields
    del q["stem_lines"]
    del q["cur_opt"]
    del q["teacher_remarks"]
    del q["num"]
    if "general_context" in q:
        del q["general_context"]
