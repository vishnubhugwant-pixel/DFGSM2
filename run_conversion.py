import os, sys, json, re, asyncio, time
from winsdk.windows.media.ocr import OcrEngine
from winsdk.windows.globalization import Language
import build_annales_engine as engine

sys.stdout.reconfigure(encoding='utf-8')

ROOT = "ANNALES DFGSM2"
ANNALES_QCM_JS = "data/annales_qcm.js"

def load_existing():
    existing = {}
    if os.path.exists(ANNALES_QCM_JS):
        with open(ANNALES_QCM_JS, "r", encoding="utf-8") as f:
            content = f.read()
        # Find every window.ANNALES_QCM["..."] = [...]
        pattern = re.compile(r'window\.ANNALES_QCM\["([^"]+)"\]\s*=\s*(\[[\s\S]*?\]);')
        for m in pattern.finditer(content):
            key = m.group(1)
            try:
                qs = json.loads(m.group(2))
                existing[key] = qs
            except Exception as e:
                print(f"Error parsing existing key {key}: {e}")
    return existing

def load_catalog():
    with open("catalog.json", "r", encoding="utf-8") as f:
        data = json.load(f)
    items = []
    for ue in data:
        ue_code = ue["code"]
        dossier = ue["dossier"] # e.g. "ANNALES DFGSM2/UE2.S3 Bases fondamentales"
        for grp in ue["groupes"]:
            g_nom = grp["nom"]
            g_dir = grp["dir"]
            for f in grp["fichiers"]:
                key = f"{ue_code}/{g_dir}/{f}"
                full_path = os.path.join(dossier, g_dir, f).replace("/", "\\")
                items.append({
                    "ue": ue_code,
                    "grp": g_dir,
                    "file": f,
                    "key": key,
                    "full_path": full_path
                })
    return items

async def main():
    existing_qcm = load_existing()
    catalog = load_catalog()
    print(f"Total catalog entries: {len(catalog)}.")
    print(f"Existing in annales_qcm.js: {len(existing_qcm)} keys.")

    ocr_eng = OcrEngine.try_create_from_language(Language("fr-FR"))
    if not ocr_eng:
        print("Failed to initialize OcrEngine!")
        return

    missing = []
    for item in catalog:
        if item["key"] not in existing_qcm or len(existing_qcm[item["key"]]) == 0:
            if os.path.exists(item["full_path"]):
                missing.append(item)
            else:
                print(f"File not found on disk: {item['full_path']}")

    print(f"Missing PDFs to convert: {len(missing)}")

    results = dict(existing_qcm)
    total_new_qs = 0
    total_imgs = 0
    start_time = time.time()

    for idx, item in enumerate(missing, 1):
        rel = os.path.relpath(item["full_path"], ROOT).replace("\\", "/")
        print(f"[{idx}/{len(missing)}] Converting {item['key']}...")
        t0 = time.time()
        pages = await engine.ocr_pdf(item["full_path"], ocr_eng)
        qs = engine.parse_pdf_lines(pages, item["key"], rel)
        results[item["key"]] = qs
        dt = time.time() - t0

        imgs_in_qs = [q for q in qs if q.get("image")]
        total_new_qs += len(qs)
        total_imgs += len(imgs_in_qs)
        print(f"    -> {len(qs)} QCMs ({len(imgs_in_qs)} images) in {dt:.1f}s")
        if not qs:
            print(f"    ⚠️ WARNING: 0 questions parsed for {item['key']}")

    print(f"\nWriting updated {ANNALES_QCM_JS}...")
    js_lines = [
        "// ============================================================",
        "// Grimoire Médical — Annales converties en QCM interactifs",
        "// Généré automatiquement depuis les PDF d'annales (corrections Moodle).",
        "// Clé = UE/dossier/fichier PDF d'origine.",
        "// ============================================================",
        "window.ANNALES_QCM = window.ANNALES_QCM || {};"
    ]

    total_all_qs = 0
    # Maintain canonical catalog order
    for item in catalog:
        key = item["key"]
        qs = results.get(key, [])
        total_all_qs += len(qs)
        js_lines.append(f'window.ANNALES_QCM[{json.dumps(key, ensure_ascii=False)}] = ' + json.dumps(qs, ensure_ascii=False, indent=2) + ';')

    js_lines.append("// Les questions d'annales alimentent aussi le Cimetière des Erreurs, le Carnet et les statistiques.")
    js_lines.append("window.ALL_QCM_DATA = window.ALL_QCM_DATA || {};")
    js_lines.append("window.ALL_QCM_DATA['ANNALES'] = [].concat(...Object.values(window.ANNALES_QCM));")

    with open(ANNALES_QCM_JS, "w", encoding="utf-8") as f:
        f.write("\n".join(js_lines) + "\n")

    print(f"\nSUCCESS: Done in {time.time() - start_time:.1f}s!")
    print(f"Total PDFs in catalog: {len(catalog)}")
    print(f"Total PDFs in database: {len(results)}")
    print(f"Total questions in database: {total_all_qs}")
    print(f"Total newly extracted questions: {total_new_qs}")
    print(f"Total newly attached images: {total_imgs}")

if __name__ == "__main__":
    asyncio.run(main())
