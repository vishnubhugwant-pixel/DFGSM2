// ============================================================
// Grimoire Médical — Données QCM : UE6 Immunologie
// ============================================================

window.ALL_QCM_DATA = window.ALL_QCM_DATA || {};
window.DATA_UE6 = [
    // ============================================================
    // MODULE 1 : PHYSIOLOGIE DU SYSTÈME IMMUNITAIRE
    // Cours : Circulation des cellules immunitaires
    // Enseignant : Dr Franck Ah-Pine (12 QCMs : indices 0 à 12)
    // ============================================================
    {
        "id": "UE6-AH-01",
        "text": "Cas clinique : Un homme de 45 ans consulte pour une douleur, une rougeur et un gonflement progressif au niveau de la jambe droite, apparus depuis 48 heures, suite à une coupure au niveau du pied. Il présente une fièvre et quelques adénopathies inguinales. Un érysipèle est suspecté (dermo-hypodermite aiguë bactérienne).\n\nQuelles sont les premières cellules immunitaires circulantes recrutées sur le site de la coupure ?",
        "options": {
            "A": "Les monocytes",
            "B": "Les polynucléaires neutrophiles",
            "C": "Les plasmocytes",
            "D": "Les lymphocytes T",
            "E": "Les cellules dendritiques"
        },
        "correctAnswers": ["B"],
        "explanation": "B VRAI : Les polynucléaires neutrophiles (PNN) sont les premières cellules recrutées et qui vont migrer vers le site lésionnel. Sur une NFS en cas d'inflammation aiguë bactérienne, ce sont les PNN qui augmentent en premier.\nA FAUX : Les monocytes sont recrutés dans un second temps (au bout de 24h) avec les lymphocytes.\nC FAUX : Les plasmocytes restent au niveau des organes lymphoïdes secondaires (ganglions) pour sécréter les anticorps.\nE FAUX : Les cellules dendritiques résident dans les tissus cutanés (cellules de Langerhans) et ne circulent pas dans le sang ; elles migreront vers le ganglion dans un second temps."
    },
    {
        "id": "UE6-AH-02",
        "text": "Par quel mécanisme les polynucléaires neutrophiles quittent-ils les vaisseaux sanguins pour rejoindre le site de l'infection dans ce cas ?",
        "options": {
            "A": "Le chimiotactisme",
            "B": "La diapédèse",
            "C": "La margination",
            "D": "L'activation des leucocytes",
            "E": "La phagocytose"
        },
        "correctAnswers": ["B"],
        "explanation": "B VRAI : La diapédèse est le processus actif par lequel les leucocytes franchissent la paroi endothéliale vasculaire pour gagner les tissus enflammés.\nA FAUX : Le chimiotactisme est le guidage directionnel selon un gradient de concentration de chimioattractants une fois dans le tissu.\nC FAUX : La margination n'est que la première étape de la diapédèse."
    },
    {
        "id": "UE6-AH-03",
        "text": "Quelle est la première étape de la diapédèse lors du recrutement des polynucléaires neutrophiles ?",
        "options": {
            "A": "L'adhésion forte",
            "B": "La sécrétion de cytokines",
            "C": "La margination",
            "D": "La phagocytose",
            "E": "La dégranulation"
        },
        "correctAnswers": ["C"],
        "explanation": "C VRAI : La première étape est la margination (ralentissement et roulement des leucocytes le long de l'endothélium via les sélectines), suivie de l'activation, de l'adhésion forte (intégrines) et de la transmigration.\nB FAUX : La sécrétion de cytokines n'est pas une étape de la diapédèse à proprement parler."
    },
    {
        "id": "UE6-AH-04",
        "text": "Quel type de molécule favorise l'adhésion des polynucléaires neutrophiles à l'endothélium pendant la diapédèse ?",
        "options": {
            "A": "Les intégrines",
            "B": "Les immunoglobulines",
            "C": "Les histamines",
            "D": "Les anticorps",
            "E": "Le complément"
        },
        "correctAnswers": ["A"],
        "explanation": "A VRAI : Les intégrines leucocytaires (ex: LFA-1 / Mac-1) interagissent avec les molécules d'adhésion endothéliales (ICAM-1) pour permettre l'adhésion forte et l'arrêt du roulement.\nB & D FAUX : Les immunoglobulines sont les anticorps circulants.\nC FAUX : L'histamine est une amine vasoactive libérée par les mastocytes/basophiles (allergie/vasodilatation).\nE FAUX : Le complément participe à l'opsonisation, à la lyse membranaire et au chimiotactisme (C5a), mais pas directement à l'adhésion cellulaire endothéliale."
    },
    {
        "id": "UE6-AH-05",
        "text": "Dans ce cas d'infection cutanée, comment les polynucléaires neutrophiles sont-ils attirés vers le site de l'infection ?",
        "options": {
            "A": "La migration contrôlée",
            "B": "Le chimiotactisme",
            "C": "La pression osmotique",
            "D": "L'invasion cellulaire",
            "E": "L'endocytose"
        },
        "correctAnswers": ["B"],
        "explanation": "B VRAI : Le chimiotactisme est le déplacement orienté des cellules immunitaires le long d'un gradient de facteurs chimiotactiques (chimiokines comme IL-8/CXCL8, peptides bactériens fMLP, fractions du complément C5a, leucotriène B4)."
    },
    {
        "id": "UE6-AH-06",
        "text": "En dehors des polynucléaires neutrophiles, quelle(s) cellule(s) immunitaire(s) peuv(ent) migrer à travers la paroi vasculaire ?",
        "options": {
            "A": "Mastocytes",
            "B": "Lymphocyte",
            "C": "Monocyte",
            "D": "Macrophage",
            "E": "Cellule dendritique"
        },
        "correctAnswers": ["B", "C"],
        "explanation": "B & C VRAI : Les lymphocytes et les monocytes sont des cellules sanguines circulantes capables de réaliser la diapédèse à travers la paroi vasculaire pour rejoindre les tissus.\nA FAUX : Les mastocytes sont des cellules résidant dans les tissus conjonctifs, ils ne circulent pas dans le sang.\nD FAUX : Les macrophages ne circulent pas dans le sang ; ce sont les monocytes sanguins qui se différencient en macrophages une fois entrés dans les tissus.\nE FAUX : Les cellules dendritiques conventionnelles sont résidentes dans les tissus et rejoignent les ganglions par voie lymphatique (pas par diapédèse depuis le sang)."
    },
    {
        "id": "UE6-AH-07",
        "text": "Sur le site inflammatoire, d'où proviennent les macrophages ?",
        "options": {
            "A": "Des macrophages tissulaires résidents",
            "B": "Des monocytes circulants dans le sang",
            "C": "Des macrophages circulants dans le sang",
            "D": "Des monocytes tissulaires résidents"
        },
        "correctAnswers": ["A", "B"],
        "explanation": "A & B VRAI : Les macrophages sur site proviennent de deux sources : la prolifération/activation des macrophages résidents déjà présents dans le tissu, et le recrutement massif de monocytes sanguins circulants qui s'infiltrent et se différencient en macrophages inflammatoires.\nC FAUX : Il n'existe pas de macrophages circulants dans le sang (ce sont des monocytes).\nD FAUX : Il n'y a pas de monocytes résidents tissulaires."
    },
    {
        "id": "UE6-AH-08",
        "text": "Quel est le rôle des macrophages au site de l'infection dans ce cas ?",
        "options": {
            "A": "Libérer des histamines",
            "B": "Présenter les antigènes aux lymphocytes B",
            "C": "Phagocyter les débris cellulaires et les bactéries",
            "D": "Produire les anticorps spécifiques contre les bactéries",
            "E": "Libérer de l'IL-10 pour stimuler les neutrophiles"
        },
        "correctAnswers": ["B", "C"],
        "explanation": "B & C VRAI : Les macrophages sont d'actifs phagocytes (élimination des bactéries et débris nécrotiques) et sont des Cellules Présentatrices d'Antigènes (CPA) capables d'activer les lymphocytes.\nA FAUX : Ce sont les mastocytes et polynucléaires basophiles qui libèrent l'histamine.\nD FAUX : Ce sont les plasmocytes (dérivés des lymphocytes B) qui produisent les anticorps, jamais les macrophages !"
    },
    {
        "id": "UE6-AH-09",
        "text": "Afin d'initier la réponse immunitaire adaptative, quelle cellule immunitaire est spécialisée dans la capture d'antigènes et leur présentation aux lymphocytes B et T ?",
        "options": {
            "A": "Polynucléaires neutrophiles",
            "B": "Cellule dendritique",
            "C": "Plasmocyte",
            "D": "Lymphocyte T auxiliaire",
            "E": "Mastocyte"
        },
        "correctAnswers": ["B"],
        "explanation": "B VRAI : La cellule dendritique (CPA professionnelle par excellence) capture les antigènes sur le site périphérique de l'infection, mature et migre vers les organes lymphoïdes secondaires pour activer les lymphocytes T naïfs et initier la réponse adaptative."
    },
    {
        "id": "UE6-AH-10",
        "text": "Dans quelle structure principale les cellules dendritiques présentent-elles l'antigène aux lymphocytes ?",
        "options": {
            "A": "Moelle hématopoïétique",
            "B": "Rate",
            "C": "Thymus",
            "D": "Ganglion lymphatique",
            "E": "Circulation lymphatique"
        },
        "correctAnswers": ["D"],
        "explanation": "D VRAI : Les cellules dendritiques migrent depuis le tissu infecté vers les ganglions lymphatiques de drainage (organe lymphoïde secondaire) où se concentrent les lymphocytes T et B naïfs pour la présentation antigénique."
    },
    {
        "id": "UE6-AH-11",
        "text": "Comment les cellules dendritiques migrent-elles du site inflammatoire jusqu'aux ganglions ?",
        "options": {
            "A": "Par le système vasculaire lymphatique",
            "B": "Par le système vasculaire sanguin",
            "C": "Par les séreuses",
            "D": "Par le système nerveux périphérique"
        },
        "correctAnswers": ["A"],
        "explanation": "A VRAI : Les tissus sont drainés par des vaisseaux lymphatiques afférents. La cellule dendritique gagne directement ce réseau lymphatique afférent qui l'amène au ganglion de drainage. Il n'y a pas d'intermédiaire sanguin."
    },
    {
        "id": "UE6-AH-12",
        "text": "Comment les lymphocytes T activés dans les ganglions rejoignent-ils le site lésionnel ?",
        "options": {
            "A": "Par le système vasculaire lymphatique",
            "B": "Par le système vasculaire sanguin",
            "C": "Par diapédèse",
            "D": "Par diffusion passive à travers les tissus",
            "E": "Par migration active dans les vaisseaux lymphatiques jusqu'au site lésionnel"
        },
        "correctAnswers": ["A", "B", "C"],
        "explanation": "A, B & C VRAI : Trajet complet expliqué par le Dr Ah-Pine :\n1. Sortie du ganglion par le vaisseau lymphatique efférent (A) jusqu'au canal thoracique.\n2. Arrivée dans la grande circulation sanguine (B) qui distribue les lymphocytes dans tout l'organisme.\n3. Diapédèse (C) au niveau des veinules post-capillaires du site enflammé pour pénétrer dans le tissu lésé !"
    },

    // ============================================================
    // MODULE 2 : ORGANES ET CELLULES DE L'IMMUNITÉ
    // Enseignant : Pr Lefebvre d'Hellencourt
    // SÉRIE 1 : ANNALES 2021-2022 (5 QCMs : indices 12 à 17)
    // ============================================================
    {
        "id": "UE6-LEF-21-01",
        "text": "[Annales 2021-2022] Quelles sont les caractéristiques des lymphocytes, observables sur un frottis sanguin après coloration ?",
        "options": {
            "A": "Cellules ayant un cytoplasme très développé",
            "B": "Petites cellules avec très peu de cytoplasme",
            "C": "Distinction aisée entre lymphocytes B et lymphocytes T",
            "D": "Cellules anucléées",
            "E": "Aucune des propositions ci-dessus n’est exacte."
        },
        "correctAnswers": ["B"],
        "explanation": "B VRAI : Les lymphocytes sont de petites cellules (7 à 10 µm) caractérisées par un rapport nucléocytoplasmique (RNC) très élevé : un gros noyau rond et condensé occupant la quasi-totalité de la cellule, entouré d'une mince couronne cytoplasmique basophile.\nA FAUX : Le cytoplasme est très réduit.\nC FAUX : Les lymphocytes B et T ont une morphologie strictement identique au microscope optique standard (la distinction requiert un immunophénotypage par cytométrie avec CD19/CD20 pour les B et CD3 pour les T).\nD FAUX : Les lymphocytes possèdent un noyau volumineux (seules les hématies et plaquettes sont anucléées)."
    },
    {
        "id": "UE6-LEF-21-02",
        "text": "[Annales 2021-2022] Le thymus :",
        "options": {
            "A": "a un poids constant au cours de la vie.",
            "B": "comprend un cortex et une médulla.",
            "C": "comprend un cortex riche en lymphocyte B.",
            "D": "intervient dans la sélection positive des lymphocytes B.",
            "E": "intervient dans la sélection négative des lymphocytes B."
        },
        "correctAnswers": ["B"],
        "explanation": "B VRAI : Le lobule thymique est structuré en deux zones : un cortex périphérique dense en thymocytes et une médulla centrale plus claire.\nA FAUX : Le thymus n'a pas un poids constant : il se développe jusqu'à la puberté puis subit une involution adipeuse physiologique progressive à l'âge adulte.\nC, D & E FAUX : Le thymus est l'organe lymphoïde primaire exclusif des lymphocytes T (pas B !). Les thymocytes subissent la sélection positive dans le cortex, puis la sélection négative dans la médulla."
    },
    {
        "id": "UE6-LEF-21-03",
        "text": "[Annales 2021-2022] Les ganglions lymphatiques :",
        "options": {
            "A": "ont un cortex riche en lymphocytes B.",
            "B": "ont un paracortex riche en macrophages et plasmocytes.",
            "C": "sont reliés à la circulation lymphatique.",
            "D": "sont reliés à la circulation sanguine.",
            "E": "sont des organes lymphoïdes primaires."
        },
        "correctAnswers": ["A", "C", "D"],
        "explanation": "A VRAI : Le cortex ganglionnaire superficiel est la zone B-dépendante, organisée en follicules lymphoïdes (primaires et secondaires avec centres germinatifs).\nC & D VRAI : Les ganglions sont branchés sur la circulation lymphatique (vaisseaux afférents et efférents) ET sur la circulation sanguine (veinules à endothélium épais HEV permettant l'entrée des lymphocytes naïfs).\nB FAUX : Le paracortex est la zone T-dépendante. Les macrophages et plasmocytes siègent essentiellement dans la médulla.\nE FAUX : Les ganglions sont des organes lymphoïdes secondaires (périphériques)."
    },
    {
        "id": "UE6-LEF-21-04",
        "text": "[Annales 2021-2022] La rate :",
        "options": {
            "A": "a un cortex riche en lymphocytes B.",
            "B": "a un paracortex riche en macrophages et plasmocytes.",
            "C": "est reliée à la circulation lymphatique.",
            "D": "est reliée à la circulation sanguine.",
            "E": "est un organe lymphoïde primaire."
        },
        "correctAnswers": ["D"],
        "explanation": "D VRAI : La rate filtre directement le sang et est branchée exclusivement sur la circulation sanguine (artère et veine spléniques).\nA & B FAUX : La rate ne possède ni cortex ni paracortex (termes propres aux ganglions). Elle est structurée en pulpe rouge (filtration érythrocytaire) et pulpe blanche (zone lymphoïde : manchons PALS pour les LT et follicules pour les LB).\nC FAUX : La rate ne possède aucun vaisseau lymphatique afférent.\nE FAUX : C'est un organe lymphoïde secondaire."
    },
    {
        "id": "UE6-LEF-21-05",
        "text": "[Annales 2021-2022] Les tissus lymphoïdes associés au tube digestif (GALT) :",
        "options": {
            "A": "possèdent des cellules M spécialisées dans le transport d’Antigène.",
            "B": "ont des centres germinatifs.",
            "C": "comprennent un cortex riche en lymphocyte B.",
            "D": "interviennent dans la sélection négative des lymphocytes B.",
            "E": "interviennent dans la sélection négative des lymphocytes T."
        },
        "correctAnswers": ["A", "B"],
        "explanation": "A VRAI : Les cellules M (Microfold) de l'épithélium associé aux follicules (plaques de Peyer) réalisent la capture et la transcytose des antigènes de la lumière digestive vers le tissu sous-jacent.\nB VRAI : En tant que tissu lymphoïde secondaire, le GALT possède des follicules avec des centres germinatifs lors des stimulations antigéniques.\nC FAUX : Le GALT n'a pas d'architecture cortico-médullaire.\nD & E FAUX : La sélection négative centrale se fait uniquement dans les organes primaires (moelle et thymus)."
    },

    // ============================================================
    // MODULE 2 : ORGANES ET CELLULES DE L'IMMUNITÉ
    // Enseignant : Pr Lefebvre d'Hellencourt
    // SÉRIE 2 : ANNALES 2020-2021 (4 QCMs : indices 17 à 21)
    // ============================================================
    {
        "id": "UE6-LEF-20-01",
        "text": "[Annales 2020-2021] Les ganglions lymphatiques :",
        "options": {
            "A": "ont un cortex riche en lymphocytes B.",
            "B": "ont un paracortex riche en macrophages et plasmocytes.",
            "C": "sont reliés à la circulation lymphatique.",
            "D": "sont reliés à la circulation sanguine.",
            "E": "sont des organes lymphoïdes primaires."
        },
        "correctAnswers": ["A", "C", "D"],
        "explanation": "A, C & D VRAI : Le cortex contient les follicules de lymphocytes B. Les ganglions sont reliés à la fois à la circulation lymphatique (afférente et efférente) et à la circulation sanguine (veinules HEV). Le paracortex est la zone T (pas de plasmocytes) et ce sont des organes secondaires."
    },
    {
        "id": "UE6-LEF-20-02",
        "text": "[Annales 2020-2021] Chez l’homme, la moelle osseuse :",
        "options": {
            "A": "est l'organe producteur des cellules souches des cellules du système immunitaire.",
            "B": "est un organe lymphoïde secondaire ou périphérique.",
            "C": "est l'organe à l'intérieur duquel les lymphocytes T acquièrent leur immunocompétence.",
            "D": "est l'organe à l'intérieur duquel s'accumulent les lymphocytes B matures dans l'attente de leur rencontre avec l'antigène.",
            "E": "est l'organe où les lymphocytes B effectuent leur maturation."
        },
        "correctAnswers": ["A", "E"],
        "explanation": "A & E VRAI : La moelle osseuse assure l'hématopoïèse (production de toutes les cellules souches immunitaires) et la lymphopoïèse B (maturation et sélection centrale des LB). C'est un organe lymphoïde primaire (B faux). Les LT acquièrent leur immunocompétence dans le thymus (C faux). Les LB matures s'accumulent dans les organes secondaires (D faux)."
    },
    {
        "id": "UE6-LEF-20-03",
        "text": "[Annales 2020-2021] La variolisation :",
        "options": {
            "A": "est toujours utilisée.",
            "B": "est un autre nom de la vaccination.",
            "C": "provoque une mortalité d’environ 20%.",
            "D": "a permis l’éradication de la variole.",
            "E": "correspond à une inoculation de variole."
        },
        "correctAnswers": ["E"],
        "explanation": "E VRAI : La variolisation consistait en l'inoculation délibérée de virus variolique humain prélevé sur une pustule. Elle a été remplacée par la vaccination jennérienne (qui a permis l'éradication en 1980). La mortalité de la variolisation était de 1-2% (contre 20-30% pour la variole naturelle)."
    },
    {
        "id": "UE6-LEF-20-04",
        "text": "[Annales 2020-2021] Le thymus :",
        "options": {
            "A": "a un poids qui évolue au cours de la vie.",
            "B": "comprend un cortex et une médulla.",
            "C": "comprend un cortex riche en lymphocyte B.",
            "D": "intervient dans la sélection positive des lymphocytes B.",
            "E": "intervient dans la sélection négative des lymphocytes B."
        },
        "correctAnswers": ["A", "B"],
        "explanation": "A & B VRAI : Le poids thymique évolue au cours de la vie (développement chez l'enfant puis involution adipeuse physiologique après la puberté). Il comprend un cortex périphérique et une médulla centrale. Il est exclusivement dévolu aux lymphocytes T (pas B !)."
    },

    // ============================================================
    // MODULE 2 : ORGANES ET CELLULES DE L'IMMUNITÉ
    // Enseignant : Pr Lefebvre d'Hellencourt
    // SÉRIE 3 : ANNALES 2019-2020 (2 QCMs : indices 21 à 23)
    // ============================================================
    {
        "id": "UE6-LEF-19-01",
        "text": "[Annales 2019-2020] Un ganglion lymphatique :",
        "options": {
            "A": "n’est relié qu’à la circulation sanguine.",
            "B": "n’est relié qu’au système lymphatique.",
            "C": "est le lieu de développement des lymphocytes T.",
            "D": "est un lieu de rencontre entre une cellule présentatrice d’Antigène et des lymphocytes naïfs.",
            "E": "est relié à la circulation sanguine et au système lymphatique."
        },
        "correctAnswers": ["D", "E"],
        "explanation": "D & E VRAI : Le ganglion est relié à la lymphe (afférente/efférente) et au sang (veinules HEV). Il constitue le site stratégique de rencontre entre les CPA et les lymphocytes naïfs pour lancer la réponse adaptative."
    },
    {
        "id": "UE6-LEF-19-02",
        "text": "[Annales 2019-2020] Chez l’homme, la moelle osseuse :",
        "options": {
            "A": "est l'organe producteur des cellules souches des cellules du système immunitaire.",
            "B": "est un organe lymphoïde secondaire ou périphérique.",
            "C": "est l'organe à l'intérieur duquel les lymphocytes T acquièrent leur immunocompétence.",
            "D": "est l'organe à l'intérieur duquel s'accumulent les lymphocytes B matures dans l'attente de leur rencontre avec l'antigène.",
            "E": "est l'organe où les lymphocytes B effectuent leur maturation."
        },
        "correctAnswers": ["A", "E"],
        "explanation": "A & E VRAI : Organe lymphoïde primaire produisant les cellules souches hématopoïétiques et assurant la maturation des lymphocytes B."
    },

    // ============================================================
    // MODULE 2 : ORGANES ET CELLULES DE L'IMMUNITÉ
    // Enseignant : Pr Lefebvre d'Hellencourt
    // SÉRIE 4 : ANNALES 2017-2019 (4 QCMs : indices 23 à 27)
    // ============================================================
    {
        "id": "UE6-LEF-17-01",
        "text": "[Annales 2017-2018] Quelles sont les caractéristiques des lymphocytes, observables sur un frottis sanguin après coloration ?",
        "options": {
            "A": "Cellules ayant un cytoplasme très développé",
            "B": "Petites cellules avec très peu de cytoplasme",
            "C": "Distinction aisée entre lymphocytes B et lymphocytes T",
            "D": "Cellules anucléées",
            "E": "Aucune des propositions ci-dessus n’est exacte."
        },
        "correctAnswers": ["B"],
        "explanation": "B VRAI : Rapport nucléocytoplasmique très élevé (gros noyau, mince liséré de cytoplasme basophile). B et T sont morphologiquement identiques en microscopie standard."
    },
    {
        "id": "UE6-LEF-17-02",
        "text": "[Annales 2017-2018] Le thymus :",
        "options": {
            "A": "a un poids constant au cours de la vie.",
            "B": "comprend un cortex et une médulla.",
            "C": "comprend un cortex riche en lymphocyte B.",
            "D": "intervient dans la sélection positive des lymphocytes B.",
            "E": "intervient dans la sélection négative des lymphocytes B."
        },
        "correctAnswers": ["B"],
        "explanation": "B VRAI : Le thymus comprend un cortex et une médulla. Il involue après la puberté (poids non constant) et est dédié aux lymphocytes T."
    },
    {
        "id": "UE6-LEF-17-03",
        "text": "[Annales 2017-2018 / 2018-2019] Les ganglions lymphatiques :",
        "options": {
            "A": "ont un cortex riche en lymphocytes B.",
            "B": "ont un paracortex riche en macrophages et plasmocytes.",
            "C": "sont reliés à la circulation lymphatique.",
            "D": "sont reliés à la circulation sanguine.",
            "E": "sont des organes lymphoïdes primaires."
        },
        "correctAnswers": ["A", "C", "D"],
        "explanation": "A, C & D VRAI : Cortex = zone B (follicules). Reliés aux voies sanguines (HEV) et lymphatiques. Le paracortex est la zone T."
    },
    {
        "id": "UE6-LEF-17-04",
        "text": "[Annales 2018-2019] Chez l’homme, la moelle osseuse :",
        "options": {
            "A": "est l'organe producteur des cellules souches des cellules du système immunitaire.",
            "B": "est un organe lymphoïde secondaire ou périphérique.",
            "C": "est l'organe à l'intérieur duquel les lymphocytes T acquièrent leur immunocompétence.",
            "D": "est l'organe à l'intérieur duquel s'accumulent les lymphocytes B matures dans l'attente de leur rencontre avec l'antigène.",
            "E": "est l'organe où les lymphocytes B effectuent leur maturation."
        },
        "correctAnswers": ["A", "E"],
        "explanation": "A & E VRAI : Lieu d'hématopoïèse et de maturation centrale des lymphocytes B."
    },

    // ============================================================
    // MODULE : IMMUNOLOGIE
    // Cours : Immunité Innée : Les mécanismes effecteurs
    // Enseignant : Pr Hoarau (5 QCMs : indices 27 à 32)
    // ============================================================
    {
        "id": "UE6-HOA-01",
        "text": "QCM 1 : Hématopoïèse et cellules du système immunitaire\n\nQuelles sont les propositions exactes ?",
        "options": {
            "A": "Après la naissance, la production des cellules souches hématopoïétiques (CSH) se fait principalement dans le foie et la rate.",
            "B": "Les CSH sont des cellules totipotentes capables de se différencier en n'importe quel type tissulaire.",
            "C": "À leur sortie de la moelle osseuse, les cellules de la lignée myéloïde sont généralement matures, fonctionnelles et prêtes à participer à la réponse immunitaire.",
            "D": "Les lymphocytes T quittent la moelle osseuse à un stade de progéniteur et doivent migrer vers un organe lymphoïde secondaire pour achever leur maturation.",
            "E": "Les lymphocytes NK, bien qu'agissant dans l'immunité innée, dérivent de la lignée lymphoïde."
        },
        "correctAnswers": ["C", "E"],
        "explanation": "C & E VRAI :\nC : Contrairement aux lymphocytes, les cellules myéloïdes (neutrophiles, monocytes, etc.) sortent matures et directement fonctionnelles de la moelle.\nE : Les NK dérivent du progéniteur lymphoïde commun mais agissent comme effecteurs de l'immunité innée (sans réarrangement génique de récepteur spécifique).\nA FAUX : Dès la naissance, l'hématopoïèse siège dans la moelle osseuse (os plats et courts). Le foie et la rate n'interviennent que pendant l'hématopoïèse fœtale.\nB FAUX : Les CSH sont multipotentes (donnent toutes les lignées sanguines), pas totipotentes (seul le zygote est totipotent).\nD FAUX : Les progéniteurs T migrent vers un organe primaire (le thymus), et non secondaire, pour leur maturation."
    },
    {
        "id": "UE6-HOA-02",
        "text": "QCM 2 : Cinétique et étapes de la réponse immunitaire\n\nQuelles sont les propositions exactes ?",
        "options": {
            "A": "La réponse immunitaire adaptative vient remplacer la réponse immunitaire innée une fois que celle-ci a initié le processus.",
            "B": "La première étape de la réponse innée (0-4h) fait principalement intervenir des effecteurs spécifiques préformés pour neutraliser le pathogène.",
            "C": "Si une infection est maîtrisée dans un délai inférieur à 4 jours, la réponse immunitaire adaptative n'est généralement pas mobilisée.",
            "D": "Les cellules présentatrices d'antigènes (CPA) quittent le foyer inflammatoire pour rejoindre les organes lymphoïdes primaires afin d'activer les lymphocytes.",
            "E": "Contrairement à la réponse adaptative, la réponse innée est stéréotypée : son efficacité n'augmente pas lors d'une seconde rencontre avec le même pathogène."
        },
        "correctAnswers": ["B", "C", "E"],
        "explanation": "B, C & E VRAI :\nB : La phase immédiate (0-4h) repose sur des effecteurs préexistants/préformés (complément, barrières, lysozyme).\nC : La réponse adaptative nécessite un stimulus prolongé ou intense (> 96 heures soit > 4 jours) pour être pleinement activée.\nE : L'immunité innée est stéréotypée et dépourvue de mémoire immunologique adaptative classique.\nA FAUX : L'immunité adaptative ne remplace pas l'innée, elles agissent en synergie et se potentialisent mutuellement.\nD FAUX : Les CPA migrent vers les organes lymphoïdes secondaires (ganglions, rate) pour rencontrer les lymphocytes naïfs."
    },
    {
        "id": "UE6-HOA-03",
        "text": "QCM 3 : Récepteurs et reconnaissance dans l'immunité innée\n\nQuelles sont les propositions exactes ?",
        "options": {
            "A": "Les PRR (Pathogen Recognition Receptors) ne reconnaissent que des motifs appartenant à des micro-organismes étrangers (PAMPs).",
            "B": "Les DAMPs (Danger/Damage Associated Molecular Patterns) incluent notamment les signaux émis par des cellules apoptotiques ou des protéines anormales (prions, amyloïde).",
            "C": "La reconnaissance d'une cellule apoptotique et celle d'une bactérie pathogène par les PRR activeront exactement les mêmes voies de signalisation intracellulaire.",
            "D": "Les lymphocytes NK reconnaissent spécifiquement les cellules présentant une surexpression des molécules du CMH de classe 1.",
            "E": "La phosphatidylsérine basculée sur la face externe de la membrane cytoplasmique est un signal (\"eat me\") indiquant qu'une cellule est en fin de vie."
        },
        "correctAnswers": ["B", "E"],
        "explanation": "B & E VRAI :\nB : Les DAMPs (signaux de danger/lésion) englobent les débris cellulaires, cellules apoptotiques et protéines anormalement repliées.\nE : L'externalisation de la phosphatidylsérine sur le feuillet externe de la membrane plasmique est le signal 'eat-me' physiologique déclenchant la phagocytose non inflammatoire.\nA FAUX : Les PRR reconnaissent à la fois les PAMPs microbiens et les DAMPs endogènes.\nC FAUX : Les voies de signalisation diffèrent radicalement (la clairance d'une cellule apoptotique est tolérogène/anti-inflammatoire, tandis que la bactérie déclenche une réponse pro-inflammatoire aiguë).\nD FAUX : Les récepteurs inhibiteurs (KIR) des NK reconnaissent le CMH-I ; c'est la perte ou la diminution du CMH-I ('missing self') qui déclenche la cytotoxicité du lymphocyte NK."
    },
    {
        "id": "UE6-HOA-04",
        "text": "QCM 4 : Agents chimiques non spécifiques et barrières\n\nQuelles sont les propositions exactes ?",
        "options": {
            "A": "Le lysozyme est une enzyme capable de cliver les liaisons O-glycosidiques des peptidoglycanes, ce qui fragilise particulièrement la paroi des bactéries à Gram positif.",
            "B": "Les interférons de type 1 (alpha et bêta) ont une action bactéricide puissante et directe.",
            "C": "Les interférons de type 1 induisent l'expression de la protéine PKR, qui bloque la traduction des ARNm et limite ainsi la réplication virale.",
            "D": "Les défensines possèdent un caractère cationique qui leur permet de s'insérer dans les membranes et de former des pores.",
            "E": "Nos propres cellules se protègent de l'action lytique des défensines en exprimant de l'acide sialique à leur surface."
        },
        "correctAnswers": ["A", "C", "D", "E"],
        "explanation": "A, C, D & E VRAI :\nA : Le lysozyme clive la liaison bêta(1-4) glycosidique du peptidoglycane, très accessible chez les bactéries Gram positif.\nC : L'état antiviral induit par les IFN-I implique la kinase PKR (qui phosphoryle eIF-2alpha et inhibe la traduction) et la 2'-5' oligoadénylate synthétase/RNase L.\nD : Les défensines (peptides antimicrobiens cationiques riches en ponts disulfures) s'insèrent dans les membranes chargées négativement des microbes et créent des pores lytiques.\nE : L'acide sialique abondant à la surface de nos cellules hôtes neutralise la fixation des défensines.\nB FAUX : Les interférons de type 1 (IFN-alpha et IFN-bêta) sont spécifiquement antiviraux (et antiprolifératifs), sans action bactéricide directe."
    },
    {
        "id": "UE6-HOA-05",
        "text": "QCM 5 : Médiateurs inflammatoires et Système du Complément\n\nQuelles sont les propositions exactes ?",
        "options": {
            "A": "L'histamine est synthétisée de novo par les leucocytes uniquement après leur arrivée sur le foyer inflammatoire.",
            "B": "Les chimiokines sont une sous-catégorie de cytokines possédant des propriétés chimioattractantes pour recruter des leucocytes.",
            "C": "Le foie joue un rôle accessoire dans l'immunité innée, les protéines du complément étant majoritairement produites par les lymphocytes.",
            "D": "Le système du complément peut détruire directement un agent infectieux en créant un complexe d'attaque membranaire sans recruter aucune cellule.",
            "E": "La voie classique du complément fait intervenir le facteur C1 et permet de reconnaître des motifs sucrés ou des complexes immuns."
        },
        "correctAnswers": ["B", "D", "E"],
        "explanation": "B, D & E VRAI :\nB : Les chimiokines (ex: CXCL8/IL-8, CCL2/MCP-1) orchestrent le chimiotactisme des leucocytes.\nD : Le Complexe d'Attaque Membranaire (CAM : C5b, C6, C7, C8, poly-C9) perfore directement les parois bactériennes sans intermédiaire cellulaire obligatoire.\nE : La voie classique est activée par la fixation du complexe C1 (C1q) sur les complexes immuns (IgG/IgM) ou sur certains motifs microbiens.\nA FAUX : L'histamine est préformée et pré-stockée dans les granules cytoplasmiques des mastocytes et polynucléaires basophiles (sécrétion ultra-rapide par dégranulation). Ce sont les prostaglandines et leucotriènes qui sont synthétisés de novo.\nC FAUX : Les hépatocytes hépatiques sont la source majeure (> 90%) des protéines plasmatiques du complément."
    },
    {
        "id": "UE6-LH-01",
        "text": "Annales 2022-2023 — Question 26 : Concernant les caractéristiques d'un haptène :\n\nQuelles sont les propositions exactes ?",
        "options": {
            "A": "Il est immunogène par lui-même.",
            "B": "Il est forcément artificiel.",
            "C": "Il peut être couplé à une protéine porteuse.",
            "D": "Si couplé à une protéine porteuse, il permet la production d'anticorps dirigés contre l'haptène.",
            "E": "Aucune des propositions ci-dessus n'est exacte."
        },
        "correctAnswers": ["C", "D"],
        "explanation": "C et D VRAI :\nC : Pour être reconnu et induire une réponse immunitaire humorale, un haptène peut être couplé par liaison covalente à une macromolécule porteuse dite protéine porteuse (« carrier »), formant un antigène artificiel ou conjugué.\nD : Le couplage à une protéine porteuse permet d'obtenir des anticorps dirigés à la fois contre la protéine porteuse et contre l'haptène lui-même.\nA FAUX : Un haptène est une petite molécule qui n'est pas immunogène par elle-même (sa taille moléculaire est trop faible pour provoquer seule l'activation et la réponse immunitaire).\nB FAUX : L'haptène en lui-même est une entité chimique/moléculaire (substance chimique, médicament, métabolite, toxine...) ; il n'est pas « artificiel » par nature. C'est son utilisation sous forme couplée à un porteur qui constitue un antigène artificiel.\nE FAUX : Les propositions C et D sont exactes."
    },
    {
        "id": "UE6-LH-02",
        "text": "Annales 2022-2023 — Question 27 : Concernant les propriétés d'un épitope conformationnel :\n\nQuelle est la proposition exacte ?",
        "options": {
            "A": "Il n'est pas reconnu par un anticorps en conditions dénaturantes.",
            "B": "Il est toujours accessible quand la protéine est sous sa forme native.",
            "C": "Il est composé d'acides aminés en suivant strictement la séquence primaire de la protéine.",
            "D": "Il peut être accessible quand la protéine est sous sa forme dénaturée.",
            "E": "Aucune des propositions ci-dessus n'est exacte."
        },
        "correctAnswers": ["A"],
        "explanation": "A VRAI : Un épitope conformationnel (ou discontinu) dépend du repliement tridimensionnel (structure tertiaire/quaternaire) de la protéine, rapprochant dans l'espace des acides aminés éloignés dans la séquence primaire. En conditions dénaturantes (chaleur, agents réducteurs, SDS), la structure 3D est détruite : l'épitope est anéanti et n'est donc plus reconnu par l'anticorps.\nB FAUX : Même sous forme native repliée, un épitope (qu'il soit conformationnel ou séquentiel) peut être enfoui au cœur de la structure globulaire et donc totalement inaccessible aux anticorps circulants.\nC FAUX : Cela correspond à la définition d'un épitope linéaire (ou continu), formé d'une suite contiguë d'acides aminés selon la structure primaire. L'épitope conformationnel rassemble des résidus dispersés dans la séquence primaire.\nD FAUX : La dénaturation détruit la conformation spatiale indispensable à cet épitope.\nE FAUX : La proposition A est exacte."
    },
    {
        "id": "UE6-LH-03",
        "text": "Annales 2021-2022 — Question 6 : Concernant les propriétés générales des antigènes et des haptènes :\n\nSélectionner la ou les proposition(s) correcte(s) :",
        "options": {
            "A": "Un haptène est immunogène.",
            "B": "Un haptène couplé à une protéine porteuse est immunogène.",
            "C": "Un antigène peut être synthétique.",
            "D": "Un antigène peut être thymo-indépendant.",
            "E": "Aucune des propositions ci-dessus n'est exacte."
        },
        "correctAnswers": ["B", "C", "D"],
        "explanation": "B, C et D VRAI :\nB : L'haptène seul est incapable de stimuler les lymphocytes, mais lorsqu'il est couplé à une protéine porteuse (carrier), le complexe devient immunogène et induit la production d'anticorps spécifiques dirigés notamment contre l'haptène.\nC : Il existe des antigènes synthétiques conçus chimiquement in vitro (peptides de synthèse, polymères d'acides aminés artificiels).\nD : Certains antigènes non protéiques (ex: polyosides bactériens, lipopolysaccharide LPS) peuvent stimuler directement les lymphocytes B sans nécessiter l'aide des lymphocytes T auxiliaires : ce sont les antigènes thymo-indépendants (TI).\nA FAUX : Un haptène possède une antigénicité (capacité de liaison spécifique à un anticorps) mais n'a AUCUNE immunogénicité par lui-même car son poids moléculaire est insuffisant.\nE FAUX : B, C et D sont exactes."
    },
    {
        "id": "UE6-LH-04",
        "text": "Annales 2021-2022 — Question 7 : Concernant la structure des épitopes et la réponse immunitaire :\n\nSélectionner la ou les proposition(s) correcte(s) :",
        "options": {
            "A": "Un épitope conformationnel est indépendant de la structure tertiaire de la protéine.",
            "B": "Un épitope linéaire dépend de la structure primaire de la protéine.",
            "C": "Un épitope conformationnel peut être détecté sur une protéine native ou dénaturée.",
            "D": "Un antigène peut être thymo-dépendant.",
            "E": "Aucune des propositions ci-dessus n'est exacte."
        },
        "correctAnswers": ["B", "D"],
        "explanation": "B et D VRAI :\nB : L'épitope linéaire (ou continu) est constitué d'une suite d'acides aminés contigus de la chaîne polypeptidique ; il dépend donc directement de la séquence primaire et reste généralement identifiable même après dénaturation.\nD : La grande majorité des antigènes protéiques nécessite l'intervention et la coopération des lymphocytes T CD4+ auxiliaires pour activer pleinement les lymphocytes B et permettre la commutation isotypique : ce sont des antigènes thymo-dépendants (TD).\nA FAUX : Au contraire, l'épitope conformationnel dépend étroitement de la structure tertiaire (repliement 3D spatial) de la protéine.\nC FAUX : Un épitope conformationnel est détruit par la dénaturation thermique ou chimique ; il n'est donc détectable que sur une protéine sous sa conformation native.\nE FAUX : B et D sont exactes."
    },
    {
        "id": "UE6-LH-05",
        "text": "Annales 2021-2022 — Question 8 : Concernant les immunoglobulines de type M (IgM) :\n\nSous quelles formes peuvent-elles exister ?",
        "options": {
            "A": "Sous forme de monomère.",
            "B": "Sous forme de dimère.",
            "C": "Sous forme de pentamère.",
            "D": "Sous forme liée à une pièce sécrétoire.",
            "E": "Sous forme de trimère."
        },
        "correctAnswers": ["A", "C"],
        "explanation": "A et C VRAI :\nA : Les IgM existent sous forme de monomères membranaires (mIgM) à la surface des lymphocytes B naïfs ou mémoires, où elles constituent le récepteur des lymphocytes B pour l'antigène (BCR).\nC : Sous leur forme soluble sécrétée dans le sérum, les IgM s'assemblent en pentamères reliés par une chaîne de jonction (chaîne J) et des ponts disulfures, offrant 10 sites de liaison potentiels à l'antigène.\nB FAUX : La structure dimérique (reliée par une chaîne J) est spécifique des IgA sécrétoires (s-IgA).\nD FAUX : La pièce sécrétoire provient du récepteur des polymères d'immunoglobulines (pIgR) et s'associe spécifiquement aux IgA sécrétoires au niveau des muqueuses, et non aux IgM sanguines.\nE FAUX : Il n'existe pas d'IgM sous forme trimérique."
    },
    {
        "id": "UE6-LH-06",
        "text": "Annales 2021-2022 — Question 9 : Concernant les Immunoglobulines de type G (IgG) :\n\nQuelles sont les propositions exactes ?",
        "options": {
            "A": "Elles contiennent une chaîne lourde de type gamma (γ).",
            "B": "Elles contiennent toujours une pièce sécrétoire.",
            "C": "Elles peuvent être membranaires.",
            "D": "Elles peuvent être divalentes lorsqu'elles sont sécrétées.",
            "E": "Elles peuvent être sécrétées."
        },
        "correctAnswers": ["A", "C", "D", "E"],
        "explanation": "A, C, D et E VRAI :\nA : Par définition, la classe des IgG est caractérisée par des chaînes lourdes de type gamma (γ), déclinées en 4 sous-classes (IgG1, IgG2, IgG3, IgG4).\nC : Les IgG peuvent exister sous forme membranaire à la surface des lymphocytes B mémoires ayant commuté de classe (BCR de classe IgG).\nD : Une molécule d'IgG monomérique sécrétée possède deux fragments Fab identiques, portant chacun un site de reconnaissance de l'antigène : elle est donc bivalente.\nE : Les IgG sont abondamment sécrétées dans le plasma et les espaces interstitiels par les plasmocytes différenciés (environ 75-80% des anticorps sériques totaux).\nB FAUX : La pièce sécrétoire est exclusivement associée aux formes sécrétoires des IgA (s-IgA) au niveau des muqueuses."
    },
    {
        "id": "UE6-LH-07",
        "text": "Annales 2021-2022 — Question 10 : Concernant les chaînes légères des immunoglobulines :\n\nQuelles sont les propositions exactes ?",
        "options": {
            "A": "Elles sont associées à des chaînes lourdes.",
            "B": "Elles appartiennent au fragment Fc.",
            "C": "Elles sont associées entre-elles pour former le paratope.",
            "D": "Elles contiennent un domaine variable.",
            "E": "Elles contiennent un domaine constant."
        },
        "correctAnswers": ["A", "D", "E"],
        "explanation": "A, D et E VRAI :\nA : Chaque chaîne légère (kappa κ ou lambda λ) est liée de manière covalente à une chaîne lourde par un pont disulfure interchaîne et des interactions hydrophobes au niveau du fragment Fab.\nD : Chaque chaîne légère possède un domaine variable aminoterminal (VL) comprenant trois régions hypervariables (CDR1, CDR2, CDR3) qui participent à la formation du site de liaison à l'antigène.\nE : Chaque chaîne légère possède un domaine constant carboxyterminal unique (CL).\nB FAUX : Le fragment Fc (fragment cristallisable) est exclusivement formé par l'association des domaines constants des chaînes lourdes (CH2-CH3 pour IgG) ; les chaînes légères font partie intégrante des fragments Fab.\nC FAUX : Le paratope est formé par la juxtaposition spatiale du domaine variable d'une chaîne lourde (VH) et du domaine variable d'une chaîne légère (VL), et jamais par deux chaînes légères seules."
    },
    {
        "id": "UE6-LH-08",
        "text": "Annales 2021-2022 — Question 11 : Concernant la digestion ménagée d'une immunoglobuline G par la papaïne :\n\nQuelle est la proposition exacte ?",
        "options": {
            "A": "Elle produit deux fragments F(ab) et un fragment Fc.",
            "B": "Elle produit des fragments peptidiques de petites tailles (inférieurs à 14 acides aminés).",
            "C": "Elle n'affecte pas la structure de l'IgG.",
            "D": "Elle induit la séparation des chaînes lourdes et des chaînes légères.",
            "E": "Aucune des propositions ci-dessus n'est exacte."
        },
        "correctAnswers": ["A"],
        "explanation": "A VRAI : La papaïne est une enzyme protéolytique qui clive les chaînes lourdes de l'IgG du côté N-terminal des ponts disulfures de la région charnière (« au-dessus » de la charnière). Ce clivage sépare l'IgG en trois fragments distincts :\n- Deux fragments Fab (Fragment antigen-binding) monovalents, chacun composé d'une chaîne légère complète et de la partie VH-CH1 de la chaîne lourde.\n- Un fragment Fc (Fragment crystallisable), composé de l'association des domaines constants CH2-CH3 des deux chaînes lourdes reliés par des ponts disulfures.\n(À distinguer de la pepsine qui coupe en dessous de la charnière pour donner un fragment bivalent F(ab')2 et dégrader le Fc).\nB FAUX : La coupure enzymatique libère de gros fragments protéiques stables et repliés d'environ 50 kDa chacun, et non des micropeptides.\nC FAUX : Elle coupe de façon irréversible la molécule en trois fragments distincts.\nD FAUX : Au sein des fragments Fab formés, les chaînes légères restent associées aux chaînes lourdes par leurs ponts disulfures interchaînes intacts.\nE FAUX : La proposition A est exacte."
    },
    {
        "id": "UE6-LH-09",
        "text": "Annales 2021-2022 — Question 12 : Concernant le complexe majeur d'histocompatibilité (CMH) de classe I :\n\nQuelles sont les propositions exactes ?",
        "options": {
            "A": "Il est exprimé par toutes les cellules nucléées.",
            "B": "Il n'est pas exprimé dans certains organes immuno-privilégiés.",
            "C": "Il n'est pas exprimé dans les mêmes cellules que le CMH de classe II.",
            "D": "Il est reconnu par le CD8 d'un lymphocyte T.",
            "E": "Aucune des propositions ci-dessus n'est exacte."
        },
        "correctAnswers": ["A", "D"],
        "explanation": "A et D VRAI :\nA : Les molécules du CMH de classe I (HLA-A, HLA-B, HLA-C chez l'homme) sont ubiquitaires et exprimées à la surface de toutes les cellules nucléées de l'organisme ainsi que sur les plaquettes (seules les cellules anucléées comme les hématies en sont dépourvues).\nD : Le corécepteur CD8 exprimé à la surface des lymphocytes T cytotoxiques interagit spécifiquement avec les régions invariantes (domaine alpha-3) du CMH de classe I lors de la reconnaissance antigénique.\nB FAUX : Les molécules du CMH de classe I sont exprimées partout, y compris dans les organes dits immuno-privilégiés comme le cerveau, l'œil ou le testicule (même si des mécanismes de régulation locale y modulent la réponse immune).\nC FAUX : Les cellules présentatrices d'antigènes professionnelles (CPA : cellules dendritiques, macrophages, lymphocytes B) expriment simultanément à leur surface le CMH de classe I et le CMH de classe II. Ils ne sont donc pas mutuellement exclusifs."
    },
    {
        "id": "UE6-LH-10",
        "text": "Annales 2021-2022 — Question 13 : Concernant le complexe majeur d'histocompatibilité (CMH) de classe II :\n\nQuelle est la proposition exacte ?",
        "options": {
            "A": "Il est exprimé par toutes les cellules nucléées.",
            "B": "Il a une expression inductible dans certains types cellulaires.",
            "C": "Il présente des peptides provenant de protéines cytoplasmiques.",
            "D": "Il est reconnu par le CD28 d'un lymphocyte T.",
            "E": "Il est composé de deux chaînes ayant trois domaines."
        },
        "correctAnswers": ["B"],
        "explanation": "B VRAI : L'expression basale du CMH-II est restreinte aux cellules présentatrices d'antigènes professionnelles (CPA : cellules dendritiques, macrophages, lymphocytes B, épithélium thymique). Toutefois, son expression est inductible dans de nombreux autres types cellulaires (cellules endothéliales, fibroblastes, épithélia) sous l'effet de cytokines inflammatoires, particulièrement l'interféron-gamma (IFN-γ).\nA FAUX : Seul le CMH de classe I est exprimé par toutes les cellules nucléées. Le CMH de classe II a une expression physiologique très sélective.\nC FAUX : Ce sont les peptides issus de la voie endogène (protéines cytoplasmiques dégradées par le protéasome) qui sont présentés par le CMH de classe I. Le CMH de classe II présente des peptides issus de la voie exogène/endocytaire (protéines internalisées dégradées dans les phagolysosomes).\nD FAUX : Le CMH de classe II est reconnu par le corécepteur CD4 des lymphocytes T auxiliaires. Le CD28 est un récepteur de costimulation lymphocytaire qui se lie aux molécules B7 (CD80/CD86).\nE FAUX : Le CMH de classe II est composé de deux chaînes polypeptidiques transmembranaires (chaîne alpha et chaîne bêta) possédant CHACUNE DEUX domaines extracellulaires (alpha-1, alpha-2 et bêta-1, bêta-2), et non trois."
    },
    {
        "id": "UE6-LH-11",
        "text": "Annales 2021-2022 — Question 14 : Concernant les paramètres de liaison antigène-anticorps, l'avidité d'une immunoglobuline :\n\nQuelle est la proposition exacte ?",
        "options": {
            "A": "Est toujours égale à l'affinité.",
            "B": "Est indépendante de l'affinité.",
            "C": "Correspond à la résultante de l'affinité et de la valence.",
            "D": "Ne concerne que les monomères.",
            "E": "N'existe pas."
        },
        "correctAnswers": ["C"],
        "explanation": "C VRAI : L'avidité (ou affinité fonctionnelle globale) est la force de liaison totale entre un anticorps et un antigène complexe multivalent. Elle est la résultante synergique de l'affinité intrinsèque unitaire de chaque site paratope/épitope et de la valence de l'anticorps (nombre de sites de liaison : 2 pour une IgG, 10 pour une IgM pentamérique).\nA FAUX : L'avidité n'est égale à l'affinité que dans le cas d'une interaction purement monovalente (ex: fragment Fab isolé). Pour une immunoglobuline entière polyvalente, l'avidité globale est immensément supérieure à l'affinité unitaire grâce à la coopération spatiale des sites de liaison.\nB FAUX : L'avidité dépend directement de l'affinité unitaire de chaque paratope.\nD FAUX : Au contraire, le concept d'avidité s'applique et prend toute son importance avec les molécules polyvalentes (dimères d'IgA, pentamères d'IgM).\nE FAUX : L'avidité est une grandeur biophysique fondamentale en immunologie clinique et diagnostique."
    },
    {
        "id": "UE6-LH-12",
        "text": "Annales 2021-2022 — Question 15 : Concernant le récepteur des lymphocytes T pour l'antigène (TCR) :\n\nQuelle est la proposition exacte ?",
        "options": {
            "A": "Il peut être un homodimère de deux chaînes alpha.",
            "B": "Il peut être composé d'une chaîne alpha et d'une chaîne zêta.",
            "C": "Il peut être composé d'une chaîne alpha et d'une chaîne bêta.",
            "D": "Il est exprimé à la surface de tous les lymphocytes.",
            "E": "Aucune des propositions ci-dessus n'est exacte."
        },
        "correctAnswers": ["C"],
        "explanation": "C VRAI : Le TCR est un hétérodimère membranaire. Dans la très grande majorité des lymphocytes T matures périphériques (> 95%), il est composé de l'association d'une chaîne alpha et d'une chaîne bêta reliées par un pont disulfure (TCR αβ). Une minorité de lymphocytes T exprime un TCR composé de chaînes gamma et delta (TCR γδ).\nA FAUX : Le TCR n'est jamais un homodimère de deux chaînes identiques ; c'est toujours un hétérodimère.\nB FAUX : Les chaînes zêta (homodimère ζ-ζ) font partie du complexe CD3 associé au TCR pour la transduction du signal intracellulaire, mais ne font pas partie de l'hétérodimère de reconnaissance du TCR lui-même.\nD FAUX : Le TCR est rigoureusement spécifique des lymphocytes T ; il n'est jamais exprimé par les lymphocytes B (qui portent le BCR/immunoglobulines) ni par les cellules NK."
    },
    {
        "id": "UE6-LH-13",
        "text": "Annales 2021-2022 — Question 16 : Concernant la théorie et les mécanismes qui rendent compte de la diversité des récepteurs aux antigènes :\n\nQuelle est la proposition exacte ?",
        "options": {
            "A": "Elle est basée uniquement sur le nombre de gènes présents dans l'ADN.",
            "B": "Elle nécessite des recombinaisons somatiques.",
            "C": "Elle ne nécessite pas d'enzymes particulières.",
            "D": "Elle est valable pour toutes les cellules de l'organisme.",
            "E": "Aucune des propositions ci-dessus n'est exacte."
        },
        "correctAnswers": ["B"],
        "explanation": "B VRAI : La diversité extrême des récepteurs à l'antigène (BCR des lymphocytes B et TCR des lymphocytes T) est générée au cours de la lymphopoïèse par des remaniements et recombinaisons somatiques de segments géniques discontinus : les segments variables V, de diversité D (pour chaînes lourdes et TCRβ/δ) et de jonction J (recombinaison V(D)J).\nA FAUX : La théorie germinale exclusive (un gène codant complet pour chaque anticorps) a été réfutée car le nombre limité de gènes du génome humain ne pourrait jamais expliquer les millions de spécificités d'anticorps différentes.\nC FAUX : Ces réarrangements requièrent obligatoirement un complexe enzymatique spécifique de la recombinaison somatique, notamment les endonucléases de la recombinase V(D)J codées par RAG-1 et RAG-2, ainsi que l'enzyme TdT (terminal désoxynucléotidyl transférase) qui génère une diversité jonctionnelle en insérant des nucléotides aléatoires.\nD FAUX : Ces réarrangements somatiques sont strictement limités aux cellules de la lignée lymphocytaire (lymphocytes B dans la moelle osseuse, lymphocytes T dans le thymus) et ne se produisent dans aucune autre cellule de l'organisme."
    }
];

window.ALL_QCM_DATA["UE6"] = window.DATA_UE6;

