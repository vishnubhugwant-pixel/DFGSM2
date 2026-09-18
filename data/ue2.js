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

];

window.ALL_QCM_DATA["UE2"] = window.DATA_UE2;
