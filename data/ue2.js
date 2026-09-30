// ============================================================
// Grimoire Médical — Données QCM : UE2
// Bases fondamentales en sciences médicales — S3
// ============================================================
// TD WOOCLAP — AH-PINE FRANCK (2024-2025)
// Oncogenèse, Homéostasie Tissulaire, Biologie Tumorale
// ============================================================

window.ALL_QCM_DATA = window.ALL_QCM_DATA || {};
window.DATA_UE2 = [

    // ============================================================
    // TD WOOCLAP — AH-PINE FRANCK (2024-2025)
    // Oncogenèse & Biologie Tumorale (15 QCMs : indices 0 à 14)
    // ============================================================

    // Q1
    {
        "id": "UE2-AH-01",
        "text": "Concernant l'oncogenèse, quelle(s) proposition(s) est (sont) vraie(s) ?",
        "options": {
            "A": "Elle correspond au processus de transformation maligne de cellules normales",
            "B": "Elle est la conséquence d'un déséquilibre de l'homéostasie tissulaire",
            "C": "Elle est aussi appelée néoangiogenèse",
            "D": "Il s'agit d'une discipline médicale prenant en charge les patients atteints de cancer"
        },
        "correctAnswers": ["A", "B"],
        "explanation": "A ✅ VRAI : L'oncogenèse (ou carcinogenèse/cancérogenèse) correspond au processus de transformation maligne des cellules normales en cellules cancéreuses.\nB ✅ VRAI : Ce processus est caractérisé par un déséquilibre de l'homéostasie tissulaire (rupture de l'équilibre entre prolifération, différenciation, sénescence et apoptose).\nC ❌ FAUX : La néoangiogenèse est le processus de formation de nouveaux vaisseaux sanguins pour alimenter la tumeur — ce n'est pas un synonyme d'oncogenèse.\nD ❌ FAUX : C'est l'oncologie qui est la discipline médicale prenant en charge les patients cancéreux. L'oncogenèse désigne le processus biologique lui-même."
    },

    // Q2
    {
        "id": "UE2-AH-02",
        "text": "Quel(s) mécanisme(s) biologique(s) intervien(nen)t dans l'homéostasie tissulaire ?",
        "options": {
            "A": "La mitose",
            "B": "L'apoptose",
            "C": "La sénescence",
            "D": "La différenciation cellulaire",
            "E": "La réplication de l'ADN"
        },
        "correctAnswers": ["A", "B", "C", "D", "E"],
        "explanation": "A ✅ VRAI : La mitose permet la prolifération cellulaire, essentielle au renouvellement des tissus.\nB ✅ VRAI : L'apoptose (mort cellulaire programmée) élimine les cellules en excès ou endommagées, équilibrant la prolifération.\nC ✅ VRAI : La sénescence cellulaire (arrêt irréversible du cycle) limite la prolifération incontrôlée.\nD ✅ VRAI : La différenciation cellulaire oriente les cellules souches vers des fonctions spécialisées, participant à l'équilibre tissulaire.\nE ✅ VRAI : La réplication de l'ADN est indispensable à la phase S du cycle cellulaire, étape préalable à toute mitose — elle fait donc intégralement partie des mécanismes maintenant l'homéostasie."
    },

    // Q3
    {
        "id": "UE2-AH-03",
        "text": "Quelle(s) est (sont) le(s) cause(s) de la sénescence cellulaire ?",
        "options": {
            "A": "Le raccourcissement des télomères",
            "B": "L'activation d'oncogènes",
            "C": "La surexpression de gènes suppresseurs de tumeurs",
            "D": "Les dommages de l'ADN",
            "E": "Le stress oxydatif"
        },
        "correctAnswers": ["A", "B", "D", "E"],
        "explanation": "A ✅ VRAI : Le raccourcissement des télomères à chaque division (limite de Hayflick) est le déclencheur classique de la sénescence réplicative.\nB ✅ VRAI : L'activation d'oncogènes provoque une sénescence induite par oncogène (OIS — Oncogene-Induced Senescence), mécanisme de protection anti-tumoral.\nC ❌ FAUX : La surexpression de gènes suppresseurs de tumeurs n'est pas une cause répertoriée de déclenchement de la sénescence. Ce sont les protéines P53 et Rb qui médient la réponse sénescente, mais leur surexpression seule n'en est pas la cause initiale.\nD ✅ VRAI : Les dommages à l'ADN (cassures double-brin, adduits) activent les kinases ATM/ATR qui déclenchent la sénescence via P53/P21.\nE ✅ VRAI : Le stress oxydatif (excès de ROS) provoque des dommages à l'ADN et des lésions cellulaires qui induisent la sénescence."
    },

    // Q4
    {
        "id": "UE2-AH-04",
        "text": "Concernant la sénescence cellulaire, quelle(s) affirmation(s) est (sont) vraie(s) ?",
        "options": {
            "A": "La sénescence est un arrêt irréversible du cycle cellulaire",
            "B": "La sénescence est déclenchée uniquement par le raccourcissement des télomères",
            "C": "La protéine Rb1 joue un rôle majeur dans l'induction de la sénescence",
            "D": "Les cellules sénescentes peuvent encore se diviser mais à un rythme plus lent",
            "E": "La sénescence est un mécanisme de protection contre le cancer"
        },
        "correctAnswers": ["A", "E"],
        "explanation": "A ✅ VRAI : La sénescence est définie comme un arrêt permanent et irréversible du cycle cellulaire — la cellule reste métaboliquement active mais ne se divise plus.\nB ❌ FAUX : Elle est également déclenchée par le stress oxydatif, les dommages à l'ADN et l'activation d'oncogènes (pas uniquement par le raccourcissement des télomères).\nC ❌ FAUX : C'est la protéine P53 (le « gardien du génome ») qui joue un rôle central et majeur dans l'induction de la sénescence, en activant P21 qui bloque le cycle. Rb1 est impliquée dans le maintien de l'arrêt, mais n'est pas le déclencheur principal.\nD ❌ FAUX : L'arrêt du cycle cellulaire est total et irréversible — les cellules sénescentes ne se divisent plus du tout.\nE ✅ VRAI : La sénescence est un mécanisme suppresseur de tumeurs fondamental, empêchant la prolifération de cellules ayant subi des dommages génomiques ou une activation oncogénique."
    },

    // Q5
    {
        "id": "UE2-AH-05",
        "text": "Parmi les événements suivants, lequel est le premier dans l'histoire naturelle du cancer ?",
        "options": {
            "A": "Invasion : dissémination à distance",
            "B": "Promotion : état précancéreux",
            "C": "Initiation : par un carcinogène",
            "D": "Progression : infiltration locale"
        },
        "correctAnswers": ["C"],
        "explanation": "C ✅ VRAI : L'initiation est la toute première étape. Un carcinogène (physique, chimique ou biologique) provoque une mutation irréversible de l'ADN d'une cellule normale, la rendant potentiellement tumorigène.\n\n📋 Ordre chronologique de l'histoire naturelle du cancer :\n1️⃣ Initiation — Altération de l'ADN par un carcinogène\n2️⃣ Promotion — État précancéreux (lésion bénigne ou dysplasie), réversible\n3️⃣ Progression — Carcinome in situ puis infiltration locale\n4️⃣ Invasion — Dissémination ganglionnaire puis métastases à distance"
    },

    // Q6
    {
        "id": "UE2-AH-06",
        "text": "À quoi correspond un adénocarcinome ?",
        "options": {
            "A": "Une tumeur maligne d'origine épithéliale",
            "B": "Une tumeur maligne d'origine glandulaire",
            "C": "Dans certains cas, la transformation d'un adénome bénin",
            "D": "Une tumeur maligne des tissus conjonctifs",
            "E": "Une tumeur maligne dérivant d'un épithélium malpighien"
        },
        "correctAnswers": ["A", "B", "C"],
        "explanation": "A ✅ VRAI : Le suffixe \"-carcinome\" indique une tumeur maligne dérivant de cellules épithéliales.\nB ✅ VRAI : Le préfixe \"adéno-\" précise que l'épithélium d'origine est glandulaire (ex: côlon, sein, poumon, prostate).\nC ✅ VRAI : La séquence adénome → adénocarcinome est bien documentée (ex: séquence adénome colorectal → adénocarcinome colorectal, séquence de Fearon-Vogelstein).\nD ❌ FAUX : Les tumeurs malignes des tissus conjonctifs (mésenchyme) sont des sarcomes (fibrosarcome, ostéosarcome, liposarcome, etc.).\nE ❌ FAUX : Une tumeur maligne dérivant d'un épithélium malpighien (pavimenteux stratifié) est un carcinome épidermoïde (ou carcinome malpighien)."
    },

    // Q7
    {
        "id": "UE2-AH-07",
        "text": "Quelle est la cause principale de la diversité génétique observée au sein des cellules d'une tumeur ?",
        "options": {
            "A": "La monoclonalité",
            "B": "La polyclonalité",
            "C": "L'apoptose",
            "D": "La sénescence cellulaire",
            "E": "La différenciation cellulaire homogène"
        },
        "correctAnswers": ["B"],
        "explanation": "B ✅ VRAI : La polyclonalité tumorale est la cause principale de la diversité génétique intra-tumorale (hétérogénéité tumorale). Une cellule initiée se divise et accumule de nouvelles mutations à chaque génération, donnant naissance à plusieurs sous-clones apparentés mais génétiquement distincts, créant une forte hétérogénéité.\nA ❌ FAUX : La monoclonalité signifie que toutes les cellules tumorales descendent d'un ancêtre unique commun identique. Elle décrit l'origine, pas la diversité ultérieure.\nC, D, E ❌ FAUX : L'apoptose, la sénescence et la différenciation homogène ne sont pas des causes de diversité génétique intra-tumorale."
    },

    // Q8
    {
        "id": "UE2-AH-08",
        "text": "Qu'est-ce que l'index de prolifération Ki67 ?",
        "options": {
            "A": "Un résultat d'étude immunohistochimique",
            "B": "Un résultat de biologie moléculaire",
            "C": "Une quantification du nombre de cellules en cycle cellulaire (phases G1, S, G2, M)",
            "D": "Une quantification du nombre de cellules quiescentes (phase G0)",
            "E": "Une estimation de la vitesse de croissance d'une tumeur"
        },
        "correctAnswers": ["A", "C", "E"],
        "explanation": "A ✅ VRAI : Le Ki67 est détecté par immunohistochimie (IHC) sur coupes histologiques à l'aide d'anticorps anti-Ki67 (ex: MIB-1), en anatomopathologie.\nC ✅ VRAI : La protéine Ki67 est exprimée dans le noyau de toutes les cellules actives dans le cycle cellulaire (G1, S, G2 et M), mais pas en phase G0 (quiescence). L'index Ki67 est le pourcentage de cellules marquées sur la totalité des cellules tumorales comptées.\nE ✅ VRAI : Plus l'index Ki67 est élevé, plus la fraction de cellules en prolifération est grande, et plus la tumeur croît rapidement — il estime donc la vitesse de croissance tumorale et est un facteur pronostique majeur.\nB ❌ FAUX : Le Ki67 relève de l'anatomopathologie et de l'immunohistochimie, non de la biologie moléculaire (PCR, séquençage, FISH).\nD ❌ FAUX : Le Ki67 marque justement les cellules en cycle actif. Les cellules G0 (quiescentes) ne sont PAS marquées."
    },

    // Q9
    {
        "id": "UE2-AH-09",
        "text": "Concernant la différenciation tumorale, quelle(s) proposition(s) est (sont) vraie(s) ?",
        "options": {
            "A": "Plus une tumeur est différenciée, plus elle ressemble au tissu d'origine dont elle dérive",
            "B": "Plus une tumeur est différenciée, plus elle est agressive",
            "C": "Une tumeur indifférenciée est de mauvais pronostic",
            "D": "Les tumeurs malignes sont le plus souvent peu différenciées",
            "E": "Les tumeurs bénignes sont le plus souvent bien différenciées"
        },
        "correctAnswers": ["A", "C", "E"],
        "explanation": "A ✅ VRAI : Une tumeur bien différenciée (grade I) ressemble morphologiquement et fonctionnellement au tissu normal dont elle est issue.\nC ✅ VRAI : Une tumeur indifférenciée (anaplasique, grade III/IV) est composée de cellules très immatures, à fort pouvoir de prolifération et d'invasion — c'est un critère de mauvais pronostic.\nE ✅ VRAI : Les tumeurs bénignes sont presque toujours bien différenciées — elles ressemblent au tissu d'origine et ont une activité mitotique faible.\nB ❌ FAUX : C'est l'inverse — moins une tumeur est différenciée (plus elle est indifférenciée/anaplasique), plus elle est agressive et de mauvais pronostic.\nD ❌ FAUX : Les tumeurs malignes peuvent être bien, moyennement, peu ou indifférenciées. Ce n'est pas une généralité que de dire qu'elles sont \"le plus souvent\" peu différenciées (ex: adénocarcinome prostatique Gleason 6 est bien différencié)."
    },

    // Q10
    {
        "id": "UE2-AH-10",
        "text": "Quelle(s) caractéristique(s) décrit (décrivent) une tumeur bénigne ?",
        "options": {
            "A": "Croissance rapide",
            "B": "Bien limitée",
            "C": "Invasion locale",
            "D": "Activité mitotique faible",
            "E": "Métastases fréquentes"
        },
        "correctAnswers": ["B", "D"],
        "explanation": "B ✅ VRAI : Une tumeur bénigne est bien limitée, souvent encapsulée, avec des contours réguliers et nets — elle refoule sans envahir les tissus adjacents.\nD ✅ VRAI : Son activité mitotique est faible, correspondant à une croissance lente et ordonnée.\nA ❌ FAUX : La croissance rapide est une caractéristique des tumeurs malignes. Les tumeurs bénignes ont une croissance lente.\nC ❌ FAUX : L'invasion locale des tissus voisins (franchissement de la membrane basale) est un critère strict de malignité.\nE ❌ FAUX : Par définition, les tumeurs bénignes ne métastasent pas. La capacité à former des métastases à distance est l'un des critères majeurs définissant la malignité."
    },

    // Q11
    {
        "id": "UE2-AH-11",
        "text": "Quelle(s) affirmation(s) est (sont) correcte(s) concernant les oncogènes ?",
        "options": {
            "A": "Une mutation dans un oncogène entraîne une perte de fonction",
            "B": "Les oncogènes régulent positivement la prolifération cellulaire",
            "C": "Les mutations oncogéniques entraînent un gain de fonction, dans la prolifération cellulaire par exemple",
            "D": "L'activation d'un oncogène induit systématiquement l'apoptose de la cellule",
            "E": "L'altération d'oncogènes peut être responsable de la transformation maligne des cellules"
        },
        "correctAnswers": ["B", "C", "E"],
        "explanation": "B ✅ VRAI : À l'état normal, les proto-oncogènes sont des régulateurs positifs de la prolifération (facteurs de croissance, récepteurs, kinases, facteurs de transcription).\nC ✅ VRAI : Les mutations oncogéniques ont un caractère dominant — une seule copie mutée suffit à conférer un gain de fonction (ex: RAS constitutivement actif, amplification de HER2/ERBB2, translocation BCR-ABL).\nE ✅ VRAI : L'altération des proto-oncogènes en oncogènes est l'un des moteurs moléculaires principaux de la transformation maligne.\nA ❌ FAUX : Les mutations des oncogènes entraînent un gain de fonction (activation constitutive), non une perte de fonction. C'est le modèle des gènes suppresseurs de tumeurs qui fonctionne par perte de fonction.\nD ❌ FAUX : L'activation d'un oncogène n'induit pas systématiquement l'apoptose. Au contraire, elle stimule la survie et la prolifération. La cellule saine tente de répondre par la sénescence induite par oncogène (OIS) ou l'apoptose via P53, mais l'oncogène lui-même promeut la survie cellulaire."
    },

    // Q12
    {
        "id": "UE2-AH-12",
        "text": "Quelle(s) proposition(s) est (sont) vraie(s) concernant les gènes suppresseurs de tumeurs ?",
        "options": {
            "A": "Une mutation bi-allélique d'un gène suppresseur de tumeur entraîne une perte de fonction",
            "B": "Les gènes suppresseurs de tumeur inhibent la prolifération cellulaire",
            "C": "Une mutation dans ces gènes est récessive, nécessitant des mutations dans les deux allèles pour provoquer leur inactivation",
            "D": "Les gènes suppresseurs de tumeur induisent l'apoptose uniquement en réponse à l'activation d'oncogènes",
            "E": "Les gènes suppresseurs de tumeur favorisent la prolifération illimitée des cellules"
        },
        "correctAnswers": ["A", "B", "C"],
        "explanation": "A ✅ VRAI : La perte bi-allélique (« two-hit hypothesis » de Knudson) — les deux copies du gène doivent être inactivées pour perdre la fonction suppresseure (ex: RB1, TP53, APC, BRCA1/2).\nB ✅ VRAI : À l'état fonctionnel, les gènes suppresseurs de tumeurs sont des régulateurs négatifs de la prolifération — ils freinent le cycle cellulaire, activent l'apoptose ou la sénescence.\nC ✅ VRAI : Ces mutations sont récessives au niveau cellulaire : un seul allèle fonctionnel suffit à maintenir la suppression tumorale (principe du « two-hit »).\nD ❌ FAUX : Les gènes suppresseurs de tumeurs (notamment TP53) peuvent induire l'apoptose ou la sénescence en réponse à de nombreux stress : dommages à l'ADN, stress oxydatif, raccourcissement des télomères — pas uniquement suite à l'activation d'oncogènes.\nE ❌ FAUX : C'est exactement l'inverse — ils empêchent la prolifération illimitée. C'est leur INACTIVATION (par mutation ou délétion) qui lève ce frein et contribue à la cancérogenèse."
    },

    // Q13
    {
        "id": "UE2-AH-13",
        "text": "Concernant l'immunosurveillance des tumeurs, quelle(s) proposition(s) est (sont) vraie(s) ?",
        "options": {
            "A": "Les cellules tumorales sont immunogènes et sont surveillées par le système immunitaire",
            "B": "L'immuno-sélection désigne la sélection de sous-clones tumoraux échappant à la réponse immunitaire",
            "C": "L'immuno-subversion est un mécanisme par lequel la tumeur active la réponse immune contre elle-même",
            "D": "L'immunosurveillance n'est pas impliquée dans l'évolution tumorale",
            "E": "Les cellules tumorales n'interagissent pas avec les lymphocytes"
        },
        "correctAnswers": ["A", "B"],
        "explanation": "A ✅ VRAI : Les cellules tumorales expriment des néo-antigènes (TAA, TSA) qui les rendent immunogènes et permettent leur reconnaissance par les LT cytotoxiques (CD8+), les NK et d'autres cellules immunitaires.\nB ✅ VRAI : L'immuno-sélection (ou immuno-édition) est le processus darwinien par lequel les sous-clones tumoraux ayant perdu leur immunogénicité ou acquis des mécanismes d'échappement survivent et sont sélectionnés, conduisant à la progression tumorale.\nC ❌ FAUX : L'immuno-subversion (ou immuno-évasion) est un mécanisme par lequel la tumeur inhibe ou détourne la réponse immunitaire (ex: expression de PD-L1, sécrétion d'IL-10/TGF-β, recrutement de Treg) — elle ne l'active pas contre elle-même.\nD ❌ FAUX : L'immunosurveillance joue un rôle capital dans l'évolution tumorale — les patients immunodéprimés ont un risque accru de cancers (ex: EBV, HPV-associés).\nE ❌ FAUX : Les cellules tumorales interagissent activement avec les lymphocytes : elles peuvent être détruites par les LT CD8+ cytotoxiques et les NK, mais elles peuvent aussi inhiber leur activité (PD-1/PD-L1, CTLA-4)."
    },

    // Q14
    {
        "id": "UE2-AH-14",
        "text": "Quelle(s) proposition(s) est (sont) vraie(s) concernant le micro-environnement tumoral ?",
        "options": {
            "A": "Le micro-environnement tumoral comprend uniquement les cellules tumorales",
            "B": "Il est composé de fibroblastes associés au cancer (CAF), de cellules immunitaires et de la matrice extracellulaire",
            "C": "Le micro-environnement tumoral ne joue aucun rôle dans la progression tumorale",
            "D": "Les facteurs solubles, comme les cytokines, modulent les interactions entre les cellules tumorales et leur environnement",
            "E": "Le micro-environnement tumoral peut influencer la réponse du système immunitaire à la tumeur"
        },
        "correctAnswers": ["B", "D", "E"],
        "explanation": "B ✅ VRAI : Le micro-environnement tumoral (TME) est composé de : cellules tumorales, fibroblastes associés au cancer (CAF), cellules immunitaires (LT, macrophages M2, NK, Treg), cellules endothéliales (néovaisseaux) et matrice extracellulaire (MEC).\nD ✅ VRAI : Les facteurs solubles (cytokines pro-tumorales : IL-6, IL-10, TGF-β, VEGF, facteurs de croissance) orchestrent les communications intercellulaires au sein du TME et modulent la progression tumorale.\nE ✅ VRAI : Le TME influence profondément la réponse immunitaire — il peut créer un environnement immunosuppresseur (recrutement de Treg, macrophages M2, expression de PD-L1) favorisant l'échappement tumoral.\nA ❌ FAUX : Par définition, le TME comprend TOUT ce qui entoure les cellules tumorales (cellules stromales, immunitaires, vasculaires, MEC) — pas uniquement les cellules tumorales elles-mêmes.\nC ❌ FAUX : Le TME joue un rôle fondamental et actif dans la progression tumorale (apport en oxygène/nutriments via néo-angiogenèse, remodelage de la MEC, immunosuppression, promotion des métastases)."
    },

    // Q15
    {
        "id": "UE2-AH-15",
        "text": "Quelles sont les caractéristiques biologiques des cellules tumorales ?",
        "options": {
            "A": "Insensibilité aux signaux anti-prolifératifs",
            "B": "Prolifération illimitée",
            "C": "Sensibilité accrue à l'apoptose",
            "D": "Induction de l'angiogenèse",
            "E": "Invasion tissulaire et diffusion métastatique"
        },
        "correctAnswers": ["A", "B", "D", "E"],
        "explanation": "A ✅ VRAI : Les cellules tumorales acquièrent une insensibilité aux signaux anti-prolifératifs (ex: résistance au TGF-β, perte de Rb, inactivation de P53) — l'un des « Hallmarks of Cancer » de Hanahan & Weinberg.\nB ✅ VRAI : Les cellules tumorales acquièrent un potentiel réplicatif illimité (immortalité) grâce à l'activation de la télomérase (TERT), évitant la sénescence et l'apoptose réplicative.\nD ✅ VRAI : L'induction de l'angiogenèse tumorale (via VEGF, FGF) est indispensable pour assurer l'apport en oxygène et nutriments à la tumeur en croissance — c'est un Hallmark essentiel.\nE ✅ VRAI : La capacité d'invasion tissulaire (franchissement de la membrane basale par les métalloprotéases) et de diffusion métastatique (dissémination hématogène, lymphatique) est une caractéristique définitoire de la malignité.\nC ❌ FAUX : Les cellules tumorales acquièrent au contraire une RÉSISTANCE à l'apoptose (anti-apoptose) — c'est un autre Hallmark majeur du cancer. Elles surexpriment des protéines anti-apoptotiques (BCL-2, BCL-XL) et perdent P53 ou d'autres médiateurs pro-apoptotiques."
    },

    // ============================================================
    // OLICHON AURÉLIEN — Introduction au Suivi Thérapeutique
    // Pharmacologique (STP) — UE2.S3 (5 QCMs : indices 15 à 19)
    // ============================================================

    // Q16
    {
        "id": "UE2-OL-01",
        "text": "Lors d'une administration répétée et régulière, l'équilibre de concentration plasmatique d'un médicament est atteint au bout d'un temps correspondant à :",
        "options": {
            "A": "1 T1/2 (demi-vie)",
            "B": "2 T1/2",
            "C": "5 T1/2",
            "D": "10 T1/2",
            "E": "Aucune des propositions ci-dessus n'est exacte."
        },
        "correctAnswers": ["C"],
        "explanation": "C ✅ VRAI : Comme indiqué dans les schémas pharmacocinétiques du cours, l'état d'équilibre (steady state, avec une Cmoy,eq) lors d'une administration en doses répétées avec cumul de dose est atteint au bout de 5 demi-vies (5 × T1/2). C'est le temps nécessaire pour que la quantité de médicament absorbée soit égale à la quantité éliminée entre deux prises.\nA ❌ FAUX : Au bout d'1 T1/2, seulement ~50% de l'état d'équilibre est atteint.\nB ❌ FAUX : Au bout de 2 T1/2, environ 75% de l'état d'équilibre est atteint.\nD ❌ FAUX : 10 T1/2 est bien au-delà du temps nécessaire — l'équilibre est déjà atteint dès 5 T1/2."
    },

    // Q17
    {
        "id": "UE2-OL-02",
        "text": "Concernant le suivi thérapeutique pharmacologique :",
        "options": {
            "A": "Une concentration minimale (Cmin) ou résiduelle permet d'évaluer l'efficacité d'un traitement.",
            "B": "Une concentration minimale (Cmin) ou résiduelle permet d'évaluer le risque de toxicité d'un traitement.",
            "C": "Une concentration maximale (Cmax) ou « pic » permet d'évaluer l'efficacité d'un traitement.",
            "D": "Une concentration maximale (Cmax) ou « pic » permet d'évaluer le risque de toxicité d'un traitement.",
            "E": "Aucune des propositions ci-dessus n'est vraie."
        },
        "correctAnswers": ["A", "B", "C", "D"],
        "explanation": "A ✅ VRAI : La Cmin (vallée) est souvent utilisée pour vérifier qu'on reste au-dessus du seuil d'efficacité. Exemple : pour les immunosuppresseurs (ciclosporine, tacrolimus) ou l'Imatinib, la Cmin garantit une exposition suffisante.\nB ✅ VRAI : Une Cmin trop élevée témoigne d'un défaut d'élimination (accumulation) et permet d'évaluer un risque de toxicité. Exemple : toxicité rénale pour les aminosides en cas d'accumulation.\nC ✅ VRAI : La Cmax (pic) permet d'évaluer l'efficacité de certains médicaments à action concentration-dépendante. Exemple : effet bactéricide des aminosides, dont l'efficacité dépend du rapport Cmax/CMI.\nD ✅ VRAI : La Cmax sert également à prévenir la toxicité si elle dépasse le plafond toxique défini par la fenêtre thérapeutique. Exemple : pour les aminosides, une Cmax trop élevée expose à une néphrotoxicité et une ototoxicité."
    },

    // Q18
    {
        "id": "UE2-OL-03",
        "text": "Concernant la zone thérapeutique :",
        "options": {
            "A": "C'est l'intervalle dans lequel doit se trouver le dosage du médicament afin d'obtenir l'effet thérapeutique recherché avec un minimum d'effets indésirables.",
            "B": "Elle est définie par la zone entre un seuil d'efficacité et un seuil de toxicité.",
            "C": "Elle correspond au rapport de la dose induisant les effets indésirables et la dose induisant les effets thérapeutiques.",
            "D": "Le concept de zone thérapeutique est basé sur l'existence d'une relation entre les concentrations plasmatiques d'un médicament et ses effets thérapeutiques ou toxiques.",
            "E": "Aucune des propositions ci-dessus n'est exacte."
        },
        "correctAnswers": ["A", "B", "D"],
        "explanation": "A ✅ VRAI : La zone thérapeutique (ou fenêtre thérapeutique) est bien définie comme l'intervalle de concentrations dans lequel le traitement est à la fois efficace et sûr pour le patient.\nB ✅ VRAI : Elle est délimitée inférieurement par le seuil d'efficacité (en dessous duquel le traitement est inefficace) et supérieurement par le seuil de toxicité (au-dessus duquel apparaissent les effets indésirables).\nD ✅ VRAI : Le principe même du STP repose sur la corrélation entre concentration sanguine et effet pharmacologique (thérapeutique ou toxique). Cette relation concentration-effet justifie le dosage plasmatique plutôt que le simple suivi de la dose administrée.\nC ❌ FAUX : Ce rapport (dose toxique / dose efficace) définit l'index thérapeutique (IT = DL50/DE50), qui est un indicateur de la marge de sécurité d'un médicament — et non la « zone thérapeutique » qui correspond à un intervalle de concentrations plasmatiques cibles."
    },

    // Q19
    {
        "id": "UE2-OL-04",
        "text": "A propos du suivi thérapeutique pharmacologique d'un médicament :",
        "options": {
            "A": "Il consiste en la surveillance des effets d'un médicament sur l'échelle d'une population.",
            "B": "Il sert à adapter la posologie d'un médicament à l'individu.",
            "C": "Il est nécessaire pour les médicaments à marge thérapeutique étroite.",
            "D": "Il est utile pour les médicaments à très forte variabilité d'effet interindividuelle d'ordre pharmacocinétique.",
            "E": "Aucune des propositions ci-dessus n'est exacte."
        },
        "correctAnswers": ["B", "C", "D"],
        "explanation": "B ✅ VRAI : C'est le but principal du STP : personnaliser la posologie en fonction des caractéristiques propres au patient (âge, poids, fonction rénale/hépatique, génotype métaboliseur, interactions médicamenteuses).\nC ✅ VRAI : C'est l'un des critères majeurs justifiant un STP. Pour un médicament à marge large, une légère erreur de dose n'a pas de conséquence clinique — le STP y est inutile. Pour un médicament à index thérapeutique étroit (aminosides, ciclosporine, digoxine, lithium…), la moindre variation de concentration peut être catastrophique.\nD ✅ VRAI : Le STP est particulièrement pertinent lorsqu'une même dose ne produit pas les mêmes concentrations d'un individu à l'autre (forte variabilité pharmacocinétique interindividuelle liée à des polymorphismes du CYP450, de la P-gp, etc.).\nA ❌ FAUX : Le STP est une démarche de médecine personnalisée (individuelle), et non une surveillance à l'échelle d'une population. Il s'intéresse à un patient précis pour adapter son traitement."
    },

    // Q20
    {
        "id": "UE2-OL-05",
        "text": "Concernant le suivi pharmacologique thérapeutique, il concerne :",
        "options": {
            "A": "Certains antibiotiques.",
            "B": "Certains antalgiques antipyrétiques.",
            "C": "Certains anticancéreux.",
            "D": "Certains médicaments immunodépresseurs.",
            "E": "Aucune des propositions ci-dessus n'est exacte."
        },
        "correctAnswers": ["A", "C", "D"],
        "explanation": "A ✅ VRAI : Certains antibiotiques à index thérapeutique étroit font l'objet d'un STP systématique. Exemples : les aminosides (Amikacine, Gentamicine) et les glycopeptides (Vancomycine) — dosage de la Cmin et de la Cmax pour éviter néphrotoxicité et ototoxicité.\nC ✅ VRAI : Certains anticancéreux font l'objet d'un STP. Exemples : le Méthotrexate (MTX) à forte dose, le 5-fluorouracile (5-FU), les inhibiteurs de tyrosine kinase comme l'Imatinib (Glivec®) ou le Sunitinib.\nD ✅ VRAI : Les médicaments immunodépresseurs (greffes d'organes) sont une indication majeure du STP. Exemples : la Ciclosporine et le Tacrolimus — dosage strict de la Cmin pour éviter à la fois le rejet de greffe (sous-exposition) et la néphrotoxicité (sur-exposition).\nB ❌ FAUX : Les antalgiques antipyrétiques classiques (paracétamol, AINS, ibuprofène) ont un index thérapeutique large et un effet facilement mesurable cliniquement (baisse de la douleur ou de la fièvre). Ils ne nécessitent pas de STP de routine."
    },

    // ============================================================
    // OLICHON AURÉLIEN — Variabilité de l'Effet des Médicaments
    // UE2.S3 (3 QCMs : indices 20 à 22)
    // ============================================================

    // Q21
    {
        "id": "UE2-OL-06",
        "text": "Concernant la pharmacocinétique chez le nouveau-né :",
        "options": {
            "A": "Les T1/2 (demi-vie) d'élimination des médicaments sont raccourcies.",
            "B": "Le volume de distribution est en général augmenté par rapport à l'adulte.",
            "C": "Les CYP450 hépatiques sont exprimés de façon constante dès la naissance.",
            "D": "La fonction rénale est immature.",
            "E": "Aucune des propositions ci-dessus n'est exacte."
        },
        "correctAnswers": ["B", "D"],
        "explanation": "B ✅ VRAI : Le volume de distribution (Vd) est augmenté pour la majorité des substances chez le nouveau-né et le nourrisson. Cela s'explique notamment par une proportion d'eau corporelle totale plus élevée et une liaison aux protéines plasmatiques (albumine) réduite par rapport à l'adulte.\nD ✅ VRAI : L'excrétion rénale est très diminuée chez le nouveau-né (1 à 30 jours) en raison d'une immaturité de la fonction rénale à la naissance. La filtration glomérulaire, la sécrétion tubulaire et la réabsorption sont encore très incomplètes, allongeant la demi-vie des médicaments à élimination rénale.\nA ❌ FAUX : Les demi-vies d'élimination (T1/2) sont au contraire PROLONGÉES chez le nouveau-né, et non raccourcies. L'immaturité du métabolisme hépatique (CYP450) et de la fonction rénale ralentit l'élimination des médicaments.\nC ❌ FAUX : L'expression des cytochromes P450 n'est pas constante dès la naissance. Il existe une variabilité d'expression génique importante en périnatalité. Par exemple, le CYP3A4 est déficitaire chez le fœtus et le nouveau-né, puis un « switch » d'expression enzymatique se produit dans les premières semaines de vie, avec induction progressive des différentes isoformes."
    },

    // Q22
    {
        "id": "UE2-OL-07",
        "text": "Concernant la variabilité de l'effet des médicaments :",
        "options": {
            "A": "On retrouve des variabilités interindividuelles.",
            "B": "Une variabilité peut être observée dans le cas de la prise de warfarine (AVK).",
            "C": "Une variabilité n'est possible que si les cibles sont mutées, les transporteurs ou les enzymes de modification.",
            "D": "L'alimentation peut moduler l'effet des médicaments.",
            "E": "Aucune des propositions ci-dessus n'est exacte."
        },
        "correctAnswers": ["A", "B", "D"],
        "explanation": "A ✅ VRAI : Un médicament administré à une dose identique ne présente pas la même efficacité ni le même risque d'effets indésirables pour tous les patients. Cette variabilité interindividuelle est l'un des fondements de la pharmacologie personnalisée.\nB ✅ VRAI : La warfarine (anticoagulant oral, AVK) est un exemple paradigmatique de variabilité interindividuelle. Elle nécessite une adaptation de dose en raison du polymorphisme génétique touchant à la fois son métabolisme (CYP2C9 : métabolisme plus ou moins rapide) et sa cible pharmacologique (VKORC1 : sensibilité variable à l'anticoagulant).\nD ✅ VRAI : L'alimentation peut moduler les paramètres pharmacocinétiques (ADME). Exemples : repas riches en graisses (augmentation de l'absorption des médicaments lipophiles), laitages (chélation de certains antibiotiques), jus de pamplemousse (inhibition du CYP3A4 intestinal entraînant une augmentation des concentrations plasmatiques de nombreux médicaments).\nC ❌ FAUX : La variabilité de l'effet d'un médicament ne dépend pas uniquement de la mutation des cibles, transporteurs ou enzymes. Elle est multifactorielle : facteurs physiologiques (âge, poids, sexe, grossesse), facteurs pathologiques (insuffisances rénale, hépatique), interactions médicamenteuses et facteurs environnementaux (alimentation, tabac, alcool) contribuent également à la variabilité."
    },

    // Q23
    {
        "id": "UE2-OL-08",
        "text": "Concernant les variabilités pharmacocinétiques des effets des médicaments :",
        "options": {
            "A": "Elles dépendent uniquement des phases d'absorption, de distribution et d'élimination des médicaments.",
            "B": "Elles peuvent être dues à des interactions médicamenteuses.",
            "C": "Elles peuvent être dues à des polymorphismes génétiques.",
            "D": "Elles dépendent de situations pathologiques comme l'insuffisance rénale.",
            "E": "Aucune des propositions ci-dessus n'est exacte."
        },
        "correctAnswers": ["B", "C", "D"],
        "explanation": "B ✅ VRAI : Les interactions médicamenteuses modifient la pharmacocinétique par deux mécanismes principaux : compétition pour les protéines de transport plasmatique (phase de distribution) et phénomènes d'induction ou d'inhibition enzymatique des cytochromes P450 (phase de métabolisme/élimination). Exemple : l'inhibition du CYP3A4 par le kétoconazole augmente les concentrations de nombreux substrats.\nC ✅ VRAI : Les polymorphismes génétiques (SNP — Single Nucleotide Polymorphisms) touchant les enzymes impliquées dans les phases ADME sont une source majeure de variabilité. Exemples : CYP2D6 (métaboliseurs lents vs ultrarapides pour la codéine, le tamoxifène), CYP2C9 (warfarine), UGT1A1 (irinotécan), NAT2 (isoniazide).\nD ✅ VRAI : Des conditions pathologiques, particulièrement l'insuffisance rénale (fonctionnelle, organique ou obstructive), diminuent les capacités d'excrétion du médicament et allongent sa demi-vie, entraînant un risque d'accumulation et de toxicité. Une adaptation posologique est impérative (réduction des doses ou allongement des intervalles).\nA ❌ FAUX : La pharmacocinétique comprend quatre phases fondamentales résumées par l'acronyme ADME : Absorption, Distribution, Métabolisme et Excrétion. L'item omet la phase cruciale du Métabolisme (biotransformation hépatique, CYP450) et restreint faussement la définition avec le terme « uniquement ». De plus, les cibles pharmacodynamiques peuvent également contribuer à la variabilité."
    },

    // ============================================================
    // Dr. C. REVEL — Les explorations par émissions (Médecine nucléaire)
    // Annales 2021/2022 (2 QCMs : indices 23 à 24)
    // ============================================================

    // Q24
    {
        "id": "UE2-CR-01",
        "text": "Sélectionner la ou les proposition(s) correcte(s) :",
        "options": {
            "A": "L'imagerie par émission fait appel à l'utilisation de sources radioactives non scellées.",
            "B": "Le radionucléide le plus utilisé en imagerie monophotonique est le Tc99m.",
            "C": "Le cristal d'une caméra à émission de positons permet de détecter le libre parcours de l'émission Bêta+.",
            "D": "Le radionucléide Fluor18 nécessite d'être produit par un cyclotron proche du centre d'imagerie.",
            "E": "La taille des radio-isotopes utilisés en médecine nucléaire est sensiblement la même mais les vecteurs utilisés peuvent varier de manière très importante en taille."
        },
        "correctAnswers": ["A", "B", "D"],
        "explanation": "A ✅ VRAI : C'est la définition même de la médecine nucléaire, qui utilise des radionucléides présentés sous forme de sources non scellées (administrées directement dans le patient par injection, ingestion ou inhalation), contrairement à la radiothérapie externe qui utilise des sources scellées.\nB ✅ VRAI : Le Technétium 99m (⁹⁹ᵐTc) est le marqueur le plus utilisé en médecine nucléaire pour la scintigraphie traditionnelle (imagerie monophotonique / SPECT). Il est produit à partir de générateurs de Molybdène 99 directement dans les services de médecine nucléaire.\nD ✅ VRAI : Le Fluor 18 (utilisé pour le FDG en TEP) est un radio-isotope à courte demi-vie (≈ 110 min) qui doit être produit dans un cyclotron. Sa demi-vie impose la proximité de ce cyclotron avec le centre d'imagerie (cyclotron régional).\nC ❌ FAUX : Le cristal d'une caméra TEP ne détecte pas le libre parcours de la particule Bêta+ (le positon). Il détecte les deux photons gamma d'annihilation (511 keV chacun) émis à 180° l'un de l'autre après que le positon a rencontré un électron. Le libre parcours du Bêta+ avant l'annihilation est ce qui limite la résolution spatiale de l'image (quelques mm).\nE ❌ FAUX : C'est l'inverse. Les radio-isotopes (marqueurs) varient énormément en taille : en SPECT, le Technétium est une grosse molécule pouvant modifier le comportement de vecteurs petits ; en TEP, le Fluor 18 ou le Carbone 11 sont de très petites molécules (taille d'un groupe hydroxyle pour le ⁱ⁸F). Ce sont les vecteurs (peptides, anticorps, petites molécules) qui peuvent varier très fortement en taille."
    },

    // Q25
    {
        "id": "UE2-CR-02",
        "text": "Sélectionner la ou les proposition(s) correcte(s) :",
        "options": {
            "A": "L'irradiation naturelle se situe entre 3 et 5 mSv par an en France.",
            "B": "La scintigraphie osseuse délivre au patient une dose comparable à l'irradiation naturelle annuelle.",
            "C": "Pour l'imagerie hybride, il faut additionner la dose délivrée par le scanner à celle délivrée par le radiotraceur pour estimer la dose d'irradiation reçue par le patient.",
            "D": "Lors d'un examen TEP au FDG couplé à un scanner diagnostique, la dose délivrée par le scanner est supérieure à celle délivrée par le radiotraceur.",
            "E": "La technique du ganglion sentinelle permet de détecter en préopératoire le ou les ganglions métastatiques."
        },
        "correctAnswers": ["A", "B", "C", "D", "E"],
        "explanation": "A ✅ VRAI : L'irradiation naturelle annuelle en France est généralement admise autour de 3 mSv (et peut aller jusqu'à 5 mSv selon les régions, notamment en altitude ou en zone granitique). Le schéma de dosimétrie du cours place bien l'irradiation naturelle annuelle dans la fourchette 1–5 mSv.\nB ✅ VRAI : La scintigraphie osseuse au ⁹⁹ᵐTc se situe autour de 3–5 mSv, ce qui correspond au niveau de l'irradiation naturelle annuelle. Le rapport bénéfice/risque de cet examen est très favorable ; il est considéré comme faiblement irradiant.\nC ✅ VRAI : En imagerie hybride (SPECT/CT ou TEP/CT), le patient reçoit des rayonnements de deux sources distinctes : le radiotraceur injecté (médecine nucléaire) et les rayons X du scanner (TDM). Il faut impérativement cumuler les deux doses pour estimer la dosimétrie totale reçue par le patient.\nD ✅ VRAI : Lors d'un TEP/CT, un scanner de centrage basse dose délivre environ 7 mSv (comparable à la TEP-FDG). Mais si le scanner est réalisé à visée diagnostique (haute résolution, injection de produit de contraste iodé), sa dose de rayons X dépasse significativement celle du radiotraceur (pouvant atteindre 10–15 mSv ou plus), rendant la composante scanner dominante dans la dosimétrie totale.\nE ✅ VRAI : La technique du ganglion sentinelle consiste à injecter un traceur (colloïde marqué au ⁹⁹ᵐTc) qui migre par voie lymphatique vers les premiers relais ganglionnaires drainant la tumeur. L'imagerie préopératoire (lymphoscintigraphie) et la sonde per-opératoire permettent de localiser et d'exérèser ces ganglions sentinelles, qui sont ensuite analysés en anatomopathologie pour détecter d'éventuelles micrométastases."
    }

    ,
    // Q26 — IA Entraînement
    {
        "id": "UE2-CR-03",
        "text": "Sur quel principe fondamental repose la médecine nucléaire in vivo ?",
        "options": {
            "A": "L'utilisation de rayonnements émis par un accélérateur externe.",
            "B": "L'utilisation de rayonnements ionisants émis par des sources non scellées.",
            "C": "L'étude de prélèvements biologiques marqués en laboratoire.",
            "D": "La détection de la résonance magnétique des protons."
        },
        "correctAnswers": ["B"],
        "explanation": "B ✅ VRAI : La médecine nucléaire utilise des rayonnements ionisants émis par des radionucléides présentés sous forme de sources non scellées (introduites dans l'organisme), contrairement à la radiothérapie externe qui utilise des accélérateurs ou des sources scellées.\\nA ❌ FAUX : Les accélérateurs externes relèvent de la radiothérapie externe, pas de la médecine nucléaire.\\nC ❌ FAUX : L'étude de prélèvements biologiques en laboratoire correspond à la médecine nucléaire in vitro (ex : dosages RIA), pas in vivo.\\nD ❌ FAUX : La détection de la résonance magnétique des protons est le principe de l'IRM, qui n'utilise pas de rayonnements ionisants."
    },

    // Q27
    {
        "id": "UE2-CR-04",
        "text": "Quelle mesure de radioprotection est essentielle pour réduire l'exposition d'un travailleur face à une source radioactive ?",
        "options": {
            "A": "Augmenter le temps passé auprès de la source.",
            "B": "Retirer les écrans de plomb pour mieux visualiser la source.",
            "C": "Augmenter la distance physique par rapport à la source radioactive.",
            "D": "Favoriser la contamination radioactive."
        },
        "correctAnswers": ["C"],
        "explanation": "C ✅ VRAI : La dose reçue dépend du carré de la distance (loi en 1/r²) : plus on s'éloigne de la source, plus la dose reçue diminue drastiquement. Augmenter la distance est l'une des mesures fondamentales de radioprotection, avec la réduction du temps d'exposition et l'interposition d'écrans (plomb).\\nA ❌ FAUX : Augmenter le temps d'exposition augmente la dose reçue — c'est l'inverse du but recherché.\\nB ❌ FAUX : Les écrans de plomb sont indispensables pour atténuer le rayonnement ; les retirer augmenterait dangereusement l'exposition.\\nD ❌ FAUX : La contamination radioactive (incorporation de radioactivité dans l'organisme) est précisément ce que la radioprotection cherche à éviter."
    },

    // Q28
    {
        "id": "UE2-CR-05",
        "text": "De quoi est classiquement composé un médicament radiopharmaceutique (MRP) ?",
        "options": {
            "A": "Uniquement d'un atome lourd (comme l'iode).",
            "B": "D'un produit de contraste couplé à un antibiotique.",
            "C": "D'une structure organique vecteur associée à un radionucléide marqueur.",
            "D": "D'un macro-agrégat d'albumine seul."
        },
        "correctAnswers": ["C"],
        "explanation": "C ✅ VRAI : Le médicament radiopharmaceutique est constitué de l'association d'un radionucléide (le marqueur, qui émet le rayonnement détectable ou thérapeutique) et d'une structure organique vecteur présentant une affinité spécifique pour la cible biologique d'intérêt (tumeur, organe, etc.).\\nA ❌ FAUX : Un atome seul sans vecteur ne peut pas avoir une biodistribution ciblée. L'iode seul se fixe sur la thyroïde, mais la plupart des MRP nécessitent un vecteur pour atteindre leur cible.\\nB ❌ FAUX : Un produit de contraste + antibiotique est une association pharmacologique classique, sans rapport avec un radiopharmaceutique.\\nD ❌ FAUX : Le macro-agrégat d'albumine peut être un vecteur (utilisé pour la scintigraphie pulmonaire), mais il doit être associé à un radionucléide (99mTc) pour constituer un MRP complet."
    },

    // Q29
    {
        "id": "UE2-CR-06",
        "text": "Quel type d'émission radioactive est privilégié pour réaliser une imagerie à des fins diagnostiques ?",
        "options": {
            "A": "L'émission de particules alpha.",
            "B": "L'émission de particules bêta moins.",
            "C": "L'émission de photons gamma.",
            "D": "L'émission d'électrons Auger."
        },
        "correctAnswers": ["C"],
        "explanation": "C ✅ VRAI : Les photons gamma ont un fort pouvoir de pénétration dans les tissus et peuvent sortir du corps du patient pour atteindre les détecteurs de la caméra. C'est cette propriété qui les rend indispensables au diagnostic par imagerie (scintigraphie, SPECT, TEP via les photons d'annihilation de 511 keV).\\nA ❌ FAUX : Les particules alpha ont un parcours extrêmement court (quelques dizaines de µm) et une très haute énergie déposée localement — elles sont utilisées en thérapie (alphathérapie), pas en diagnostic.\\nB ❌ FAUX : Les particules bêta- ont un parcours de quelques mm dans les tissus ; elles sont utilisées en radiothérapie métabolique (ex : iode 131 pour la thyroïde), pas pour l'imagerie.\\nD ❌ FAUX : Les électrons Auger ont un parcours nanométrique et sont étudiés en thérapie ciblée, mais ne permettent pas l'imagerie."
    },

    // Q30
    {
        "id": "UE2-CR-07",
        "text": "Quelle est la particularité physique de l'Iode 131 par rapport à l'Yttrium 90 ?",
        "options": {
            "A": "Il n'émet aucune radiation.",
            "B": "Il émet des particules alpha pures.",
            "C": "Il émet des particules bêta moins et des photons gamma.",
            "D": "Il n'a pas besoin de cible organique."
        },
        "correctAnswers": ["C"],
        "explanation": "C ✅ VRAI : L'Iode 131 est un émetteur mixte (bêta- + gamma). Les bêta- permettent l'effet thérapeutique (destruction des cellules thyroïdiennes ou tumorales), tandis que les photons gamma permettent l'imagerie et la dosimétrie du traitement. L'Yttrium 90, en revanche, est un émetteur bêta- pur, sans émission gamma significative, ce qui rend l'imagerie directe difficile.\\nA ❌ FAUX : L'iode 131 est l'un des radionucléides les plus utilisés en médecine nucléaire thérapeutique et émet bien des radiations.\\nB ❌ FAUX : L'iode 131 émet des bêta- (pas des alpha) et des photons gamma.\\nD ❌ FAUX : L'iode 131 profite de la fixation naturelle de l'iode par la thyroïde (son vecteur naturel est la thyroïde), mais il a bien une cible organique."
    },

    // Q31
    {
        "id": "UE2-CR-08",
        "text": "Quelle est une caractéristique majeure des radionucléides émetteurs de particules alpha comme l'Actinium 225 ?",
        "options": {
            "A": "Ils traversent des dizaines de centimètres de tissu.",
            "B": "Ils n'ont aucun effet sur l'ADN.",
            "C": "Ils provoquent de complexes dommages cellulaires sur une très courte distance (1 à 3 cellules).",
            "D": "Ils sont uniquement utilisés pour le diagnostic."
        },
        "correctAnswers": ["C"],
        "explanation": "C ✅ VRAI : L'alphathérapie se caractérise par un transfert d'énergie linéique (TEL) très élevé (50–230 keV/µm) sur une portée très courte dans les tissus (50–100 µm, soit 1 à 3 cellules). Cette concentration d'énergie provoque des cassures double brin de l'ADN très complexes et difficiles à réparer, ce qui confère une haute efficacité biologique.\\nA ❌ FAUX : C'est l'inverse — les particules alpha ont un très faible parcours (quelques dizaines de µm dans les tissus), ce qui en fait des outils de thérapie très localisée.\\nB ❌ FAUX : Les particules alpha induisent précisément des dommages ADN majeurs (cassures double brin), de complexité supérieure à ceux des rayonnements bêta ou gamma.\\nD ❌ FAUX : Les émetteurs alpha sont utilisés en thérapie (alphathérapie ciblée), pas en diagnostic, en raison de leur fort pouvoir ionisant local."
    },

    // Q32
    {
        "id": "UE2-CR-09",
        "text": "Quel phénomène explique l'effet thérapeutique étendu des particules bêta- sur des masses tumorales hétérogènes ?",
        "options": {
            "A": "L'effet Cherenkov.",
            "B": "L'effet de tir croisé (cross-fire).",
            "C": "L'annihilation positon-électron.",
            "D": "La scintillation."
        },
        "correctAnswers": ["B"],
        "explanation": "B ✅ VRAI : Les particules bêta- ont un parcours de 2 à 12 mm dans les tissus. Cela permet de déposer de l'énergie dans des cellules voisines qui ne fixent pas forcément le traceur (cellules nécrotiques, hypoxiques, cellules tumorales sans récepteur), c'est l'effet de tir croisé (cross-fire). Cet avantage permet de traiter des tumeurs hétérogènes dont toutes les cellules ne capteraient pas le traceur.\\nA ❌ FAUX : L'effet Cherenkov est l'émission de lumière par une particule chargée se déplaçant dans un milieu plus vite que la lumière dans ce milieu — ce n'est pas le mécanisme de l'efficacité thérapeutique des bêta-.\\nC ❌ FAUX : L'annihilation positon-électron est le principe physique de la TEP (imagerie), pas des bêta- thérapeutiques.\\nD ❌ FAUX : La scintillation est la conversion de photons gamma en lumière visible par un cristal — c'est le principe de détection des caméras, pas un effet thérapeutique."
    },

    // Q33
    {
        "id": "UE2-CR-10",
        "text": "Quel rôle joue le collimateur dans une gamma-caméra d'Anger conventionnelle ?",
        "options": {
            "A": "Il amplifie le signal lumineux.",
            "B": "Il convertit les photons en électrons.",
            "C": "Il ne laisse passer que les photons ayant une trajectoire strictement parallèle.",
            "D": "Il arrête la radioactivité avant qu'elle n'atteigne le patient."
        },
        "correctAnswers": ["C"],
        "explanation": "C ✅ VRAI : Le collimateur est une structure quadrillée en plomb (ou tungstène) positionnée devant le cristal scintillateur. Il bloque tous les photons obliques et ne laisse passer que ceux dont la trajectoire est parallèle à ses canaux. Sans collimateur, toute la scène serait floue car des photons de toutes directions atteindraient le cristal. Le collimateur est donc indispensable à la localisation spatiale du signal.\\nA ❌ FAUX : L'amplification du signal lumineux est le rôle des photomultiplicateurs (PM), placés derrière le cristal.\\nB ❌ FAUX : La conversion des photons (gamma → lumière) est le rôle du cristal scintillateur (NaI(Tl)), puis la conversion (lumière → signal électrique) est le rôle des PM.\\nD ❌ FAUX : Le collimateur est positionné entre le patient et le cristal détecteur, du côté patient, mais son rôle est de sélectionner les photons sortant du patient, pas de le protéger."
    },

    // Q34
    {
        "id": "UE2-CR-11",
        "text": "Quel est le principe de fonctionnement d'une caméra à technologie numérique CZT ?",
        "options": {
            "A": "Elle utilise un gros cristal d'iodure de sodium (NaI) et des photomultiplicateurs.",
            "B": "Elle convertit directement les photons gamma en électrons grâce à un semi-conducteur.",
            "C": "Elle détecte la chaleur émise par le patient.",
            "D": "Elle utilise un champ magnétique pour dévier les photons."
        },
        "correctAnswers": ["B"],
        "explanation": "B ✅ VRAI : La technologie CZT (Cadmium Zinc Telluride) est un semi-conducteur qui convertit directement les photons gamma en signal électrique (paires électron-trou), sans passer par l'étape intermédiaire de scintillation et de photomultiplication. Cela améliore la résolution en énergie et la résolution spatiale, et permet de se passer de photomultiplicateurs volumineux (compatibilité IRM).\\nA ❌ FAUX : C'est le principe de la gamma-caméra d'Anger classique (NaI + photomultiplicateurs), qui est différente de la technologie CZT.\\nC ❌ FAUX : La détection thermique n'a aucun rapport avec l'imagerie nucléaire.\\nD ❌ FAUX : Les champs magnétiques sont utilisés en IRM pour orienter les protons, pas pour dévier les photons gamma."
    },

    // Q35
    {
        "id": "UE2-CR-12",
        "text": "Quel événement physique fondamental est à la base de la tomographie par émission de positons (TEP) ?",
        "options": {
            "A": "L'émission directe de rayons X par le noyau.",
            "B": "L'annihilation d'un positon (bêta+) et d'un électron générant deux photons gamma.",
            "C": "La fission d'un atome lourd dans l'organisme.",
            "D": "L'émission d'une particule alpha."
        },
        "correctAnswers": ["B"],
        "explanation": "B ✅ VRAI : Lors de la désintégration bêta+, le noyau émet un positon (antiparticule de l'électron). Ce positon parcourt quelques mm dans les tissus, puis rencontre un électron. Les deux s'annihilent et produisent deux photons gamma de 511 keV chacun, émis exactement à 180° l'un de l'autre. La caméra TEP détecte ces deux photons en coïncidence, permettant de localiser précisément le point d'annihilation.\\nA ❌ FAUX : L'émission de rayons X par le noyau (conversion interne ou fluorescence) est un processus différent, non utilisé directement en TEP.\\nC ❌ FAUX : La fission nucléaire n'a aucun rôle en médecine nucléaire diagnostique.\\nD ❌ FAUX : L'émission alpha est utilisée en alphathérapie, pas en TEP."
    },

    // Q36
    {
        "id": "UE2-CR-13",
        "text": "Quelle est l'énergie caractéristique des photons gamma détectés lors d'une imagerie par TEP ?",
        "options": {
            "A": "140 keV",
            "B": "300 keV",
            "C": "511 keV",
            "D": "1 MeV"
        },
        "correctAnswers": ["C"],
        "explanation": "C ✅ VRAI : Lors de l'annihilation positon-électron, l'énergie de masse des deux particules (E = mc²) est convertie en deux photons gamma d'énergie fixe de 511 keV chacun (correspondant à la masse au repos de l'électron/positon : 0,511 MeV). Cette énergie précise et identique pour tous les radio-isotopes émetteurs bêta+ est la signature physique de la TEP.\\nA ❌ FAUX : 140 keV est l'énergie du photon gamma émis par le Technétium 99m — c'est l'énergie de référence de la scintigraphie conventionnelle (SPECT/TEMP).\\nB ❌ FAUX : 300 keV n'est l'énergie caractéristique d'aucun radionucléide majeur en médecine nucléaire.\\nD ❌ FAUX : 1 MeV est supérieur à l'énergie des photons d'annihilation et ne correspond pas à la TEP standard."
    },

    // Q37
    {
        "id": "UE2-CR-14",
        "text": "Pourquoi la TEP offre-t-elle des possibilités de marquage biologique beaucoup plus vastes que la SPECT ?",
        "options": {
            "A": "Parce que les caméras TEP sont moins chères.",
            "B": "Parce que les isotopes utilisés (comme le Fluor et le Carbone) sont de très petites molécules.",
            "C": "Parce que les patients absorbent mieux les grosses molécules.",
            "D": "Parce que la TEP n'utilise pas de radiopharmaceutiques."
        },
        "correctAnswers": ["B"],
        "explanation": "B ✅ VRAI : Les radio-isotopes TEP comme le ¹¹C (Carbone 11) ou le ¹⁸F (Fluor 18) sont des éléments biologiques naturels (ou quasi-naturels) de très petite taille. Ils peuvent remplacer un atome dans n'importe quelle molécule biologique (sucres, acides aminés, neurotransmetteurs) sans modifier ses propriétés. En SPECT, le ⁹⁹ᵐTc est une grosse molécule métallique qui peut déformer et altérer le comportement de petites molécules vecteurs.\\nA ❌ FAUX : Les caméras TEP sont en réalité beaucoup plus chères que les gamma-caméras conventionnelles.\\nC ❌ FAUX : La taille des molécules influence leur distribution et leurs propriétés biologiques — une petite molécule marquée est préférable pour ne pas perturber le processus étudié.\\nD ❌ FAUX : La TEP utilise bien des radiopharmaceutiques (ex : ¹⁸F-FDG, ¹⁸F-PSMA, ¹¹C-méthionine)."
    },

    // Q38
    {
        "id": "UE2-CR-15",
        "text": "Quelle est l'utilité principale du couplage d'un scanner (TDM) à une gamma-caméra (TEMP/TDM) ?",
        "options": {
            "A": "Rendre l'examen moins cher.",
            "B": "Éviter d'injecter un radiopharmaceutique.",
            "C": "Effectuer une correction d'atténuation et un repérage anatomique.",
            "D": "Traiter la tumeur directement avec les rayons du scanner."
        },
        "correctAnswers": ["C"],
        "explanation": "C ✅ VRAI : Le couplage TDM apporte deux avantages majeurs : (1) la correction d'atténuation — les photons gamma sont atténués par les tissus traversés (os, poumons, tissu mou), et le scanner fournit une carte de densité permettant de corriger cette atténuation pour obtenir une image quantitative exacte ; (2) le repérage anatomique — la scintigraphie seule est fonctionnelle mais peu précise anatomiquement. Le scanner fournit le fond anatomique permettant de localiser précisément les foyers de fixation.\\nA ❌ FAUX : L'ajout d'un scanner augmente le coût de l'examen.\\nB ❌ FAUX : L'injection d'un radiopharmaceutique reste indispensable pour obtenir l'image fonctionnelle scintigraphique.\\nD ❌ FAUX : Le scanner en TEMP/TDM est réalisé à basse dose, non à visée thérapeutique (la radiothérapie guidée par l'image est un domaine différent)."
    },

    // Q39
    {
        "id": "UE2-CR-16",
        "text": "Quel type d'acquisition scintigraphique permet d'étudier la cinétique du muscle cardiaque en mouvement ?",
        "options": {
            "A": "L'acquisition planaire statique.",
            "B": "Le balayage corps entier.",
            "C": "L'acquisition synchronisée à l'électrocardiogramme (ECG).",
            "D": "La détection per-opératoire."
        },
        "correctAnswers": ["C"],
        "explanation": "C ✅ VRAI : La synchronisation à l'ECG (gating) permet de diviser le cycle cardiaque en de nombreuses séquences temporelles. Chaque phase est acquise séparément, puis les images sont fusionnées pour reconstituer un cycle cardiaque complet en mouvement. Cela permet d'analyser la cinétique myocardique (contractilité, fraction d'éjection, hypo/akinésie) de manière non invasive.\\nA ❌ FAUX : L'acquisition planaire statique produit une image fixe à un instant T — elle ne permet pas d'étudier le mouvement.\\nB ❌ FAUX : Le balayage corps entier (whole-body scan) est utilisé pour détecter des lésions à distance (ex : scintigraphie osseuse corps entier), pas pour l'étude cinétique cardiaque.\\nD ❌ FAUX : La détection per-opératoire à la sonde est utilisée pour le ganglion sentinelle en salle d'opération."
    },

    // Q40
    {
        "id": "UE2-CR-17",
        "text": "Que reflète la phase descendante de la courbe d'activité sur un rénogramme isotopique dynamique ?",
        "options": {
            "A": "L'arrivée vasculaire du traceur dans le rein.",
            "B": "La filtration glomérulaire ou tubulaire.",
            "C": "L'excrétion urinaire du traceur par les cavités pyélocalicielles.",
            "D": "La rétention du traceur dans une tumeur."
        },
        "correctAnswers": ["C"],
        "explanation": "C ✅ VRAI : Le rénogramme est une courbe d'activité radioactive rénale en fonction du temps. La phase descendante correspond à l'excrétion du traceur par les voies excrétrices (cavités pyélocalicielles, uretère, vers la vessie). Un aplatissement ou l'absence de descente de cette courbe signe un obstacle à l'écoulement urinaire (ex : uropathie obstructive).\\nA ❌ FAUX : L'arrivée vasculaire du traceur correspond à la phase initiale ascendante très rapide (pic vasculaire précoce) de la courbe.\\nB ❌ FAUX : La phase de filtration (glomérulaire ou tubulaire) correspond à la montée de la courbe (phase parenchymateuse), qui suit l'arrivée vasculaire.\\nD ❌ FAUX : La rétention dans une tumeur serait visible comme un plateau persistant ou une fixation anormale en imagerie statique, pas sur un rénogramme standard."
    },

    // Q41
    {
        "id": "UE2-CR-18",
        "text": "Comment se situe l'irradiation délivrée par une scintigraphie osseuse classique au Technétium 99m ?",
        "options": {
            "A": "Elle est nulle.",
            "B": "Elle est globalement comparable à l'irradiation naturelle annuelle (entre 1 et 5 mSv).",
            "C": "Elle est équivalente à un traitement de radiothérapie.",
            "D": "Elle est supérieure à 50 mSv."
        },
        "correctAnswers": ["B"],
        "explanation": "B ✅ VRAI : La scintigraphie osseuse au ⁹⁹ᵐTc délivre une dose efficace d'environ 3–5 mSv, ce qui est du même ordre de grandeur que l'irradiation naturelle annuelle en France (≈ 3 mSv/an). C'est un examen considéré comme faiblement irradiant, avec un rapport bénéfice/risque très favorable pour les indications diagnostiques (bilan d'extension osseux, pathologies osseuses).\\nA ❌ FAUX : Tout examen de médecine nucléaire implique une irradiation (même faible) — une dose nulle est impossible avec des radio-isotopes.\\nC ❌ FAUX : Un traitement de radiothérapie délivre des doses de plusieurs dizaines de Gy localement — sans commune mesure avec une scintigraphie diagnostique.\\nD ❌ FAUX : 50 mSv est la dose limite annuelle pour les travailleurs exposés aux rayonnements ionisants — bien supérieure à la dose d'une scintigraphie osseuse."
    },

    // Q42
    {
        "id": "UE2-CR-19",
        "text": "Dans un examen TEP/CT au FDG standard complet, quelle est la dose approximative d'irradiation totale reçue par le patient ?",
        "options": {
            "A": "1 mSv",
            "B": "5 mSv",
            "C": "14 mSv",
            "D": "100 mSv"
        },
        "correctAnswers": ["C"],
        "explanation": "C ✅ VRAI : Un examen TEP/CT au ¹⁸F-FDG délivre environ 14 mSv au total, répartis approximativement en 7 mSv pour la composante TEP (irradiation par le radiotraceur FDG) et 7 mSv pour la composante scanner (rayons X du TDM de centrage). C'est l'un des examens les plus irradiants en médecine nucléaire diagnostique standard, mais son rapport bénéfice/risque est très favorable en oncologie.\\nA ❌ FAUX : 1 mSv est la dose typique d'une radiographie thoracique — très inférieure à celle d'un TEP/CT.\\nB ❌ FAUX : 5 mSv correspond environ à une scintigraphie osseuse ou à un scanner thoracique basse dose — pas à un TEP/CT complet.\\nD ❌ FAUX : 100 mSv est une dose très élevée correspondant aux seuils épidémiologiques d'augmentation du risque de cancer — atteinte lors d'accidents ou de certains traitements lourds, pas d'un TEP diagnostique standard."
    },

    // Q43
    {
        "id": "UE2-CR-20",
        "text": "Quel est le principe de la détection isotopique du ganglion sentinelle en per-opératoire ?",
        "options": {
            "A": "Détruire le ganglion avec une forte dose d'iode 131.",
            "B": "Repérer précisément le premier relais ganglionnaire drainant la tumeur pour l'analyser.",
            "C": "Empêcher la lymphe de circuler.",
            "D": "Cartographier l'ensemble du réseau sanguin du patient."
        },
        "correctAnswers": ["B"],
        "explanation": "B ✅ VRAI : La technique du ganglion sentinelle consiste à injecter en péri-tumoral un traceur radioactif (nanocolloïdes marqués au ⁹⁹ᵐTc) qui va migrer par voie lymphatique jusqu'aux premiers relais ganglionnaires (ganglion sentinelle). Une lymphoscintigraphie préopératoire cartographie leur localisation, puis une sonde de détection per-opératoire guide le chirurgien pour les exérèser sélectivement. L'analyse anatomopathologique de ces ganglions sentinelles indique si la tumeur a métastasé, évitant un curage systématique et mutilant.\\nA ❌ FAUX : L'objectif est de localiser et prélever le ganglion, pas de le détruire.\\nC ❌ FAUX : Il n'est pas question d'interrompre la circulation lymphatique.\\nD ❌ FAUX : La technique cible spécifiquement le drainage lymphatique de la tumeur, pas le réseau vasculaire sanguin."
    },

    // Q44
    {
        "id": "UE2-CR-21",
        "text": "Pourquoi utilise-t-on spécifiquement des nanocolloïdes ou macro-agrégats marqués pour la recherche du ganglion sentinelle ?",
        "options": {
            "A": "Parce qu'ils sont bleus.",
            "B": "Parce qu'ils détruisent les cellules cancéreuses.",
            "C": "Parce que leur taille fait qu'ils restent bloqués dans le premier ganglion lymphatique rencontré.",
            "D": "Parce qu'ils sont éliminés immédiatement par les reins."
        },
        "correctAnswers": ["C"],
        "explanation": "C ✅ VRAI : Les nanocolloïdes ou macro-agrégats marqués au ⁹⁹ᵐTc ont une taille moléculaire suffisamment grande pour ne pas traverser les filtres du système ganglionnaire. Ils sont drainés par les vaisseaux lymphatiques jusqu'au premier ganglion (sentinelle), où ils restent piégés dans les macrophages du sinus. Cela permet de les visualiser nettement en scintigraphie et de les détecter à la sonde per-opératoire.\\nA ❌ FAUX : La couleur bleue correspond au colorant vital (bleu patenté) parfois utilisé conjointement — pas au traceur radioactif lui-même.\\nB ❌ FAUX : Ces traceurs n'ont aucun effet cytotoxique — leur rôle est purement diagnostique/guidage chirurgical.\\nD ❌ FAUX : Une élimination rénale immédiate empêcherait la visualisation ganglionnaire — les colloïdes sont précisément choisis pour rester captifs dans les ganglions."
    },

    // Q45
    {
        "id": "UE2-CR-22",
        "text": "Quel traceur est classiquement utilisé en scintigraphie pour explorer spécifiquement les glandes parathyroïdes ?",
        "options": {
            "A": "L'Iode 123.",
            "B": "Le MIBI marqué au Technétium 99m.",
            "C": "Le Fluor 18 FDG.",
            "D": "L'Yttrium 90."
        },
        "correctAnswers": ["B"],
        "explanation": "B ✅ VRAI : La scintigraphie des parathyroïdes utilise classiquement le ⁹⁹ᵐTc-MIBI (méthoxy-isobutyl-isonitrile). Ce traceur est capté préférentiellement par les cellules à haute activité mitochondriale, comme les adénomes parathyroïdiens hyperfonctionnels. La scintigraphie parathyroïdienne (souvent couplée à un scanner 4D) permet de localiser un adénome avant chirurgie.\\nA ❌ FAUX : L'iode 123 est utilisé pour explorer la thyroïde (scintigraphie thyroïdienne) — pas les parathyroïdes.\\nC ❌ FAUX : Le ¹⁸F-FDG est le traceur de référence en oncologie TEP pour détecter les tumeurs hypermétaboliques — pas pour l'exploration parathyroïdienne standard.\\nD ❌ FAUX : L'Yttrium 90 est un émetteur bêta- pur utilisé en radiothérapie interne vectorisée (radioembolisation hépatique, radiosynoviorthèse) — pas en imagerie diagnostique."
    }

,

    // ============================================================
    // QCM IA — REVEL Cédric
    // Introduction au traitement de l'imagerie médicale
    // (20 QCMs : indices CR-23 à CR-42)
    // ============================================================

    // --- I. Détection et formation du signal ---

    // Q46
    {
        "id": "UE2-CR-23",
        "text": "En imagerie TEP, qu'est-ce qui est à l'origine de l'erreur de parallaxe ?",
        "options": {
            "A": "Le mouvement respiratoire du patient pendant l'acquisition de l'image.",
            "B": "Le fait que le photon traverse plusieurs cristaux en biais lorsqu'il s'éloigne du centre du champ de vue.",
            "C": "L'atténuation du signal par les structures osseuses denses du patient.",
            "D": "Un défaut d'étalonnage du cristal piézoélectrique."
        },
        "correctAnswers": ["B"],
        "explanation": "B ✅ VRAI : Selon le cours, si un photon provient du centre du FOV, la ligne de réponse (LOR) est bien localisée. Mais plus la source s'éloigne du centre, plus le photon a de chances de frapper les cristaux avec un angle, traversant plusieurs cristaux avant de s'arrêter. Cela décale le signal et fausse le calcul de la ligne de réponse, créant une erreur de parallaxe.\\\\nA ❌ FAUX : Le mouvement respiratoire génère un artefact de flou cinétique, mais n'est pas à l'origine de l'erreur de parallaxe.\\\\nC ❌ FAUX : L'atténuation par les structures osseuses est un phénomène distinct, corrigé séparément via le CT de correction d'atténuation.\\\\nD ❌ FAUX : Le cristal piézoélectrique est propre à l'échographie (effet piézoélectrique) — il n'a aucun rôle dans la TEP."
    },

    // Q47
    {
        "id": "UE2-CR-24",
        "text": "Quel est le principal avantage d'un TEP avec un champ de vue (FOV) axial élargi (ex : 106 cm) par rapport à un TEP classique (ex : 16 cm) ?",
        "options": {
            "A": "Il permet de réduire la résolution spatiale pour améliorer le contraste.",
            "B": "Il permet de réaliser l'examen en supprimant l'utilisation de produits radioactifs.",
            "C": "Il permet de couvrir l'ensemble du corps en une seule acquisition et de collecter davantage de signal.",
            "D": "Il élimine totalement l'apparition du bruit de speckle."
        },
        "correctAnswers": ["C"],
        "explanation": "C ✅ VRAI : Les TEP traditionnels de 16 cm nécessitent plusieurs « pas » successifs pour couvrir le corps entier. Un FOV de 106 cm permet une acquisition unique du corps entier et collecte beaucoup plus de signal simultanément, améliorant la sensibilité et réduisant le temps d'examen.\\\\nA ❌ FAUX : Un FOV élargi n'implique pas de réduction de la résolution spatiale ; l'objectif est au contraire d'améliorer la sensibilité de détection.\\\\nB ❌ FAUX : Un TEP, quel que soit son FOV, nécessite impérativement l'injection d'un radiotraceur — c'est le principe même de la technique.\\\\nD ❌ FAUX : Le bruit de speckle est un artefact propre à l'échographie (ondes ultrasonores) — il est sans rapport avec la TEP."
    },

    // Q48
    {
        "id": "UE2-CR-25",
        "text": "Que décrit exactement la Fonction d'Étalement du Point (PSF) ?",
        "options": {
            "A": "La probabilité d'erreur de diagnostic par l'algorithme d'intelligence artificielle.",
            "B": "La réponse d'un système d'imagerie face à un point source ou un point objet.",
            "C": "La fréquence d'émission des ultrasons par une sonde échographique.",
            "D": "Le temps de demi-vie du produit radiopharmaceutique."
        },
        "correctAnswers": ["B"],
        "explanation": "B ✅ VRAI : La PSF (Point Spread Function) décrit comment un système va « étaler » et déformer un point lumineux parfait. Connaître cette fonction permet d'appliquer une correction géométrique pour retrouver la forme originale de l'objet.\\\\nA ❌ FAUX : La PSF est un concept physique caractérisant le système optique ou détecteur — elle n'est pas liée à la probabilité d'erreur algorithmique.\\\\nC ❌ FAUX : La fréquence d'émission des ultrasons caractérise la sonde échographique, pas la PSF d'un imageur nucléaire ou radiologique.\\\\nD ❌ FAUX : Le temps de demi-vie est une propriété du radionucléide (combien de temps la moitié des noyaux se désintègrent), sans lien avec la PSF."
    },

    // Q49
    {
        "id": "UE2-CR-26",
        "text": "Sur la courbe de la fonction de dispersion linéique, que représente la FWHM (Largeur à mi-hauteur) ?",
        "options": {
            "A": "Le contraste global de l'image.",
            "B": "La distance maximale de pénétration des ultrasons dans le corps.",
            "C": "La mesure de l'amplitude de la fonction, qui définit la résolution du système.",
            "D": "La quantité de rayonnement absorbée par le patient."
        },
        "correctAnswers": ["C"],
        "explanation": "C ✅ VRAI : La FWHM (Full Width at Half Maximum) se mesure à la moitié du maximum du pic du signal. Plus cette largeur est fine, plus le système est capable de séparer deux points proches (meilleure résolution spatiale). Elle est l'indicateur standard de la résolution en imagerie médicale.\\\\nA ❌ FAUX : Le contraste est défini par la différence de signal entre deux régions — c'est une notion distincte de la résolution spatiale quantifiée par la FWHM.\\\\nB ❌ FAUX : La pénétration des ultrasons dans le corps est liée à leur fréquence et aux propriétés des tissus — ce n'est pas ce que mesure la FWHM.\\\\nD ❌ FAUX : La quantité de rayonnement absorbée est la dose (en Gray ou Sievert) — sans rapport avec la FWHM."
    },

    // Q50
    {
        "id": "UE2-CR-27",
        "text": "En traitement du signal, si l'image est le résultat de l'objet convoluté par la fonction de transfert du système, quelle opération permet de retrouver la netteté de l'objet initial ?",
        "options": {
            "A": "La rétroprojection simple.",
            "B": "La quantification.",
            "C": "L'échantillonnage de Shannon.",
            "D": "La déconvolution."
        },
        "correctAnswers": ["D"],
        "explanation": "D ✅ VRAI : Le système dégrade le signal (convolution). Si l'on connaît la fonction de transfert (comme la PSF), on peut effectuer l'opération mathématique inverse, appelée déconvolution, pour « désétaler » le point et améliorer la résolution de l'image.\\\\nA ❌ FAUX : La rétroprojection simple est un algorithme de reconstruction tomographique — elle ne corrige pas l'étalement dû à la PSF.\\\\nB ❌ FAUX : La quantification est l'opération qui discrétise un signal continu en niveaux discrets — elle ne restaure pas la résolution d'une image convoluée.\\\\nC ❌ FAUX : L'échantillonnage de Shannon concerne la fréquence d'acquisition nécessaire pour éviter le repliement de spectre — il s'agit d'une condition sur la grille d'acquisition, pas d'une correction de convolution."
    },

    // --- II. Reconstruction d'image ---

    // Q51
    {
        "id": "UE2-CR-28",
        "text": "Dans la reconstruction par rétroprojection, qu'appelle-t-on un « sinogramme » ?",
        "options": {
            "A": "L'ensemble des lignes de projection acquises sous tous les angles pour une même coupe.",
            "B": "Le graphique illustrant la fréquence cardiaque du patient pendant l'examen.",
            "C": "L'image finale en 3D après application des filtres de Fourier.",
            "D": "Le spectre des fréquences sonores en échographie Doppler."
        },
        "correctAnswers": ["A"],
        "explanation": "A ✅ VRAI : Le scanner tourne autour du patient et acquiert des lignes de projection à chaque angle. L'empilement de toutes ces projections pour une coupe donnée forme une image intermédiaire appelée sinogramme, dont la forme sinusoïdale caractéristique a donné son nom.\\\\nB ❌ FAUX : La fréquence cardiaque est suivie par un moniteur ECG — elle n'a aucun rapport avec le sinogramme.\\\\nC ❌ FAUX : L'image 3D après reconstruction est le résultat final obtenu après traitement du sinogramme — ce n'est pas le sinogramme lui-même.\\\\nD ❌ FAUX : L'échographie Doppler analyse les décalages de fréquence des ultrasons pour mesurer des flux sanguins — le concept de sinogramme est propre à la tomographie par rayons gamma ou X."
    },

    // Q52
    {
        "id": "UE2-CR-29",
        "text": "Lors d'une rétroprojection simple, que se passe-t-il si le nombre d'angles de projection est trop faible ?",
        "options": {
            "A": "L'image devient totalement noire (hypoéchogène).",
            "B": "Il apparaît un artefact géométrique d'épandage en étoile.",
            "C": "L'image subit une hallucination algorithmique systématique.",
            "D": "La résolution s'améliore mais le temps de calcul augmente."
        },
        "correctAnswers": ["B"],
        "explanation": "B ✅ VRAI : La rétroprojection simple étale les densités mesurées dans la direction de chaque projection. S'il n'y a pas assez de projections (ex : 3 ou 4 angles), les bandes se croisent en formant un motif d'étoile très visible — c'est l'artefact d'épandage en étoile (star artifact).\\\\nA ❌ FAUX : Une image noire signifierait une absence totale de signal — la rétroprojection avec peu d'angles donne au contraire une image floue et étoilée, pas noire.\\\\nC ❌ FAUX : Les hallucinations algorithmiques sont propres aux réseaux de neurones profonds (Deep Learning) — la rétroprojection est un algorithme déterministe sans apprentissage.\\\\nD ❌ FAUX : Un plus grand nombre d'angles améliore la qualité de l'image mais ralentit le calcul — l'inverse est vrai (moins d'angles = plus rapide mais moins bon)."
    },

    // Q53
    {
        "id": "UE2-CR-30",
        "text": "Dans l'espace de Fourier, à quoi correspondent les « hautes fréquences spatiales » ?",
        "options": {
            "A": "Aux grandes structures largement séparées (qui portent le contraste global).",
            "B": "Au bruit de fond lié aux ondes radio.",
            "C": "Aux petites structures rapprochées (qui portent les détails fins).",
            "D": "Aux mouvements lents du patient."
        },
        "correctAnswers": ["C"],
        "explanation": "C ✅ VRAI : Dans le domaine fréquentiel, les hautes fréquences définissent les détails fins et les bords nets (structures petites et proches). Les basses fréquences portent les grandes masses et le contraste global. Amplifier les hautes fréquences améliore la résolution mais aussi le bruit.\\\\nA ❌ FAUX : Les grandes structures largement séparées correspondent aux basses fréquences spatiales dans l'espace de Fourier.\\\\nB ❌ FAUX : Les ondes radio sont une notion propre aux champs électromagnétiques de radiofréquence (IRM) — les fréquences spatiales de Fourier sont un concept mathématique distinct.\\\\nD ❌ FAUX : Les mouvements du patient introduisent des artefacts temporels (flou cinétique) — cela est distinct des fréquences spatiales de l'image."
    },

    // Q54
    {
        "id": "UE2-CR-31",
        "text": "Quel est le grand avantage de la reconstruction itérative par rapport à la rétroprojection filtrée historique ?",
        "options": {
            "A": "Elle est beaucoup plus rapide et ne nécessite aucun calcul informatique lourd.",
            "B": "Elle permet d'intégrer des modèles physiques comme l'atténuation, la diffusion et la réponse du détecteur.",
            "C": "Elle se passe totalement de l'étape du sinogramme.",
            "D": "Elle divise par dix la dose de rayonnements délivrée au patient."
        },
        "correctAnswers": ["B"],
        "explanation": "B ✅ VRAI : La méthode itérative modélise le problème sous forme d'un immense système d'équations (matrice). Son atout majeur est de pouvoir inclure dans la formule de projection des corrections physiques précises : diffusion, atténuation, réponse du détecteur (PSF) — ce que la rétroprojection filtrée classique ne peut pas intégrer.\\\\nA ❌ FAUX : C'est l'inverse : la reconstruction itérative est bien plus lourde en calcul et nécessite de nombreuses itérations ; la rétroprojection filtrée est l'approche rapide historique.\\\\nC ❌ FAUX : La reconstruction itérative peut également utiliser le sinogramme comme données d'entrée ; elle ne supprime pas cette étape.\\\\nD ❌ FAUX : La reconstruction itérative améliore la qualité de l'image à dose fixe, mais elle n'agit pas directement sur la dose d'irradiation délivrée au patient."
    },

    // Q55
    {
        "id": "UE2-CR-32",
        "text": "Que désigne le terme « subsets » (sous-ensembles) dans la méthode de reconstruction itérative ?",
        "options": {
            "A": "Le découpage du corps du patient en plusieurs zones anatomiques.",
            "B": "Le regroupement des projections en petits paquets traités en parallèle pour accélérer les calculs.",
            "C": "L'élimination des pixels inutiles dans les coins de l'image.",
            "D": "Le filtrage exclusif des basses fréquences spatiales."
        },
        "correctAnswers": ["B"],
        "explanation": "B ✅ VRAI : Face aux millions d'équations à résoudre, les algorithmes itératifs (comme l'OSEM — Ordered Subset Expectation Maximization) divisent les projections en sous-ensembles (subsets) pour itérer plus rapidement. Chaque subset permet une mise à jour partielle, accélérant considérablement la convergence.\\\\nA ❌ FAUX : Le découpage anatomique du corps est une opération de segmentation d'image — ce n'est pas le sens de « subsets » en reconstruction itérative.\\\\nC ❌ FAUX : L'élimination de pixels de coins relève du masquage ou du recadrage d'image — sans rapport avec la notion de subsets algorithmiques.\\\\nD ❌ FAUX : Le filtrage des fréquences spatiales est propre à la rétroprojection filtrée (filtre de Fourier) — les subsets sont un concept d'optimisation algorithmique itératif."
    },

    // --- III. Analyse critique et notions générales ---

    // Q56
    {
        "id": "UE2-CR-33",
        "text": "Quel biais méthodologique le professeur souligne-t-il dans la publicité pour le TEP « ultra haute résolution » ?",
        "options": {
            "A": "La publicité compare l'imagerie TEP à l'échographie, ce qui n'a pas de sens.",
            "B": "La publicité utilise des patients virtuels générés par IA.",
            "C": "Elle compare une rétroprojection simple obsolète à une reconstruction itérative moderne incluant la PSF.",
            "D": "Elle modifie l'échelle de l'image pour faire paraître le FOV plus grand."
        },
        "correctAnswers": ["C"],
        "explanation": "C ✅ VRAI : La comparaison est biaisée car elle ne compare pas deux machines à algorithme équivalent (itératif vs itératif + PSF), mais elle compare l'ancienne technique sans itération ni correction matérielle à la nouvelle technique complète. Cela exagère artificiellement le bénéfice de la seule option PSF et constitue un biais de comparaison délibéré.\\\\nA ❌ FAUX : La publicité ne compare pas la TEP à l'échographie — elle compare deux reconstructions TEP différentes.\\\\nB ❌ FAUX : Le cours ne mentionne pas l'utilisation de patients virtuels générés par IA dans cette publicité.\\\\nD ❌ FAUX : La manipulation de l'échelle n'est pas le biais identifié — c'est bien la comparaison inégale des algorithmes de reconstruction qui est soulevée."
    },

    // Q57
    {
        "id": "UE2-CR-34",
        "text": "En oncologie, si une lésion mesure 1 mm et que la résolution du système (ex : iode 131) est de 1,5 cm, que verra le médecin sur l'image ?",
        "options": {
            "A": "L'image sera parfaite car la détectabilité compense la résolution.",
            "B": "La lésion sera totalement invisible car elle est plus petite que la résolution.",
            "C": "Une tache diffuse d'environ 1,5 à 2 cm, indiquant que la lésion est détectée mais non résolue.",
            "D": "Deux lésions distinctes apparaîtront en raison de l'artefact d'épandage."
        },
        "correctAnswers": ["C"],
        "explanation": "C ✅ VRAI : Il ne faut pas confondre résolution spatiale et détectabilité. Une lésion très émettrice mais très petite sera détectée, mais elle « bavera » sur l'image et apparaîtra comme une grosse tache floue correspondant à la résolution limite de la machine. La lésion de 1 mm sera vue comme une tache d'environ 1,5–2 cm avec un imageur iode 131.\\\\nA ❌ FAUX : La détectabilité permet de voir qu'il existe un signal, mais ne restaure pas la résolution — l'image ne sera pas parfaite.\\\\nB ❌ FAUX : La lésion sera détectable si son activité est suffisante — ce qui n'est pas la même chose que d'être résolue spatialement.\\\\nD ❌ FAUX : L'artefact d'épandage en étoile est lié à la rétroprojection avec peu d'angles — il ne crée pas de doublement d'une lésion unique."
    },

    // Q58
    {
        "id": "UE2-CR-35",
        "text": "Selon le théorème de Shannon appliqué à l'imagerie, quelle condition est nécessaire pour éviter la perte d'information spatiale ?",
        "options": {
            "A": "La fréquence d'échantillonnage doit être égale à la fréquence maximale (Fe = Fm).",
            "B": "La fréquence d'échantillonnage doit être au moins le double de la fréquence maximale (Fe ≥ 2Fm).",
            "C": "La matrice doit contenir au moins 40 niveaux de gris.",
            "D": "La largeur à mi-hauteur doit être nulle."
        },
        "correctAnswers": ["B"],
        "explanation": "B ✅ VRAI : Le théorème de Shannon-Nyquist stipule que Fe ≥ 2Fm. Concrètement en imagerie, pour distinguer séparément deux objets (deux points d'activité), il faut qu'il y ait au moins un pixel vide entre les deux sur la matrice d'acquisition, sinon l'information est perdue par repliement de spectre (aliasing).\\\\nA ❌ FAUX : Si Fe = Fm, le théorème de Shannon n'est pas respecté — il faut au moins le double de la fréquence maximale, pas son égal.\\\\nC ❌ FAUX : Le nombre de niveaux de gris concerne la résolution en contraste (quantification), non la résolution spatiale décrite par Shannon.\\\\nD ❌ FAUX : Une FWHM nulle serait un système idéal sans étalement — c'est physiquement impossible, et ce n'est pas la condition de Shannon."
    },

    // Q59
    {
        "id": "UE2-CR-36",
        "text": "Comment se calcule le contraste C entre une cible (N2) et le tissu adjacent (N1) ?",
        "options": {
            "A": "C = (N2 + N1) / 2",
            "B": "C = N2 / (N1 - N2)",
            "C": "C = (N2 - N1) / N1",
            "D": "C = N1 × N2"
        },
        "correctAnswers": ["C"],
        "explanation": "C ✅ VRAI : Le contraste est défini par la différence de signal entre les deux régions, divisée par le signal de la région de référence adjacente : C = (N2 − N1) / N1. Plus le contraste est élevé, plus la cible se distingue facilement du fond.\\\\nA ❌ FAUX : (N2 + N1) / 2 est la moyenne des deux signaux — cela ne mesure pas leur différence relative.\\\\nB ❌ FAUX : N2 / (N1 − N2) n'est pas la formule standard du contraste en imagerie médicale.\\\\nD ❌ FAUX : N1 × N2 est un produit sans signification pour le contraste — il n'y a aucune raison physique de multiplier deux valeurs de signal pour calculer leur différence relative."
    },

    // Q60
    {
        "id": "UE2-CR-37",
        "text": "Quel est le risque principal soulevé par l'utilisation du Deep Learning pour débruiter des images acquises très rapidement ?",
        "options": {
            "A": "La création d'artefacts en étoile impossibles à filtrer.",
            "B": "L'apparition d'hallucinations algorithmiques créant ou effaçant des lésions médicales.",
            "C": "La destruction physique des cristaux scintillateurs par surchauffe.",
            "D": "L'inversion automatique du contraste (le noir devient blanc)."
        },
        "correctAnswers": ["B"],
        "explanation": "B ✅ VRAI : Le réseau de neurones « prédit » l'image nette à partir du bruit. Dans un contexte médical, une erreur de prédiction (hallucination algorithmique) peut générer une image qui a l'air très réaliste mais qui invente une tumeur ou en efface une réelle — ce qui constitue un risque diagnostique majeur.\\\\nA ❌ FAUX : Les artefacts en étoile sont propres à la rétroprojection avec peu d'angles — ce n'est pas le risque spécifique du Deep Learning de débruitage.\\\\nC ❌ FAUX : Les algorithmes d'IA traitent les données numériques a posteriori — ils n'ont aucun effet physique sur les détecteurs ou cristaux.\\\\nD ❌ FAUX : Le Deep Learning ne provoque pas d'inversion automatique du contraste — c'est une crainte non documentée dans ce contexte."
    },

    // --- IV. Échographie ---

    // Q61
    {
        "id": "UE2-CR-38",
        "text": "Quel phénomène physique est exploité par la céramique PZT située dans la sonde d'échographie ?",
        "options": {
            "A": "L'effet Doppler continu.",
            "B": "Le rayonnement continu de freinage.",
            "C": "L'effet photoélectrique.",
            "D": "L'effet piézoélectrique."
        },
        "correctAnswers": ["D"],
        "explanation": "D ✅ VRAI : Les cristaux PZT (Zircono-Titanate de Plomb) se déforment sous l'action d'un champ électrique pour générer des ultrasons (effet piézoélectrique inverse), et créent un courant électrique lorsqu'ils reçoivent l'écho mécanique en retour (effet piézoélectrique direct). Ce double rôle émetteur/récepteur est au cœur du fonctionnement de la sonde.\\\\nA ❌ FAUX : L'effet Doppler est le décalage de fréquence des ultrasons réfléchis par les structures en mouvement — c'est un phénomène observable, pas le mécanisme de génération des ultrasons.\\\\nB ❌ FAUX : Le rayonnement de freinage (Bremsstrahlung) est produit lors du freinage d'électrons rapides par un noyau — c'est le mécanisme de production des rayons X dans un tube radiogène.\\\\nC ❌ FAUX : L'effet photoélectrique correspond à l'éjection d'électrons d'un matériau sous l'action de photons — c'est un mécanisme d'interaction des rayonnements ionisants, pas de génération d'ultrasons."
    },

    // Q62
    {
        "id": "UE2-CR-39",
        "text": "Pourquoi un échographiste utiliserait-il une sonde basse fréquence (ex : 3 MHz) plutôt qu'une sonde haute fréquence (ex : 12 MHz) ?",
        "options": {
            "A": "Pour examiner une structure très superficielle comme la thyroïde.",
            "B": "Pour obtenir la résolution spatiale la plus fine possible, de l'ordre du dixième de millimètre.",
            "C": "Pour examiner des structures profondes (abdomen, pelvis) car les basses fréquences pénètrent mieux les tissus.",
            "D": "Pour éviter l'utilisation de gel acoustique."
        },
        "correctAnswers": ["C"],
        "explanation": "C ✅ VRAI : C'est le compromis fondamental en échographie : les hautes fréquences sont très précises (meilleure résolution spatiale) mais s'atténuent très vite dans les tissus. Les basses fréquences ont une résolution moindre mais voyagent plus profondément dans le corps, ce qui est indispensable pour l'exploration abdominale ou pelvienne.\\\\nA ❌ FAUX : Pour une structure superficielle comme la thyroïde, c'est une sonde haute fréquence (7–15 MHz) qui est utilisée, afin d'obtenir la meilleure résolution spatiale possible sur une faible profondeur.\\\\nB ❌ FAUX : Une résolution spatiale fine est obtenue avec des hautes fréquences, pas des basses fréquences.\\\\nD ❌ FAUX : Le gel acoustique est toujours nécessaire quelle que soit la fréquence de la sonde — son rôle est d'assurer le couplage acoustique en éliminant l'air entre la sonde et la peau."
    },

    // Q63
    {
        "id": "UE2-CR-40",
        "text": "À l'échographie, comment apparaît un liquide simple (sans particules en suspension) ?",
        "options": {
            "A": "Très blanc, avec une ombre acoustique postérieure.",
            "B": "Noir (anéchogène), car il laisse passer les sons sans renvoyer d'écho.",
            "C": "Comme une mosaïque de couleurs clignotantes.",
            "D": "Gris clair homogène."
        },
        "correctAnswers": ["B"],
        "explanation": "B ✅ VRAI : Les liquides simples (comme l'urine dans la vessie, un kyste séreux) ne réfléchissent pas les ultrasons car ils sont homogènes et dépourvus d'interfaces. Il n'y a donc pas d'écho en retour, et l'absence de signal est traduite par la couleur noire sur l'écran (image anéchogène). On observe souvent un renforcement postérieur caractéristique.\\\\nA ❌ FAUX : Une image très blanche (hyperéchogène) avec une ombre acoustique postérieure est typique d'une structure calcifiée (calcul biliaire, calcification) qui réfléchit fortement les ultrasons.\\\\nC ❌ FAUX : Une mosaïque de couleurs en mode Doppler couleur peut indiquer un flux turbulent — ce n'est pas l'apparence d'un liquide simple en mode B.\\\\nD ❌ FAUX : Un gris clair homogène est typique d'un parenchyme comme le foie ou la rate — les liquides simples sont noirs (anéchogènes), pas gris."
    },

    // Q64
    {
        "id": "UE2-CR-41",
        "text": "Quelle est l'utilité du mode Tm (Time motion) en échographie ?",
        "options": {
            "A": "Analyser la vascularisation en couleur.",
            "B": "Reconstruire l'organe en 3 dimensions.",
            "C": "Évaluer précisément le mouvement et la taille des structures très mobiles, comme les valves ou les parois du cœur.",
            "D": "Améliorer la pénétration des ultrasons chez les patients obèses."
        },
        "correctAnswers": ["C"],
        "explanation": "C ✅ VRAI : Le mode Tm (Time-motion, ou mode M) affiche l'évolution d'une unique ligne de tir (ordonnée) au cours du temps (abscisse). C'est historiquement et cliniquement très utilisé en échocardiographie pour mesurer l'épaisseur et la dynamique du ventricule gauche, des valves cardiaques et de la paroi myocardique.\\\\nA ❌ FAUX : L'analyse de la vascularisation en couleur est le rôle du mode Doppler couleur (ou énergie) — pas du mode Tm.\\\\nB ❌ FAUX : La reconstruction 3D est réalisée par l'échographie 3D ou 4D — le mode Tm ne génère pas de volume mais une courbe temporelle monodimensionnelle.\\\\nD ❌ FAUX : La pénétration des ultrasons dépend de la fréquence de la sonde et non du mode d'affichage — le mode Tm ne modifie pas la profondeur de pénétration."
    },

    // Q65
    {
        "id": "UE2-CR-42",
        "text": "Pourquoi le médecin applique-t-il systématiquement du gel sur la peau avant l'examen échographique ?",
        "options": {
            "A": "Pour refroidir les cristaux piézoélectriques de la sonde qui chauffent rapidement.",
            "B": "Pour désinfecter la peau et éviter les infections nosocomiales.",
            "C": "Pour annuler l'importante atténuation des ultrasons causée par la fine couche d'air entre la sonde et la peau.",
            "D": "Pour augmenter artificiellement la fréquence d'émission de la sonde."
        },
        "correctAnswers": ["C"],
        "explanation": "C ✅ VRAI : L'impédance acoustique de l'air est très différente de celle de la peau, ce qui provoquerait une réflexion quasi-totale des ultrasons à l'interface air-peau et empêcherait leur pénétration dans l'organisme. Le gel acoustique, ayant une impédance proche de celle de la peau et des tissus, assure un couplage acoustique optimal et permet aux ultrasons de traverser efficacement l'interface sonde-patient.\\n\\nA ❌ FAUX : Les cristaux PZT ne chauffent pas de façon significative en utilisation clinique normale — le gel n'a pas de rôle de refroidissement.\\n\\nB ❌ FAUX : Le gel échographique n'est pas un désinfectant — la décontamination de la sonde est réalisée séparément par des lingettes désinfectantes adaptées.\\n\\nD ❌ FAUX : La fréquence d'émission de la sonde est fixée par ses propriétés piézoélectriques et l'électronique — le gel n'a aucune influence sur cette caractéristique."
    },

    // ============================================================
    // Pr. OLICHON AURÉLIEN — Développement pré-clinique & Toxicologie du médicament
    // UE2.S3 Bases fondamentales en sciences médicales
    // Annales 2020-2023 & Diapositives du cours (7 QCMs : indices 65 à 71)
    // ============================================================

    // Q66 — UE2-OL-09 — Annales 2021-2022 Q20 / Cours Diapo 57 : Essais précliniques et règle des 3R
    {
        "id": "UE2-OL-09",
        "text": "[Annales 2021-2022 / Diapo cours] Concernant les essais précliniques et l'expérimentation animale :",
        "options": {
            "A": "L’éthique animale recommande la règle des 3R : Réduire, Raffiner et Remplacer.",
            "B": "Ils consistent entre autres à étudier la reprotoxicité (effet sur la reproduction et la fertilité).",
            "C": "La toxicité chronique se mesure par la DL50.",
            "D": "La toxicité subaiguë évalue l’aptitude du produit à s’accumuler dans les tissus.",
            "E": "Aucune des réponses ci-dessus n’est exacte."
        },
        "correctAnswers": ["A", "B", "D"],
        "explanation": "A, B et D ✅ VRAIS :\n- A : La règle des 3R de Russell et Burch (1959) est le socle éthique et légal de l'expérimentation animale : Remplacer par des méthodes alternatives in vitro/in silico, Réduire le nombre d'animaux utilisés au strict nécessaire, et Raffiner les conditions d'hébergement, d'anesthésie et d'analgésie pour minimiser la douleur.\n- B : Les études de sécurité obligatoires évaluent la reprotoxicité selon 3 segments : Segment I (fertilité et accouplement), Segment II (tératogenèse et organogenèse), et Segment III (développement péri- et post-natal).\n- D : L'étude de toxicité subaiguë (injections réitérées pendant 28 à 90 jours sur 2 espèces) analyse l'accumulation tissulaire, la tolérance d'organes cibles et la réversibilité des lésions.\nC ❌ FAUX : La toxicité chronique (expositions répétées sur plusieurs mois) se quantifie par la NOAEL et la LOAEL. La DL50 (Dose Létale 50) est le paramètre historique mesuré lors des tests de toxicité AIGUË (dose unique massive).\nE ❌ FAUX : Les propositions A, B et D sont exactes."
    },

    // Q67 — UE2-OL-10 — Annales 2022-2023 Q27 : Notions fondamentales de toxicologie expérimentale
    {
        "id": "UE2-OL-10",
        "text": "[Annales 2022-2023] À propos des concepts fondamentaux de la toxicologie expérimentale :",
        "options": {
            "A": "La dose maximale sans effet toxique ou nocif observable (NOAEL) est systématiquement évaluée.",
            "B": "La dose maximale pour laquelle un effet toxique est observé (LOAEL) est évaluée.",
            "C": "La toxicologie étudie les voies de signalisation induisant des dommages cellulaires ou tissulaires (Adverse Outcome Pathway - AOP).",
            "D": "La toxicologie s'intéresse à l'exposition chez les sujets sensibles (enfants, femmes enceintes, personnes âgées).",
            "E": "Les intoxications chez l'enfant sont fréquemment liées à l'ingestion accidentelle de produits liquides."
        },
        "correctAnswers": ["A", "C", "D", "E"],
        "explanation": "A, C, D et E ✅ VRAIS :\n- A : La NOAEL (No Observed Adverse Effect Level) est la dose maximale d'une substance ne provoquant aucun effet nocif statistiquement significatif ; c'est le paramètre pivot pour calculer la dose initiale sans risque chez l'homme (MRSD).\n- C : Le concept d'AOP (Adverse Outcome Pathway) modélise la chaîne causale d'événements depuis l'interaction moléculaire initiale jusqu'aux conséquences néfastes à l'échelle de l'organisme ou de la population.\n- D : La vulnérabilité toxicologique dépend des particularités pharmacocinétiques des populations spécifiques (immaturité métabolique/rénale du nouveau-né, barrière fœtoplacentaire, déclin physiologique du sujet âgé).\n- E : Les accidents domestiques par ingestion de produits ménagers ou médicaments liquides représentent l'étiologie prépondérante des intoxications pédiatriques accidentelles.\nB ❌ FAUX : La LOAEL (Lowest Observed Adverse Effect Level) est la dose MINIMALE (et non maximale) pour laquelle le premier effet nocif statistiquement significatif est détecté."
    },

    // Q68 — UE2-OL-11 — Annales 2022-2023 Q28 : Éthique des 3R et sécurité préclinique
    {
        "id": "UE2-OL-11",
        "text": "[Annales 2022-2023] Concernant les exigences réglementaires et éthiques des essais précliniques :",
        "options": {
            "A": "L'éthique animale recommande les 3R signifiant : Reproduire, Restreindre et Répliquer.",
            "B": "La règle des 3R consiste à optimiser les conditions d'élevage, d'hébergement ainsi que les conditions d'euthanasie des animaux de laboratoire.",
            "C": "Les études de sécurité précliniques consistent entre autres à étudier la tératogenèse.",
            "D": "La toxicité chronique se caractérise par la détermination de la NOAEL et de la LOAEL.",
            "E": "La toxicité aiguë évalue l'aptitude d'une molécule à entraîner des perturbations biologiques à long terme."
        },
        "correctAnswers": ["B", "C", "D"],
        "explanation": "B, C et D ✅ VRAIS :\n- B : Cela correspond au principe du « Raffinement » (Refine) : enrichissement du milieu, anesthésie/analgésie appropriée et méthodes de sacrifice indolores agréées.\n- C : L'évaluation de la tératogenèse (apparition de malformations congénitales chez le fœtus après exposition in utero lors de l'organogenèse) fait partie intégrante du Segment II des études de reprotoxicité.\n- D : La toxicité chronique (administrations réitérées sur 6 à 9 mois) sert à déterminer la NOAEL et la LOAEL pour fixer la marge de sécurité.\nA ❌ FAUX : Les 3R signifient obligatoirement Réduire (Reduce), Raffiner (Refine) et Remplacer (Replace).\nE ❌ FAUX : La toxicité aiguë évalue les effets toxiques et létaux survenant IMMÉDIATEMENT ou dans les 14 jours suivant l'administration d'une DOSE UNIQUE (recherche de la DL50 ou de la dose maximale tolérée HNTD). Les perturbations à long terme relèvent des toxicités chroniques."
    },

    // Q69 — UE2-OL-12 — Annales 2022-2023 Q29 : Les 3 piliers du développement préclinique
    {
        "id": "UE2-OL-12",
        "text": "[Annales 2022-2023] Concernant les différentes étapes et composantes du développement préclinique :",
        "options": {
            "A": "Le développement préclinique du médicament comprend trois types d'études : la pharmacodynamie, la pharmacocinétique et la sécurité (toxicologie).",
            "B": "Les études de pharmacodynamie permettent entre autres de déterminer les doses efficaces et d'établir les relations dose-effet.",
            "C": "Les études de pharmacodynamie permettent de déterminer les doses entraînant l'effet principal recherché et celles entraînant des effets secondaires.",
            "D": "Lors du développement préclinique d'un médicament, des études sont réalisées chez l'homme pour éliminer les candidats médicaments à risque toxique.",
            "E": "Les études de sécurité comprennent la toxicité générale, la mutagénèse, la cancérogénèse et la reprotoxicité."
        },
        "correctAnswers": ["A", "B", "C", "E"],
        "explanation": "A, B, C et E ✅ VRAIS :\n- A : Les trois piliers scientifiques obligatoires du dossier préclinique sont la pharmacodynamie (action sur l'organisme), la pharmacocinétique (ADME chez l'animal) et la sécurité préclinique (toxicologie générale et spécifique).\n- B : La pharmacodynamie in vitro et in vivo détermine la DE50 (Dose Efficace 50), la CE50, l'efficacité maximale (Emax) et la puissance de la molécule.\n- C : Elle étudie la sélectivité pour la cible thérapeutique principale et dose les interactions sur des cibles secondaires (effets latéraux/indésirables).\n- E : Le programme de sécurité toxicologique regroupe la toxicité aiguë/chronique, la génotoxicité/mutagénèse, la cancérogénèse et la reprotoxicité.\nD ❌ FAUX : La phase préclinique est STRICTEMENT NON-HUMAINE : elle se déroule in vitro, ex vivo et in vivo chez l'animal. L'administration à l'homme (Phase I clinique) n'est autorisée qu'après validation complète et approbation réglementaire du dossier préclinique."
    },

    // Q70 — UE2-OL-13 — Annales 2022-2023 Q30 : Méthodologie et limites de la toxicologie préclinique
    {
        "id": "UE2-OL-13",
        "text": "[Annales 2022-2023] Concernant la méthodologie et les limites des essais de toxicologie préclinique :",
        "options": {
            "A": "Ils consistent généralement à évaluer la mortalité chez des animaux modèles de pathologies incurables.",
            "B": "Les études de toxicité à dose unique et à doses réitérées doivent impérativement être réalisées avant toute première administration chez l'homme.",
            "C": "Les études de toxicité aiguë évaluent le pouvoir tératogène de la molécule.",
            "D": "Les études de toxicité aiguë participent à la détermination de l'index thérapeutique.",
            "E": "La transférabilité des résultats précliniques de l'animal à l'homme est constante, vérifiée et parfaite."
        },
        "correctAnswers": ["B", "D"],
        "explanation": "B et D ✅ VRAIS :\n- B : L'évaluation toxicologique complète (dose unique + doses répétées sur au moins deux espèces de mammifères dont un non-rongeur) est un prérequis réglementaire obligatoire (ICH) avant l'autorisation du premier essai clinique de phase I (First-in-Human).\n- D : L'index thérapeutique (IT) évalue la marge de sécurité relative : il correspond au rapport entre la dose létale (DL50 issue de la toxicité aiguë) et la dose efficace (DE50 issue de la pharmacodynamie) : IT = DL50 / DE50.\nA ❌ FAUX : La toxicologie utilise des animaux SAINS (normaux) pour isoler la toxicité intrinsèque du produit sans interférence d'une maladie. Les modèles animaux pathologiques sont réservés aux études d'efficacité pharmacodynamique.\nC ❌ FAUX : La tératogenèse est étudiée dans le cadre de la reprotoxicité (femelles gravides exposées pendant l'organogenèse, Segment II), et non dans les tests de toxicité aiguë systémique standard.\nE ❌ FAUX : L'extrapolation de l'animal à l'homme présente des limites majeures en raison des différences inter-espèces de métabolisme (variabilité des cytochromes P450, récepteurs, sensibilité tissulaire). C'est pourquoi la toxicité clinique humaine peut différer des prédictions animales."
    },

    // Q71 — UE2-OL-14 — Annales 2020-2021 Q19 : Études de sécurité, mutagénèse et cancérogénèse
    {
        "id": "UE2-OL-14",
        "text": "[Annales 2020-2021] Concernant les études de sécurité et les critères d'évaluation précliniques :",
        "options": {
            "A": "L'éthique animale impose la mise en œuvre de la règle des 3R : Réduire, Raffiner et Remplacer.",
            "B": "Les études de sécurité précliniques comportent obligatoirement l'évaluation des effets mutagènes et cancérogènes.",
            "C": "La toxicité chronique d'un xénobiotique s'évalue principalement par la mesure de la DL50.",
            "D": "La toxicité aiguë permet d'évaluer l'aptitude du candidat médicament à s'accumuler dans les tissus de l'organisme.",
            "E": "Aucune des réponses ci-dessus n'est exacte."
        },
        "correctAnswers": ["A", "B"],
        "explanation": "A et B ✅ VRAIS :\n- A : La réglementation européenne et internationale impose l'application rigoureuse des 3R dans tout protocole préclinique.\n- B : La mutagénèse/génotoxicité (tests de mutations géniques in vitro et anomalies chromosomiques in vivo) et la cancérogénèse (études au long cours sur 2 ans chez le rongeur) sont obligatoires pour tout candidat médicament destiné à une utilisation humaine chronique.\nC ❌ FAUX : La DL50 caractérise la toxicité AIGUË (dose unique). La toxicité chronique est caractérisée par la dose sans effet toxique observable (NOAEL) et la première dose toxique (LOAEL).\nD ❌ FAUX : L'accumulation tissulaire nécessite des administrations répétées au cours du temps : elle est donc évaluée lors des études de toxicité subaiguë ou chronique (doses réitérées), et non en toxicité aiguë.\nE ❌ FAUX : Les propositions A et B sont exactes."
    },

    // Q72 — UE2-OL-15 — Annales 2020-2021 Q20 : Test d'Ames, doses réitérées et index thérapeutique
    {
        "id": "UE2-OL-15",
        "text": "[Annales 2020-2021] À propos des essais précliniques et des tests toxicologiques spécialisés :",
        "options": {
            "A": "Ils consistent à évaluer en priorité la mortalité sur des modèles animaux génétiquement modifiés pour développer une pathologie.",
            "B": "Les études de toxicité aiguë permettent de déterminer l'index thérapeutique du candidat médicament.",
            "C": "Les études de toxicité à doses réitérées évaluent l'aptitude du produit à présenter des effets indésirables sur le long terme.",
            "D": "Le test d'Ames est un test in vitro de référence visant à mettre en évidence un effet mutagène.",
            "E": "Aucune des propositions ci-dessus n'est exacte."
        },
        "correctAnswers": ["B", "C", "D"],
    },

    // ============================================================
    // Pr. GONTHIER — Bases moléculaires et cellulaires de la pathologie de l'obésité (1/2)
    // UE2.S3 Bases fondamentales en sciences médicales (2025-2026)
    // 6 QCMs : indices 72 à 77
    // ============================================================

    // Q73 — UE2-GO-01 — Question 1 : Définition et diagnostic de l'obésité
    {
        "id": "UE2-GO-01",
        "text": "Parmi les propositions suivantes concernant la définition et le diagnostic de l'obésité, laquelle ou lesquelles sont exactes ?",
        "options": {
            "A": "L'obésité est définie par l'OMS depuis 1997 comme une maladie métabolique chronique évolutive.",
            "B": "Chez l'homme, on parle de situation d'obésité lorsque la masse grasse corporelle dépasse 20 % du poids total.",
            "C": "Un Indice de Masse Corporelle (IMC) de 32 kg/m² correspond à une obésité de classe II.",
            "D": "Le tour de taille est un indicateur de la masse grasse intra-abdominale (viscérale).",
            "E": "Les seuils d'alerte pour le tour de taille sont définis à ≥ 102 cm chez l'homme et ≥ 88 cm chez la femme."
        },
        "correctAnswers": ["A", "D", "E"],
        "explanation": "A, D et E ✅ VRAIS :\n- A : En 1997, l'Organisation Mondiale de la Santé (OMS) a officiellement reconnu l'obésité comme une maladie métabolique chronique évolutive, marquant un tournant épidémiologique et médical majeur.\n- D : Le tour de taille (mesuré à mi-distance entre le bord inférieur de la dernière côte et la crête iliaque) reflète fidèlement la masse grasse viscérale intra-abdominale, qui est la plus délétère sur le plan métabolique et cardiovasculaire.\n- E : Selon les critères de l'OMS et de l'ATP III, les seuils définissant l'obésité abdominale sont un tour de taille ≥ 102 cm chez l'homme et ≥ 88 cm chez la femme.\nB et C ❌ FAUX :\n- B : Chez l'homme, la masse grasse physiologique normale représente 10 à 20 % du poids corporel. On parle d'obésité lorsque la masse grasse dépasse 25 % chez l'homme (et > 35 % chez la femme).\n- C : Selon la classification de l'OMS :\n  • IMC 25 à 29,9 kg/m² : Surpoids\n  • IMC 30 à 34,9 kg/m² : Obésité de classe I (modérée) — donc 32 kg/m² est de classe I\n  • IMC 35 à 39,9 kg/m² : Obésité de classe II (sévère)\n  • IMC ≥ 40 kg/m² : Obésité de classe III (morbide / massive)."
    },

    // Q74 — UE2-GO-02 — Question 2 : Chirurgie bariatrique
    {
        "id": "UE2-GO-02",
        "text": "Quels sont les critères et caractéristiques concernant l'éligibilité et la réalisation de la chirurgie bariatrique en France ?",
        "options": {
            "A": "Elle est accessible à tout patient ayant un IMC supérieur à 35 kg/m², sans autre condition.",
            "B": "Elle est strictement interdite chez les femmes enceintes et les mineurs.",
            "C": "Un patient avec un IMC de 39,99 kg/m² sans aucune comorbidité est automatiquement éligible.",
            "D": "Le bypass gastrique est une chirurgie irréversible.",
            "E": "La chirurgie bariatrique agit uniquement selon un principe de restriction de la quantité d'aliments."
        },
        "correctAnswers": ["B", "D"],
        "explanation": "B et D ✅ VRAIS :\n- B : En France (recommandations HAS), la chirurgie bariatrique est formellement contre-indiquée chez les mineurs (< 18 ans, sauf dérogations exceptionnelles très encadrées) et chez la femme enceinte ou en projet gestationnel immédiat.\n- D : Le bypass gastrique (court-circuit gastrique en Y de Roux) modifie définitivement l'anatomie digestive en créant une petite poche gastrique anastomosée à une anse jéjunale exclue : c'est une intervention considérée comme irréversible (contrairement à l'anneau gastrique ajustable qui est réversible).\nA, C et E ❌ FAUX :\n- A & C : Pour un IMC compris entre 35 et 39,99 kg/m² (classe II), la chirurgie bariatrique n'est autorisée QU'EN PRÉSENCE d'au moins une comorbidité sévère associée (diabète de type 2, HTA non contrôlée, SAOS sévère, stéatohépatite non alcoolique, arthrose invalidante). Un patient avec un IMC de 39,99 kg/m² sans comorbidité n'est donc PAS éligible (le seuil sans condition de comorbidité est IMC ≥ 40 kg/m²).\n- E : La chirurgie bariatrique repose sur deux mécanismes : le principe de restriction (diminution du volume gastrique : anneau, sleeve gastrectomie) ET/OU le principe de malabsorption (court-circuit de l'intestin grêle diminuant l'assimilation des nutriments : bypass, dérivation biliopancréatique)."
    },

    // Q75 — UE2-GO-03 — Question 3 : Les différents tissus adipeux
    {
        "id": "UE2-GO-03",
        "text": "À propos des différents types de tissus adipeux abordés dans le cours :",
        "options": {
            "A": "Le tissu adipeux brun a pour rôle de réguler la thermogenèse grâce à la protéine découplante UCP.",
            "B": "Le tissu adipeux rose dérive du tissu adipeux brun sous l'effet du froid.",
            "C": "Le tissu adipeux beige est capable de se comporter à la fois comme du tissu adipeux blanc et brun.",
            "D": "Pendant la grossesse et l'allaitement, le tissu adipeux rose stocke des microgouttelettes de lait riche en triglycérides.",
            "E": "Chez l'adulte humain, le tissu adipeux brun est le tissu graisseux majoritaire."
        },
        "correctAnswers": ["A", "C", "D"],
        "explanation": "A, C et D ✅ VRAIS :\n- A : Le tissu adipeux brun (BAT) est très riche en mitochondries contenant la thermogénine ou protéine découplante UCP1 (Uncoupling Protein 1), qui dissipe le gradient électrochimique de protons sous forme de chaleur au lieu de synthétiser de l'ATP (thermogenèse sans frisson).\n- C : Le tissu adipeux beige (présent au sein des dépôts blancs) présente une grande plasticité phénotypique (« browning ») : il peut basculer d'un état de stockage de type blanc vers un phénotype thermogénique actif exprimant UCP1 sous l'effet du froid ou des catécholamines.\n- D : Le tissu adipeux rose provient d'une transdifférenciation des adipocytes blancs de la glande mammaire lors de la gestation et de la lactation ; il acquiert une machinerie sécrétoire stockant et sécrétant des gouttelettes lipidiques de lait.\nB et E ❌ FAUX :\n- B : Le tissu adipeux rose dérive du tissu adipeux BLANC mammaire sous l'influence hormonale de la grossesse (œstrogènes, prolactine), et non du tissu brun ni du froid.\n- E : Chez l'adulte humain, le tissu adipeux blanc est très largement majoritaire (> 95 % de la masse grasse totale). Le tissu brun, abondant chez le nouveau-né et les mammifères hibernants, régresse très fortement à l'âge adulte (vestiges au niveau supraclaviculaire, paravertébral et périrénal)."
    },

    // Q76 — UE2-GO-04 — Question 4 : Triglycérides et métabolisme
    {
        "id": "UE2-GO-04",
        "text": "Concernant les triglycérides et la physiologie métabolique du tissu adipeux :",
        "options": {
            "A": "Un triglycéride est composé d'une molécule de glycérol estérifiée par trois acides aminés.",
            "B": "Les triglycérides représentent environ 95 % des lipides alimentaires totaux.",
            "C": "La combustion d'un gramme d'acide gras libère environ 4 kcal, soit autant que le glucose.",
            "D": "Lors d'un jeûne prolongé, la lipolyse libère des acides gras et du glycérol dans le sang.",
            "E": "Les acides gras libres issus de la lipolyse sont solubles dans le sang et montent directement au cerveau pour y être utilisés comme source d'énergie."
        },
        "correctAnswers": ["B", "D"],
        "explanation": "B et D ✅ VRAIS :\n- B : Les triglycérides (ou triacylglycérols) constituent la forme prédominante des lipides ingérés (environ 95 % des graisses alimentaires), le reste étant formé de phospholipides, de cholestérol libre/estérifié et de vitamines liposolubles.\n- D : En période de jeûne ou sous stimulation adrénergique/glucagon, la cascade lipolytique (ATGL, lipase hormono-sensible LHS, MGL) hydrolyse les triglycérides intracellulaires et libère des acides gras non estérifiés (AGNE) et du glycérol dans la circulation générale.\nA, C et E ❌ FAUX :\n- A : Un triglycéride est formé d'un squelette de glycérol (trialcool) estérifié par 3 ACIDES GRAS (et non par des acides aminés).\n- C : L'oxydation complète d'un gramme d'acides gras / lipides libère 9 kcal/g (haute densité énergétique), alors que les glucides et les protéines ne libèrent que 4 kcal/g.\n- E : Les acides gras libres sont hydrophobes et insolubles dans l'eau : ils circulent dans le plasma transportés par l'ALBUMINE. De plus, ils ne traversent pas la barrière hémato-encéphalique en quantité suffisante et ne peuvent PAS être utilisés directement par les neurones cérébraux. Le cerveau utilise le glucose ou les corps cétoniques (acacétoacétate, β-hydroxybutyrate) synthétisés par le foie à partir des acides gras."
    },

    // Q77 — UE2-GO-05 — Question 5 : Outils de mesure et imagerie
    {
        "id": "UE2-GO-05",
        "text": "Concernant les méthodes d'exploration clinique et paraclinique de l'adiposité :",
        "options": {
            "A": "L'impédancemétrie corporelle mesure la résistance des tissus riches en eau, comme le tissu graisseux, à un courant électrique.",
            "B": "La méthode DEXA (absorptiométrie biphotonique à rayons X) permet de quantifier les dépôts graisseux selon leur localisation anatomique.",
            "C": "La méthode DEXA permet également de mesurer la densité minérale osseuse.",
            "D": "L'impédancemétrie corporelle est une méthode très coûteuse nécessitant un manipulateur spécialisé.",
            "E": "L'imagerie par IRM permet de distinguer très clairement le tissu adipeux sous-cutané du tissu adipeux intra-viscéral."
        },
        "correctAnswers": ["B", "C", "E"],
        "explanation": "B, C et E ✅ VRAIS :\n- B : La DEXA (Dual-energy X-ray Absorptiometry) est la méthode de référence clinique pour analyser la composition corporelle compartimentale (masse grasse, masse maigre) et sa distribution régionale (androïde vs gynoïde).\n- C : La DEXA est également l'examen gold standard de référence en rhumatologie pour l'ostéodensitométrie (mesure de la DMO pour le diagnostic de l'ostéoporose).\n- E : L'IRM (et la tomodensitométrie/scanner) offre une excellente résolution en contraste pour séparer nettement le tissu adipeux sous-cutané (SCAT) du tissu adipeux intra-abdominal/viscéral (VAT), dont l'excès conditionne le risque cardiovasculaire.\nA et D ❌ FAUX :\n- A : L'impédancemétrie bioélectrique (BIA) repose sur le principe que l'eau et les électrolytes de la masse maigre conduisent le courant électrique, tandis que le tissu adipeux (pauvre en eau) présente une RÉSISTANCE (impédance) élevée au passage du courant.\n- D : L'impédancemétrie est une méthode simple, rapide, non invasive, portative et de FAIBLE COÛT, utilisable en routine au cabinet médical sans manipulateur spécialisé (contrairement à la DEXA ou à l'IRM qui sont coûteuses et nécessitent du personnel dédié)."
    },

    // Q78 — UE2-GO-06 — Question 6 : Épidémiologie et causes de l'obésité
    {
        "id": "UE2-GO-06",
        "text": "Parmi les propositions suivantes concernant l'épidémiologie, les profils cliniques et les déterminants de l'obésité :",
        "options": {
            "A": "À La Réunion, près de la moitié de la population (environ 47 %) est considérée en surcharge pondérale.",
            "B": "L'origine purement génétique explique plus de 50 % des cas d'obésité dans le monde.",
            "C": "L'obésité est systématiquement associée à une dysbiose du microbiote bactérien intestinal.",
            "D": "L'obésité de profil « androïde » correspond à une accumulation de gras au niveau du petit bassin, des fesses et des cuisses.",
            "E": "Le tissu adipeux blanc est considéré comme une véritable glande endocrine capable de sécréter des hormones."
        },
        "correctAnswers": ["A", "C", "E"],
        "explanation": "A, C et E ✅ VRAIS :\n- A : Les enquêtes épidémiologiques régionales récentes (2020-2022) mettent en évidence qu'environ 47 % des Réunionnais sont en surcharge pondérale (surpoids + obésité, dont environ 16 à 17 % d'obésité).\n- C : Chez les patients avec obésité, on retrouve de façon constante une dysbiose intestinale (altération du ratio Firmicutes/Bacteroidetes, baisse de la diversité bactérienne, augmentation de la perméabilité intestinale et endotoxémie métabolique).\n- E : L'adipocyte blanc n'est pas un simple lieu de stockage inerte : c'est une véritable cellule endocrine qui sécrète de nombreuses adipokines (leptine, adiponectine, résistine), cytokines pro-inflammatoires (TNF-α, IL-6) et composants du système rénine-angiotensine.\nB et D ❌ FAUX :\n- B : Les obésités monogéniques (mutations du récepteur MC4R, leptine, POMC) ou purement génétiques sont rares et représentent MOINS DE 10 % des cas. L'obésité commune est une pathologie complexe et polygénique résultant d'interactions entre un terrain de susceptibilité génétique et un environnement obésogène (alimentation ultratransformée, sédentarité, sommeil, perturbateurs endocriniens).\n- D : L'obésité androïde (dite en « pomme ») prédomine sur la partie haute du corps (tronc, abdomen, cou) et est associée à un risque métabolique élevé. La répartition sur le petit bassin, les hanches, les fesses et les cuisses correspond au profil « GYNOÏDE » (dit en « poire »)."
    },

    // ============================================================
    // Dr. A. OLICHON — Bases de toxicologie cellulaire et moléculaire
    // UE2.S3 Bases fondamentales en sciences médicales (2025-2026)
    // 17 QCMs : indices 78 à 94
    // - Série 1 : Diapositives du cours (7 QCMs, indices 78 à 84)
    // - Série 2 : Annales 2018-2023 (10 QCMs, indices 85 à 94)
    // ============================================================

    // Q79 — UE2-OL-TOX-01 — Diapositives p.29/30 : Toxicométrie (DL50, NOAEL, LOAEL, IT)
    {
        "id": "UE2-OL-TOX-01",
        "text": "[Diapositives] À propos de la toxicométrie, on retrouve :",
        "options": {
            "A": "La détermination de la dose létale médiane DL50.",
            "B": "La détermination de l'index thérapeutique pour les médicaments.",
            "C": "La dose maximale pour laquelle aucun effet toxique ou nocif n'est observé (NOAEL).",
            "D": "La dose maximale pour laquelle un effet toxique est observé (LOAEL).",
            "E": "Aucune des réponses ci-dessus n'est vraie."
        },
        "correctAnswers": ["A", "B", "C"],
        "explanation": "A, B et C ✅ VRAIS :\n- A : La DL50 (dose létale médiane provoquant la mort de 50 % des animaux testés lors d'une exposition aiguë) est un indicateur clé en toxicométrie pour comparer la toxicité intrinsèque des substances.\n- B : L'index thérapeutique (IT = DL50 / DE50) est un paramètre central en toxicologie préclinique et pharmacologique pour évaluer la marge de sécurité d'un composé.\n- C : Le NOAEL (No Observed Adverse Effect Level) est la dose maximale sans effet toxique ou nocif statistiquement observable.\nD et E ❌ FAUX :\n- D : Le LOAEL (Lowest Observed Adverse Effect Level) est la dose MINIMALE (et non maximale) pour laquelle un premier effet toxique ou indésirable est statistiquement observé."
    },

    // Q80 — UE2-OL-TOX-02 — Diapositives p.35 : Monitoring biologique
    {
        "id": "UE2-OL-TOX-02",
        "text": "[Diapositives] Concernant le monitoring biologique :",
        "options": {
            "A": "Il comprend le dosage des métabolites dans le sang ou l'urine des personnes exposées.",
            "B": "Il est utilisé pour évaluer l'exposition humaine réelle.",
            "C": "Il comprend le dosage des toxiques dans les cours d'eau.",
            "D": "Il comprend le dosage de la pollution de l'air.",
            "E": "Aucune des propositions ci-dessus n'est exacte."
        },
        "correctAnswers": ["A", "B"],
        "explanation": "A et B ✅ VRAIS :\n- A : Le monitoring (surveillance) biologique repose sur des prélèvements biologiques (sang, urine, air exhalé, phanères) pour doser le composé parent ou ses métabolites.\n- B : Il permet d'évaluer la dose interne effectivement absorbée et l'exposition humaine réelle en intégrant l'ensemble des voies de pénétration.\nC, D et E ❌ FAUX :\n- C et D : Le dosage dans les cours d'eau, l'air ambiant ou les sols correspond au « monitoring d'ambiance ou environnemental », et non au monitoring biologique."
    },

    // Q81 — UE2-OL-TOX-03 — Diapositives p.55 : Cytochromes P450
    {
        "id": "UE2-OL-TOX-03",
        "text": "[Diapositives] À propos des cytochromes P450 :",
        "options": {
            "A": "Ce sont des enzymes de biotransformation de phase I.",
            "B": "Ce sont des enzymes de biotransformation de phase II.",
            "C": "Ils sont exprimés principalement dans les cellules sanguines.",
            "D": "Ils peuvent être à l'origine du phénomène d'activation métabolique.",
            "E": "Aucune des propositions ci-dessus n'est exacte."
        },
        "correctAnswers": ["A", "D"],
        "explanation": "A et D ✅ VRAIS :\n- A : Les cytochromes P450 (CYP) appartiennent à la phase I (enzymes de fonctionnalisation catalysant des oxydations, réductions ou hydrolyses).\n- D : Les CYP450 peuvent transformer une substance pro-toxique inactive en un métabolite hautement réactif et toxique (bioactivation métabolique), comme pour le paracétamol (formation de NAPQI par CYP2E1) ou le benzo[a]pyrène (formation d'époxydes mutagènes).\nB, C et E ❌ FAUX :\n- B : La phase II correspond aux enzymes de conjugaison (UGT, SULT, GST, NAT).\n- C : Les cytochromes P450 sont très majoritairement exprimés dans le foie (microsomes du réticulum endoplasmique des hépatocytes), et non dans les cellules sanguines circulantes."
    },

    // Q82 — UE2-OL-TOX-04 — Diapositives p.55 : Métabolisme d'un xénobiotique
    {
        "id": "UE2-OL-TOX-04",
        "text": "[Diapositives] Concernant le métabolisme d'un xénobiotique dans l'organisme :",
        "options": {
            "A": "Les réactions de transfert font partie de la phase I.",
            "B": "Les réactions d'hydrolyse font partie de la phase II.",
            "C": "La glucuronoconjugaison est une réaction de phase III.",
            "D": "L'acétylation est une réaction de phase IV.",
            "E": "Aucune des propositions ci-dessus n'est exacte."
        },
        "correctAnswers": ["E"],
        "explanation": "E ✅ VRAI : Aucune des propositions n'est exacte.\nA, B, C et D ❌ FAUX :\n- A : Les réactions de transfert (méthyltransférase, sulfotransférase...) sont caractéristiques des conjugaisons de la PHASE II.\n- B : Les réactions d'hydrolyse (époxyde hydrolase, carboxylestérases) font partie des réactions de fonctionnalisation de la PHASE I.\n- C : La glucuronoconjugaison (via les UGT) est la voie majeure de conjugaison de la PHASE II (et non de la phase III).\n- D : L'acétylation (via les NAT) est également une réaction de PHASE II. La phase III correspond à l'élimination/efflux cellulaire via des transporteurs membranaires (P-gp, MRP, BCRP). Il n'existe pas de phase IV."
    },

    // Q83 — UE2-OL-TOX-05 — Diapositives p.55 : Enzymes de phase I de détoxification
    {
        "id": "UE2-OL-TOX-05",
        "text": "[Diapositives] Concernant les enzymes de phase I de détoxification :",
        "options": {
            "A": "Les cytochromes P450 en font partie.",
            "B": "L'époxyde hydrolase en fait partie.",
            "C": "Elles sont fortement exprimées dans les microsomes hépatiques.",
            "D": "Leur action peut varier en fonction de polymorphismes génétiques.",
            "E": "Aucune des réponses ci-dessus n'est vraie."
        },
        "correctAnswers": ["A", "B", "C", "D"],
        "explanation": "A, B, C et D ✅ VRAIS :\n- A : Les cytochromes P450 représentent le système enzymatique majeur de phase I.\n- B : L'époxyde hydrolase est une enzyme clé de phase I catalysant l'hydrolyse protectrice des époxydes réactifs en diols moins toxiques.\n- C : La fraction microsomale (réticulum endoplasmique) des hépatocytes héberge la majorité de ces enzymes.\n- D : Les polymorphismes génétiques (ex: CYP2D6, CYP2C9, CYP2C19) induisent une variabilité interindividuelle majeure (métaboliseurs lents, intermédiaires, rapides ou ultrarapides).\nE ❌ FAUX."
    },

    // Q84 — UE2-OL-TOX-06 — Diapositives p.55 : Phase II de détoxification
    {
        "id": "UE2-OL-TOX-06",
        "text": "[Diapositives] Concernant la phase II de détoxification :",
        "options": {
            "A": "Elle vise à diminuer l'hydrosolubilité des xénobiotiques.",
            "B": "La glucuronoconjugaison en est une voie majeure.",
            "C": "Les glutathion-S-transférases sont des enzymes de phase II.",
            "D": "Elle permet de greffer ou démasquer des groupements fonctionnels sur des toxiques.",
            "E": "Aucune des réponses ci-dessus n'est vraie."
        },
        "correctAnswers": ["B", "C"],
        "explanation": "B et C ✅ VRAIS :\n- B : La glucuronoconjugaison (catalysée par les UDP-glucuronosyltransférases UGT) est la voie de conjugaison quantitativement la plus importante et de haute capacité.\n- C : Les GST (Glutathion-S-Transférases) sont des enzymes clés de phase II qui conjuguent le glutathion réduit (GSH) aux métabolites électrophiles toxiques pour les neutraliser.\nA, D et E ❌ FAUX :\n- A : Le rôle fondamental du métabolisme de phase II est d'AUGMENTER l'hydrosolubilité (polarité) pour empêcher la réabsorption tubulaire rénale et favoriser l'excrétion urinaire ou biliaire.\n- D : Greffer ou démasquer de petits groupements fonctionnels (-OH, -NH2, -COOH, -SH) est le rôle de la PHASE I. La phase II greffe des molécules volumineuses hautement polaires (acide glucuronique, sulfate, glutathion)."
    },

    // Q85 — UE2-OL-TOX-07 — Diapositives p.63 : Composés toxiques & Index thérapeutique
    {
        "id": "UE2-OL-TOX-07",
        "text": "[Diapositives] À propos des composés toxiques :",
        "options": {
            "A": "Les xénobiotiques sont tous des composés toxiques.",
            "B": "Les xénobiotiques nécessitent toujours une bioactivation pour devenir toxiques.",
            "C": "Les toxiques environnementaux sont biotransformés par des voies différentes des médicaments.",
            "D": "Plus l'index thérapeutique des médicaments est élevé, plus il y a de risque de toxicité.",
            "E": "Aucune des propositions ci-dessus n'est exacte."
        },
        "correctAnswers": ["E"],
        "explanation": "E ✅ VRAI : Aucune des propositions n'est exacte.\nA, B, C et D ❌ FAUX :\n- A : Un xénobiotique est une substance étrangère à l'organisme vivant. Selon le principe de Paracelse, c'est la DOSE qui fait le poison ; un xénobiotique n'est pas toxique en soi s'il est à dose subtoxique.\n- B : De nombreux toxiques sont nocifs d'emblée sans bioactivation (acides/bases corrosifs, solvants membranaires, métaux lourds). La bioactivation n'est qu'un mécanisme particulier.\n- C : Les polluants de l'environnement utilisent les mêmes systèmes enzymatiques hépatiques et extra-hépatiques (CYP450, UGT, GST, transporteurs d'efflux) que les médicaments.\n- D : L'index thérapeutique (IT = DL50 / DE50) mesure la sécurité : plus il est ÉLEVÉ, plus la marge de sécurité est grande et moins le médicament est dangereux."
    },

    // Q86 — UE2-OL-TOX-08 — Annales 2018-2019 Q30 : Monitoring biologique
    {
        "id": "UE2-OL-TOX-08",
        "text": "[Annales 2018-2019] En cas d'exposition d'une population à un produit toxique, le monitoring biologique inclut le dosage :",
        "options": {
            "A": "du produit dans le milieu ambiant (air, eau...).",
            "B": "des métabolites du produit dans le milieu ambiant (air, eau...).",
            "C": "du produit dans le sang et/ou l'urine des personnes exposées.",
            "D": "des métabolites du produit dans le sang et/ou l'urine des personnes exposées.",
            "E": "Aucune des propositions ci-dessus n'est exacte."
        },
        "correctAnswers": ["C", "D"],
        "explanation": "C et D ✅ VRAIS :\n- C et D : Le monitoring biologique analyse des matrices biologiques humaines (sang, sérum, urine, cheveux) pour doser le produit parent non transformé et/ou ses métabolites de biotransformation, reflétant la dose interne absorbée.\nA et B ❌ FAUX :\n- A et B : Le dosage du toxique ou de ses produits dans le milieu ambiant (air, eau de boisson, cours d'eau, sol) constitue le MONITORING ENVIRONNEMENTAL (ou d'ambiance)."
    },

    // Q87 — UE2-OL-TOX-09 — Annales 2020-2021 Q18 : Principes généraux de toxicologie
    {
        "id": "UE2-OL-TOX-09",
        "text": "[Annales 2020-2021] Concernant la toxicologie :",
        "options": {
            "A": "L'exposition à des toxiques est indépendante de l'individu.",
            "B": "La toxicité peut être aiguë ou chronique.",
            "C": "Les combinaisons de molécules peuvent avoir des effets additifs.",
            "D": "Les génotoxiques peuvent entraîner une toxicité à long terme.",
            "E": "Aucune des propositions ci-dessus n'est exacte."
        },
        "correctAnswers": ["B", "C", "D"],
        "explanation": "B, C et D ✅ VRAIS :\n- B : La toxicité aiguë fait suite à une exposition brève/unique à forte dose, tandis que la toxicité chronique résulte d'expositions répétées à faibles doses au long cours.\n- C : Lors de poly-expositions (effet cocktail), les interactions peuvent être additives (somme des effets), synergiques (amplification supérieure à la somme) ou antagonistes.\n- D : Les agents génotoxiques altèrent le matériel génétique (ADN) sans seuil d'effet strict et peuvent induire des mutations, des cancers ou des effets reprotoxiques transmissibles à long terme.\nA ❌ FAUX : La toxicité est fortement dépendante de l'individu (variabilité génétique des enzymes du métabolisme, âge, sexe, pathologies, état nutritionnel)."
    },

    // Q88 — UE2-OL-TOX-10 — Annales 2021-2022 Q48 : Risque, danger et impact sanitaire
    {
        "id": "UE2-OL-TOX-10",
        "text": "[Annales 2021-2022] À propos de l'exposition à des toxiques :",
        "options": {
            "A": "Le risque correspond à une probabilité d'exposition d'une population donnée.",
            "B": "Le danger correspond au risque en facteur de l'exposition.",
            "C": "Le danger correspond à la mise en évidence d'une toxicité potentielle d'un composé.",
            "D": "Selon le danger, l'exposition et la proportion de population exposée, un impact sanitaire pourra être établi.",
            "E": "Aucune des propositions ci-dessus n'est exacte."
        },
        "correctAnswers": ["C", "D"],
        "explanation": "C et D ✅ VRAIS :\n- C : Le DANGER est une propriété biologique intrinsèque à la molécule : il traduit sa capacité à induire un dommage ou un effet toxique (cancérogène, neurotoxique, reprotoxique).\n- D : L'impact sanitaire sur une collectivité résulte de la combinaison du risque individuel et de l'effectif ou de la proportion de la population exposée (Impact sanitaire = Risque × Population exposée).\nA et B ❌ FAUX :\n- A : Le RISQUE est la probabilité d'occurrence d'un effet néfaste chez un individu ou une population résultant de l'exposition à un danger donné.\n- B : L'équation fondamentale est : RISQUE = DANGER × EXPOSITION. Sans exposition, le risque est nul quel que soit le danger intrinsèque."
    },

    // Q89 — UE2-OL-TOX-11 — Annales 2021-2022 Q49 : Toxicocinétique & élimination
    {
        "id": "UE2-OL-TOX-11",
        "text": "[Annales 2021-2022] À propos de la toxicocinétique :",
        "options": {
            "A": "Les principales voies d'absorption lors d'intoxication aiguë sont les voies digestives, pulmonaires et cutanées.",
            "B": "La toxicité chronique d'un composé peut être liée à un volume de distribution élevé.",
            "C": "La métabolisation de xénobiotiques est une voie de détoxification.",
            "D": "Les bases faibles excrétées par les glomérules rénaux sont fortement réabsorbées lors de l'acidification des urines.",
            "E": "Aucune des propositions ci-dessus n'est exacte."
        },
        "correctAnswers": ["A", "B", "C"],
        "explanation": "A, B et C ✅ VRAIS :\n- A : L'ingestion (voie digestive), l'inhalation (voie pulmonaire) et la voie cutanée (contact percutané) représentent les 3 voies d'absorption prépondérantes lors d'intoxications aiguës.\n- B : Un volume de distribution (Vd) très grand reflète une haute lipophilie et une séquestration tissulaire (tissu adipeux), empêchant une clairance rapide et favorisant la bioaccumulation et la toxicité chronique.\n- C : La métabolisation (phases I et II) est le mécanisme physiologique protecteur majeur de détoxification et d'élimination (même si des bioactivations peuvent survenir).\nD ❌ FAUX : À pH acide, une BASE FAIBLE se protonise sous forme ionisée (BH+). Sous cette forme chargée hydrophile, elle ne franchit plus les membranes des tubules par diffusion passive et n'est donc PAS réabsorbée : elle est au contraire piégée et éliminée dans les urines (piégeage ionique)."
    },

    // Q90 — UE2-OL-TOX-12 — Annales 2021-2022 Q50 : Monitoring biologique
    {
        "id": "UE2-OL-TOX-12",
        "text": "[Annales 2021-2022] Concernant le monitoring biologique des xénobiotiques, il comprend le dosage :",
        "options": {
            "A": "Des toxiques dans les cheveux.",
            "B": "Des métabolites dans les urines.",
            "C": "De substances dans l'air exhalé.",
            "D": "De génotoxiques dans l'alimentation.",
            "E": "Aucune des propositions ci-dessus n'est exacte."
        },
        "correctAnswers": ["A", "B", "C"],
        "explanation": "A, B et C ✅ VRAIS :\n- A : Les cheveux permettent une analyse rétrospective d'exposition cumulative sur plusieurs semaines à plusieurs mois (métaux lourds, drogues, toxiques organiques).\n- B : L'urine est le milieu biologique non invasif standard pour doser les métabolites de phase I et de phase II éliminés.\n- C : L'air alvéolaire exhalé permet de quantifier les composés volatils (alcool, hydrocarbures aromatiques, solvants organiques).\nD ❌ FAUX : Le dosage de toxiques dans les denrées alimentaires relève du contrôle environnemental et de la sécurité sanitaire des aliments, et non du monitoring biologique qui est réalisé exclusivement sur des échantillons d'origine humaine."
    },

    // Q91 — UE2-OL-TOX-13 — Annales 2021-2022 Q51 : Métabolisme de phase I et phase II
    {
        "id": "UE2-OL-TOX-13",
        "text": "[Annales 2021-2022] Concernant le métabolisme des xénobiotiques :",
        "options": {
            "A": "Les réactions d'hydrolyse font partie de la phase I.",
            "B": "Les réactions de transfert font partie de la phase II.",
            "C": "La sulfoconjugaison est une réaction de phase I.",
            "D": "L'acétylation est une réaction de phase II.",
            "E": "Aucune des propositions ci-dessus n'est exacte."
        },
        "correctAnswers": ["A", "B", "D"],
        "explanation": "A, B et D ✅ VRAIS :\n- A : Les hydrolyses (par les estérases, peptidases, époxyde hydrolases) sont des réactions de fonctionnalisation de phase I.\n- B : Les réactions catalysées par des transférases (SULT, UGT, GST, NAT) sont les réactions de conjugaison caractéristiques de la phase II.\n- D : L'acétylation (catalysée par les N-acétyltransférases NAT1 et NAT2) est une réaction de conjugaison de phase II.\nC ❌ FAUX : La sulfoconjugaison (catalysée par les sulfotransférases SULT) est une réaction de PHASE II (et non de phase I)."
    },

    // Q92 — UE2-OL-TOX-14 — Annales 2021-2022 Q52 : Toxicité du paracétamol
    {
        "id": "UE2-OL-TOX-14",
        "text": "[Annales 2021-2022] À propos de la toxicité du paracétamol :",
        "options": {
            "A": "La toxicité du paracétamol implique sa bioactivation.",
            "B": "Le métabolite toxique du paracétamol est le glutathion.",
            "C": "La détoxification du paracétamol passe par la formation de N-Acétyl ParabenzoQuinone-Imine.",
            "D": "La métabolisation du paracétamol induit la production d'espèces réactives oxygénées.",
            "E": "Aucune des propositions ci-dessus n'est exacte."
        },
        "correctAnswers": ["A"],
        "explanation": "A ✅ VRAI : Le paracétamol est un toxique indirect qui nécessite une bioactivation hépatique par les cytochromes P450 (principalement CYP2E1) pour être oxydé en un métabolite électrophile très toxique : le NAPQI (N-acétyl-p-benzoquinone imine).\nB, C, D et E ❌ FAUX :\n- B : Le glutathion (GSH) n'est pas le métabolite toxique, c'est la molécule protectrice hépatocytaire qui neutralise le NAPQI par conjugaison.\n- C : Le NAPQI est précisément le métabolite toxique nécrosant ; sa production correspond à la voie toxique et non à la détoxification.\n- D : L'événement primaire cytotoxique est la déplétion complète des stocks hépatiques de glutathion par liaison au NAPQI suivie de la liaison covalente du NAPQI aux protéines et macromolécules cellulaires."
    },

    // Q93 — UE2-OL-TOX-15 — Annales 2022-2023 Q25 : Exposition aux xénobiotiques & P-gp
    {
        "id": "UE2-OL-TOX-15",
        "text": "[Annales 2022-2023] Concernant l'exposition aux xénobiotiques :",
        "options": {
            "A": "Les principales voies d'absorption lors d'intoxication aiguë sont les voies digestives, pulmonaires et cutanées.",
            "B": "La diffusion passive dépend de la liposolubilité et du gradient de concentration.",
            "C": "La diffusion des acides faibles est favorisée à pH acide.",
            "D": "La distribution dans les graisses des molécules lipophiles diminue leur probabilité de bioaccumulation.",
            "E": "Les protéines de transport d'efflux telles que la P-gp diminuent la distribution tissulaire des xénobiotiques."
        },
        "correctAnswers": ["A", "B", "C", "E"],
        "explanation": "A, B, C et E ✅ VRAIS :\n- A : Ce sont les trois voies majeures d'absorption en toxicologie aiguë.\n- B : La diffusion passive transmembranaire simple est régie par la loi de Fick (gradient de concentration et liposolubilité / coefficient de partage).\n- C : À pH acide, un acide faible est sous forme non ionisée (AH), liposoluble et apolaire, ce qui favorise son passage transmembranaire passif.\n- E : Les pompes d'efflux actives de la famille ABC (comme la P-glycoprotéine / P-gp) rejettent les molécules vers le milieu extracellulaire (lumière intestinale, capillaires sanguins cérébraux, canalicules biliaires), réduisant ainsi leur imprégnation et distribution dans les tissus cibles.\nD ❌ FAUX : La séquestration des composés lipophiles dans le tissu adipeux AUGMENTE considérablement leur rétention corporelle, leur temps de demi-vie et leur bioaccumulation (ex: polluants organiques persistants)."
    },

    // Q94 — UE2-OL-TOX-16 — Annales 2022-2023 Q26 : Composés toxiques, synergie et inducteurs
    {
        "id": "UE2-OL-TOX-16",
        "text": "[Annales 2022-2023] À propos des composés toxiques :",
        "options": {
            "A": "La toxicité peut résulter de l'effet synergique de l'exposition à plusieurs composés à des doses individuelles non dangereuses.",
            "B": "Les inducteurs enzymatiques induisent une métabolisation accrue des xénobiotiques.",
            "C": "La biotransformation des substances environnementales peut conduire à la formation de composés toxiques.",
            "D": "L'additivité des effets de deux substances toxiques exacerbe moins l'effet toxique que la synergie.",
            "E": "Le benzopyrène est une substance produite par métabolisation du paracétamol."
        },
        "correctAnswers": ["A", "B", "C", "D"],
        "explanation": "A, B, C et D ✅ VRAIS :\n- A : L'effet cocktail / synergie permet à plusieurs molécules combinées de franchir le seuil de nocivité même si chacune est individuellement présente à une dose inférieure à sa dose sans effet observable (NOAEL).\n- B : L'induction enzymatique (synthèse accrue d'enzymes comme les CYP450) augmente la vitesse de biotransformation des substrats.\n- C : La bioactivation hépatique ou extra-hépatique peut convertir un polluant environnemental bénin en un métabolite hautement réactif toxique ou cancérigène.\n- D : L'additivité équivaut à la somme mathématique des effets (1 + 1 = 2), alors que la synergie démultiplie l'effet (1 + 1 > 2) ; elle exacerbe donc bien plus la réponse toxique globale.\nE ❌ FAUX : Le benzo[a]pyrène est un polluant environnemental classique (hydrocarbure aromatique polycyclique de combustion) ; il n'a aucun lien métabolique avec le paracétamol dont le métabolite réactif est le NAPQI."
    },

    // Q95 — UE2-OL-TOX-17 — Annales 2022-2023 Q27 : Toxicologie expérimentale, AOP & enfants
    {
        "id": "UE2-OL-TOX-17",
        "text": "[Annales 2022-2023] À propos de la toxicologie expérimentale :",
        "options": {
            "A": "La dose maximale pour laquelle aucun effet toxique ou nocif n'est observé (NOAEL) est évaluée.",
            "B": "La dose maximale pour laquelle un effet toxique est observé (LOAEL) est évaluée.",
            "C": "La toxicologie étudie les voies de signalisations pouvant induire des dommages cellulaires ou tissulaires induits par les toxiques (adverse outcome pathway).",
            "D": "La toxicologie s'intéresse à l'exposition chez les sujets sensibles, enfants, femmes enceintes et personnes âgées.",
            "E": "Les intoxications chez l'enfant sont fréquemment liées à l'ingestion accidentelle de liquides."
        },
        "correctAnswers": ["A", "C", "D", "E"],
        "explanation": "A, C, D et E ✅ VRAIS :\n- A : La détermination du NOAEL (dose sans effet adverse observable) est un paramètre central de la toxicologie réglementaire et de sécurité.\n- C : Les AOP (Adverse Outcome Pathways) décrivent la chaîne causale d'événements reliant la cible moléculaire initiale aux altérations cellulaires, tissulaires et à la toxicité au niveau de l'organisme entier.\n- D : Les populations vulnérables (pédiatrie, grossesse, gériatrie) possèdent des spécificités toxicocinétiques majeures nécessitant des facteurs de sécurité particuliers.\n- E : L'ingestion accidentelle de produits liquides domestiques (détergents, solvants, eau de Javel) est la cause la plus fréquente d'intoxication pédiatrique aiguë.\nB ❌ FAUX : Le LOAEL est la dose MINIMALE (et non maximale) pour laquelle un premier effet indésirable est statistiquement observé."
    }

];

window.ALL_QCM_DATA["UE2"] = window.DATA_UE2;



