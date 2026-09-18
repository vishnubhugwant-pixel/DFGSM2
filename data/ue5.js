// ============================================================
// Grimoire Médical — Données QCM : UE5 Néphrologie
// ============================================================
// Dr LE FLECHER — Savoir évaluer l'état d'hydratation
// Reconnaître glomérulaire, tubulaire, vasculaire, interstitiel
// Wooclap du cours, Annales 2022-2023 & Archives 2024-2025 (19 QCMs)
// ============================================================

window.ALL_QCM_DATA = window.ALL_QCM_DATA || {};
window.DATA_UE5 = [

    // ============================================================
    // PARTIE 1 : QUESTIONS D'ENTRAÎNEMENT (WOOCLAP DU COURS)
    // Indices 0 à 13 (14 QCMs)
    // ============================================================

    // Q1 — Wooclap Q1 — Arguments en faveur d'une IRA vs IRC
    {
        "id": "UE5-LF-01",
        "text": "Patient de 50 ans (180 cm, 75 kg), sans antécédent, chez qui l'on découvre fortuitement une créatininémie plasmatique à 200 µmol/L. Quels sont les arguments en faveur d'une insuffisance rénale aiguë (IRA) plutôt que chronique (IRC) ?",
        "options": {
            "A": "Reins mesurés à 11 cm à l'échographie (taille normale)",
            "B": "Taux d'hémoglobine à 10 g/dL",
            "C": "Calcémie normale à 2,40 mmol/L",
            "D": "Créatininémie plasmatique connue à 150 µmol/L 3 mois auparavant",
            "E": "Présence d'une hyperphosphatémie avec parathormone (PTH) très élevée"
        },
        "correctAnswers": ["A", "C"],
        "explanation": "A ✅ VRAI : Des reins de taille normale (grand axe entre 10 et 12 cm chez l'adulte) ou augmentée sont en faveur d'une IRA. Dans l'IRC évoluée, le processus de fibrose rénale entraîne typiquement une atrophie rénale bilatérale et symétrique (petits reins < 9-10 cm), sauf exceptions notables (diabète, amylose, polykystose, hydronéphrose).\nC ✅ VRAI : Une calcémie normale est un argument fort pour une IRA. Dans l'IRC, le déficit précoce en 1-alpha-hydroxylase rénale (défaut de synthèse du calcitriol 1,25-(OH)2-vitamine D3) et la rétention de phosphate entraînent une hypocalcémie avec hyperparathyroïdie secondaire.\nB ❌ FAUX : L'anémie normochrome normocytaire arégénérative (Hb à 10 g/dL) est un critère classique en faveur de l'IRC (par carence de synthèse d'érythropoïétine / EPO par le tissu péritubulaire rénal). Une anémie dans l'IRA ne se voit qu'en cas d'hémolyse, d'hémorragie ou d'hémodilution aiguë.\nD ❌ FAUX : Une créatininémie déjà élevée (150 µmol/L) plus de 3 mois auparavant définit par consensus international (KDIGO) une Maladie Rénale Chronique (IRC), l'ancienneté des anomalies étant ≥ 3 mois.\nE ❌ FAUX : L'hyperphosphatémie associée à une élévation franche de la PTH témoigne de l'installation d'une hyperparathyroïdie secondaire chronique compliquant une IRC."
    },

    // Q2 — Wooclap Q2 — IRC à reins de taille normale ou augmentée
    {
        "id": "UE5-LF-02",
        "text": "Patient de 50 ans, découverte fortuite d'une créatininémie plasmatique à 200 µmol/L avec une hémoglobine à 9 g/dL et une calcémie à 2,05 mmol/L (orientant vers une IRC). Curieusement, les deux reins sont de taille normale à l'échographie. Quelles étiologies d'IRC à reins de taille normale ou augmentée devez-vous évoquer ?",
        "options": {
            "A": "Néphropathie diabétique",
            "B": "Amylose rénale",
            "C": "Polykystose rénale autosomique dominante (PKRAD)",
            "D": "Hydronéphrose bilatérale (uropathie obstructive chronique)",
            "E": "Néphroangiosclérose bénigne commune non compliquée"
        },
        "correctAnswers": ["A", "B", "C", "D"],
        "explanation": "A ✅ VRAI : Le diabète est la cause la plus fréquente d'IRC à gros reins ou reins de taille conservée (hypertrophie rénale initiale et accumulation matricielle mésangiale/glycation).\nB ✅ VRAI : L'amylose rénale (dépôts de substance amyloïde AL ou AA dans les glomérules et l'interstitium) maintient ou augmente la taille des reins malgré une IRC avancée.\nC ✅ VRAI : La polykystose autosomique dominante (PKRAD) se caractérise par le développement progressif d'innombrables kystes bilatéraux conduisant à une néphromégalie bilatérale majeure avec contours bosselés.\nD ✅ VRAI : Une hydronéphrose bilatérale par obstacle sous-jacent chronique (adénome de prostate, sténose urétrale...) entraîne une distension pyélocalicielle maintenant un grand axe rénal conservé ou augmenté.\nE ❌ FAUX : La néphroangiosclérose bénigne (atteinte vasculaire liée à l'HTA ancienne) donne au contraire le tableau classique d'atrophie rénale bilatérale symétrique avec reins harmonieusement réduits de taille et amincissement cortico-médullaire."
    },

    // Q3 — Wooclap Q3 — Examens complémentaires pour IRC à reins normaux
    {
        "id": "UE5-LF-03",
        "text": "(Suite du même patient présentant une IRC avec reins de taille conservée, dont la créatininémie était déjà à 190 µmol/L 6 mois auparavant). Quels examens complémentaires de première ligne sont les plus pertinents pour identifier la cause de cette néphropathie à reins normaux ?",
        "options": {
            "A": "Échographie abdomino-rénale à la recherche de volumineux kystes rénaux et hépatiques",
            "B": "Biopsie des glandes salivaires accessoires (BGSA) à la recherche de dépôts de substance amyloïde",
            "C": "Échographie des voies urinaires avec mesure du résidu post-mictionnel à la recherche d'un obstacle chronique",
            "D": "Glycémie à jeun et dosage de l'hémoglobine glyquée (HbA1c) à la recherche d'un diabète méconnu",
            "E": "Dosage de l'enzyme de conversion de l'angiotensine à visée diagnostique d'une maladie de Fabry"
        },
        "correctAnswers": ["A", "B", "C", "D"],
        "explanation": "A ✅ VRAI : L'échographie permet de visualiser les multiples kystes rénaux bilatéraux caractéristiques de la polykystose (PKRAD) et d'éventuels kystes hépatiques associés.\nB ✅ VRAI : La BGSA est un examen simple, non invasif, au rendement excellent pour identifier des dépôts amyloïdes (coloration au rouge Congo et biréfringence vert pomme en lumière polarisée) orientant vers une amylose systémique (AL ou AA).\nC ✅ VRAI : L'échographie rénale et vésicale permet de dépister immédiatement une dilatation pyélocalicielle bilatérale en amont d'un obstacle vésicoprostatico-urétral (cause curable d'IRC obstructive).\nD ✅ VRAI : Le dosage de la glycémie et de l'HbA1c recherche une néphropathie diabétique, cause majeure et très fréquente d'IRC à reins normaux.\nE ❌ FAUX : Le dosage de l'ECA est utilisé pour la sarcoïdose (qui donne plutôt une hypercalcémie) et non pour la maladie de Fabry (qui est une surcharge lysosomale en glycosphingolipides diagnostiquée par le dosage de l'alpha-galactosidase A)."
    },

    // Q4 — Wooclap Q4 — Signes cliniques d'IRA fonctionnelle
    {
        "id": "UE5-LF-04",
        "text": "Un patient de 40 ans, sans antécédent, consulte pour une créatininémie à 250 µmol/L (vs 75 µmol/L deux semaines auparavant). Quels sont les éléments cliniques en faveur d'une insuffisance rénale aiguë (IRA) fonctionnelle ?",
        "options": {
            "A": "Perte de poids récente et rapide",
            "B": "Pression artérielle basse (ex: 85/45 mmHg en décubitus ou hypotension orthostatique)",
            "C": "Fréquence cardiaque à 120 bpm (tachycardie sinusale compensatrice)",
            "D": "Pression artérielle à 165/95 mmHg avec turgescence jugulaire spontanée",
            "E": "Poids rigoureusement stable sans sécheresse cutanéo-muqueuse"
        },
        "correctAnswers": ["A", "B", "C"],
        "explanation": "A ✅ VRAI : La perte de poids rapide (de quelques kilogrammes en quelques jours) est le reflet direct d'une balance hydrosodée négative et signe une déshydratation extracellulaire (hypovolémie vraie).\nB ✅ VRAI : L'hypotension artérielle (ou l'hypotension orthostatique précoce) traduit la chute du volume circulant efficace et la baisse du débit de perfusion tissulaire et rénale.\nC ✅ VRAI : La tachycardie sinusale réflexe est le mécanisme d'adaptation baroréflexe immédiat pour maintenir le débit cardiaque face à la baisse du retour veineux et de la volémie.\nD ❌ FAUX : Une HTA avec turgescence jugulaire signe une hypervolémie ou une surcharge hydrosodée (ou orienterait vers une cause glomérulaire/vasculaire aiguë, ou une sténose rénale sévère, mais pas une déshydratation classique).\nE ❌ FAUX : La stabilité pondérale et l'absence de pli cutané ne plaident pas pour une hypovolémie vraie aiguë."
    },

    // Q5 — Wooclap Q5 — Signes urinaires d'IRA fonctionnelle
    {
        "id": "UE5-LF-05",
        "text": "(Même patient). Quels sont les éléments du ionogramme urinaire sur échantillon en faveur d'une insuffisance rénale aiguë fonctionnelle (oligurie adaptée avec rein intact) ?",
        "options": {
            "A": "Natriurèse (NaU) effondrée < 20 mmol/L (ex: 12 mmol/L)",
            "B": "Rapport NaU / KU < 1 (ex: NaU = 25 mmol/L et KU = 50 mmol/L)",
            "C": "Natriurèse (NaU) élevée > 40 mmol/L (ex: 55 mmol/L)",
            "D": "Rapport NaU / KU > 1 (ex: NaU = 50 mmol/L et KU = 25 mmol/L)",
            "E": "Osmolalité urinaire effondrée inférieure à l'osmolalité plasmatique (U/P osm < 1)"
        },
        "correctAnswers": ["A", "B"],
        "explanation": "A ✅ VRAI : Face à l'hypoperfusion rénale, le système rénine-angiotensine-aldostérone (SRAA) et le système sympathique sont stimulés au maximum pour retenir le sel et l'eau. Les tubules rénaux intacts réabsorbent avidement le sodium : NaU est donc très basse, typiquement < 20 mmol/L.\nB ✅ VRAI : L'hyperaldostéronisme secondaire stimule le canal ENaC et la pompe Na+/K+-ATPase dans le canal collecteur : réabsorption maximale de Na+ contre sécrétion de K+. Ainsi, NaU/KU devient inférieur à 1 (ici 25/50 = 0,5).\nC ❌ FAUX : Une natriurèse élevée (> 40 mmol/L) témoigne d'une perte du pouvoir tubulaire d'épargne sodée, caractéristique d'une IRA organique (nécrose tubulaire aiguë) ou de l'action d'un diurétique.\nD ❌ FAUX : Un rapport NaU/KU > 1 reflète l'absence d'effet d'aldostérone ou une incapacité tubulaire à réabsorber le sodium.\nE ❌ FAUX : Dans l'IRA fonctionnelle, sous l'effet de l'ADH (sécrétée en réponse à l'hypovolémie), le rein concentre au maximum les urines : l'osmolalité urinaire est élevée (> 500 mOsm/kg) et U/P osm > 1,5."
    },

    // Q6 — Wooclap Q6 — Indices d'excrétion urée et sodium dans l'IRA fonctionnelle
    {
        "id": "UE5-LF-06",
        "text": "(Même patient). Quels autres indices biologiques urinaires et plasmatiques confirment formellement une IRA fonctionnelle ?",
        "options": {
            "A": "Rapport Urée urinaire / Urée plasmatique (U/P urée) > 10 (ex: 300 mmol/L / 20 mmol/L = 15)",
            "B": "Fraction d'excrétion de l'urée (FE urée) basse < 35 % (ex: 20 %)",
            "C": "Fraction d'excrétion de l'urée (FE urée) élevée > 45 %",
            "D": "Fraction d'excrétion du sodium (FE Na) > 2 % (ex: 3 %)",
            "E": "Rapport U/P de la créatinine effondré < 10"
        },
        "correctAnswers": ["A", "B"],
        "explanation": "A ✅ VRAI : En situation d'hypovolémie, le débit tubulaire est ralenti et l'eau est massivement réabsorbée, ce qui concentre les déchets urinaires. Le rapport U/P urée est typiquement > 10 (ici 300/20 = 15) et le rapport U/P créatinine est > 30.\nB ✅ VRAI : L'urée est réabsorbée passivement de façon très importante au niveau du tube contourné proximal en parallèle de la réabsorption d'eau et de sodium. Sa fraction d'excrétion s'effondre : FE urée < 35 % (critère capital, particulièrement précieux car non faussé par les diurétiques de l'anse).\nC ❌ FAUX : Une FE urée > 45 % est observée dans l'IRA organique (nécrose tubulaire aiguë), où la réabsorption tubulaire proximale est altérée.\nD ❌ FAUX : Dans l'IRA fonctionnelle, le sodium est massivement retenu, donc la fraction d'excrétion du sodium est très basse : FE Na < 1 %. Une FE Na > 2 % signe une NTA organique.\nE ❌ FAUX : Dans l'IRA fonctionnelle, les urines sont très concentrées : le rapport U/P créatinine est élevé (> 30)."
    },

    // Q7 — Wooclap Q7 — Action hormonale tubulaire (Aldostérone)
    {
        "id": "UE5-LF-07",
        "text": "Devant un ionogramme urinaire objectivant une natriurèse à 15 mmol/L et une kaliurèse à 35 mmol/L (rapport NaU / KU = 0,43 < 1), quelle hormone agissant au niveau du néphron distal est principalement responsable de ce profil ?",
        "options": {
            "A": "L'aldostérone",
            "B": "L'hormone antidiurétique (ADH / arginine-vasopressine)",
            "C": "Le peptide natriurétique auriculaire (ANP)",
            "D": "La parathormone (PTH)",
            "E": "L'érythropoïétine (EPO)"
        },
        "correctAnswers": ["A"],
        "explanation": "A ✅ VRAI : L'aldostérone (minéralocorticoïde sécrété par la zone glomérulée de la corticosurrénale sous l'effet de l'angiotensine II et de l'hyperkaliémie) agit sur les cellules principales du tube collecteur cortical. Elle active les canaux sodiques ENaC et la pompe Na+/K+-ATPase, induisant une réabsorption active de Na+ et une excrétion active de K+ et H+. C'est la signature typique d'un rapport NaU/KU < 1.\nB ❌ FAUX : L'ADH régule la réabsorption d'eau pure via l'insertion d'aquaporines 2 (concentrant l'osmolalité et l'urée urinaire), mais ne produit pas cette inversion Na/K.\nC ❌ FAUX : L'ANP a un effet exactement inverse : il inhibe la réabsorption sodée et favorise une natriurèse abondante (rapport Na/K > 1).\nD ❌ FAUX : La PTH régule principalement la réabsorption distale de calcium et inhibe la réabsorption proximale de phosphate.\nE ❌ FAUX : L'EPO stimule l'érythropoïèse médullaire et n'a pas d'effet direct sur l'excrétion urinaire des électrolytes."
    },

    // Q8 — Wooclap Q8 — Natriurèse sous diurétique
    {
        "id": "UE5-LF-08",
        "text": "Patient de 70 ans, présentant une IRA non obstructive dans un contexte de gastro-entérite avec perte de 4 kg, TA à 100/60 mmHg et tachycardie à 105 bpm. Le ionogramme urinaire montre une natriurèse (NaU) à 65 mmol/L et une kaliurèse (KU) à 25 mmol/L (rapport NaU/KU > 1). Le néphrologue affirme pourtant qu'il s'agit d'une IRA fonctionnelle déshydratée. Quelle est l'explication la plus plausible à cette natriurèse élevée ?",
        "options": {
            "A": "La prise concomitante de diurétiques par le patient",
            "B": "La survenue d'une glomérulonéphrite aiguë post-infectieuse",
            "C": "Une intoxication aux inhibiteurs de l'enzyme de conversion",
            "D": "Une sténose unilatérale de l'artère rénale",
            "E": "Une polykystose rénale autosomique dominante décompensée"
        },
        "correctAnswers": ["A"],
        "explanation": "A ✅ VRAI : La clinique est formelle pour une hypovolémie vraie (perte de poids, hypotension, tachycardie), mais la natriurèse est paradoxalement élevée (> 40 mmol/L) avec NaU/KU > 1. Ce piège classique s'explique par la prise de diurétiques (ex: furosémide, thiazidiques) qui bloquent les transporteurs sodiques tubulaires et forcent le rein à fuir du sodium dans l'urine malgré une hypoperfusion rénale majeure.\nB, C, D & E ❌ FAUX : Aucune de ces situations n'explique cette contradiction clinique/biologique immédiate aussi fréquemment que l'action pharmacologique d'un diurétique."
    },

    // Q9 — Wooclap Q9 — FE urée sous diurétique
    {
        "id": "UE5-LF-09",
        "text": "Quel outil biologique urinaire est le plus discriminant pour affirmer la nature fonctionnelle d'une IRA lorsque l'interprétation de la natriurèse est faussée par un traitement diurétique en cours ?",
        "options": {
            "A": "La fraction d'excrétion de l'urée (FE urée < 35 %)",
            "B": "La fraction d'excrétion du sodium (FE Na)",
            "C": "La natriurèse des 24 heures",
            "D": "Le rapport NaU / KU sur échantillon",
            "E": "La clairance de l'acide urique"
        },
        "correctAnswers": ["A"],
        "explanation": "A ✅ VRAI : Les diurétiques de l'anse ou thiazidiques agissent sur l'anse de Henle ou le tube contourné distal, faussant complètement l'excrétion du sodium (FE Na > 1 % et NaU élevée). En revanche, ils n'empêchent pas la réabsorption proximale passive de l'urée qui reste fortement accrue sous l'effet de l'hypovolémie. Une FE urée < 35 % conserve une excellente valeur diagnostique pour affirmer l'IRA fonctionnelle sous diurétique.\nB, C & D ❌ FAUX : Tous ces paramètres reposent sur la mesure du sodium urinaire, directement perturbée et faussée par les diurétiques natriurétiques."
    },

    // Q10 — Wooclap Q10/11 — Sémiologie de l'état d'hydratation (Hypovolémie vraie vs relative)
    {
        "id": "UE5-LF-10",
        "text": "Concernant l'évaluation clinique de l'état d'hydratation et de la volémie en néphrologie, quelles propositions sont exactes ?",
        "options": {
            "A": "L'hypovolémie vraie (déshydratation extracellulaire) associe perte de poids, pli cutané, sécheresse axillaire et hypotonie des globes oculaires.",
            "B": "L'hypovolémie relative (diminution du volume circulant efficace) s'accompagne d'une prise de poids avec rétention hydrosodée (œdèmes des membres inférieurs, ascite, turgescence jugulaire).",
            "C": "La déshydratation intracellulaire se manifeste typiquement par une soif vive, une sécheresse des muqueuses (face interne des joues) et des troubles de la conscience.",
            "D": "L'hypotension artérielle orthostatique et la tachycardie sont des reflets cardiovasculaires d'un bas volume circulant.",
            "E": "Le pli cutané chez un sujet âgé de 85 ans est un signe spécifique pathognomonique de déshydratation extracellulaire."
        },
        "correctAnswers": ["A", "B", "C", "D"],
        "explanation": "A ✅ VRAI : L'hypovolémie vraie résulte d'une perte nette d'eau et de sodium (digestive, rénale ou cutanée) et se traduit par les signes cardinaux de déshydratation extracellulaire avec perte de poids.\nB ✅ VRAI : L'hypovolémie relative survient lors de situations d'insuffisance cardiaque globale, de cirrhose décompensée ou de syndrome néphrotique : le volume circulant efficace est effondré, déclenchant l'activation du SRAA et une rétention hydrosodée majeure se traduisant par une prise de poids et des œdèmes déclives.\nC ✅ VRAI : La déshydratation intracellulaire est liée à une hyperosmolarité plasmatique (souvent hypernatrémie) attirant l'eau hors des cellules. Les signes cardinaux sont la soif intense, la sécheresse de la muqueuse buccale et des signes neurologiques (somnolence, confusion).\nD ✅ VRAI : La chute tensionnelle au passage debout (hypotension orthostatique) et la tachycardie sinusale sont des signes constants d'hypovolémie.\nE ❌ FAUX : Chez le sujet âgé, la perte physiologique de tissu élastique sous-cutané entraîne très fréquemment un faux pli cutané même en état de normovolémie. Il n'est donc pas spécifique."
    },

    // Q11 — Wooclap Q13 — IRA fonctionnelle sur sténose de l'artère rénale
    {
        "id": "UE5-LF-11",
        "text": "Patient de 55 ans, polyvasculaire athéromateux sévère, présentant une perte de 2 kg suite à des diarrhées aiguës. Il développe une IRA non obstructive. Sa pression artérielle est élevée à 160/95 mmHg. Son ionogramme urinaire retrouve : NaU = 10 mmol/L et KU = 50 mmol/L. Quel diagnostic néphrologique particulier doit être suspecté devant ce tableau associant profil urinaire fonctionnel et hypertension artérielle ?",
        "options": {
            "A": "Une nécrose tubulaire aiguë ischémique",
            "B": "Une IRA fonctionnelle sur sténose de l'artère rénale (maladie rénovasculaire)",
            "C": "Une néphropathie glomérulaire aiguë proliférative",
            "D": "Une néphrite tubulo-interstitielle aiguë immuno-allergique",
            "E": "Une pyélonéphrite aiguë bilatérale"
        },
        "correctAnswers": ["B"],
        "explanation": "B ✅ VRAI : Le profil urinaire est indiscutablement fonctionnel (NaU < 20 mmol/L et Na/K = 0,2 < 1 traduisant une stimulation maximale du SRAA). Pourtant, le patient est hypertendu (160/95 mmHg) malgré la perte de poids, ce qui contredit une hypovolémie simple. Ce tableau évoque typiquement une sténose significative de l'artère rénale (ou néphropathie ischémique athéromateuse) : l'hypovolémie modérée aggrave brutalement l'hypoperfusion rénale en aval de la sténose, le rein suractive le SRAA de façon explosive, maintenant ou majorant l'HTA tout en réabsorbant le sodium au maximum.\nA, C, D & E ❌ FAUX : Ces atteintes organiques ne présenteraient pas cette natriurèse effondrée avec hyperaldostéronisme franc."
    },

    // Q12 — Wooclap Q14-16 — Bandelette urinaire et orientation étiologique
    {
        "id": "UE5-LF-12",
        "text": "Concernant l'orientation diagnostique d'une insuffisance rénale aiguë à l'aide de la bandelette urinaire (BU), quelles correspondances profil / étiologie sont exactes ?",
        "options": {
            "A": "Protéines +++, sang ++, leucocytes 0, nitrites 0 : oriente vers une néphropathie glomérulaire aiguë.",
            "B": "Protéines traces, sang 0, leucocytes +++, nitrites +++ : oriente vers une pyélonéphrite aiguë (atteinte interstitielle infectieuse à entérobactérie).",
            "C": "Protéines traces, sang 0, leucocytes +++, nitrites 0 : oriente vers une néphrite interstitielle aiguë immuno-allergique médicamenteuse.",
            "D": "Bandelette urinaire entièrement négative (0 partout) : oriente vers une néphropathie vasculaire aiguë, une nécrose tubulaire aiguë débutante ou une IRA fonctionnelle.",
            "E": "La présence de nitrites positifs à la bandelette urinaire s'observe chez toutes les bactéries sans exception."
        },
        "correctAnswers": ["A", "B", "C", "D"],
        "explanation": "A ✅ VRAI : L'association d'une protéinurie abondante (+++, principalement albumine) et d'une hématurie microscopique (++) sans leucocyturie ni nitrites signe une souffrance de la barrière de filtration glomérulaire (syndrome glomérulaire aigu).\nB ✅ VRAI : La présence conjointe de leucocytes (+++) et de nitrites (+++) témoigne d'une infection urinaire bactérienne haute à germe possédant une nitrate-réductase (généralement E. coli).\nC ✅ VRAI : Une leucocyturie isolée (+++) sans nitrites et avec un ECBU stérile (leucocyturie aseptique) est le profil typique d'une néphrite tubulo-interstitielle aiguë immuno-allergique (souvent d'origine médicamenteuse).\nD ✅ VRAI : Une BU normale (protéines 0, sang 0, leuco 0) élimine une atteinte glomérulaire ou interstitielle active. Elle est typique de l'IRA fonctionnelle, d'une nécrose tubulaire sans hématurie ou d'une atteinte vasculaire aiguë (thrombose, microangiopathie débutante, emboles de cholestérol).\nE ❌ FAUX : Seules les bactéries possédant une nitrate réductase (bacilles Gram négatif comme les entérobactéries) positivent les nitrites. Les cocci Gram positifs (streptocoques, entérocoques, staphylocoques) et Pseudomonas ne réduisent pas les nitrates et donnent des nitrites négatifs."
    },

    // Q13 — Wooclap Q19-21 — Ratios protéinurie / albuminurie et types de protéinurie
    {
        "id": "UE5-LF-13",
        "text": "Concernant la caractérisation du type d'atteinte rénale par le dosage de la protéinurie et de l'albuminurie, quelles propositions sont exactes ?",
        "options": {
            "A": "Un ratio albuminurie / protéinurie totale > 60 % (ex: albumine 400 mg/g pour protéines 500 mg/g) signe une protéinurie glomérulaire.",
            "B": "Un ratio albuminurie / protéinurie totale < 50 % (ex: albumine 50 mg/g pour protéines 150 mg/g) signe une protéinurie tubulaire.",
            "C": "La protéinurie tubulaire est constituée d'une abondance de protéines de bas poids moléculaire (lysozyme, β2-microglobuline, chaînes légères) mal réabsorbées par le tubule proximal.",
            "D": "Une protéinurie tubulaire est généralement de débit modéré, ne dépassant presque jamais 1 à 2 g/24h.",
            "E": "Une protéinurie supérieure à 3 g/24h composée à plus de 70% d'albumine est caractéristique d'une néphropathie tubulo-interstitielle."
        },
        "correctAnswers": ["A", "B", "C", "D"],
        "explanation": "A ✅ VRAI : Dans les atteintes glomérulaires, la perte de sélectivité de charge et de taille de la membrane basale glomérulaire laisse passer préférentiellement l'albumine, qui représente plus de 60 à 70 % des protéines urinaires.\nB ✅ VRAI : Dans les atteintes tubulaires, la filtration glomérulaire est normale mais le tube contourné proximal ne réabsorbe plus les petites protéines physiologiquement filtrées. L'albumine représente alors une fraction minoritaire de la protéinurie (< 50 %, souvent < 30 %).\nC ✅ VRAI : Ces protéines de bas poids moléculaire (< 40-50 kDa) sont normalement réabsorbées et catabolisées par les cellules tubulaires proximales ; leur présence urinaire témoigne d'une lésion tubulaire proximale.\nD ✅ VRAI : En l'absence de fuite d'albumine glomérulaire massive, le débit de filtration des microprotéines est limité : la protéinurie tubulaire reste donc de faible abondance (< 1 g/24h ou < 1,5 g/24h).\nE ❌ FAUX : Une protéinurie massive (> 3 g/24h) riche en albumine définit le syndrome glomérulaire (et le syndrome néphrotique si albuminémie < 30 g/L), à l'opposé d'une atteinte tubulo-interstitielle."
    },

    // Q14 — Wooclap Cas clinique 24 — Néphropathie interstitielle aiguë allergique
    {
        "id": "UE5-LF-14",
        "text": "Patient diabétique traité récemment par CIFLOX (ciprofloxacine, fluoroquinolone) pour une infection urinaire. Il consulte pour une dégradation rapide de sa fonction rénale sans anomalie tensionnelle. Le bilan biologique met en évidence une hyperéosinophilie sanguine modérée, et l'analyse urinaire objective une protéinurie de faible débit (0,6 g/j) avec une albuminurie inférieure à 30 %. Quel est le diagnostic le plus probable ?",
        "options": {
            "A": "Néphropathie tubulo-interstitielle aiguë (NTIA) immuno-allergique médicamenteuse",
            "B": "Néphroangiosclérose maligne",
            "C": "Glomérulosclérose diabétique nodulaire avancée (Kimmelstiel-Wilson)",
            "D": "Sténose athéromateuse bilatérale des artères rénales",
            "E": "Nécrose corticale bilatérale"
        },
        "correctAnswers": ["A"],
        "explanation": "A ✅ VRAI : Le tableau associant la prise récente d'un antibiotique déclencheur classique (fluoroquinolone, bêtalactamine, sulfamide...), une altération rénale aiguë, une hyperéosinophilie sanguine et une protéinurie tubulaire de faible débit sans HTA ni œdèmes est typique d'une néphrite interstitielle aiguë immuno-allergique.\nB ❌ FAUX : La néphroangiosclérose maligne s'accompagne d'une HTA d'emblée très sévère (stade 3) avec rétinopathie hypertensive aux stades III/IV et microangiopathie thrombotique.\nC ❌ FAUX : La néphropathie diabétique donne une protéinurie très riche en albumine (> 70%) avec installation lente et progressive sur plusieurs années.\nD ❌ FAUX : La sténose bilatérale ne donne ni hyperéosinophilie ni protéinurie tubulaire allergique inaugurale sous antibiotique.\nE ❌ FAUX : La nécrose corticale est une complication anurique gravissime de chocs septiques ou obstétricaux majeurs."
    },

    // ============================================================
    // PARTIE 2 : ANNALES 2022-2023 & ARCHIVES 2024-2025
    // Indices 14 à 18 (5 QCMs)
    // ============================================================

    // Q15 — Annale 2022-2023 Q1 — Sémiologie de l'hématurie
    {
        "id": "UE5-LF-15",
        "text": "Concernant les caractéristiques diagnostiques de l'hématurie en pratique clinique, quelles propositions sont exactes ?",
        "options": {
            "A": "Le caractère macroscopique de l'hématurie élimine formellement une étiologie néphrologique (glomérulaire).",
            "B": "L'hématurie est totale et sans caillots lorsqu'il s'agit d'une maladie glomérulaire.",
            "C": "Une hématurie terminale, survenant en fin de miction, oriente préférentiellement vers une cause urétrale.",
            "D": "La présence d'une hématurie macroscopique fausse l'interprétation du dosage de la protéinurie.",
            "E": "L'hématurie est quantifiable précisément par l'examen cytologique des urines (débit d'hématies par minute ou hématies/mL à l'ECBU)."
        },
        "correctAnswers": ["B", "D", "E"],
        "explanation": "B ✅ VRAI : L'hématurie d'origine glomérulaire répond classiquement à la triade : totale (présente du début à la fin de la miction), indolore (sans colique ni brûlure) et SANS CAILLOTS (en raison de l'activité urokinase tubulaire et du lavage progressif). Les caillots signent au contraire une origine urologique sous-jacente (saignement des voies excrétrices).\nD ✅ VRAI : Le sang total contient une concentration protéique très élevée (~70 g/L). Une hématurie macroscopique franche apporte des protéines sanguines dans les urines et surestime donc artificiellement la protéinurie rénale propre.\nE ✅ VRAI : L'ECBU (ou le compte d'Addis / HLM) quantifie précisément le nombre d'hématies : pathologique si > 10 hématies/mm3 (ou > 10 000 hématies/mL).\nA ❌ FAUX : L'hématurie glomérulaire peut parfaitement être macroscopique (urines classiquement décrites comme 'bouillon sale', 'coca-cola' ou 'thé sombre', ex: maladie de Berger, syndrome néphritique).\nC ❌ FAUX : C'est l'inverse dans l'épreuve des trois verres : l'hématurie initiale (premier verre) est urétrale ou prostatique ; l'hématurie terminale (dernier verre) est d'origine vésicale."
    },

    // Q16 — Annale 2022-2023 Q2 — Syndrome de Glomérulonéphrite Rapidement Progressive (GNRP)
    {
        "id": "UE5-LF-16",
        "text": "Concernant le syndrome de glomérulonéphrite rapidement progressive (GNRP), quelles propositions sont exactes ?",
        "options": {
            "A": "Il s'agit d'une urgence diagnostique et thérapeutique médico-néphrologique absolue.",
            "B": "Une insuffisance rénale aiguë ou subaiguë est obligatoirement associée au tableau.",
            "C": "La maladie de Goodpasture est caractérisée par la présence d'anticorps anti-cytoplasme des polynucléaires neutrophiles (ANCA).",
            "D": "La cause la plus fréquente de GNRP est la néphropathie diabétique.",
            "E": "La biopsie rénale permet à elle seule d'obtenir formellement le diagnostic étiologique."
        },
        "correctAnswers": ["A", "B"],
        "explanation": "A ✅ VRAI : La GNRP est une urgence vitale et rénale extrême : sans corticothérapie à fortes doses et traitement immunosuppresseur précoce, elle évolue vers la destruction néphronique définitive et l'insuffisance rénale terminale en quelques jours à quelques semaines.\nB ✅ VRAI : Par définition, la GNRP se définit par une insuffisance rénale se dégradant rapidement (en quelques jours ou semaines), associée à un syndrome glomérulaire floride (hématurie macroscopique/microscopique constante, protéinurie, souvent HTA et œdèmes).\nC ❌ FAUX : La maladie de Goodpasture (syndrome pneumo-rénal) est causée par des anticorps dirigés contre la chaîne alpha-3 du collagène IV de la membrane basale glomérulaire (anticorps anti-MBG). Les ANCA sont le marqueur des vascularites des petits vaisseaux (granulomatose avec polyangéite de Wegener, polyangéite microscopique).\nD ❌ FAUX : Le diabète est une néphropathie chronique à progression très lente sur des années, jamais une GNRP. Les étiologies de GNRP sont les vascularites à ANCA, les anticorps anti-MBG (Goodpasture) et les maladies à complexes immuns (lupus, cryoglobulinémie, purpura rhumatoïde).\nE ❌ FAUX : Conformément à la correction d'annale : la ponction-biopsie rénale (PBR) pose le diagnostic LÉSIONNEL (croissants extracapillaires prolifératifs circonférentiels dans les glomérules), mais le diagnostic ÉTIOLOGIQUE nécessite obligatoirement le bilan immunologique sérique (ANCA, anti-MBG, anticorps anti-nucléaires/anti-ADN natif, fractions du complément C3/C4, cryoglobuline)."
    },

    // Q17 — Annale 2022-2023 Q3 — Bandelette réactive au sang avec urines claires / Pigmenturie
    {
        "id": "UE5-LF-17",
        "text": "Chez un patient hospitalisé, la bandelette urinaire (BU) est franchement positive pour le sang (+++) alors que les urines sont macroscopiquement claires (ou couleur brun acajou) et que l'examen microscopique du culot urinaire ne retrouve aucun globule rouge intact (< 5 hématies/mm3). Quelles propositions sont exactes ?",
        "options": {
            "A": "Ce tableau est très évocateur d'une pigmenturie (myoglobinurie ou hémoglobinurie).",
            "B": "La réactivité de la zone 'sang' de la bandelette urinaire repose sur l'activité pseudo-peroxydasique de l'hème.",
            "C": "Une rhabdomyolyse aiguë (lyse du tissu musculaire squelettique) peut être responsable de ce tableau via une myoglobinurie.",
            "D": "L'absence de globules rouges à l'examen microscopique élimine avec certitude toute anomalie rénale d'origine toxique.",
            "E": "Une hémolyse intravasculaire massive peut engendrer ce résultat par saturation de l'haptoglobine et filtration glomérulaire d'hémoglobine libre."
        },
        "correctAnswers": ["A", "B", "C", "E"],
        "explanation": "A ✅ VRAI : La dissociation entre une bandelette très réactive pour le sang et l'absence totale d'érythrocytes au microscope définit une pigmenturie : présence d'hème libre dissous dans l'urine sans hématurie vraie.\nB ✅ VRAI : La zone réactive de la bandelette contient un chromogène oxydé en présence d'hème par peroxydation. Elle ne distingue donc pas l'hémoglobine intra-érythrocytaire, l'hémoglobine libre ou la myoglobine libre car toutes contiennent de l'hème.\nC ✅ VRAI : Lors d'une rhabdomyolyse (traumatisme, écrasement, effort extrême, statines...), la myoglobine musculaire libérée en grande quantité passe le filtre glomérulaire et colore les urines en brun tout en positivant la BU.\nE ✅ VRAI : En cas d'hémolyse intravasculaire aiguë massive (incompatibilité transfusionnelle, paludisme...), les capacités de fixation de l'haptoglobine sont dépassées et les dimères d'hémoglobine libre sont filtrés dans l'urine (hémoglobinurie).\nD ❌ FAUX : La présence de myoglobine ou d'hémoglobine libre dans les tubules rénaux est au contraire hautement néphrotoxique (précipitation tubulaire avec la protéine de Tamm-Horsfall et toxicité oxydative directe) et constitue une cause majeure de nécrose tubulaire aiguë organique sévère."
    },

    // Q18 — Archives 2024-2025 Q28 — Syndrome néphrotique
    {
        "id": "UE5-LF-18",
        "text": "Le syndrome néphrotique biologique chez l'adulte est défini et fréquemment associé à quelles anomalies clinico-biologiques ?",
        "options": {
            "A": "Une hypoalbuminémie profonde, strictement inférieure à 30 g/L (critère de définition avec une protéinurie > 3 g/24h).",
            "B": "Une hypogammaglobulinémie (entraînant un risque accru d'infections à bactéries encapsulées).",
            "C": "Une hypocalcémie vraie caractérisée par un effondrement du calcium ionisé biologiquement actif.",
            "D": "Une augmentation majeure du risque thromboembolique (thromboses veineuses profondes, embolies pulmonaires, thromboses des veines rénales).",
            "E": "Une dyslipidémie associant typiquement une élévation du cholestérol total, du LDL-cholestérol et des triglycérides."
        },
        "correctAnswers": ["A", "B", "D", "E"],
        "explanation": "A ✅ VRAI : La définition du syndrome néphrotique chez l'adulte est strictement biologique : protéinurie > 3 g/24h (ou ratio protéinurie/créatininurie > 300 mg/mmol) ET hypoalbuminémie < 30 g/L.\nB ✅ VRAI : La fuite urinaire des immunoglobulines (notamment IgG) entraîne une hypogammaglobulinémie marquée à l'électrophorèse des protéines sériques, prédisposant aux infections sévères (pneumocoque, méningocoque).\nD ✅ VRAI : Le syndrome néphrotique est un état d'hypercoagulabilité majeur résultant de la fuite urinaire d'antithrombine III et des protéines C et S, associée à une hypersynthèse hépatique réactionnelle de facteurs procoagulants (fibrinogène, facteur V, VIII).\nE ✅ VRAI : La baisse de pression oncotique stimule la synthèse hépatique globale de protéines, y compris les apolipoprotéines B, entraînant une hypercholestérolémie et une hypertriglycéridémie parfois très sévères.\nC ❌ FAUX : L'hypocalcémie du syndrome néphrotique est une FAUSSE hypocalcémie : comme 40% du calcium plasmatique est lié à l'albumine, la calcémie totale mesurée baisse, mais la fraction libre de calcium ionisé (physiologiquement active) reste strictement normale (sauf carence sévère en vitamine D associée)."
    },

    // Q19 — Archives 2024-2025 Q41 — Physiopathologie de l'Insuffisance Rénale Aiguë
    {
        "id": "UE5-LF-19",
        "text": "Concernant les mécanismes physiopathologiques et étiologiques au cours d'une insuffisance rénale aiguë (IRA), quelles propositions sont exactes ?",
        "options": {
            "A": "Une insuffisance rénale aiguë organique (parenchymateuse) est toujours obligatoirement anurique.",
            "B": "L'insuffisance rénale aiguë fonctionnelle (hémodynamique) est le plus souvent liée à une hypovolémie vraie ou relative.",
            "C": "Une colique néphrétique lithiasique unilatérale sur deux reins anatomiquement sains s'accompagne le plus souvent d'une insuffisance rénale aiguë.",
            "D": "L'apparition précoce d'une hypertension artérielle (HTA) oriente préférentiellement vers une atteinte interstitielle aiguë.",
            "E": "Une insuffisance rénale aiguë fonctionnelle prolongée ou non corrigée peut se compliquer d'une nécrose tubulaire aiguë organique par ischémie rénale prolongée."
        },
        "correctAnswers": ["B", "E"],
        "explanation": "B ✅ VRAI : L'IRA fonctionnelle résulte d'une baisse de la pression de perfusion rénale (hypovolémie vraie par déshydratation, hémorragie ou hypovolémie relative par insuffisance cardiaque, cirrhose, choc septique) avec intégrité du parenchyme rénal.\nE ✅ VRAI : L'ischémie médullaire et corticale rénale prolongée secondaire à l'hypoperfusion non corrigée finit par priver les cellules tubulaires d'ATP et d'oxygène, entraînant leur nécrose et leur desquamation : l'IRA fonctionnelle bascule alors en nécrose tubulaire aiguë (NTA) organique.\nA ❌ FAUX : L'IRA organique est très fréquemment à DIURÈSE CONSERVÉE (> 500 mL/24h) ou modérément oligurique. L'anurie complète (< 100 mL/24h) est rare et doit faire rechercher en priorité un obstacle complet bilatéral, une nécrose corticale ou une occlusion artérielle rénale aiguë bilatérale.\nC ❌ FAUX : L'obstruction unilatérale sur deux reins fonctionnels n'entraîne pas d'élévation significative de la créatininémie car le rein controlatéral compense immédiatement. Pour qu'un obstacle provoque une IRA, il doit être bilatéral ou survenir sur un rein unique anatomique ou fonctionnel.\nD ❌ FAUX : L'HTA aiguë oriente vers une néphropathie vasculaire aiguë ou une néphropathie glomérulaire aiguë. Les néphropathies interstitielles et tubulaires sont le plus souvent normotendues."
    },

    // ============================================================
    // PHYSIOLOGIE DES TUBULES RÉNAUX & DÉSORDRES HYDROÉLECTROLYTIQUES
    // Dr LE FLECHER Arnaud (Indices 19 à 21 : 3 QCMs)
    // ============================================================

    // Q20 — Histologie fonctionnelle tubulaire : réabsorption et transports
    {
        "id": "UE5-LF-20",
        "text": "Concernant l'histologie fonctionnelle tubulaire et les mécanismes généraux de transport néphronique, quelles propositions sont exactes ?",
        "options": {
            "A": "Environ 99 % de l'ultrafiltrat glomérulaire est réabsorbé tout au long du tubule rénal.",
            "B": "La partie distale des tubules réabsorbe massivement l'ultrafiltrat urinaire.",
            "C": "Le transport actif du glucose au niveau tubulaire est un mécanisme saturable.",
            "D": "L'eau est réabsorbée activement tout au long du néphron.",
            "E": "L'urée est réabsorbée passivement en fonction des flux d'eau."
        },
        "correctAnswers": ["A", "C", "E"],
        "explanation": "A ✅ VRAI : Les glomérules filtrent environ 180 litres de plasma par jour, alors que le volume d'urine définitive éliminé n'est que de 1 à 2 litres par 24 heures. Cela correspond à une réabsorption tubulaire de près de 99 % de l'ultrafiltrat.\nC ✅ VRAI : La réabsorption du glucose s'effectue au niveau du tube contourné proximal (TCP) via les cotransporteurs Na+/glucose (SGLT2 et SGLT1). Ce transport actif secondaire possède une capacité maximale (TmG, seuil rénal d'environ 10 mmol/L ou 1,8 g/L de glycémie). Au-delà, les transporteurs saturent et une glycosurie apparaît.\nE ✅ VRAI : L'urée est réabsorbée passivement par diffusion selon son gradient de concentration, généré par la réabsorption couplée d'eau et de sodium au niveau du tube proximal et du canal collecteur médullaire.\nB ❌ FAUX : La réabsorption massive (plus des 2/3 des osmoles et de l'eau) a lieu dans la partie proximale du néphron (TCP et anse de Henle). La partie distale ne réabsorbe qu'une faible quantité d'ultrafiltrat mais permet son ajustement fin et régulé.\nD ❌ FAUX : L'eau n'est JAMAIS réabsorbée activement : son mouvement est purement passif par osmose, suivant les gradients osmotiques créés par le transport actif de solutés (notamment le sodium). De plus, certains segments comme la branche large ascendante de Henle et le tube contourné distal sont totalement imperméables à l'eau."
    },

    // Q21 — Histologie fonctionnelle tubulaire : bilan du sodium et du potassium
    {
        "id": "UE5-LF-21",
        "text": "Concernant l'histologie fonctionnelle tubulaire et la régulation du sodium et du potassium, quelles propositions sont exactes ?",
        "options": {
            "A": "Les deux tiers (environ 65 %) du sodium filtré sont réabsorbés dans le tube contourné proximal.",
            "B": "L'ajustement du bilan du sodium se fait sous la dépendance du système rénine-angiotensine-aldostérone au niveau du tube contourné distal.",
            "C": "Les différents diurétiques agissent comme des inhibiteurs spécifiques de la réabsorption du sodium.",
            "D": "L'ajustement du bilan du potassium se fait sous la dépendance du système rénine-angiotensine-aldostérone.",
            "E": "La sécrétion de potassium au niveau distal, plus que sa réabsorption, permet l'homéostasie du bilan potassique."
        },
        "correctAnswers": ["A", "C", "D", "E"],
        "explanation": "A ✅ VRAI : Le tube contourné proximal (TCP) assure la réabsorption obligatoire et isosmotique des deux tiers (65 à 70 %) du sodium filtré (via le cotransport Na+/solutés et l'échangeur Na+/H+ NHE3).\nC ✅ VRAI : Chaque classe de diurétiques cible un transporteur sodique unique à un étage précis du néphron : les diurétiques de l'anse inhibent NKCC2 dans l'anse de Henle, les thiazidiques inhibent NCC dans le TCD, et les diurétiques épargneurs de potassium bloquent ENaC ou les récepteurs minéralocorticoïdes dans le tube collecteur.\nD ✅ VRAI : L'aldostérone (produite via l'axe SRAA) contrôle la sécrétion et l'excrétion de potassium au niveau des cellules principales du tube collecteur cortical.\nE ✅ VRAI : Si la réabsorption du potassium est quasi-complète en amont (TCP et anse de Henle), c'est la sécrétion distale modulée de potassium (stimulée par l'aldostérone et le débit tubulaire) qui s'adapte aux apports alimentaires pour maintenir la kaliémie normale.\nB ❌ FAUX : L'aldostérone agit au niveau du TUBE COLLECTEUR CORTICAL (sur le canal sodique épithélial ENaC des cellules principales) pour l'ajustement final du sodium, et non au niveau du tube distal (où le cotransporteur NCC est indépendant de l'aldostérone)."
    },

    // Q22 — Histologie fonctionnelle tubulaire : eau, phosphore et acides aminés
    {
        "id": "UE5-LF-22",
        "text": "Concernant l'histologie fonctionnelle tubulaire et la gestion de l'eau, du phosphore et des acides aminés, quelles propositions sont exactes ?",
        "options": {
            "A": "L'ajustement final de la réabsorption de l'eau se fait sous la dépendance de l'ADH (hormone antidiurétique).",
            "B": "L'expression des aquaporines est principalement régulée au niveau du tube contourné proximal, afin de contrôler finement la réabsorption d'eau.",
            "C": "La réabsorption du phosphore a lieu principalement au niveau du tube contourné proximal.",
            "D": "La réabsorption rénale du phosphore est placée sous la dépendance directe de l'aldostérone.",
            "E": "La quasi-totalité des acides aminés filtrés est réabsorbée au niveau du tube contourné proximal."
        },
        "correctAnswers": ["A", "C", "E"],
        "explanation": "A ✅ VRAI : L'hormone antidiurétique (ADH ou arginine-vasopressine) permet l'ajustement final et modulé de la réabsorption d'eau pure au niveau du canal collecteur médullaire et cortical selon l'osmolalité plasmatique.\nC ✅ VRAI : Environ 80 à 85 % du phosphate filtré est réabsorbé au niveau du tube contourné proximal par les cotransporteurs sodium-phosphate dépendants (NaPi-IIa et NaPi-IIc).\nE ✅ VRAI : Le tube contourné proximal réabsorbe 100 % des acides aminés et des oligopeptides filtrés grâce à des transporteurs apicaux spécifiques couplés au sodium ; l'urine normale ne contient aucun acide aminé.\nB ❌ FAUX : Au niveau du TCP, la perméabilité à l'eau est constitutive et non régulée via les aquaporines 1 (AQP1). C'est au niveau du TUBE COLLECTEUR que l'ADH régule finement la perméabilité à l'eau en provoquant l'exocytose et l'insertion apicale réversible des aquaporines 2 (AQP2).\nD ❌ FAUX : La réabsorption tubulaire du phosphore est régulée par la parathormone (PTH, qui inhibe les transporteurs NaPi et favorise la phosphaturie) et le FGF-23, et non par l'aldostérone."
    },

    // ============================================================
    // LES GRANDS SYNDROMES EN NÉPHROLOGIE : PROTÉINURIE & SYNDROME NÉPHROTIQUE
    // Dr LE FLECHER (Indices 22 à 36 : 15 QCMs)
    // ============================================================

    // --- CAS CLINIQUE D'APPLICATION : HOMME DE 19 ANS AVEC ŒDÈME PALPÉBRAL ---

    // Q23 — Cas clinique Q1 : Examen physique d'un syndrome œdémateux
    {
        "id": "UE5-LF-23",
        "text": "Cas clinique — Question 1 :\nUn jeune homme de 19 ans, sans antécédent médical, consulte pour l'apparition récente d'un œdème bilatéral des paupières (œdème palpébral) au réveil.\n\nQuels éléments sémiologiques devez-vous systématiquement rechercher à l'examen physique pour évaluer la diffusion de ce syndrome œdémateux ?",
        "options": {
            "A": "La recherche du signe du godet au niveau des membres inférieurs (régions déclives)",
            "B": "L'auscultation pleuro-pulmonaire à la recherche d'une abolition du murmure vésiculaire aux bases (épanchement pleural)",
            "C": "La palpation abdominale et la percussion à la recherche d'une matité déclive des flancs (ascite)",
            "D": "L'auscultation cardiaque à la recherche d'un assourdissement des bruits du cœur ou d'un frottement (épanchement péricardique)",
            "E": "La recherche d'une voussure battante expansile épigastrique"
        },
        "correctAnswers": ["A", "B", "C", "D"],
        "explanation": "A, B, C & D ✅ VRAI : Devant un œdème palpébral bilatéral (signe d'appel fréquent de néphropathie glomérulaire), il faut rechercher un syndrome œdémateux généralisé (anasarque) lié à l'hypovolémie relative et à la baisse de la pression oncotique : 1) œdèmes sous-cutanés déclives bilatéraux blancs, mous, indolores prenant le godet (A) ; 2) épanchement des séreuses : plèvre (B), péritoine/ascite (C), et péricarde (D).\nE ❌ FAUX : La voussure battante expansile évoque un anévrisme de l'aorte abdominale, sans lien avec le syndrome œdémateux."
    },

    // Q24 — Cas clinique Q2 : Examen de 1ère intention en cabinet isolé
    {
        "id": "UE5-LF-24",
        "text": "Cas clinique — Question 2 :\nVous recevez ce jeune patient dans un cabinet de médecine générale de montagne à 800 mètres d'altitude, dépourvu de laboratoire de biologie médicale sur place.\n\nQuel examen complémentaire immédiat, simple et non invasif pratiquez-vous au cabinet pour orienter le diagnostic étiologique ?",
        "options": {
            "A": "Une bandelette urinaire (BU) sur un échantillon d'urines fraîches",
            "B": "Une gazométrie artérielle avec mesure des lactates",
            "C": "Un dosage rapide de la troponine ultrasensible",
            "D": "Une ponction lombaire exploratrice",
            "E": "Une glycémie capillaire pour éliminer une acidocétose"
        },
        "correctAnswers": ["A"],
        "explanation": "A ✅ VRAI : La bandelette urinaire (BU) est l'examen de dépistage immédiat, indispensable et accessible partout. Elle permet de détecter instantanément une protéinurie (ici retrouvée à +++), orientant d'emblée vers une atteinte rénale glomérulaire, ainsi qu'une hématurie ou une leucocyturie associées.\nB, C, D & E ❌ FAUX : Ces examens invasifs ou sans rapport n'ont aucune indication devant un œdème palpébral isolé sans détresse vitale."
    },

    // Q25 — Cas clinique Q3 : Démarche et examens initiaux au CHU
    {
        "id": "UE5-LF-25",
        "text": "Cas clinique — Question 3 :\nLa bandelette urinaire montre une protéinurie à 3+ (+++). Le patient est adressé au CHU pour exploration néphrologique. Les résultats retrouvent : albumine sérique = 25 g/L, ratio protéinurie/créatininurie (RPC) = 450 mg/mmol, ratio albuminurie/créatininurie (RAC) = 350 mg/mmol, ECBU sans hématurie ni germe.\n\nQuelles conclusions et démarches initiales s'imposent à ce stade ?",
        "options": {
            "A": "Le patient présente une atteinte rénale avérée avec protéinurie pathologique significative.",
            "B": "Le bilan au CHU doit obligatoirement comporter le dosage de l'albuminémie plasmatique.",
            "C": "Le ratio protéinurie/créatininurie (RPC) et le ratio albuminurie/créatininurie (RAC) permettent de s'affranchir du recueil des urines de 24 heures.",
            "D": "L'ECBU est indispensable pour dépister une hématurie microscopique associée.",
            "E": "La normalité de la fonction rénale élimine toute atteinte glomérulaire."
        },
        "correctAnswers": ["A", "B", "C", "D"],
        "explanation": "A ✅ VRAI : Un RPC à 450 mg/mmol (> 300 mg/mmol, équivalent à > 3 g/g ou ~3,5 g/24h) signe une protéinurie massive pathologique.\nB ✅ VRAI : Le dosage de l'albumine plasmatique (ici 25 g/L) est fondamental pour caractériser un syndrome néphrotique (< 30 g/L).\nC ✅ VRAI : Les ratios sur échantillon urinaire (RPC et RAC) sont désormais recommandés en première intention par les guidelines (KDIGO) car ils évitent les erreurs fréquentes de recueil des 24h.\nD ✅ VRAI : L'ECBU quantifie précisément les hématies pour déterminer si le syndrome néphrotique est pur ou impur.\nE ❌ FAUX : Une maladie glomérulaire sévère peut parfaitement débuter avec un débit de filtration glomérulaire (créatininémie) strictement normal (ex: syndrome néphrotique à lésions glomérulaires minimes)."
    },

    // Q26 — Cas clinique Q4 : Diagnostic positif de syndrome néphrotique
    {
        "id": "UE5-LF-26",
        "text": "Cas clinique — Question 4 :\nAu vu des résultats biologiques (albuminémie = 25 g/L, RPC = 450 mg/mmol, RAC = 350 mg/mmol), quel diagnostic néphrologique précis posez-vous chez ce jeune homme ?",
        "options": {
            "A": "Un syndrome néphrotique (atteinte glomérulaire)",
            "B": "Une tubulopathie myélomateuse aiguë",
            "C": "Une glomérulosclérose diabétique nodulaire décompensée",
            "D": "Une néphroangiosclérose maligne",
            "E": "Une nécrose tubulaire aiguë ischémique"
        },
        "correctAnswers": ["A"],
        "explanation": "A ✅ VRAI : Le diagnostic de syndrome néphrotique est indiscutable car les deux critères biologiques stricts sont réunis : 1) hypoalbuminémie < 30 g/L (ici 25 g/L) ; 2) protéinurie massive > 3 g/24h ou ratio albuminurie/créatininurie > 300 mg/mmol (ici 350 mg/mmol). Cela traduit une altération majeure de la perméabilité de la barrière glomérulaire.\nB, C, D & E ❌ FAUX : Le myélome ne donne pas de fuite sélective d'albumine (RAC bas) ; le patient n'est pas diabétique ; il n'y a pas d'HTA maligne ni de contexte de choc pour une nécrose tubulaire."
    },

    // Q27 — Cas clinique Q5 : Détermination du caractère pur vs impur
    {
        "id": "UE5-LF-27",
        "text": "Cas clinique — Question 5 :\nLe bilan de ce syndrome néphrotique retrouve : pression artérielle = 120/75 mmHg, créatininémie = 70 µmol/L (normale), hématies à l'ECBU < 5 000/mL (absence d'hématurie).\n\nComment classez-vous ce syndrome néphrotique et sur quels critères ?",
        "options": {
            "A": "Il s'agit d'un syndrome néphrotique pur.",
            "B": "Le caractère 'pur' est affirmé par l'absence d'hypertension artérielle (HTA).",
            "C": "Le caractère 'pur' est affirmé par l'absence d'hématurie microscopique.",
            "D": "Le caractère 'pur' est affirmé par l'absence d'insuffisance rénale aiguë organique.",
            "E": "La présence d'œdèmes palpébraux suffit à rendre le syndrome néphrotique impur."
        },
        "correctAnswers": ["A", "B", "C", "D"],
        "explanation": "A, B, C & D ✅ VRAI : Un syndrome néphrotique est dit 'pur' s'il ne comporte aucun des trois critères d'impureté suivants : 1) pas d'HTA ; 2) pas d'hématurie microscopique (culot urinaire négatif) ; 3) pas d'insuffisance rénale organique (créatininémie normale). Comme ces 3 paramètres sont strictement normaux chez ce patient, le syndrome néphrotique est classé comme PUR.\nE ❌ FAUX : Les œdèmes sont la conséquence clinique constante et directe de l'hypoalbuminémie ; ils ne définissent absolument pas le caractère impur."
    },

    // Q28 — Cas clinique Q6 : Indication et contre-indications de la biopsie rénale
    {
        "id": "UE5-LF-28",
        "text": "Cas clinique — Question 6 :\nConcernant l'indication et la faisabilité d'une ponction-biopsie rénale (PBR) chez ce jeune homme de 19 ans présentant un syndrome néphrotique pur inaugural :\nQuelles propositions sont exactes ?",
        "options": {
            "A": "Chez l'adulte (> 18 ans), la biopsie rénale est indiquée en première intention devant tout syndrome néphrotique (même pur) pour obtenir le diagnostic histologique étiologique.",
            "B": "Il faut préalablement vérifier l'absence d'anomalies de l'hémostase (taux de prothrombine / TP, TCA, numération plaquettaire) pour éliminer un risque hémorragique.",
            "C": "Une échographie rénale préalable est obligatoire pour vérifier la présence de deux reins anatomiquement fonctionnels.",
            "D": "La présence d'un rein unique anatomique est une contre-indication formelle à la ponction-biopsie rénale percutanée classique.",
            "E": "La biopsie rénale est formellement contre-indiquée chez ce patient car il est âgé de moins de 25 ans."
        },
        "correctAnswers": ["A", "B", "C", "D"],
        "explanation": "A ✅ VRAI : Contrairement à l'enfant (où le syndrome néphrotique pur est traité par corticoïdes d'emblée sans biopsie car lié à une néphrose lipoïdique à 90%), chez l'ADULTE, la PBR est SYSTÉMATIQUE même en cas de syndrome néphrotique pur (lésions glomérulaires minimes, GEM, hyalinose segmentaire et focale...).\nB ✅ VRAI : Le bilan d'hémostase pré-biopsie est impératif pour éviter une hémorragie périrénale grave ou un hématome sous-capsulaire compressif.\nC & D ✅ VRAI : L'échographie élimine un rein unique (qui contre-indique la PBR percutanée en raison du risque de perte du rein restant) et des petits reins atrophiques.\nE ❌ FAUX : La dispense de PBR ne concerne que les enfants de 1 à 10 ans avec syndrome néphrotique pur typique."
    },

    // Q29 — Cas clinique Q7 : Prise en charge thérapeutique globale
    {
        "id": "UE5-LF-29",
        "text": "Cas clinique — Question 7 :\nConcernant la prise en charge thérapeutique initiale de ce patient présentant un syndrome néphrotique pur (albumine = 25 g/L, pas d'HTA) :\nQuelles propositions sont exactes ?",
        "options": {
            "A": "Un régime désodé modéré (restriction en sel à 2-4 g/j ou < 100 mmol de NaCl/j) est prescrit.",
            "B": "Les apports hydriques doivent être limités à 500 mL/j même si la natrémie est normale.",
            "C": "Un traitement diurétique de l'anse (furosémide) peut être utilisé pour contrôler le syndrome œdémateux.",
            "D": "La prescription d'un bloqueur du système rénine-angiotensine (IEC ou ARA2) permet de réduire la protéinurie.",
            "E": "Une anticoagulation curative par HBPM ou AOD est obligatoirement débutée car l'albuminémie est inférieure à 30 g/L."
        },
        "correctAnswers": ["A", "C", "D"],
        "explanation": "A ✅ VRAI : La restriction sodée (2-4 g de sel/j) est la mesure hygiéno-diététique pilier pour freiner la rétention d'eau et de sel.\nC ✅ VRAI : Les diurétiques de l'anse (furosémide) favorisent la résorption des œdèmes sous surveillance clinique étroite (poids, TA, créatinine).\nD ✅ VRAI : Les IEC / ARA2 ont un effet néphroprotecteur et antiprotéinurique en diminuant la pression intraglomérulaire (vasodilatation de l'artériole efférente).\nB ❌ FAUX : La restriction hydrique n'est PAS indiquée si la natrémie est normale. Elle ne se justifie qu'en cas d'hyponatrémie de dilution (hyperhydratation intracellulaire associée).\nE ❌ FAUX : L'anticoagulation préventive ou curative n'est indiquée que si l'albuminémie est TRÈS BASSE, strictement inférieure à 20 g/L (seuil de haut risque thrombotique majeur). Ici, l'albuminémie est à 25 g/L, donc l'anticoagulation systématique n'est pas indiquée."
    },

    // --- ANNALES 2020-2023 : SYNDROME NÉPHROTIQUE & BIOPSIE RÉNALE ---

    // Q30 — Annales 2020-2021 Q18 : Propriétés des IEC
    {
        "id": "UE5-LF-30",
        "text": "Concernant les Inhibiteurs de l'Enzyme de Conversion (IEC) en néphrologie et cardiologie :",
        "options": {
            "A": "Ils sont diurétiques.",
            "B": "Ils augmentent la pression artérielle.",
            "C": "Ils sont hypokaliémiants.",
            "D": "Ils favorisent le développement de la fibrose myocardique.",
            "E": "Aucune des propositions ci-dessus n'est exacte."
        },
        "correctAnswers": ["E"],
        "explanation": "E ✅ VRAI : Aucune des propositions n'est exacte.\nA ❌ FAUX : Les IEC ne sont pas des diurétiques ; ils bloquent la conversion de l'angiotensine I en angiotensine II.\nB ❌ FAUX : Ce sont des antihypertenseurs majeurs (vasodilatateurs) qui diminuent la pression artérielle systémique et intraglomérulaire.\nC ❌ FAUX : Les IEC sont HYPERKALIÉMIANTS : en diminuant l'angiotensine II, ils réduisent la sécrétion d'aldostérone, ce qui limite l'élimination urinaire de potassium.\nD ❌ FAUX : Les IEC sont cardioprotecteurs : ils inhibent le remodelage et la fibrose myocardique."
    },

    // Q31 — Annales 2020-2021 Q29 : Définition stricte du syndrome néphrotique
    {
        "id": "UE5-LF-31",
        "text": "Le syndrome néphrotique chez l'adulte est défini de manière stricte par plusieurs des éléments suivants :",
        "options": {
            "A": "Une protéinurie supérieure à 3 g/24 heures (ou ratio protéinurie/créatininurie > 300 mg/mmol).",
            "B": "Une hypoalbuminémie inférieure à 30 g/L.",
            "C": "Une hypoprotidémie inférieure à 50 g/L.",
            "D": "Une hématurie avec présence de cylindres hématiques.",
            "E": "La présence constante d'œdèmes des membres inférieurs."
        },
        "correctAnswers": ["A", "B"],
        "explanation": "A & B ✅ VRAI : La définition du syndrome néphrotique est strictement BIOLOGIQUE et repose sur l'association d'une protéinurie massive (> 3 g/24h ou ratio > 300 mg/mmol) et d'une hypoalbuminémie (< 30 g/L).\nC ❌ FAUX : Bien que l'hypoprotidémie soit habituelle (< 60 g/L), le seuil de définition concerne spécifiquement l'albumine (< 30 g/L).\nD ❌ FAUX : L'hématurie et les cylindres hématiques signent un caractère 'impur' ou un syndrome néphritique, mais ne font pas partie de la définition du syndrome néphrotique.\nE ❌ FAUX : Les œdèmes constituent la conséquence clinique fréquente, mais un syndrome néphrotique biologique peut être découvert avant l'apparition d'œdèmes visibles."
    },

    // Q32 — Annales 2020-2021 Q31 : Démarche diagnostique devant des œdèmes des membres inférieurs (OMI)
    {
        "id": "UE5-LF-32",
        "text": "Devant l'apparition d'œdèmes des membres inférieurs (OMI) chez un patient adulte :",
        "options": {
            "A": "La découverte d'une protéinurie supérieure à 3 g/j associée à une hypoalbuminémie confirme leur origine rénale glomérulaire.",
            "B": "Le caractère unilatéral des œdèmes évoque principalement une cause locale ou veineuse (thrombose veineuse profonde, insuffisance veineuse).",
            "C": "La prise en charge nécessite toujours une restriction sodée lorsque la cause est une néphropathie organique.",
            "D": "Les étiologies systémiques majeures (rénale, cardiaque ou hépatique) doivent être évoquées et recherchées en priorité devant des OMI bilatéraux.",
            "E": "Il n'y a pas d'efficacité de la restriction sodée lorsque la cause des œdèmes est purement veineuse mécanique."
        },
        "correctAnswers": ["A", "B", "C", "D", "E"],
        "explanation": "A, B, C, D & E ✅ VRAI : Toutes les propositions sont exactes !\nA : La triade œdèmes + protéinurie néphrotique + hypoalbuminémie signe l'origine glomérulaire rénale.\nB : Les œdèmes unilatéraux sont d'origine locale (veineuse : phlébite, varices ; ou lymphatique : lymphœdème).\nC : En néphrologie, la rétention sodée est le primum movens de l'œdème ; le régime désodé (2-4 g/j) est impératif.\nD : Les causes d'œdèmes bilatéraux blancs, mous, prenant le godet sont dominées par le cœur (insuffisance cardiaque droite/globale), le foie (cirrhose) et le rein (syndrome néphrotique).\nE : L'œdème veineux est lié à une hyperpression hydrostatique locale (valvules défaillantes, obstacle thrombotique) et ne répond pas à la restriction sodée systémique."
    },

    // Q33 — Annales 2021-2022 Q46 : Physiopathologie et complications du syndrome néphrotique
    {
        "id": "UE5-LF-33",
        "text": "Le syndrome néphrotique :",
        "options": {
            "A": "Est défini biologiquement par une protéinurie > 3 g/j associée à une hypoalbuminémie < 30 g/L.",
            "B": "Est responsable de la formation d'œdèmes sous-cutanés et d'épanchements des séreuses.",
            "C": "Signe formellement l'existence de lésions glomérulaires sous-jacentes.",
            "D": "S'associe à une élévation significative du risque de thrombose veineuse et artérielle.",
            "E": "Nécessite systématiquement une prise en charge et un avis néphrologique spécialisé."
        },
        "correctAnswers": ["A", "B", "C", "D", "E"],
        "explanation": "A, B, C, D & E ✅ VRAI : Toutes les propositions sont justes.\nA : Définition biologique formelle chez l'adulte.\nB : La fuite d'albumine baisse la pression oncotique plasmatique et favorise la fuite liquidienne interstitielle.\nC : Le syndrome néphrotique est la manifestation cardinale d'une altération de la barrière de filtration glomérulaire.\nD : La fuite urinaire d'antithrombine III et la surproduction hépatique de facteurs procoagulants créent un état prothrombotique majeur.\nE : Tout syndrome néphrotique impose une prise en charge spécialisée rapide pour diagnostic étiologique (PBR) et traitement ciblé."
    },

    // Q34 — Annales 2021-2022 Q47 : Modalités et contre-indications de la biopsie rénale
    {
        "id": "UE5-LF-34",
        "text": "Concernant la ponction-biopsie rénale (PBR) percutanée, quelles propositions sont exactes ?",
        "options": {
            "A": "Toute néphropathie glomérulaire impose systématiquement une biopsie rénale sans aucune exception.",
            "B": "L'acte consiste habituellement à réaliser au moins 2 carottes biopsiques pour les examens optique et immunofluorescence.",
            "C": "Une thrombopénie sévère est une contre-indication formelle à la biopsie rénale percutanée.",
            "D": "L'existence d'une hypertension artérielle est une contre-indication définitive à la biopsie rénale.",
            "E": "La biopsie rénale est formellement contre-indiquée chez tous les enfants."
        },
        "correctAnswers": ["B", "C"],
        "explanation": "B ✅ VRAI : On prélève classiquement au moins 2 carottes de parenchyme rénal cortical : une pour la microscopie optique (fixée dans le formol ou liquide de Bouin) et une pour l'immunofluorescence en congélation directe.\nC ✅ VRAI : Les anomalies de l'hémostase (thrombopénie < 50-100 G/L, allongement du TP/TCA, prise d'anticoagulants ou antiagrégants) exposent à un risque d'hématome périrénal potentiellement mortel et contre-indiquent le geste percutané.\nA ❌ FAUX : Il existe des situations d'exception où la PBR n'est pas indiquée : syndrome néphrotique pur chez l'enfant de 1 à 10 ans, rétinopathie diabétique sans hématurie chez un diabétique de longue date, amylose prouvée par une biopsie plus accessible (BGSA), néphropathie héréditaire connue.\nD ❌ FAUX : L'HTA non contrôlée est une contre-indication TEMPORAIRE (qui majore le risque hémorragique), mais pas définitive ; la biopsie peut être réalisée dès que la PA est normalisée sous traitement.\nE ❌ FAUX : La PBR est couramment pratiquée chez l'enfant (sous anesthésie générale), notamment en cas de syndrome néphrotique impur ou résistant aux corticoïdes."
    },

    // Q35 — Annales 2021-2022 Q48 : Traitement symptomatique du syndrome néphrotique
    {
        "id": "UE5-LF-35",
        "text": "Au cours d'un syndrome néphrotique chez l'adulte, quelles mesures thérapeutiques symptomatiques sont indiquées ?",
        "options": {
            "A": "Dérivation chirurgicale des voies urinaires.",
            "B": "Régime alimentaire limité en sel (restriction sodée).",
            "C": "Déplétion hydrosodée par diurétiques de l'anse.",
            "D": "Supplémentation systématique en érythropoïétine (EPO).",
            "E": "Prescription de bloqueurs du système rénine-angiotensine (IEC ou ARA2)."
        },
        "correctAnswers": ["B", "C", "E"],
        "explanation": "B, C & E ✅ VRAI : Le traitement symptomatique comprend : 1) restriction sodée à 2-4 g/j (B) ; 2) diurétiques de l'anse pour résorber les œdèmes (C) ; 3) bloqueurs du SRAA (IEC/ARA2) pour leur action hémodynamique rénale antiprotéinurique et néphroprotectrice (E).\nA ❌ FAUX : Il n'y a aucune indication de dérivation urinaire (ce n'est pas un obstacle urologique).\nD ❌ FAUX : L'EPO n'est indiquée que dans l'IRC avancée avec anémie symptomatique par carence en EPO, et non dans le traitement symptomatique du syndrome néphrotique."
    },

    // Q36 — Annales 2022-2023 Q23 : Bandelette urinaire et piège des chaînes légères
    {
        "id": "UE5-LF-36",
        "text": "La bandelette urinaire (BU) permet de dépister :",
        "options": {
            "A": "Une hématurie microscopique.",
            "B": "Une protéinurie (albuminurie).",
            "C": "Une leucocyturie.",
            "D": "Une insuffisance rénale.",
            "E": "Un myélome à chaînes légères (protéinurie de Bence-Jones)."
        },
        "correctAnswers": ["A", "B", "C"],
        "explanation": "A, B & C ✅ VRAI : La BU dépiste avec une haute sensibilité les hématies (activité pseudo-peroxydasique de l'hème), la protéinurie (très sensible à l'albumine) et les leucocytes (activité estérasique leucocytaire).\nD ❌ FAUX : L'insuffisance rénale est définie par la baisse du débit de filtration glomérulaire, mesurée par la créatininémie sanguine et l'estimation du DFG (CKD-EPI) ; la BU ne mesure pas la fonction rénale.\nE ❌ FAUX : Piège classique fondamental ! La bandelette urinaire ne détecte quasiment QUE L'ALBUMINE grâce à sa charge négative. Elle est FAUSSEMENT NÉGATIVE pour les protéines de bas poids moléculaire, notamment les chaînes légères monoclonales d'immunoglobulines du myélome multiple (protéinurie de Bence-Jones). Seul le dosage quantitatif des protéines urinaires (sulfosalicylique ou dosage pondéral) et l'électrophorèse des protéines urinaires peuvent détecter un myélome."
    },

    // Q37 — Annales 2022-2023 Q50 : Syndrome néphrotique pédiatrique et indication de biopsie
    {
        "id": "UE5-LF-37",
        "text": "Dans quel(s) cas un syndrome néphrotique chez un enfant de 4 ans nécessite-t-il obligatoirement la réalisation d'une ponction-biopsie rénale (PBR) ?",
        "options": {
            "A": "S'il existe une hématurie microscopique franche (> 100 000/mL) à l'ECBU.",
            "B": "Si le patient est normotendu sans céphalées.",
            "C": "S'il existe une consommation des fractions du complément sérique (C3, C4 bas).",
            "D": "Si l'échographie rénale montre deux reins de taille normale symétriques.",
            "E": "Si le syndrome néphrotique est strictement pur."
        },
        "correctAnswers": ["A", "C"],
        "explanation": "A & C ✅ VRAI : Chez l'enfant de 1 à 10 ans, le syndrome néphrotique est dispensé de biopsie rénale initiale UNIQUEMENT s'il est TYPIQUE et PUR (90% de néphrose lipoïdique / syndrome néphrotique à lésions glomérulaires minimes corticosensible). Si le syndrome est IMPUR (présence d'une hématurie microscopique franche, HTA, insuffisance rénale) ou s'il y a des signes de maladie systémique (baisse du complément sérique C3/C4 évoquant un lupus, une glomérulonéphrite membranoproliférative ou post-infectieuse), la biopsie rénale devient formellement indispensable avant tout traitement.\nB, D & E ❌ FAUX : Un syndrome néphrotique pur, normotendu, avec reins normaux chez un enfant de 4 ans est le cas classique typique qui dispense précisément de biopsie et justifie une corticothérapie probabiliste de première intention."
    },

    // ============================================================
    // RAPPELS D'ANATOMIE & D'HISTOLOGIE RÉNALE, FILTRATION GLOMÉRULAIRE & SRAA
    // Dr LE FLECHER (Indices 37 à 50 : 14 QCMs)
    // ============================================================

    // Q38 — Question 1 : Anatomie et développement du néphron
    {
        "id": "UE5-LF-38",
        "text": "Concernant l'anatomie générale et le développement du néphron, quelles propositions sont exactes ?",
        "options": {
            "A": "Le néphron se résume anatomiquement au glomérule rénal.",
            "B": "Le néphron constitue l'unité élémentaire fonctionnelle et anatomique du rein.",
            "C": "Le néphron se situe à cheval entre le cortex et la médullaire rénale.",
            "D": "Le nombre total de néphrons d'un individu est étroitement corrélé à son poids de naissance et à son terme gestationnel.",
            "E": "La néphrogenèse humaine se poursuit tout au long de la vie adulte pour remplacer les néphrons détruits."
        },
        "correctAnswers": ["B", "C", "D"],
        "explanation": "B ✅ VRAI : Le néphron est l'unité fonctionnelle élémentaire du parenchyme rénal (environ 1 million de néphrons par rein chez l'adulte sain).\nC ✅ VRAI : Les glomérules, TCP et TCD siègent dans le cortex rénal, tandis que les anses de Henle et les canaux collecteurs plongent dans la médullaire rénale (disposition cortico-médullaire).\nD ✅ VRAI : La néphrogenèse s'achève in utero vers la 36e semaine d'aménorrhée. Le capital néphronique est positivement corrélé au poids de naissance ; l'hypotrophie ou la grande prématurité réduisent ce capital (facteur de risque d'HTA et d'IRC ultérieure).\nA ❌ FAUX : Le néphron comprend le corpuscule rénal (glomérule de Malpighi) ET le tubule rénal (TCP, anse de Henle, TCD, canal d'union).\nE ❌ FAUX : La néphrogenèse est DÉFINITIVEMENT TERMINÉE à la naissance. Aucun nouveau néphron ne peut être régénéré en cas de lésion ou de vieillissement."
    },

    // Q39 — Question 2 : Les 4 portions successives du tubule rénal
    {
        "id": "UE5-LF-39",
        "text": "Sur le plan anatomique et fonctionnel, le tubule rénal est constitué successivement de 4 portions majeures le long du flux de l'ultrafiltrat. Quelles sont-elles ?",
        "options": {
            "A": "Le tube proximal (ou tubule contourné proximal - TCP)",
            "B": "L'anse de Henle (branches descendante et ascendante)",
            "C": "Le tube distal (ou tubule contourné distal - TCD)",
            "D": "Le tube collecteur (canal collecteur de Bellini)",
            "E": "Le canal cystique"
        },
        "correctAnswers": ["A", "B", "C", "D"],
        "explanation": "A, B, C & D ✅ VRAI : Le fluide tubulaire chemine successivement à travers : 1) le tube proximal (TCP puis tube droit proximal) ; 2) l'anse de Henle (branche descendante fine, branche ascendante fine et branche large ascendante / BLA) ; 3) le tube distal (TCD) ; 4) le système des canaux collecteurs (cortical puis médullaire).\nE ❌ FAUX : Le canal cystique est une structure biliaire hépatique sans aucun rapport avec l'appareil urinaire."
    },

    // Q40 — Question 3 : Les 4 secteurs histologiques du rein
    {
        "id": "UE5-LF-40",
        "text": "Sur le plan histologique (et non purement anatomique), le parenchyme rénal est classiquement subdivisé en 4 secteurs distincts, fondant la nosologie des néphropathies. Quels sont-ils ?",
        "options": {
            "A": "Le secteur glomérulaire",
            "B": "Le secteur tubulaire",
            "C": "Le secteur interstitiel (tissu de soutien péri-tubulaire)",
            "D": "Le secteur vasculaire",
            "E": "Le secteur surrénalien"
        },
        "correctAnswers": ["A", "B", "C", "D"],
        "explanation": "A, B, C & D ✅ VRAI : L'analyse anatomopathologique d'une biopsie rénale évalue systématiquement ces 4 compartiments : 1) les glomérules (néphropathies glomérulaires) ; 2) les tubules (néphropathies tubulaires, ex: NTA) ; 3) l'interstitium (néphropathies interstitielles, ex: néphrite immuno-allergique) ; 4) les vaisseaux (néphropathies vasculaires, ex: néphroangiosclérose, sténose de l'artère rénale).\nE ❌ FAUX : La glande surrénale est un organe endocrine coiffant le pôle supérieur du rein, distinct du parenchyme rénal histologique."
    },

    // Q41 — Question 4 : Histologie glomérulaire et barrière de filtration
    {
        "id": "UE5-LF-41",
        "text": "Concernant l'histologie du glomérule et de la barrière de filtration glomérulaire, quelles propositions sont exactes ?",
        "options": {
            "A": "L'appareil juxta-glomérulaire est situé au pôle urinaire du glomérule.",
            "B": "La barrière de filtration comporte un endothélium capillaire fenestré au contact du sang.",
            "C": "La membrane basale glomérulaire (MBG) est riche en protéoglycanes et glycoprotéines anioniques chargées négativement.",
            "D": "La capsule de Bowman se prolonge directement au pôle urinaire par les cellules épithéliales du tube contourné proximal.",
            "E": "Les podocytes constituent le feuillet pariétal externe de la capsule de Bowman."
        },
        "correctAnswers": ["B", "C", "D"],
        "explanation": "B ✅ VRAI : Les 3 couches de la barrière de filtration sont de dedans en dehors : 1) l'endothélium capillaire fenestré (pores de 70-100 nm) ; 2) la membrane basale glomérulaire acellulaire ; 3) les pédicelles des podocytes délimitant les fentes de filtration.\nC ✅ VRAI : La MBG et le glycocalyx endothélial sont chargés négativement (anioniques, héparane sulfate), ce qui repousse par répulsion électrostatique les protéines circulantes polyanioniques comme l'albumine.\nD ✅ VRAI : Au pôle urinaire, l'espace urinaire de Bowman s'abouche directement dans la lumière du tube contourné proximal.\nA ❌ FAUX : L'appareil juxta-glomérulaire est situé au PÔLE VASCULAIRE du glomérule, au carrefour entre l'artériole afférente, l'artériole efférente et la macula densa du tube distal.\nE ❌ FAUX : Les podocytes forment le feuillet VISCÉRAL (au contact direct des anses capillaires), alors que le feuillet pariétal est un épithélium pavimenteux simple bordant l'espace de Bowman."
    },

    // Q42 — Question 5 : Physiologie comparée glomérule vs tubule
    {
        "id": "UE5-LF-42",
        "text": "Concernant les rôles physiologiques respectifs du glomérule et du tubule rénal, quelles propositions sont exactes ?",
        "options": {
            "A": "Le néphron se compose obligatoirement de l'association d'un glomérule et d'un tubule rénal.",
            "B": "Le glomérule modifie la composition de l'urine pour aboutir directement à l'urine définitive.",
            "C": "Le glomérule produit l'ultrafiltrat glomérulaire ou urine primitive.",
            "D": "Le tubule rénal assure principalement des fonctions majeures de réabsorption et de sécrétion.",
            "E": "L'urine définitive a une composition et une osmolalité strictement identiques à celles de l'ultrafiltrat glomérulaire."
        },
        "correctAnswers": ["A", "C", "D"],
        "explanation": "A ✅ VRAI : Définition de l'unité néphronique élémentaire.\nC ✅ VRAI : Le glomérule fonctionne comme un ultrafiltre plasmatique passif générant l'urine primitive (environ 180 L/24h).\nD ✅ VRAI : Le tubule réabsorbe ~99 % de l'eau et des solutés filtrés et sécrète des substances endogènes et xénobiotiques pour adapter l'excrétion aux besoins.\nB ❌ FAUX : Le glomérule ne produit PAS l'urine définitive ; c'est le tubule rénal qui façonne l'urine définitive à partir de l'urine primitive.\nE ❌ FAUX : L'urine définitive est profondément différente de l'ultrafiltrat (absence de glucose et d'acides aminés, osmolalité variable de 50 à 1200 mOsm/kg, concentration d'urée multipliée par 50 à 100)."
    },

    // Q43 — Question 6 : Propriétés de la filtration glomérulaire
    {
        "id": "UE5-LF-43",
        "text": "Concernant les propriétés biophysiques de la filtration glomérulaire, quelles propositions sont exactes ?",
        "options": {
            "A": "La filtration glomérulaire est un processus de transport actif consommateur d'énergie sous forme d'ATP.",
            "B": "La filtration glomérulaire aboutit directement à la constitution de l'urine définitive.",
            "C": "La filtration glomérulaire est un transfert liquidien strictement unidirectionnel.",
            "D": "La filtration glomérulaire s'effectue sous l'effet du gradient de pression hydrostatique et oncotique transcapillaire (pression nette de filtration).",
            "E": "La filtration glomérulaire s'interrompt normalement au cours du sommeil nocturne."
        },
        "correctAnswers": ["C", "D"],
        "explanation": "C ✅ VRAI : Le flux d'ultrafiltration s'effectue de manière unidirectionnelle du compartiment vasculaire (capillaire glomérulaire) vers l'espace urinaire de la chambre de Bowman.\nD ✅ VRAI : C'est un phénomène biophysique passif régi par la loi de Starling (équilibre entre pressions hydrostatiques et oncotiques).\nA ❌ FAUX : La filtration glomérulaire est un processus PUREMENT PASSIF qui ne consomme pas d'ATP localement (l'énergie motrice est fournie par le travail de pompe du myocarde créant la pression artérielle).\nB ❌ FAUX : Elle aboutit à l'urine PRIMITIVE (ultrafiltrat), et non définitive.\nE ❌ FAUX : La filtration glomérulaire est permanente 24h/24 (bien que subissant de faibles variations nycthémérales physiologiques)."
    },

    // Q44 — Question 7 : Sélectivité de taille et de charge de la MBG
    {
        "id": "UE5-LF-44",
        "text": "Concernant la perméabilité et la sélectivité de la membrane basale glomérulaire (MBG), quelles propositions sont exactes ?",
        "options": {
            "A": "La perméabilité membranaire glomérulaire dépend de la taille et du rayon hydrodynamique de la molécule.",
            "B": "La perméabilité membranaire glomérulaire ne dépend absolument pas de la charge électrique des molécules.",
            "C": "L'ultrafiltrat glomérulaire normal comporte des éléments figurés du sang (hématies, leucocytes).",
            "D": "L'ultrafiltrat glomérulaire physiologique est quasiment dépourvu de protéines de haut poids moléculaire comme l'albumine.",
            "E": "À taille moléculaire égale, une molécule polycationique (chargée positivement) traverse plus facilement la barrière glomérulaire qu'une molécule polyanionique."
        },
        "correctAnswers": ["A", "D", "E"],
        "explanation": "A ✅ VRAI : Sélectivité de taille : les petites molécules (< 10 kDa) franchissent librement la barrière, tandis que la filtration s'annule pour les molécules de rayon hydrodynamique > 4,2 nm (masse > 68 kDa).\nD ✅ VRAI : L'albumine (68 kDa) est quasiment retenue en totalité dans le sang (< 10-20 mg/L dans l'ultrafiltrat, réabsorbés par le TCP).\nE ✅ VRAI : Sélectivité de charge : la barrière étant fortement électronégative (anionique), les molécules cationiques (positives) sont attirées et traversent plus facilement que les molécules anioniques (négatives), qui sont repoussées.\nB ❌ FAUX : La perméabilité dépend TRÈS FORTEMENT de la charge électrique.\nC ❌ FAUX : Les éléments figurés du sang (hématies, leucocytes, plaquettes) ont un diamètre mesuré en micromètres (7-10 µm) et ne traversent jamais une membrane saine (pores en nanomètres)."
    },

    // Q45 — Question 8 : Valeur normale du Débit de Filtration Glomérulaire
    {
        "id": "UE5-LF-45",
        "text": "Quelle est la valeur physiologique normale du Débit de Filtration Glomérulaire (DFG) chez un adulte jeune sain (rapporté à une surface corporelle de 1,73 m²) ?",
        "options": {
            "A": "Environ 15 à 30 mL/min (soit 30 litres filtrés par jour)",
            "B": "Environ 60 mL/min (soit 90 litres filtrés par jour)",
            "C": "Aux alentours de 120 mL/min (soit environ 180 litres de plasma filtrés par jour)",
            "D": "Environ 500 mL/min (soit 720 litres filtrés par jour)",
            "E": "Environ 1,2 L/min (équivalent au débit sanguin rénal total)"
        },
        "correctAnswers": ["C"],
        "explanation": "C ✅ VRAI : Le DFG normal d'un adulte jeune sain est d'environ 120 mL/min/1,73 m² (100 à 130 mL/min), ce qui représente un volume d'ultrafiltrat considérable de 180 litres par jour (le volume plasmatique d'environ 3 litres est ainsi épuré 60 fois par jour).\nA & B ❌ FAUX : 60 mL/min correspond au seuil de maladie rénale chronique (stade 3) ; 15-30 mL/min correspond à une insuffisance rénale sévère (stade 4).\nD & E ❌ FAUX : 1,2 L/min correspond au débit sanguin rénal (DSR total) représentant 20-25 % du débit cardiaque, duquel est extraite une fraction de filtration de 20 % (120 mL/min de DFG)."
    },

    // Q46 — Question 9 : Déterminants de la Pression Nette de Filtration
    {
        "id": "UE5-LF-46",
        "text": "Selon l'équation de Starling appliquée au capillaire glomérulaire, le Débit de Filtration Glomérulaire (DFG) est déterminé par la Pression Nette de Filtration (PNF). Quels paramètres participent à cette équation ?",
        "options": {
            "A": "La pression hydrostatique du capillaire glomérulaire (PHCG)",
            "B": "La pression oncotique du capillaire glomérulaire (POCG)",
            "C": "La pression hydrostatique de l'espace de Bowman (PHEB)",
            "D": "La pression oncotique de l'espace de Bowman (POEB)",
            "E": "La pression artérielle pulmonaire moyenne"
        },
        "correctAnswers": ["A", "B", "C", "D"],
        "explanation": "A, B, C & D ✅ VRAI : La formule de Starling de la PNF s'écrit : PNF = (PHCG - PHEB) - (POCG - POEB). Les forces favorisant la filtration sont la pression hydrostatique capillaire (PHCG ~50 mmHg) et la pression oncotique de Bowman (POEB ~0 mmHg car pas de protéines). Les forces s'opposant à la filtration sont la pression hydrostatique de Bowman (PHEB ~10-15 mmHg) et la pression oncotique des protéines plasmatiques intracapillaires (POCG ~25-35 mmHg). La PNF résultante est de +10 à +15 mmHg.\nE ❌ FAUX : La pression pulmonaire n'intervient pas dans les forces de Starling locales de la barrière glomérulaire."
    },

    // Q47 — Question 10 : Forces motrices de la filtration glomérulaire
    {
        "id": "UE5-LF-47",
        "text": "Concernant les différentes forces motrices et pressions régissant la filtration glomérulaire, quelles propositions sont exactes ?",
        "options": {
            "A": "La filtration glomérulaire est un processus d'échange transmembranaire unidirectionnel.",
            "B": "La filtration glomérulaire est essentiellement entretenue et propulsée par la pression hydrostatique de l'espace de Bowman.",
            "C": "La force motrice principale favorisant l'ultrafiltration est la pression hydrostatique du capillaire glomérulaire.",
            "D": "L'ultrafiltration glomérulaire est un processus biophysique passif.",
            "E": "Une obstruction urétérale aiguë (calcul) augmente la pression hydrostatique de l'espace de Bowman et diminue la filtration glomérulaire."
        },
        "correctAnswers": ["A", "C", "D", "E"],
        "explanation": "A, C & D ✅ VRAI : La filtration glomérulaire est un phénomène passif et unidirectionnel dont la force motrice dominante est la pression hydrostatique du capillaire glomérulaire (PHCG ~50 mmHg, maintenue élevée par la résistance de l'artériole efférente).\nE ✅ VRAI : En cas d'obstacle sur la voie excrétrice (lithiase, obstacle urétéral), la pression d'amont remonte dans les tubules jusqu'à l'espace de Bowman : PHEB augmente fortement, ce qui annule la PNF et effondre le DFG (mécanisme de l'IRA obstructive).\nB ❌ FAUX : La pression hydrostatique de l'espace de Bowman S'OPPOSE à la filtration et ne la favorise pas."
    },

    // Q48 — Question 11 : Cascade enzymatique du SRAA
    {
        "id": "UE5-LF-48",
        "text": "Concernant la cascade enzymatique et les effets physiologiques du Système Rénine-Angiotensine-Aldostérone (SRAA), quelles propositions sont exactes ?",
        "options": {
            "A": "La rénine assure la conversion enzymatique directe de l'angiotensine I en angiotensine II.",
            "B": "L'enzyme de conversion de l'angiotensine (ECA) catalyse la transformation de l'angiotensine I en angiotensine II.",
            "C": "L'activation du SRAA stimule la sécrétion d'aldostérone par la corticosurrénale.",
            "D": "L'angiotensine II induit une vasodilatation préférentielle de l'artériole efférente glomérulaire.",
            "E": "L'angiotensine II et l'aldostérone stimulent la réabsorption tubulaire de NaCl et d'eau."
        },
        "correctAnswers": ["B", "C", "E"],
        "explanation": "B ✅ VRAI : L'ECA (présente à la surface des cellules endothéliales vasculaires, notamment pulmonaires et rénales) clive l'angiotensine I inactive en angiotensine II octapeptide actif.\nC ✅ VRAI : L'angiotensine II se lie aux récepteurs AT1 de la zone glomérulée de la corticosurrénale et déclenche la synthèse et sécrétion d'aldostérone.\nE ✅ VRAI : L'angiotensine II stimule l'échangeur Na+/H+ (NHE3) au niveau proximal, et l'aldostérone stimule les canaux ENaC au niveau du tube collecteur, entraînant une rétention hydrosodée pour restaurer la volémie.\nA ❌ FAUX : La rénine transforme l'ANGIOTENSINOGÈNE hépatique en angiotensine I (décapeptide).\nD ❌ FAUX : L'angiotensine II provoque une VASOCONSTRICTION préférentielle de l'artériole EFFÉRENTE, augmentant la résistance d'aval pour maintenir la pression intraglomérulaire et préserver le DFG en situation d'hypovolémie."
    },

    // Q49 — Question 12 : Régulation de la sécrétion de rénine
    {
        "id": "UE5-LF-49",
        "text": "La sécrétion de rénine par les cellules myoépithéliales de l'appareil juxta-glomérulaire est régulée par plusieurs signaux physiologiques. Quelles propositions sont exactes ?",
        "options": {
            "A": "Une baisse de la pression artérielle de perfusion dans l'artériole afférente entraîne une diminution de la sécrétion de rénine.",
            "B": "Une baisse de la pression artérielle de perfusion dans l'artériole afférente détend ses barorécepteurs et stimule la sécrétion de rénine.",
            "C": "Une diminution de la délivrance de NaCl au niveau de la macula densa du tubule distal stimule la sécrétion de rénine.",
            "D": "Une diminution de la délivrance de NaCl au niveau de la macula densa du tubule distal inhibe la sécrétion de rénine.",
            "E": "La stimulation du système nerveux sympathique rénal (récepteurs bêta-1 adrénergiques) stimule la sécrétion de rénine."
        },
        "correctAnswers": ["B", "C", "E"],
        "explanation": "B ✅ VRAI : Les cellules juxta-glomérulaires de l'artériole afférente fonctionnent comme des barorécepteurs : la baisse de pression d'étirement stimule immédiatement la libération de rénine.\nC ✅ VRAI : La macula densa détecte le flux de NaCl via le cotransporteur NKCC2. Une baisse de NaCl urinaire (reflétant une baisse du DFG) entraîne la libération de médiateurs (prostaglandine PGE2) qui stimulent la sécrétion de rénine.\nE ✅ VRAI : L'orthosympathique rénal (activé en cas de stress, d'effort ou d'hypovolémie) stimule la libération de rénine via les récepteurs bêta-1.\nA & D ❌ FAUX : Ces stimuli augmentent la sécrétion de rénine et ne la diminuent pas."
    },

    // Q50 — Question 13 : Adaptation hémodynamique rénale en cas d'hypotension
    {
        "id": "UE5-LF-50",
        "text": "En cas d'hypotension artérielle systémique ou d'hypovolémie aiguë, quels mécanismes adaptatifs permettent au rein de préserver son Débit de Filtration Glomérulaire (DFG) ?",
        "options": {
            "A": "Une augmentation de la sécrétion rénale de rénine avec activation du SRAA.",
            "B": "Une vasoconstriction préférentielle de l'artériole efférente sous l'action de l'angiotensine II.",
            "C": "Une élévation de la pression hydrostatique intraglomérulaire compensant la baisse de pression artérielle systémique.",
            "D": "Une vasodilatation de l'artériole afférente médiée par les prostaglandines rénales (PGE2, PGI2).",
            "E": "Une vasoconstriction intense et isolée de l'artériole afférente par les anti-inflammatoires non stéroïdiens (AINS) favorisant le maintien du DFG."
        },
        "correctAnswers": ["A", "B", "C", "D"],
        "explanation": "A, B, C & D ✅ VRAI : Pour maintenir le DFG malgré l'hypotension : 1) l'artériole afférente se dilate (via le réflexe myogénique et les prostaglandines rénales vasodilatatrices) pour laisser entrer le flux sanguin ; 2) la rénine activée génère de l'angiotensine II qui constricte l'artériole efférente, freinant la sortie du sang. Cela augmente la pression hydrostatique intraglomérulaire et maintient le DFG (phénomène d'autorégulation rénale).\nE ❌ FAUX : Les AINS inhibent la synthèse des prostaglandines et empêchent la vasodilatation de l'artériole afférente, provoquant sa vasoconstriction : ils cassent l'autorégulation et précipitent une IRA fonctionnelle (danger majeur en situation d'hypovolémie)."
    },

    // Q51 — Question 14 : Rétrocontrôle tubulo-glomérulaire
    {
        "id": "UE5-LF-51",
        "text": "Concernant le rétrocontrôle tubulo-glomérulaire (feedback tubulo-glomérulaire), quelles propositions sont exactes ?",
        "options": {
            "A": "Ce rétrocontrôle est assuré par l'appareil juxta-glomérulaire et les cellules spécialisées de la macula densa.",
            "B": "En cas de baisse du DFG, la diminution de la charge filtrée en NaCl entraîne une baisse de sa concentration au niveau de la macula densa.",
            "C": "La détection d'une baisse de NaCl par la macula densa déclenche une vasodilatation réflexe de l'artériole afférente.",
            "D": "Ce mécanisme concourt à rétablir le débit sanguin rénal (DSR) et le débit de filtration glomérulaire (DFG).",
            "E": "En cas de surcharge volémique avec augmentation excessive du DFG, la macula densa provoque une vasodilatation de l'artériole afférente."
        },
        "correctAnswers": ["A", "B", "C", "D"],
        "explanation": "A, B, C & D ✅ VRAI : Le rétrocontrôle tubulo-glomérulaire couple le débit tubulaire distal au tonus artériolaire glomérulaire. Lorsque le DFG baisse, le débit tubulaire ralentit, le NaCl est davantage réabsorbé en amont dans l'anse de Henle, et arrive en faible quantité à la macula densa. Celle-ci déclenche une vasodilatation de l'artériole afférente (via l'oxyde nitrique et les prostaglandines) et une sécrétion de rénine pour ré-augmenter le DFG.\nE ❌ FAUX : À l'inverse, un excès de NaCl à la macula densa (hyperfiltration) entraîne la libération d'adénosine qui CONSTRICTE l'artériole afférente pour freiner et normaliser le DFG."
    }

];

window.ALL_QCM_DATA["UE5"] = window.DATA_UE5;
