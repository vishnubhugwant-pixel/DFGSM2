// ============================================================
// Grimoire Médical — Données QCM : UE4
// Cardiologie — S3
// ============================================================
// JAMEL BEY KARIM — Physiologie Cardiaque
// Annales d'examens 2017-2018 et 2018-2019
// ============================================================

window.ALL_QCM_DATA = window.ALL_QCM_DATA || {};
window.DATA_UE4 = [

    // ============================================================
    // JAMEL BEY KARIM — Physiologie Cardiaque
    // Annales 2017-2018 (5 QCMs : indices 0 à 4)
    // ============================================================

    // Q1 — Annale 2017-2018, Q21
    {
        "id": "UE4-JBK-01",
        "text": "Concernant la régulation extrinsèque de la pompe cardiaque, le baroréflexe :",
        "options": {
            "A": "est initié suite à une élévation de pression artérielle.",
            "B": "est secondaire à la distension de récepteurs situés dans la paroi des grandes artères et de la crosse aortique.",
            "C": "provoque une diminution de l'activité sympathique et l'augmentation de l'activité parasympathique.",
            "D": "provoque une augmentation de l'activité sympathique et une diminution de l'activité parasympathique.",
            "E": "permet une diminution de la fréquence cardiaque et de la contractilité myocardique."
        },
        "correctAnswers": ["B", "C", "E"],
        "explanation": "B ✅ VRAI : Le baroréflexe est déclenché par des barorécepteurs (mécanorécepteurs) situés dans la paroi des grandes artères, notamment la crosse aortique et le sinus carotidien. Leur distension lors d'une hausse de pression active le réflexe.\nC ✅ VRAI : Face à une élévation de pression artérielle, le baroréflexe est un réflexe correcteur qui inhibe le système sympathique et active le système parasympathique (vagal), afin de ramener la pression à la normale.\nE ✅ VRAI : La conséquence fonctionnelle de l'activation parasympathique et de l'inhibition sympathique est bien une diminution de la fréquence cardiaque (chronotropisme négatif) et de la contractilité (inotropisme négatif), réduisant ainsi le débit cardiaque et la pression artérielle.\nA ❌ FAUX : Le baroréflexe peut être initié aussi bien par une élévation que par une chute de pression artérielle — c'est un réflexe bidirectionnel. En cas d'hypotension, c'est la réponse sympathique qui domine (D devient vrai dans ce contexte).\nD ❌ FAUX : L'augmentation du sympathique et la diminution du parasympathique correspond à la réponse au baroréflexe en cas d'HYPOTENSION (chute de pression), pas d'hypertension."
    },

    // Q2 — Annale 2017-2018, Q23
    {
        "id": "UE4-JBK-02",
        "text": "Concernant la circulation systémique :",
        "options": {
            "A": "Le système veineux est un système à basse pression.",
            "B": "Le système veineux est un système à haute pression.",
            "C": "Le système artériel est un système à basse pression.",
            "D": "Le système artériel est un système à haute pression.",
            "E": "Les capillaires permettent les échanges grâce à une faible vitesse de circulation du sang."
        },
        "correctAnswers": ["A", "D", "E"],
        "explanation": "A ✅ VRAI : Le système veineux est un système capacitif et à basse pression. Il contient environ les 2/3 du volume sanguin total (rôle de réservoir) mais avec des pressions très basses (quelques mmHg).\nD ✅ VRAI : Le système artériel est un système résistif et de distribution, à haute pression (pression artérielle moyenne ~100 mmHg), ce qui permet d'assurer la perfusion de tous les organes.\nE ✅ VRAI : Les capillaires sont le siège des échanges entre le sang et les tissus. Le sang y circule très lentement (car la section totale est maximale), ce qui favorise les échanges par diffusion.\nB ❌ FAUX : C'est le système artériel qui est à haute pression, pas le veineux.\nC ❌ FAUX : Le système artériel est à haute pression (gradient nécessaire à la perfusion)."
    },

    // Q3 — Annale 2017-2018, Q24
    {
        "id": "UE4-JBK-03",
        "text": "Concernant la circulation systémique :",
        "options": {
            "A": "La paroi de l'aorte est élastique et permet de transformer un flux continu en flux pulsatile.",
            "B": "La paroi de l'aorte est musculaire et permet de transformer un flux pulsatile en flux continu.",
            "C": "La paroi de l'aorte est élastique et permet de transformer un flux pulsatile en flux continu.",
            "D": "La paroi de l'aorte est musculaire et permet de transformer un flux continu en flux pulsatile.",
            "E": "En systole, l'aorte proximale se comporte comme un réservoir."
        },
        "correctAnswers": ["C", "E"],
        "explanation": "C ✅ VRAI : C'est l'effet Windkessel. La paroi de l'aorte est très riche en fibres élastiques. En systole, elle se distend pour emmagasiner le volume sanguin éjecté. En diastole, elle restitue cette énergie élastique pour maintenir la perfusion périphérique — transformant ainsi un débit pulsatile (alternatif) en débit plus continu au niveau artériolaire.\nE ✅ VRAI : En systole, l'aorte proximale accumule le sang éjecté par le ventricule gauche en se dilatant élastiquement. Elle joue donc le rôle d'un réservoir tampon.\nA ❌ FAUX : La paroi aortique est bien élastique (vrai), mais elle transforme un flux PULSATILE en flux CONTINU (et non l'inverse).\nB ❌ FAUX : La paroi aortique est élastique (et non musculaire).\nD ❌ FAUX : La paroi aortique est élastique (et non musculaire)."
    },

    // Q4 — Annale 2017-2018, Q4
    {
        "id": "UE4-JBK-04",
        "text": "Concernant le cycle cardiaque, la relaxation isovolumique :",
        "options": {
            "A": "est la première partie de la systole.",
            "B": "se produit en fin de diastole.",
            "C": "est la première partie de la diastole.",
            "D": "se produit en fin de systole.",
            "E": "Aucune des réponses ci-dessus n'est exacte."
        },
        "correctAnswers": ["C"],
        "explanation": "C ✅ VRAI : La relaxation isovolumique (ou isovolumétrique) est la toute première phase de la diastole ventriculaire. Elle débute dès la fermeture des valves sigmoïdes (aortique et pulmonaire), à la fin de l'éjection, et se termine à l'ouverture des valves auriculo-ventriculaires (mitrale et tricuspide). Pendant cette phase, le volume ventriculaire reste constant (isovolumétrisme) tandis que la pression ventriculaire chute rapidement.\nA ❌ FAUX : La relaxation isovolumique appartient à la diastole, pas à la systole.\nB ❌ FAUX : Elle se produit en début de diastole, pas en fin de diastole.\nD ❌ FAUX : Elle marque la transition entre la fin de la systole et le début de la diastole — mais elle est classée dans la diastole.\nE ❌ FAUX : C est la bonne réponse."
    },

    // Q5 — Annale 2017-2018, Q5
    {
        "id": "UE4-JBK-05",
        "text": "Concernant le cycle cardiaque, le remplissage ventriculaire :",
        "options": {
            "A": "est d'abord rapide puis lent.",
            "B": "est la 2ème partie de la systole.",
            "C": "se produit valves auriculo-ventriculaires ouvertes et valves ventriculo-artérielles fermées.",
            "D": "a lieu quand la pression ventriculaire est au-dessus de la pression auriculaire.",
            "E": "a lieu quand la pression ventriculaire est en dessous de la pression auriculaire."
        },
        "correctAnswers": ["A", "C", "E"],
        "explanation": "A ✅ VRAI : Le remplissage ventriculaire comprend trois sous-phases : 1) Remplissage rapide initial (gradient de pression Oreillette > Ventricule maximal), 2) Diastasis (remplissage lent, pressions s'équilibrent), 3) Remplissage rapide terminal dû à la systole auriculaire.\nC ✅ VRAI : Pour que le sang passe de l'oreillette vers le ventricule, la valve auriculo-ventriculaire (mitrale ou tricuspide) doit être ouverte. La valve ventriculo-artérielle (aortique ou pulmonaire) reste fermée pour éviter le reflux aortique/pulmonaire.\nE ✅ VRAI : Le sang suit le gradient de pression : pour qu'il s'écoule de l'oreillette vers le ventricule, la pression auriculaire doit être supérieure à la pression ventriculaire (P auriculaire > P ventriculaire).\nB ❌ FAUX : Le remplissage ventriculaire est une phase de la DIASTOLE, pas de la systole.\nD ❌ FAUX : C'est l'inverse — la pression ventriculaire doit être inférieure à la pression auriculaire pour permettre le remplissage passif."
    },

    // Q6 — Annale 2017-2018, Q11
    {
        "id": "UE4-JBK-06",
        "text": "Le retour veineux :",
        "options": {
            "A": "doit être égal au débit cardiaque.",
            "B": "doit être supérieur au débit cardiaque.",
            "C": "est le volume de sang revenant dans l'oreillette gauche.",
            "D": "est le volume de sang revenant dans l'oreillette droite.",
            "E": "est la somme de tous les débits locaux de la circulation périphérique."
        },
        "correctAnswers": ["A", "D", "E"],
        "explanation": "A ✅ VRAI : En situation d'équilibre hémodynamique (régime permanent), le retour veineux systémique doit être rigoureusement égal au débit cardiaque — sinon il y aurait accumulation ou déficit de sang dans l'un des compartiments.\nD ✅ VRAI : Le retour veineux systémique s'effectue via les veines caves supérieure et inférieure qui se jettent dans l'oreillette droite. C'est le retour veineux PULMONAIRE qui revient dans l'oreillette gauche (via les 4 veines pulmonaires).\nE ✅ VRAI : La circulation périphérique est organisée en parallèle (cœur, cerveau, reins, muscles…). Le retour veineux global est donc la somme des débits de toutes les circulations régionales.\nB ❌ FAUX : En équilibre, retour veineux = débit cardiaque (égal, pas supérieur).\nC ❌ FAUX : L'oreillette gauche reçoit le retour veineux PULMONAIRE (sang oxygéné venant des poumons). Le retour veineux systémique arrive dans l'oreillette droite."
    },

    // ============================================================
    // JAMEL BEY KARIM — Physiologie Cardiaque
    // Annales 2018-2019 (4 QCMs : indices 6 à 9)
    // ============================================================

    // Q7 — Annale 2018-2019, Q20
    {
        "id": "UE4-JBK-07",
        "text": "À propos des veines :",
        "options": {
            "A": "La paroi d'une veine comprend 3 tuniques : intima, média et adventice.",
            "B": "Certaines veines possèdent des valvules.",
            "C": "Les veines sont préférentiellement le siège des lésions d'athérome.",
            "D": "Le système veineux participe aux échanges thermiques.",
            "E": "La phlébite correspond à une incontinence des valvules veineuses."
        },
        "correctAnswers": ["A", "B", "D"],
        "explanation": "A ✅ VRAI : Comme les artères, les veines possèdent 3 tuniques : l'intima (endothélium + tissu conjonctif), la média (couche musculaire lisse, moins épaisse que dans les artères), et l'adventice (tissu conjonctif externe).\nB ✅ VRAI : Les veines des membres inférieurs (et d'autres régions soumises à la gravité) possèdent des valvules anti-reflux qui s'opposent au reflux sanguin et facilitent le retour veineux vers le cœur.\nD ✅ VRAI : La vasomotricité des artérioles et des veines cutanées joue un rôle majeur dans la thermorégulation : vasodilatation pour dissiper la chaleur, vasoconstriction pour la conserver.\nC ❌ FAUX : L'athérosclérose est une maladie des ARTÈRES (système à haute pression). Les veines, soumises à de faibles pressions, ne développent pas de plaques d'athérome en conditions normales.\nE ❌ FAUX : L'incontinence des valvules veineuses est responsable des VARICES (dilatations veineuses tortueuses). La phlébite (ou thrombose veineuse profonde) est une thrombose dans une veine, phénomène distinct."
    },

    // Q8 — Annale 2018-2019, Q22
    {
        "id": "UE4-JBK-08",
        "text": "À propos des capillaires :",
        "options": {
            "A": "Les capillaires continus font partie de la barrière alvéolo-capillaire.",
            "B": "Les capillaires continus sont présents au niveau du foie.",
            "C": "Les capillaires fenestrés ou discontinus sont présents au niveau des glandes endocrines.",
            "D": "Les capillaires sinusoïdes présentent de larges orifices.",
            "E": "Les capillaires sinusoïdes sont présents au niveau des organes hématopoïétiques comme la moelle osseuse."
        },
        "correctAnswers": ["A", "C", "D", "E"],
        "explanation": "A ✅ VRAI : La barrière alvéolo-capillaire pulmonaire (indispensable aux échanges gazeux O2/CO2) est formée notamment de capillaires CONTINUS, dont les cellules endothéliales sont jointives pour assurer une diffusion efficace mais sélective.\nC ✅ VRAI : Les glandes endocrines nécessitent des échanges rapides de molécules hormonales. Elles possèdent des capillaires FENESTRÉS (présentant des pores ou fenestrations) pour permettre la filtration de ces molécules vers le sang ou vers les cellules.\nD ✅ VRAI : Les capillaires sinusoïdes (ou discontinus) présentent de larges espaces entre les cellules endothéliales (discontinuités de la paroi), permettant le passage de grandes molécules, voire de cellules entières (comme les hématies dans la moelle osseuse).\nE ✅ VRAI : La moelle osseuse rouge (organe hématopoïétique) possède des capillaires sinusoïdes pour permettre le passage des cellules sanguines néoformées dans la circulation. La rate également.\nB ❌ FAUX : Le foie possède des capillaires SINUSOÏDES (discontinus) et non continus, permettant les échanges intensifs entre le sang et les hépatocytes (métabolisme hépatique)."
    },

    // Q9 — Annale 2018-2019, Q24
    {
        "id": "UE4-JBK-09",
        "text": "À propos de la vascularisation du cœur :",
        "options": {
            "A": "Les vaisseaux coronaires prennent naissance au niveau de l'aorte.",
            "B": "La vascularisation du cœur est une vascularisation de type terminale comme celle du rein.",
            "C": "La vascularisation coronarienne est primordiale pour le bon fonctionnement du cœur.",
            "D": "L'infarctus du myocarde peut résulter de l'obstruction d'une artère coronaire.",
            "E": "Les vaisseaux coronaires se développent dans les heures suivant la naissance."
        },
        "correctAnswers": ["A", "B", "C", "D"],
        "explanation": "A ✅ VRAI : Les artères coronaires droite et gauche naissent à la base de l'aorte ascendante, juste au-dessus des valvules sigmoïdes aortiques (dans les sinus de Valsalva), et s'enfoncent dans le myocarde.\nB ✅ VRAI : La vascularisation coronaire est de type terminal (ou end-artériel) — les anastomoses entre branches coronaires sont insuffisantes pour compenser une occlusion brutale, expliquant la gravité de l'infarctus.\nC ✅ VRAI : Le myocarde a un métabolisme presque exclusivement aérobie et une consommation d'O2 très élevée (au repos, il extrait déjà ~70-80% de l'O2 du sang coronaire). La perfusion coronaire est donc vitale.\nD ✅ VRAI : L'infarctus du myocarde (IDM) résulte d'une ischémie sévère et prolongée par obstruction d'une artère coronaire (le plus souvent par une plaque d'athérome rompue avec thrombose superposée), entraînant la nécrose du territoire myocardique irrigué.\nE ❌ FAUX : Les artères coronaires se développent dès la vie fœtale — elles sont indispensables à l'irrigation du cœur fœtal en croissance. Elles ne se développent pas après la naissance."
    },

    // Q10 — Annale 2018-2019, Q25
    {
        "id": "UE4-JBK-10",
        "text": "À propos des fonctions de l'endothélium :",
        "options": {
            "A": "L'endothélium est protégé du compartiment sanguin par la lame basale.",
            "B": "L'endothélium peut être impliqué dans les transports transcellulaires.",
            "C": "L'endothélium joue un rôle dans l'adhésion cellulaire.",
            "D": "L'endothélium participe à l'hémostase.",
            "E": "L'endothélium est impliqué dans la synthèse des anticorps."
        },
        "correctAnswers": ["B", "C", "D"],
        "explanation": "B ✅ VRAI : L'endothélium régule les échanges entre le compartiment sanguin et les tissus. Il peut assurer des transports transcellulaires (transcytose) de macromolécules via des vésicules pinocytotiques.\nC ✅ VRAI : L'endothélium activé (lors d'une inflammation) exprime des molécules d'adhésion (sélectines, ICAM, VCAM) qui permettent l'adhésion et la transmigration des leucocytes vers les tissus (diapédèse).\nD ✅ VRAI : L'endothélium sain est antithrombotique : il produit du NO et de la prostacycline (PGI2), inhibiteurs de l'agrégation plaquettaire, et exprime la thrombomoduline. Un endothélium lésé devient prothrombotique (facteur de Willebrand, facteur tissulaire).\nA ❌ FAUX : C'est l'inverse — l'endothélium est la couche la plus interne, directement en contact avec le sang. La lame basale (ou basale) est située sous l'endothélium, entre lui et le tissu conjonctif sous-jacent.\nE ❌ FAUX : Les anticorps (immunoglobulines) sont synthétisés par les PLASMOCYTES (lymphocytes B différenciés), pas par l'endothélium. Ce n'est pas une fonction endothéliale."
    },

    // ============================================================
    // JAMEL BEY KARIM — Physiologie Cardiaque
    // Annales 2020-2021 (13 QCMs : indices 10 à 22)
    // ============================================================

    // Q11 — Annale 2020-2021, Q29
    {
        "id": "UE4-JBK-11",
        "text": "Concernant les valves cardiaques, sélectionner la ou les proposition(s) correcte(s) :",
        "options": {
            "A": "Il y a 4 valves cardiaques : deux atrio-ventriculaires et deux ventriculo-artérielles.",
            "B": "Lorsqu'elles sont ouvertes, ces valves exercent une forte résistance à l'écoulement du flux sanguin.",
            "C": "Lorsqu'elles sont fermées, elles sont étanches.",
            "D": "Les valves ventriculo-artérielles possèdent des cordages s'insérant sur des piliers et muscles pectinés.",
            "E": "La valve aortique obstrue les ostia coronaires en systole."
        },
        "correctAnswers": ["A", "C"],
        "explanation": "A ✅ VRAI : Le cœur possède bien 4 valves — 2 atrio-ventriculaires (mitrale à gauche, tricuspide à droite) et 2 ventriculo-artérielles (aortique et pulmonaire).\nC ✅ VRAI : Fermées, les valves sont parfaitement étanches, ce qui permet les phases isovolumiques (contraction et relaxation) sans fuite de sang.\nB ❌ FAUX : Lorsqu'elles sont ouvertes, un écoulement normal est laminaire et sans résistance significative. Un souffle indique une résistance anormale (sténose). L'ouverture normale ne génère pas de résistance forte.\nD ❌ FAUX : Les cordages tendineux et les muscles papillaires sont associés aux valves ATRIO-VENTRICULAIRES (mitrale et tricuspide), et non aux valves ventriculo-artérielles (qui sont des valves sigmoïdes sans cordages).\nE ❌ FAUX : La vascularisation coronaire se fait principalement en DIASTOLE (le myocarde se relâche et les artères coronaires ne sont plus comprimées). Ce n'est pas la valve elle-même qui obstrue les ostia, mais bien la compression myocardique en systole."
    },

    // Q12 — Annale 2020-2021, Q34
    {
        "id": "UE4-JBK-12",
        "text": "Concernant les bruits du cœur et le cycle cardiaque, sélectionner la ou les proposition(s) correcte(s) :",
        "options": {
            "A": "Le B1 correspond à la fermeture des valves atrio-ventriculaires.",
            "B": "Le B2 correspond à la fermeture des valves ventriculo-artérielles.",
            "C": "La systole se produit entre le B1 et le B2.",
            "D": "Sur un ECG, la systole se produit entre l'onde P et Q et la diastole entre l'onde R et T.",
            "E": "Un souffle entendu principalement au foyer aortique pendant la systole est un souffle d'insuffisance aortique."
        },
        "correctAnswers": ["A", "B", "C"],
        "explanation": "A ✅ VRAI : Le B1 (premier bruit, « POUM ») correspond à la fermeture des valves atrio-ventriculaires (mitrale et tricuspide) au début de la systole ventriculaire.\nB ✅ VRAI : Le B2 (deuxième bruit, « TAP ») correspond à la fermeture des valves ventriculo-artérielles (aortique et pulmonaire) à la fin de la systole, marquant le début de la diastole.\nC ✅ VRAI : La systole ventriculaire se produit entre B1 (fermeture des valves AV) et B2 (fermeture des valves artérielles).\nD ❌ FAUX : Sur l'ECG, l'onde P correspond à la dépolarisation AURICULAIRE (systole auriculaire). La systole VENTRICULAIRE s'étend du complexe QRS jusqu'à la fin de l'onde T (et non entre P et Q).\nE ❌ FAUX : Un souffle systolique au foyer aortique évoque un RÉTRÉCISSEMENT aortique (obstacle à l'éjection). L'insuffisance aortique (fuite de la valve) est un souffle DIASTOLIQUE (le sang reflue en diastole depuis l'aorte vers le VG)."
    },

    // Q13 — Annale 2020-2021, Q35
    {
        "id": "UE4-JBK-13",
        "text": "À propos du cycle cardiaque, sélectionner la ou les proposition(s) correcte(s) :",
        "options": {
            "A": "La diastole commence lors de la fermeture des valves ventriculo-artérielles, la tension musculaire baisse et le cœur se distend.",
            "B": "En diastole, le remplissage rapide du ventricule commence dès que la pression intra-ventriculaire est égale ou plus faible à la pression intra-auriculaire.",
            "C": "La contraction auriculaire survient à la fin de la phase lente du remplissage ventriculaire.",
            "D": "Environ 1/10ème de seconde après la contraction auriculaire, les valves atrio-ventriculaires vont se fermer et la systole va débuter.",
            "E": "Pendant la systole, la pression intra-ventriculaire va augmenter jusqu'à égaliser la pression artérielle pour ouvrir les valves ventriculo-artérielles et permettre l'éjection."
        },
        "correctAnswers": ["A", "B", "C", "D", "E"],
        "explanation": "A ✅ VRAI : La diastole débute avec la relaxation isovolumétrique dès la fermeture des valves artérielles. La pression chute, le muscle se relâche et le ventricule se distend progressivement.\nB ✅ VRAI : Le remplissage rapide commence dès que la pression ventriculaire passe en dessous de la pression auriculaire, permettant l'ouverture des valves AV et le passage du sang.\nC ✅ VRAI : La systole auriculaire (contraction de l'oreillette) survient à la fin du diastasis (phase de remplissage lent), contribuant au remplissage terminal du ventricule (~20-25% du remplissage total).\nD ✅ VRAI : Après la systole auriculaire, les valves AV se ferment (B1) environ 100-120 ms plus tard, marquant le début de la systole ventriculaire.\nE ✅ VRAI : Pendant la contraction isovolumétrique, la pression ventriculaire monte jusqu'à dépasser la pression aortique (~80 mmHg pour le VG), ce qui entraîne l'ouverture de la valve aortique et l'éjection du sang."
    },

    // Q14 — Annale 2020-2021, Q36
    {
        "id": "UE4-JBK-14",
        "text": "À propos de la loi de Frank et Starling, sélectionner la ou les proposition(s) correcte(s) :",
        "options": {
            "A": "Une augmentation du retour veineux est responsable d'une augmentation du volume télédiastolique.",
            "B": "Une augmentation de la précharge augmente la force contractile et donc le volume d'éjection systolique.",
            "C": "Le cœur s'accommode des variations de retour veineux en modifiant ses dimensions (autorégulation hétérométrique).",
            "D": "Le cœur est dit précharge dépendant quand il se situe sur la partie initiale croissante de la courbe de Frank et Starling.",
            "E": "Le cœur est dit précharge indépendant s'il a atteint sa Lmax (il est sur la partie horizontale de la courbe de Frank et Starling)."
        },
        "correctAnswers": ["A", "B", "C", "D", "E"],
        "explanation": "A ✅ VRAI : Plus le retour veineux augmente, plus le ventricule reçoit de sang et plus son volume en fin de diastole (VTD = précharge) est élevé.\nB ✅ VRAI : L'augmentation de la précharge étire les sarcomères, optimisant le chevauchement actine-myosine et augmentant la force de contraction, donc le VES (loi de Starling).\nC ✅ VRAI : Cette adaptation par modification de la longueur des fibres myocardiques est appelée autorégulation hétérométrique (hetero = longueur différente). C'est le mécanisme de la loi de Frank-Starling.\nD ✅ VRAI : Sur la portion ascendante de la courbe, une augmentation de précharge entraîne une augmentation proportionnelle du VES — le cœur est dit précharge-dépendant.\nE ✅ VRAI : Sur la partie plateau (ou descendante) de la courbe, au-delà de Lmax, l'étirement supplémentaire des fibres n'augmente plus (voire diminue) la force contractile. Le cœur est précharge-indépendant."
    },

    // Q15 — Annale 2020-2021, Q38
    {
        "id": "UE4-JBK-15",
        "text": "À propos du débit cardiaque et de sa régulation, sélectionner la ou les proposition(s) correcte(s) :",
        "options": {
            "A": "La formule du débit cardiaque est : Débit cardiaque (mL/min) = Volume d'éjection systolique (mL) × fréquence cardiaque (min).",
            "B": "Au niveau cardiaque, le système nerveux parasympathique innerve essentiellement les nœuds sino-auriculaire et atrio-ventriculaire.",
            "C": "Le système nerveux sympathique innerve directement l'ensemble du tissu myocardique.",
            "D": "Le système nerveux parasympathique est chronotrope, dromotrope et inotrope positif.",
            "E": "Le système nerveux parasympathique et sympathique sont deux systèmes à l'équilibre avec un tonus parasympathique prédominant. L'utilisation d'atropine lève le frein parasympathique et provoque une tachycardie."
        },
        "correctAnswers": ["A", "B", "C", "E"],
        "explanation": "A ✅ VRAI : La formule fondamentale du débit cardiaque est Qc = VES × FC. Elle peut être indexée à la surface corporelle pour donner l'index cardiaque.\nB ✅ VRAI : Le système parasympathique (via le nerf vague X) innerve principalement le tissu nodal : nœud sino-auriculaire (SA) et nœud atrio-ventriculaire (AV). Son effet sur les ventricules est minime.\nC ✅ VRAI : Le système sympathique innerve à la fois le tissu nodal ET l'ensemble du myocarde ventriculaire (via les terminaisons noradrénergiques), d'où ses effets inotropes positifs puissants.\nE ✅ VRAI : Au repos, le tonus parasympathique est dominant (FC de repos ~60-70 bpm). L'atropine (antagoniste muscarinique) bloque le nerf vague, levant ce frein et entraînant une tachycardie.\nD ❌ FAUX : Le système parasympathique est chronotrope NÉGATIF (ralentit la FC), dromotrope NÉGATIF (ralentit la conduction AV) et inotrope NÉGATIF (diminue la contractilité, surtout sur les oreillettes). Il n'est pas positif."
    },

    // Q16 — Annale 2020-2021, Q39
    {
        "id": "UE4-JBK-16",
        "text": "À propos du retour veineux, sélectionner la ou les proposition(s) correcte(s) :",
        "options": {
            "A": "Les veines jouent le rôle de réservoir à basse pression et haut volume (environ 75% du volume sanguin).",
            "B": "Le débit cardiaque est limité par le débit maximal du retour veineux.",
            "C": "La pression motrice veineuse est indépendante de la pression dans l'atrium droit.",
            "D": "Une défaillance du ventricule droit n'affecte pas la pression dans l'atrium droit.",
            "E": "La pression veineuse moyenne peut être augmentée uniquement par une expansion volumique."
        },
        "correctAnswers": ["A"],
        "explanation": "A ✅ VRAI : Le système veineux est capacitif, à basse pression (quelques mmHg) et contient la grande majorité de la volémie totale (~65-75% selon les sources, le cours cite 2/3). Ce réservoir permet d'ajuster le retour veineux au besoin.\nB ❌ FAUX : Le débit cardiaque peut être limité par le retour veineux (courbes de Guyton), mais aussi par la contractilité myocardique, la postcharge ou la fréquence cardiaque. Ce n'est pas une affirmation absolue.\nC ❌ FAUX : La pression motrice veineuse (gradient entre pression veineuse systémique moyenne et pression auriculaire droite) dépend directement de la pression dans l'atrium droit — si celle-ci augmente, le gradient et donc le retour veineux diminuent.\nD ❌ FAUX : Une défaillance du ventricule droit entraîne une stase sanguine et une augmentation de la pression dans l'atrium droit (signe clinique : turgescence jugulaire, hépatomégalie).\nE ❌ FAUX : La pression veineuse moyenne peut être augmentée aussi bien par une expansion volumique (augmentation de la volémie) que par une veino-constriction sympathique (redistribution du volume sanguin vers le secteur central)."
    },

    // Q17 — Annale 2020-2021, Q40
    {
        "id": "UE4-JBK-17",
        "text": "À propos de l'adaptation cardiovasculaire à l'effort, sélectionner la ou les proposition(s) correcte(s) :",
        "options": {
            "A": "L'augmentation du débit cardiaque se fait d'abord par une augmentation de la contractilité, puis par augmentation de la fréquence cardiaque.",
            "B": "Un effort maximal est mesuré par le VO2max.",
            "C": "La fréquence cardiaque augmente linéairement en fonction de la VO2.",
            "D": "La fréquence cardiaque maximale possible est fonction de l'âge (FC max ≈ 220 − âge).",
            "E": "L'entraînement sportif réduit la fréquence cardiaque de repos et permet une plus grande marge d'augmentation du débit cardiaque à l'effort."
        },
        "correctAnswers": ["B", "C", "D", "E"],
        "explanation": "B ✅ VRAI : La VO2max (consommation maximale d'oxygène) est l'indicateur de référence de la capacité cardiorespiratoire à l'effort maximal.\nC ✅ VRAI : La fréquence cardiaque augmente de façon linéaire avec l'intensité de l'effort (et donc avec la VO2), jusqu'à atteindre la FC maximale théorique.\nD ✅ VRAI : La formule FC max ≈ 220 − âge est la formule empirique classique en physiologie de l'effort pour estimer la fréquence maximale théorique.\nE ✅ VRAI : L'entraînement entraîne une bradycardie de repos (hypertrophie cardiaque physiologique avec augmentation du VES), laissant une plus grande marge d'augmentation de la FC et du débit à l'effort.\nA ❌ FAUX : À l'effort, c'est d'abord la FRÉQUENCE CARDIAQUE qui augmente (via activation sympathique rapide), puis la contractilité et le VES augmentent également. L'ordre est inverse à ce qui est proposé."
    },

    // Q18 — Annale 2020-2021, Q31
    {
        "id": "UE4-JBK-18",
        "text": "À propos des types de contractions musculaires cardiaques, sélectionner la ou les proposition(s) correcte(s) :",
        "options": {
            "A": "Il existe deux types de contractions musculaires : la contraction isométrique et la contraction isotonique.",
            "B": "Pour étudier la contraction isotonique, on fixe un muscle papillaire sur un support rigide afin de maintenir une longueur constante et on mesure la tension musculaire.",
            "C": "Pour étudier la contraction isométrique, on fixe un muscle papillaire sur un support rigide afin de maintenir une longueur constante et on mesure la tension musculaire.",
            "D": "En contraction isométrique, la force de contraction s'accroît en fonction de l'étirement initial jusqu'à une longueur critique Lmax, après laquelle la force de contraction décroît.",
            "E": "En contraction isométrique, la force de contraction est indépendante de la contractilité intrinsèque du muscle."
        },
        "correctAnswers": ["A", "C", "D"],
        "explanation": "A ✅ VRAI : En physiologie musculaire, on distingue la contraction isométrique (longueur constante, tension variable) et la contraction isotonique (tension constante, longueur variable avec raccourcissement).\nC ✅ VRAI : L'étude isométrique consiste à fixer le muscle sur un support rigide (longueur constante) et à mesurer les variations de tension générées lors de la stimulation.\nD ✅ VRAI : La relation force-longueur en isométrique suit une courbe en cloche : la force augmente jusqu'à une longueur optimale Lmax (chevauchement optimal actine-myosine), puis décroît au-delà (trop d'étirement).\nB ❌ FAUX : La description (muscle fixé, longueur constante, mesure de la tension) correspond à l'étude ISOMÉTRIQUE et non isotonique. L'isotonique étudie le raccourcissement à charge (tension) constante.\nE ❌ FAUX : En contraction isométrique, la tension développée dépend à la fois de l'étirement initial (longueur) ET de la contractilité intrinsèque du muscle. L'inotropie (ex: catécholamines) modifie la courbe force-longueur."
    },

    // Q19 — Annale 2020-2021, Q32
    {
        "id": "UE4-JBK-19",
        "text": "À propos des paramètres de la contraction musculaire cardiaque, sélectionner la ou les proposition(s) correcte(s) :",
        "options": {
            "A": "La contraction isotonique d'un muscle est l'étude de son raccourcissement à tension constante.",
            "B": "Le degré de tension musculaire au début de la contraction correspond à sa postcharge.",
            "C": "La postcharge est la charge contre laquelle un muscle doit exercer sa force contractile.",
            "D": "La contraction musculaire comporte deux phases : une phase isométrique (augmentation de tension sans raccourcissement) puis lorsque la tension égale la postcharge, une phase isotonique (raccourcissement).",
            "E": "Lors de la contraction isométrique, il n'y a pas de raccourcissement macroscopique mais la composante tendineuse s'étire tandis que la composante contractile se rétracte."
        },
        "correctAnswers": ["A", "C", "E"],
        "explanation": "A ✅ VRAI : La contraction isotonique est caractérisée par un raccourcissement du muscle à tension (charge) constante — la longueur varie, la force reste constante.\nC ✅ VRAI : La postcharge est la résistance à vaincre au moment de l'éjection (ex: pression aortique pour le VG). C'est la charge contre laquelle le muscle doit exercer sa force pour permettre le raccourcissement.\nE ✅ VRAI : En isométrique, au niveau microscopique, la composante contractile (sarcomères) se raccourcit tout de même, mais ce raccourcissement est compensé par l'étirement de la composante élastique série (tendons), d'où l'absence de raccourcissement macroscopique observable.\nB ❌ FAUX : La tension musculaire au début de la contraction (avant tout raccourcissement) correspond à la PRÉCHARGE (étirement initial = volume de remplissage = VTD), et non à la postcharge.\nD ❌ FAUX : L'ordre est correct (isométrique puis isotonique), mais la dénomination des phases est inversée dans l'énoncé. La phase à volume/longueur stable est bien l'isométrique, et quand la tension atteint la postcharge, le raccourcissement (phase isotonique) commence."
    },

    // Q20 — Annale 2020-2021, Q33
    {
        "id": "UE4-JBK-20",
        "text": "À propos de la Vmax et de la contractilité intrinsèque, sélectionner la ou les proposition(s) correcte(s) :",
        "options": {
            "A": "La Vmax correspond à la vitesse de raccourcissement maximal à postcharge nulle.",
            "B": "La Vmax correspond à la contractilité intrinsèque du muscle.",
            "C": "La précharge (si elle est inférieure à Lmax) n'augmente pas la vitesse de contraction initiale.",
            "D": "L'adjonction d'adrénaline ne modifie pas la contractilité intrinsèque d'un muscle.",
            "E": "L'adjonction d'adrénaline augmente la vitesse de raccourcissement initiale d'un muscle."
        },
        "correctAnswers": ["A", "B", "E"],
        "explanation": "A ✅ VRAI : La Vmax est la vitesse de raccourcissement extrapolée à postcharge nulle sur la courbe force-vitesse (courbe de Hill). Elle représente la vitesse maximale théorique de contraction.\nB ✅ VRAI : La Vmax est l'indicateur de la contractilité intrinsèque (inotropie). Elle est indépendante de la précharge et de la postcharge — c'est un paramètre intrinsèque du muscle.\nE ✅ VRAI : L'adrénaline est un puissant agent inotrope positif (via récepteurs β1-adrénergiques). Elle augmente la Vmax et donc la vitesse de raccourcissement initiale du muscle myocardique.\nC ❌ FAUX : En dessous de Lmax, l'augmentation de la précharge (étirement initial) améliore le chevauchement actine-myosine et peut augmenter la vitesse de contraction initiale (elle décale la courbe vers le haut).\nD ❌ FAUX : L'adrénaline augmente bien la contractilité intrinsèque (elle déplace la courbe force-vitesse vers le haut, augmente la Vmax). C'est l'un des effets cardinaux des catécholamines sur le myocarde."
    },

    // Q21 — Annale 2020-2021, Q37
    {
        "id": "UE4-JBK-21",
        "text": "À propos des courbes de pression-volume ventriculaires, sélectionner la ou les proposition(s) correcte(s) :",
        "options": {
            "A": "La pente de la courbe de compliance estime la contractilité.",
            "B": "Une diminution de la pente de la courbe d'élastance maximale augmente le volume d'éjection systolique.",
            "C": "Une augmentation brutale de la postcharge diminue le volume d'éjection systolique.",
            "D": "Une diminution du volume d'éjection systolique augmente le volume télédiastolique du cycle suivant.",
            "E": "Toutes les valeurs possibles du volume télédiastolique se situent sur la courbe d'élastance maximale."
        },
        "correctAnswers": ["C", "D"],
        "explanation": "C ✅ VRAI : Une augmentation brutale de la postcharge (ex: poussée hypertensive) s'oppose à l'éjection ventriculaire. La valve aortique s'ouvre plus tardivement et le VES diminue sur ce cycle.\nD ✅ VRAI : Si le VES diminue, davantage de sang reste dans le ventricule après l'éjection (augmentation du volume télésystolique). Ce volume résiduel augmenté majorera le remplissage du cycle suivant, augmentant ainsi le VTD du prochain cycle (par la loi de Starling).\nA ❌ FAUX : La pente de la courbe d'ÉLASTANCE MAXIMALE (Emax) estime la contractilité. La courbe de compliance mesure la relation pression-volume en diastole (distensibilité ventriculaire), pas la contractilité.\nB ❌ FAUX : Une diminution de la pente d'élastance (Emax plus faible) signifie une contractilité réduite. La boucle pression-volume se déplace vers la droite avec un VES plus petit, pas augmenté.\nE ❌ FAUX : Les valeurs du VTD se situent sur la courbe de COMPLIANCE DIASTOLIQUE (relation pression-volume en diastole). L'élastance maximale (Emax) définit le point d'élastance de fin de systole."
    },

    // Q22 — Annale 2020-2021, Q41
    {
        "id": "UE4-JBK-22",
        "text": "En cas de diminution importante de la contractilité du ventricule gauche, sélectionner la ou les proposition(s) correcte(s) :",
        "options": {
            "A": "Un infarctus du myocarde pourrait être une cause possible de l'altération de la contractilité.",
            "B": "On pourrait observer une augmentation des pressions en amont du ventricule gauche, responsable d'un œdème pulmonaire et d'une augmentation de la pression dans l'atrium droit.",
            "C": "Un des mécanismes d'adaptation sur le long terme passe par l'activation du système rénine-angiotensine et une vasoconstriction sympathique, pour maintenir un retour veineux.",
            "D": "Le patient présenterait typiquement une dyspnée limitant ses efforts, une hépatomégalie, et des œdèmes des membres inférieurs.",
            "E": "En cas de dyspnée importante, l'augmentation de la pression intra-thoracique par la ventilation non invasive (VNI) serait délétère pour ce patient."
        },
        "correctAnswers": ["A", "B", "C", "D"],
        "explanation": "A ✅ VRAI : L'infarctus du myocarde nécrose une portion du myocarde, réduisant directement la masse musculaire contractile et donc la contractilité globale du ventricule gauche.\nB ✅ VRAI : Un VG défaillant ne pompe pas efficacement le sang. Le sang stagne en amont (oreillette gauche, veines pulmonaires) → augmentation des pressions pulmonaires → œdème pulmonaire. La congestion se propage ensuite aux cavités droites.\nC ✅ VRAI : Les mécanismes compensateurs incluent l'activation du SRAA (rétention hydrosodée, vasoconstriction) et du système sympathique (tachycardie, vasoconstriction) pour maintenir la pression artérielle et le retour veineux.\nD ✅ VRAI : La dyspnée (congestion pulmonaire), l'hépatomégalie et les œdèmes des membres inférieurs (congestion systémique droite) sont la triade classique de l'insuffisance cardiaque congestive.\nE ❌ FAUX : La VNI est au contraire BÉNÉFIQUE dans l'œdème pulmonaire cardiogénique. L'augmentation de la pression intra-thoracique réduit la précharge (retour veineux) et la postcharge du VG, soulageant ainsi le myocarde défaillant."
    },

    // Q23 — Annale 2020-2021, Q42
    {
        "id": "UE4-JBK-23",
        "text": "En cas de surcharge en pression du ventricule gauche, sélectionner la ou les proposition(s) correcte(s) :",
        "options": {
            "A": "Un rétrécissement valvulaire aortique important serait une cause possible de surcharge en pression du ventricule gauche.",
            "B": "Une hypertrophie du ventricule gauche pourrait être observée à l'échographie cardiaque.",
            "C": "On pourrait observer une augmentation des pressions en amont du ventricule gauche, responsable d'un œdème pulmonaire et d'une augmentation de la pression dans l'atrium droit.",
            "D": "Le patient présenterait typiquement une dyspnée limitant ses efforts, des syncopes, et ultimement une insuffisance cardiaque.",
            "E": "En cas de dyspnée importante, l'augmentation de la pression veineuse par une expansion volumique serait bénéfique pour ce patient."
        },
        "correctAnswers": ["A", "B", "C", "D"],
        "explanation": "A ✅ VRAI : Le rétrécissement aortique (sténose valvulaire) crée un obstacle à l'éjection ventriculaire gauche, augmentant la postcharge. C'est la cause la plus fréquente de surcharge barométrique du VG.\nB ✅ VRAI : Pour lutter contre cette surcharge en pression chronique, le VG développe une hypertrophie concentrique (épaississement de la paroi sans dilatation) — visible à l'échographie.\nC ✅ VRAI : Comme pour toute insuffisance VG, la défaillance progressive entraîne une stase en amont avec hypertension pulmonaire et œdème pulmonaire.\nD ✅ VRAI : La triade classique du rétrécissement aortique sévère est : dyspnée d'effort, angor d'effort, et syncopes d'effort — évoluant vers l'insuffisance cardiaque terminale.\nE ❌ FAUX : Augmenter la pression veineuse par expansion volumique aggraverait la congestion pulmonaire. Au contraire, on cherche à diminuer la précharge (diurétiques) et la postcharge chez ces patients."
    },

    // ============================================================
    // JAMEL BEY KARIM — Physiologie Cardiaque
    // Annales 2021-2022 (5 QCMs : indices 23 à 27)
    // ============================================================

    // Q24 — Annale 2021-2022, Q52
    {
        "id": "UE4-JBK-24",
        "text": "Concernant les valves cardiaques (2021-2022), sélectionner la ou les proposition(s) correcte(s) :",
        "options": {
            "A": "Il y a 4 valves cardiaques : deux atrio-ventriculaires et deux ventriculo-artérielles.",
            "B": "Lorsqu'elles sont ouvertes, ces valves exercent une forte résistance à l'écoulement du flux sanguin. Lorsqu'elles sont fermées, elles sont étanches.",
            "C": "En systole, les valves atrio-ventriculaires sont fermées.",
            "D": "Les valves ventriculo-artérielles possèdent des cordages s'insérant sur des piliers et muscles pectinés.",
            "E": "La valve aortique obstrue les ostia coronaires en systole."
        },
        "correctAnswers": ["A", "C"],
        "explanation": "A ✅ VRAI : 4 valves cardiaques : mitrale et tricuspide (atrio-ventriculaires) ; aortique et pulmonaire (ventriculo-artérielles).\nC ✅ VRAI : En systole ventriculaire, les valves AV (mitrale et tricuspide) se ferment pour empêcher le reflux du sang des ventricules vers les oreillettes. C'est le B1.\nB ❌ FAUX : Première partie (ouverture → pas de forte résistance normale) est fausse ; la deuxième partie (fermeture → étanche) est vraie. L'item composite est considéré faux car la 1ère partie est incorrecte.\nD ❌ FAUX : Les cordages tendineux et muscles papillaires sont associés aux valves ATRIO-VENTRICULAIRES (mitrale, tricuspide). Les valves sigmoïdes (aortique, pulmonaire) n'ont pas de cordages.\nE ❌ FAUX : Les artères coronaires naissent des sinus de Valsalva. En systole, elles sont comprimées par le myocarde (pas par la valve). C'est pourquoi la perfusion coronaire s'effectue principalement en diastole."
    },

    // Q25 — Annale 2021-2022, Q54
    {
        "id": "UE4-JBK-25",
        "text": "À propos des types de contractions musculaires (2021-2022), sélectionner la ou les proposition(s) correcte(s) :",
        "options": {
            "A": "Il existe deux types de contractions musculaires : la contraction isométrique et la contraction isotonique.",
            "B": "Pour étudier la contraction isotonique, on fixe un muscle papillaire sur un support rigide afin de maintenir une longueur constante et on mesure la tension musculaire.",
            "C": "Pour étudier la contraction isométrique, on fixe un muscle papillaire sur un support rigide afin de maintenir une longueur constante et on mesure la tension musculaire.",
            "D": "En contraction isométrique, la force de contraction s'accroît en fonction de l'étirement initial jusqu'à Lmax, après laquelle la force augmente exponentiellement.",
            "E": "En contraction isométrique, la force de contraction est fonction de la contractilité intrinsèque du muscle et de son étirement initial."
        },
        "correctAnswers": ["A", "C", "E"],
        "explanation": "A ✅ VRAI : Deux types de contractions : isométrique (longueur fixe, tension variable) et isotonique (tension fixe, longueur variable).\nC ✅ VRAI : L'isométrique est étudiée en fixant le muscle (longueur constante) et en mesurant la tension développée.\nE ✅ VRAI : En isométrique, la tension dépend de deux paramètres indépendants : 1) la contractilité intrinsèque (Vmax, inotropie) et 2) l'étirement initial (longueur, loi de Starling).\nB ❌ FAUX : La description (muscle fixé, longueur constante, mesure de tension) correspond à l'ISOMÉTRIQUE, pas à l'isotonique.\nD ❌ FAUX : Au-delà de Lmax, la force DÉCROÎT (le chevauchement actine-myosine devient sous-optimal car les filaments se déconnectent). Elle n'augmente pas exponentiellement."
    },

    // Q26 — Annale 2021-2022, Q59
    {
        "id": "UE4-JBK-26",
        "text": "À propos de la loi de Frank et Starling (2021-2022), sélectionner la ou les proposition(s) correcte(s) :",
        "options": {
            "A": "Une diminution du retour veineux est responsable d'une augmentation du volume télédiastolique.",
            "B": "Une augmentation de la précharge augmente la force contractile et donc le volume d'éjection systolique.",
            "C": "Le cœur s'accommode des variations de retour veineux en modifiant ses dimensions (autorégulation hétérométrique).",
            "D": "Le cœur est dit précharge dépendant quand il se situe sur la partie initiale croissante de la courbe de Frank et Starling.",
            "E": "Le cœur est dit précharge indépendant s'il a atteint sa Lmax, il est alors sur la partie horizontale de la courbe de Frank et Starling."
        },
        "correctAnswers": ["B", "C", "D", "E"],
        "explanation": "B ✅ VRAI : L'augmentation de la précharge étire les sarcomères → meilleur chevauchement actine-myosine → force de contraction plus importante → VES augmenté.\nC ✅ VRAI : C'est la définition de l'autorégulation hétérométrique (Frank-Starling) : adaptation dimensionnelle du cœur aux variations de retour veineux.\nD ✅ VRAI : Sur la portion ascendante de la courbe, le VES croît avec la précharge → le cœur est précharge-dépendant.\nE ✅ VRAI : Une fois Lmax atteinte, on est sur le plateau. Une augmentation supplémentaire de la précharge n'améliore plus le VES → précharge-indépendant.\nA ❌ FAUX : Une DIMINUTION du retour veineux entraîne une DIMINUTION du VTD (le ventricule reçoit moins de sang), et non une augmentation."
    },

    // Q27 — Annale 2021-2022, Q60
    {
        "id": "UE4-JBK-27",
        "text": "À propos des courbes de pression-volume (2021-2022), sélectionner la ou les proposition(s) correcte(s) :",
        "options": {
            "A": "Cette boucle de pression-volume met en évidence une contractilité altérée.",
            "B": "Cette boucle de pression-volume met en évidence une augmentation brutale de la postcharge.",
            "C": "On pourrait enregistrer cette courbe de pression-volume en cas de poussée d'hypertension sévère.",
            "D": "Une diminution du volume d'éjection systolique augmente le volume télédiastolique du cycle suivant.",
            "E": "La valve aortique se ferme au point de pression maximale de la boucle."
        },
        "correctAnswers": ["B", "C", "D"],
        "explanation": "B ✅ VRAI : La boucle décrite (pression plus haute, VES réduit, déplacement vers la droite) est le pattern typique d'une augmentation brutale de la postcharge — la boucle s'étire en hauteur sans pouvoir éjecter autant de sang.\nC ✅ VRAI : Une poussée hypertensive sévère augmente brutalement la pression aortique (postcharge), générant exactement ce type de boucle avec pression ventriculaire élevée et VES diminué.\nD ✅ VRAI : Si le VES diminue, le volume télésystolique résiduel augmente. Lors du remplissage suivant, ce volume résiduel s'ajoute au retour veineux, augmentant le VTD du cycle suivant (loi de Starling).\nA ❌ FAUX : Une contractilité altérée donne une boucle déplacée vers la droite avec une pente d'élastance (Emax) diminuée — pas nécessairement une pression systolique élevée.\nE ❌ FAUX : La valve aortique se ferme à la FIN de l'éjection systolique, quand la pression ventriculaire redevient inférieure à la pression aortique — cela correspond au coin supérieur gauche de la boucle, non au point de pression maximale."
    },

    // Q28 — Annale 2021-2022, Q61
    {
        "id": "UE4-JBK-28",
        "text": "À propos du débit cardiaque et de sa régulation (2021-2022), sélectionner la ou les proposition(s) correcte(s) :",
        "options": {
            "A": "La formule du débit cardiaque est : Débit cardiaque (mL/min) = Volume d'éjection systolique (mL) × fréquence cardiaque (min).",
            "B": "Au niveau cardiaque, le système nerveux parasympathique innerve directement le myocarde ventriculaire.",
            "C": "Le système nerveux sympathique innerve seulement les nœuds sinusal et atrio-ventriculaire.",
            "D": "Le système nerveux parasympathique est lusitrope négatif.",
            "E": "L'utilisation d'atropine lève le frein parasympathique et provoque une bradycardie."
        },
        "correctAnswers": ["A"],
        "explanation": "A ✅ VRAI : Qc = VES × FC est la formule fondamentale du débit cardiaque. Elle peut être indexée à la surface corporelle (index cardiaque = Qc / SC).\nB ❌ FAUX : Le parasympathique innerve principalement le tissu nodal (NSA, NAV) et les oreillettes. Son influence sur le myocarde VENTRICULAIRE est négligeable (peu de terminaisons vagales ventriculaires).\nC ❌ FAUX : Le sympathique innerve les nœuds SA et AV MAIS AUSSI l'ensemble du myocarde ventriculaire (effets inotrope et lusitrope positifs sur les ventricules).\nD ❌ FAUX : Le parasympathique a un effet lusitrope NÉGATIF sur les oreillettes (ralentit la relaxation), mais ce point est controversé pour les ventricules. L'effet cliniquement dominant est la diminution de la FC (chronotropisme négatif).\nE ❌ FAUX : L'atropine (anti-cholinergique) bloque les récepteurs muscariniques, levant le frein vagal → accélération de la FC → TACHYCARDIE, pas bradycardie."
    },

    // ============================================================
    // JAMEL BEY KARIM — Physiologie Cardiaque
    // Annales 2022-2023 (4 QCMs : indices 28 à 31)
    // ============================================================

    // Q29 — Annale 2022-2023, Q37
    {
        "id": "UE4-JBK-29",
        "text": "À propos de la loi de Frank et Starling (2022-2023), sélectionner la ou les proposition(s) correcte(s) :",
        "options": {
            "A": "Une augmentation du retour veineux est responsable d'une augmentation du volume télédiastolique, le cœur se distend.",
            "B": "Une augmentation brutale de la postcharge augmente la force contractile au cycle suivant par augmentation du volume télésystolique et de la précharge.",
            "C": "Le cœur s'accommode des variations de retour veineux en modifiant ses dimensions (autorégulation hétérométrique).",
            "D": "Le cœur est dit précharge-dépendant quand il se situe sur la partie initiale croissante de la courbe de Frank et Starling.",
            "E": "Le cœur est dit précharge-indépendant s'il est sur la partie horizontale de la courbe de Frank et Starling."
        },
        "correctAnswers": ["A", "B", "C", "D", "E"],
        "explanation": "A ✅ VRAI : Augmentation du retour veineux → plus de sang reçu → VTD augmenté → le ventricule se distend (étirement des fibres = augmentation de la précharge).\nB ✅ VRAI : Une postcharge élevée réduit le VES sur ce cycle → le volume résiduel (VTS) augmente → au cycle suivant, le VTD est plus grand (précharge augmentée) → par Starling, la force contractile augmente pour compenser. C'est le mécanisme de régulation hétérométrique à la postcharge.\nC ✅ VRAI : Définition de l'autorégulation hétérométrique : adaptation de la force contractile aux variations du retour veineux par modification des dimensions ventriculaires.\nD ✅ VRAI : Sur la portion ascendante de la courbe, le VES augmente avec la précharge → le cœur est précharge-dépendant. Une expansion volumique sera efficace chez ce patient.\nE ✅ VRAI : Sur la portion plateau, au-delà de Lmax, une augmentation supplémentaire du volume n'améliore plus le VES → précharge-indépendant."
    },

    // Q30 — Annale 2022-2023, Q38
    {
        "id": "UE4-JBK-30",
        "text": "À propos du retour veineux (2022-2023), sélectionner la ou les proposition(s) correcte(s) :",
        "options": {
            "A": "Les veines jouent le rôle de réservoir à basse pression et haut volume (75% du volume sanguin).",
            "B": "Le débit cardiaque est limité par le débit maximal du retour veineux, cette relation est modélisée par les courbes de Guyton.",
            "C": "La pression motrice veineuse est un déterminant du débit cardiaque maximal.",
            "D": "Une défaillance du ventricule droit augmente la pression dans l'atrium droit et diminue la pression motrice veineuse.",
            "E": "La pression veineuse moyenne peut être augmentée par une expansion volumique ou une baisse de la pression dans l'atrium droit."
        },
        "correctAnswers": ["A", "B", "C", "D"],
        "explanation": "A ✅ VRAI : Le système veineux est le réservoir principal de la volémie (~65-75% du volume sanguin total), à basse pression.\nB ✅ VRAI : Les courbes de Guyton (intersection courbe de Frank-Starling et courbe de retour veineux) modélisent le point d'équilibre entre débit cardiaque et retour veineux.\nC ✅ VRAI : La pression motrice veineuse (Pmv - Pad = pression systémique moyenne − pression auriculaire droite) est le gradient qui propulse le sang vers le cœur droit et détermine le retour veineux maximal.\nD ✅ VRAI : La défaillance du VD stagne le sang → pression dans l'AD augmente → le gradient de pression motrice (Pmv - Pad) diminue → retour veineux réduit → cercle vicieux.\nE ❌ FAUX : La pression veineuse moyenne augmente avec l'expansion volumique (vrai). Mais une BAISSE de la pression auriculaire droite augmente le GRADIENT de retour veineux (et donc le débit de retour veineux), elle n'augmente pas directement la pression veineuse moyenne systémique."
    },

    // Q31 — Annale 2022-2023, Q40
    {
        "id": "UE4-JBK-31",
        "text": "À propos des courbes de pression-volume (2022-2023), sélectionner la ou les proposition(s) correcte(s) :",
        "options": {
            "A": "La boucle de pression-volume n°2 met en évidence une contractilité altérée.",
            "B": "La boucle de pression-volume n°2 peut être observée lors d'un infarctus du myocarde sévère.",
            "C": "On pourrait enregistrer la courbe de pression-volume n°1 en cas de perfusion d'adrénaline.",
            "D": "Les droites n°1 et n°2 représentent l'élastance maximale (Emax) ou la contractilité du myocarde.",
            "E": "Le volume d'éjection systolique est plus important sur la courbe n°1 que sur la courbe n°2."
        },
        "correctAnswers": ["A", "B", "C", "D", "E"],
        "explanation": "A ✅ VRAI : La boucle n°2 présente une pente d'élastance (Emax) abaissée — signe d'une contractilité diminuée.\nB ✅ VRAI : Un infarctus sévère détruit du myocarde contractile, abaissant la contractilité globale. La boucle se déplace vers la droite avec une Emax plus faible.\nC ✅ VRAI : L'adrénaline est un agent inotrope positif puissant. Elle augmente la pente d'Emax (courbe n°1 avec pente plus élevée), générant un VES plus important à même précharge.\nD ✅ VRAI : La droite d'élastance maximale (ESPVR) est l'indicateur de contractilité ventriculaire — sa pente représente l'Emax. La droite n°1 (plus pentue) = meilleure contractilité.\nE ✅ VRAI : Avec une contractilité plus élevée (courbe n°1), le ventricule éjecte un volume plus grand (VES plus important) — la largeur de la boucle n°1 est plus grande que celle de la boucle n°2."
    },

    // Q32 — Annale 2022-2023, Q41
    {
        "id": "UE4-JBK-32",
        "text": "À propos du débit cardiaque et de sa régulation (2022-2023), sélectionner la ou les proposition(s) correcte(s) :",
        "options": {
            "A": "La formule du débit cardiaque est : Débit cardiaque (mL/min) = Volume d'éjection systolique (mL) × fréquence cardiaque (min). Cette formule peut être indexée à la surface corporelle.",
            "B": "Au niveau cardiaque, le système nerveux parasympathique a un effet dromotrope, inotrope et chronotrope négatif.",
            "C": "Le système nerveux sympathique innerve directement les nœuds sinusal et atrio-ventriculaire, il a un effet dromotrope, inotrope et chronotrope positif.",
            "D": "Le médiateur du système nerveux parasympathique est l'acétylcholine, il se fixe directement sur les récepteurs muscariniques de type M2.",
            "E": "Le système nerveux parasympathique et sympathique sont deux systèmes à l'équilibre avec un tonus sympathique prédominant."
        },
        "correctAnswers": ["A", "C", "D"],
        "explanation": "A ✅ VRAI : Qc = VES × FC est la formule fondamentale. L'index cardiaque = Qc / surface corporelle (en L/min/m²), valeur normale ~2,5-4 L/min/m².\nC ✅ VRAI : Le sympathique innerve le NSA, le NAV ET le myocarde ventriculaire via la noradrénaline (récepteurs β1). Effets : chronotrope + (↑ FC), dromotrope + (↑ conduction AV), inotrope + (↑ contractilité).\nD ✅ VRAI : L'acétylcholine est le neuromédiateur du parasympathique. Elle se fixe sur les récepteurs muscariniques M2 du tissu nodal (NSA, NAV), entraînant une ouverture des canaux K+ et une hyperpolarisation → ralentissement.\nB ❌ FAUX : Le parasympathique est chronotrope NÉGATIF et dromotrope NÉGATIF (correct), mais son effet inotrope négatif sur les ventricules est minimal (peu d'innervation vagale ventriculaire). L'effet inotrope négatif marqué s'exerce surtout sur les oreillettes.\nE ❌ FAUX : Au repos, c'est le tonus PARASYMPATHIQUE qui est prédominant (d'où une FC de repos autour de 60-70 bpm). Sans le tonus vagal, la FC intrinsèque du NSA serait ~100-110 bpm."
    },

    // ============================================================
    // LAMBERT GILLES — Embryologie du cœur & Athérosclérose
    // Annales type DFGSM2 (4 QCMs : indices 32 à 35)
    // ============================================================

    // Q33 — Embryologie cardiaque — Développement initial
    {
        "id": "UE4-LG-01",
        "text": "Concernant le développement embryologique initial du cœur, quelles propositions sont exactes ?",
        "options": {
            "A": "Le cœur est le premier organe fonctionnel de l'embryon.",
            "B": "Les cellules cardiaques primitives dérivent du feuillet endodermique lors de la gastrulation.",
            "C": "Le tube cardiaque primitif est issu de la fusion de deux tubes endocardiques.",
            "D": "L'activité contractile rythmique (premiers battements) débute au cours de la 2ème semaine de développement.",
            "E": "Avant son cloisonnement, le tube cardiaque primitif est organisé de manière linéaire : tronc artériel, bulbe, ventricule primitif, oreillette primitive et sinus veineux."
        },
        "correctAnswers": ["A", "C", "E"],
        "explanation": "A ✅ VRAI : Le cœur est le tout premier organe fonctionnel de l'embryon. Il commence à battre dès la 4ème semaine, avant même que le système nerveux soit en place.\nC ✅ VRAI : À J21, deux tubes endocardiques pairs se forment de part et d'autre de la ligne médiane. Ils fusionnent à J24 pour former le tube cardiaque primitif unique, grâce au repliement latéral de l'embryon.\nE ✅ VRAI : Le tube cardiaque primitif linéaire est organisé (de l'extrémité crâniale à l'extrémité caudale) : tronc artériel → bulbe cardiaque → ventricule primitif → oreillette primitive → sinus veineux. C'est cette organisation qui subira la 'loop' (boucle de Jost).\nB ❌ FAUX : Les cellules cardiaques primitives dérivent du MÉSODERME (et non de l'endoderme). Plus précisément, elles proviennent du mésoderme splanchnique issu du tiers crânial de la ligne primitive lors de la gastrulation (J14-J16).\nD ❌ FAUX : Les premiers battements rythmiques spontanés apparaissent à la fin de la 4ème semaine de développement embryonnaire (et non à la 2ème semaine). À la 2ème semaine, on est encore au stade de bilaminarité/trilaminarité."
    },

    // Q34 — Embryologie cardiaque — Système vasculaire primitif
    {
        "id": "UE4-LG-02",
        "text": "Concernant la formation et le remaniement du système vasculaire primitif, quelles propositions sont exactes ?",
        "options": {
            "A": "Le 3ème arc aortique est à l'origine des artères pulmonaires droite et gauche.",
            "B": "Le 4ème arc aortique participe à la formation de l'artère sous-clavière droite et de l'arc aortique.",
            "C": "Pendant la vie fœtale, le canal artériel (issu du 6ème arc aortique) constitue un shunt entre l'artère pulmonaire et l'aorte descendante.",
            "D": "Au niveau du système veineux, la veine ombilicale droite persiste pour apporter le sang oxygéné du placenta au fœtus, tandis que la gauche disparaît.",
            "E": "À la naissance, la fermeture du foramen ovale est principalement une conséquence mécanique de l'inversion des pressions entre le cœur droit et le cœur gauche."
        },
        "correctAnswers": ["B", "C", "E"],
        "explanation": "B ✅ VRAI : Le 4ème arc aortique joue un rôle majeur : à droite, il participe à la formation de l'artère sous-clavière droite ; à gauche, il forme la portion de l'arc aortique (entre la carotide commune gauche et l'artère sous-clavière gauche).\nC ✅ VRAI : Le canal artériel (de Botal), dérivé du 6ème arc aortique gauche, est un shunt droite-gauche qui court-circuite les poumons non fonctionnels du fœtus. Il se ferme à la naissance (d'abord spasme fonctionnel, puis ligament artériel).\nE ✅ VRAI : À la naissance, l'arrêt de la circulation placentaire diminue le retour veineux droit, et l'ouverture des poumons augmente massivement le retour veineux gauche. La pression OG > OD plaque mécaniquement le septum primum sur le septum secundum, fermant le foramen ovale (ostium secundum).\nA ❌ FAUX : Le 3ème arc aortique est à l'origine des artères CAROTIDES (communes, internes et externes). Ce sont les 6èmes arcs qui donnent naissance aux artères pulmonaires (le droit pour l'artère pulmonaire droite, le gauche pour l'artère pulmonaire gauche + canal artériel).\nD ❌ FAUX : C'est l'inverse ! La veine ombilicale DROITE régresse et disparaît. C'est la veine ombilicale GAUCHE qui persiste tout au long de la vie fœtale pour acheminer le sang oxygéné du placenta jusqu'au foie (via le canal d'Arantius/ductus venosus)."
    },

    // Q35 — Athérosclérose — Strie lipidique et inflammation
    {
        "id": "UE4-LG-03",
        "text": "Concernant les étapes précoces de l'athérosclérose (strie lipidique et inflammation), quelles propositions sont exactes ?",
        "options": {
            "A": "La maladie débute par une accumulation de lipoprotéines (notamment LDL) dans la média de la paroi artérielle.",
            "B": "Les forces hémodynamiques (turbulences) aux bifurcations artérielles fragilisent la barrière endothéliale et augmentent sa perméabilité.",
            "C": "L'oxydation des LDL (oxLDL) stimule la production endothéliale de monoxyde d'azote (NO), favorisant ainsi la vasodilatation.",
            "D": "Les cellules spumeuses ('foam cells') proviennent de la phagocytose massive des LDL oxydés par les lymphocytes T.",
            "E": "Le diabète accélère le processus inflammatoire via la formation de composés glycosylés (AGEs)."
        },
        "correctAnswers": ["B", "E"],
        "explanation": "B ✅ VRAI : Les zones de bifurcations, courbures et rétrécissements artériels sont soumises à des forces de cisaillement (shear stress) perturbées et des turbulences. Ces contraintes mécaniques altèrent la jonction serrée de l'endothélium, augmentent sa perméabilité et déclenchent une réponse inflammatoire — expliquant la topographie préférentielle des plaques.\nE ✅ VRAI : Les AGEs (Advanced Glycation End-products) formés en excès dans le diabète interagissent avec leurs récepteurs (RAGE) sur les cellules endothéliales et les macrophages, amplifiant la réponse inflammatoire et aggravant la dysfonction endothéliale.\nA ❌ FAUX : L'athérosclérose est une maladie de l'INTIMA, et non de la média. Les LDL s'accumulent dans la couche intimale sous-endothéliale, entre l'endothélium et la limitante élastique interne. La média est concernée dans d'autres pathologies (ex: médiacalcose de Mönckeberg).\nC ❌ FAUX : C'est l'opposé. Les LDL oxydés (oxLDL) INHIBENT la production de NO et dégradent le NO disponible. Cette dysfonction endothéliale entraîne une vasoconstriction, une adhésion leucocytaire accrue et une activation plaquettaire.\nD ❌ FAUX : Les cellules spumeuses dérivent des MACROPHAGES (issus des monocytes circulants recrutés dans l'intima) qui ont phagocyté massivement des oxLDL via des récepteurs scavenger (SR-A, CD36). Les lymphocytes T participent à l'inflammation mais ne deviennent pas des cellules spumeuses."
    },

    // Q36 — Athérosclérose — Plaque fibreuse et complications
    {
        "id": "UE4-LG-04",
        "text": "À propos de l'évolution vers la plaque fibreuse et ses complications cliniques, quelles propositions sont exactes ?",
        "options": {
            "A": "En réponse à l'inflammation, les cellules musculaires lisses (CML) migrent de la média vers l'intima.",
            "B": "La chape fibreuse ('fibrous cap') est principalement synthétisée par les macrophages pour isoler le cœur nécrotique.",
            "C": "La dégradation de cette chape fibreuse par des métalloprotéinases (collagénases) rend la plaque instable et vulnérable à la rupture.",
            "D": "Avec le temps, la région centrale contenant les débris lipidiques et cellulaires (cœur nécrotique) a tendance à se calcifier.",
            "E": "Un 'embole' correspond à la dilatation anormale de la paroi d'un vaisseau (formation d'un sac)."
        },
        "correctAnswers": ["A", "C", "D"],
        "explanation": "A ✅ VRAI : Sous l'effet des cytokines pro-inflammatoires (PDGF, TGF-β, FGF…) libérées par les macrophages et les plaquettes, les CML se dédifférencient, migrent depuis la média vers l'intima et adoptent un profil sécrétoire (prolifèrent et produisent de la matrice extracellulaire). C'est l'étape de constitution de la plaque fibreuse.\nC ✅ VRAI : Les macrophages et les lymphocytes T activés sécrètent des métalloprotéinases (MMP-1, MMP-9 collagénase/gélatinase) qui dégradent le collagène de la chape fibreuse, l'amincissant progressivement. Une chape fine → plaque dite 'vulnérable' ou 'instable', susceptible de se rompre et de déclencher une thrombose occlusive (infarctus, AVC).\nD ✅ VRAI : Le cœur nécrotique (lipid core) contenant les débris de cellules spumeuses mortes et les cristaux de cholestérol peut se calcifier au fil du temps. On parle de calcification de la plaque, visible à l'imagerie (scanner coronaire). Ces calcifications rendent la plaque plus 'stable' mais augmentent la rigidité artérielle.\nB ❌ FAUX : La chape fibreuse est synthétisée par les CELLULES MUSCULAIRES LISSES (CML) qui sécrètent du collagène de type I et III, de l'élastine et d'autres protéines matricielles. Les macrophages ont l'effet contraire : ils dégradent la chape en sécrétant des métalloprotéinases (rôle déstabilisant).\nE ❌ FAUX : La définition donnée (dilatation anormale en sac de la paroi d'un vaisseau) correspond à un ANÉVRISME. Un embole (ou embol) est un corps étranger (fragment de thrombus, plaque, corps gras, bulle d'air…) qui se détache de son site d'origine et qui migre dans la circulation pour obstruer un vaisseau en aval (embolie)."
    },

    // ============================================================
    // LAMBERT GILLES — Histologie du cœur et du système vasculaire
    // QCM DFGSM2 (20 QCMs : indices 36 à 55)
    // ============================================================

    // Q37 — Histologie — Techniques de coloration
    {
        "id": "UE4-LG-05",
        "text": "À propos des techniques de coloration histologique, quelles propositions sont exactes ?",
        "options": {
            "A": "L'hématoxyline et éosine (H&E) colore les noyaux en rose et le cytoplasme en violet.",
            "B": "Dans un vaisseau sanguin coloré au H&E, les globules rouges apparaissent violet foncé grâce à leur noyau.",
            "C": "Le Periodic Acid Schiff (PAS) met en évidence le glycogène et les glycoprotéines en rouge/rose.",
            "D": "La coloration de Van Gieson colore le collagène en rose et le muscle strié en jaune.",
            "E": "Le bleu alcian colore préférentiellement les mucines et les glycosaminoglycanes."
        },
        "correctAnswers": ["C", "D", "E"],
        "explanation": "C ✅ VRAI : Le PAS (Periodic Acid Schiff) est la coloration de référence pour les glucides complexes : glycogène, glycoprotéines, mucines et membranes basales (riches en glycoprotéines) apparaissent en rouge/rose magenta.\nD ✅ VRAI : La coloration de Van Gieson est composée de fuchsine acide (collagène en rose/rouge) et de picrate de potassium (muscle en jaune/brun). Elle est très utilisée pour distinguer fibrose et muscle dans le cœur.\nE ✅ VRAI : Le bleu alcian est une coloration cationique qui se lie aux polysaccharides chargés négativement (glycosaminoglycanes, mucines acides). Il colore en bleu le cartilage, le tissu conjonctif muqueux et les cellules caliciformes.\nA ❌ FAUX : C'est l'inverse. L'hématoxyline (hematoxyline/alun) colore les noyaux (riches en acides nucléiques) en VIOLET/BLEU (basophile), et l'éosine colore le cytoplasme en ROSE (acidophile/éosinophile).\nB ❌ FAUX : Les globules rouges matures n'ont PAS de noyau (ils sont anucléés). Ils apparaissent en ROSE VIF/ROUGEÂTRE à l'H&E car leur hémoglobine fixe l'éosine. Ils n'ont pas de coloration bleue (pas d'ADN)."
    },

    // Q38 — Histologie — Structure générale des vaisseaux
    {
        "id": "UE4-LG-06",
        "text": "Concernant la structure générale des vaisseaux sanguins, quelles propositions sont exactes ?",
        "options": {
            "A": "L'intima est constituée d'un épithélium pluristratifié au contact du sang.",
            "B": "La média est la couche la plus épaisse et développée dans la paroi des artères.",
            "C": "La média est totalement absente dans la paroi des capillaires sanguins.",
            "D": "L'adventice est la couche la plus développée dans les veines de gros calibre.",
            "E": "À diamètre égal, une veine possède une lumière plus petite et une paroi plus épaisse qu'une artère."
        },
        "correctAnswers": ["B", "C", "D"],
        "explanation": "B ✅ VRAI : La média artérielle est la couche fonctionnelle prédominante. Riche en cellules musculaires lisses et fibres élastiques, elle assure la résistance à la pression et la régulation du tonus vasomoteur.\nC ✅ VRAI : Les capillaires ne possèdent qu'un endothélium (+ sa lame basale), éventuellement entouré de péricytes. Il n'y a ni média (pas de muscle lisse) ni adventice véritable — c'est la structure la plus simple.\nD ✅ VRAI : Dans les veines de gros calibre, l'adventice conjonctive (riche en collagène et fibres longitudinales de muscle lisse) est la tunique prédominante, compense la faible épaisseur de la média.\nA ❌ FAUX : L'intima est constituée d'un endothélium MONOCOUCHE pavimenteux simple (une seule rangée de cellules aplaties jointives), jamais pluristratifié.\nE ❌ FAUX : C'est l'inverse. À calibre équivalent, une veine a une lumière PLUS GRANDE (pour un même débit à basse pression) et une paroi PLUS MINCE qu'une artère. C'est la différence morphologique clé artère/veine."
    },

    // Q39 — Histologie — Fonctions de l'endothélium
    {
        "id": "UE4-LG-07",
        "text": "À propos des fonctions de l'endothélium vasculaire, quelles propositions sont exactes ?",
        "options": {
            "A": "Les cellules endothéliales sécrètent du monoxyde d'azote (NO) qui a un effet vasoconstricteur direct.",
            "B": "L'activateur du plasminogène (tPA) sécrété par l'endothélium participe à la dissolution (fibrinolyse) des caillots.",
            "C": "L'histamine induit une augmentation de la perméabilité endothéliale responsable d'un œdème local transitoire.",
            "D": "La prostacycline sécrétée par l'endothélium favorise l'agrégation plaquettaire.",
            "E": "La thrombomoduline exprimée à la surface endothéliale possède une puissante action anticoagulante."
        },
        "correctAnswers": ["B", "C", "E"],
        "explanation": "B ✅ VRAI : Le tPA (tissue Plasminogen Activator) est sécrété par l'endothélium sain. Il convertit le plasminogène en plasmine, enzyme qui dégrade la fibrine des caillots (fibrinolyse physiologique).\nC ✅ VRAI : L'histamine (libérée par les mastocytes lors d'une réaction inflammatoire ou allergique) se fixe sur les récepteurs H1 endothéliaux, provoquant la rétraction des cellules et l'ouverture de fentes intercellulaires → fuite de plasma → œdème.\nE ✅ VRAI : La thrombomoduline est une protéine de surface endothéliale qui se lie à la thrombine et forme un complexe activant la protéine C. La protéine C activée dégrade les facteurs Va et VIIIa, inhibant la coagulation — rôle anticoagulant majeur de l'endothélium sain.\nA ❌ FAUX : Le NO (monoxyde d'azote) produit par l'endothélium (via eNOS/NOS3) est un puissant VASODILATATEUR. Il relaxe les cellules musculaires lisses de la média (via la guanylyl cyclase). C'est l'endothéline (ET-1) qui est vasoconstrictrice.\nD ❌ FAUX : La prostacycline (PGI2) est un INHIBITEUR de l'agrégation plaquettaire et de la vasoconstriction — effet antithrombotique. C'est le thromboxane A2 (TXA2) plaquettaire qui favorise l'agrégation."
    },

    // Q40 — Histologie — Artères
    {
        "id": "UE4-LG-08",
        "text": "Concernant l'histologie des artères, quelles propositions sont exactes ?",
        "options": {
            "A": "L'aorte est le principal exemple d'artère musculaire de l'organisme.",
            "B": "La média des artères élastiques peut contenir jusqu'à une cinquantaine de couches concentriques de fibres élastiques.",
            "C": "La limitante élastique interne se situe exactement entre l'intima et la média.",
            "D": "L'innervation pariétale est assurée par les 'nervi vasorum' préférentiellement situés dans l'intima.",
            "E": "L'élasticité exceptionnelle de l'aorte permet au sang de s'écouler de manière continue pendant la diastole."
        },
        "correctAnswers": ["B", "C", "E"],
        "explanation": "B ✅ VRAI : La média de l'aorte humaine adulte contient jusqu'à 50-60 lames élastiques fenêtrées concentriques, alternant avec des cellules musculaires lisses et du collagène. C'est ce qui lui confère son exceptionnelle compliance.\nC ✅ VRAI : La limitante élastique interne (LEI) est une lame de fibres élastiques dense qui marque la frontière entre l'intima et la média dans les artères musculaires — repère histologique fondamental.\nE ✅ VRAI : L'effet Windkessel. En systole, les fibres élastiques de l'aorte sont distendues et accumulent de l'énergie élastique. En diastole, cette énergie est restituée pour propulser le sang vers la périphérie, transformant un flux pulsatile en flux continu.\nA ❌ FAUX : L'aorte est le modèle type de l'artère ÉLASTIQUE (riche en fibres élastiques). Les artères musculaires sont les artères de moyen calibre (coronaires, radiales, fémorales…), dont la média est dominée par les cellules musculaires lisses.\nD ❌ FAUX : Les vasa vasorum (vaisseaux nourriciers) et nervi vasorum (nerfs végétatifs) siègent dans l'ADVENTICE et la partie externe de la média. L'intima est trop fine et trop proche du flux sanguin pour les accueillir."
    },

    // Q41 — Histologie — Artérioles
    {
        "id": "UE4-LG-09",
        "text": "Concernant les artérioles, quelles propositions sont exactes ?",
        "options": {
            "A": "Leur diamètre externe est compris entre 5 et 10 µm.",
            "B": "La média des artérioles comporte entre 1 et 4 couches de cellules musculaires lisses.",
            "C": "En coupe longitudinale histologique, le noyau des cellules endothéliales apparaît de forme arrondie.",
            "D": "Dans les plus petites artérioles, l'endothélium établit des jonctions directes avec les cellules musculaires lisses à travers la lame basale.",
            "E": "Elles possèdent une adventice très épaisse, riche en fibres collagènes."
        },
        "correctAnswers": ["B", "D"],
        "explanation": "B ✅ VRAI : La caractéristique histologique clé des artérioles est la présence de 1 à 4 (en moyenne 2-3) couches de cellules musculaires lisses dans la média, qui diminuent progressivement à mesure que le calibre diminue.\nD ✅ VRAI : Dans les plus petites artérioles (<30 µm), des jonctions myo-endothéliales (myoendothelial gap junctions) directes s'établissent entre les cellules endothéliales et les CML à travers des fenêtres de la lame basale. Ces communications permettent la régulation locale du tonus vasomoteur.\nA ❌ FAUX : Un diamètre de 5 à 10 µm correspond aux CAPILLAIRES. Les artérioles mesurent entre ~10-15 µm (terminales) et ~400 µm (artérioles initiales). Elles ont une lumière à peine plus grande qu'un globule rouge.\nC ❌ FAUX : En coupe LONGITUDINALE, les noyaux endothéliaux sont ALLONGÉS dans le sens du flux, en fuseau. Les noyaux des cellules musculaires lisses coupées transversalement (l'enroulement autour du vaisseau) apparaissent ronds à ovales.\nE ❌ FAUX : L'adventice des artérioles est très mince, quasiment inexistante (quelques fibroblastes et fibres de réticuline). Contrairement aux artères musculaires, elles ne présentent pas d'adventice épaisse."
    },

    // Q42 — Histologie — Capillaires
    {
        "id": "UE4-LG-10",
        "text": "À propos de la microcirculation et des capillaires, quelles propositions sont exactes ?",
        "options": {
            "A": "Les capillaires continus possèdent des jonctions serrées rendant leur endothélium strictement étanche.",
            "B": "Les gaz respiratoires (O2, CO2) nécessitent des vésicules de transcytose pour diffuser à travers les cellules endothéliales.",
            "C": "On retrouve des capillaires fenêtrés de manière préférentielle dans les glandes endocrines, les glomérules rénaux et la muqueuse intestinale.",
            "D": "Les capillaires discontinus (sinusoïdes) permettent le passage exclusif du plasma, mais bloquent les cellules sanguines.",
            "E": "Les péricytes sont des cellules contractiles (apparentées aux cellules musculaires lisses) localisées autour des capillaires."
        },
        "correctAnswers": ["A", "C", "E"],
        "explanation": "A ✅ VRAI : Les capillaires continus (cerveau, poumons, muscle, peau) ont des cellules endothéliales reliées par des desmosomes et des jonctions serrées (tight junctions/zonula occludens). Ils représentent la barrière la plus sélective — notamment la barrière hémato-encéphalique.\nC ✅ VRAI : Les capillaires fenestrés (comportant des pores/fenestrations diaphragmées) permettent une filtration rapide de l'eau et des petites molécules. Ils sont caractéristiques des glandes endocrines (passage des hormones), des glomérules rénaux (filtration), de la muqueuse intestinale (absorption) et du pancréas exocrine.\nE ✅ VRAI : Les péricytes (cellules de Rouget) partagent la lame basale de l'endothélium. Ce sont des cellules mésenchymateuses ramifiées, contractiles (possèdent actine/myosine), capables de moduler le débit capillaire local. Elles jouent aussi un rôle dans l'angiogenèse.\nB ❌ FAUX : O2 et CO2 sont des molécules de petite taille et très liposolubles (particulièrement le CO2). Ils traversent les membranes lipidiques par DIFFUSION SIMPLE, sans nécessiter de transport vésiculaire. La transcytose est réservée aux macromolécules.\nD ❌ FAUX : Les sinusoïdes sont les capillaires les PLUS PERMÉABLES — ils permettent le passage non seulement du plasma mais aussi des CELLULES sanguines entières. Dans la rate et la moelle osseuse, les globules rouges traversent activement les sinusoïdes."
    },

    // Q43 — Histologie — Capillaires discontinus
    {
        "id": "UE4-LG-11",
        "text": "Concernant les capillaires discontinus (sinusoïdes), quelles propositions sont exactes ?",
        "options": {
            "A": "Ils sont caractéristiques du muscle strié squelettique et du myocarde.",
            "B": "Ils sont majoritairement présents dans le foie et la rate.",
            "C": "Dans la rate, la discontinuité endothéliale permet le passage des globules rouges en vue de leur recyclage.",
            "D": "Dans le foie, les hépatocytes sont en contact quasi-direct avec le plasma sanguin pour assurer leur fonction de filtration.",
            "E": "Leur membrane basale est toujours parfaitement continue."
        },
        "correctAnswers": ["B", "C", "D"],
        "explanation": "B ✅ VRAI : Les capillaires sinusoïdes (discontinus) sont caractéristiques des organes hématopoïétiques et de détoxification : foie (sinusoïdes hépatiques), rate, moelle osseuse rouge, et certaines glandes endocrines (corticosurrénale).\nC ✅ VRAI : Dans la pulpe rouge de la rate, les larges discontinuités endothéliales des sinusoïdes permettent aux globules rouges de passer du secteur vasculaire aux cordons de Billroth, où les macrophages éliminent les GR vieillis ou anormaux (hémolyse physiologique).\nD ✅ VRAI : Dans le foie, les sinusoïdes laissent diffuser le plasma dans l'espace de Disse (entre l'endothélium et les hépatocytes). Les hépatocytes baignent quasi-directement dans ce plasma filtré, optimisant leurs fonctions de métabolisme, détoxification et synthèse protéique.\nA ❌ FAUX : Le muscle strié squelettique et le myocarde possèdent des capillaires CONTINUS (avec jonctions serrées), adaptés aux échanges de gaz et de glucose. La barrière endothéliale y est intacte.\nE ❌ FAUX : La membrane basale des capillaires discontinus est elle-même discontinue (fragmentée, voire absente par endroits). C'est précisément cette discontinuité de la lame basale qui permet le passage des cellules entières."
    },

    // Q44 — Histologie — Système veineux
    {
        "id": "UE4-LG-12",
        "text": "À propos du système veineux et du retour sanguin, quelles propositions sont exactes ?",
        "options": {
            "A": "Les veinules post-capillaires sont totalement dépourvues de péricytes.",
            "B": "Les veinules collectrices (20-50 µm) possèdent une couche continue de cellules musculaires lisses.",
            "C": "Les valvules veineuses, formées par des replis de l'intima, sont dirigées vers la périphérie pour accélérer le flux.",
            "D": "La pathologie variqueuse témoigne de l'incontinence des valvules veineuses, souvent aux membres inférieurs.",
            "E": "Le retour veineux est passivement facilité par la contraction des muscles squelettiques environnants."
        },
        "correctAnswers": ["B", "D", "E"],
        "explanation": "B ✅ VRAI : Les veinules collectrices (20-50 µm), qui font suite aux veinules post-capillaires, commencent à acquérir une couche continue de cellules musculaires lisses dans leur paroi — caractère qui s'amplifie progressivement vers les veines de plus grand calibre.\nD ✅ VRAI : Les varices résultent de la dilatation et de la tortuosité pathologique des veines superficielles des membres inférieurs, liées à l'incompétence (incontinence) des valvules anti-reflux. Le sang stagne et les pressions augmentent progressivement.\nE ✅ VRAI : La contraction des muscles squelettiques (ex: le mollet lors de la marche) comprime les veines profondes et propulse le sang vers le cœur. Cette « pompe musculaire » est un mécanisme fondamental du retour veineux contre la gravité.\nA ❌ FAUX : Les veinules post-capillaires (10-20 µm) possèdent davantage de péricytes que les capillaires — ces péricytes contribuent à la régulation de la perméabilité. C'est d'ailleurs le siège préférentiel de l'extravasation leucocytaire lors de l'inflammation.\nC ❌ FAUX : Les valvules veineuses sont orientées vers le CŒUR (vers le haut dans les membres inférieurs), permettant au sang de remonter et bloquant son reflux vers la périphérie. Si elles étaient orientées vers la périphérie, elles empêcheraient le retour veineux."
    },

    // Q45 — Histologie — Système lymphatique
    {
        "id": "UE4-LG-13",
        "text": "Concernant le système circulatoire lymphatique, quelles propositions sont exactes ?",
        "options": {
            "A": "Contrairement aux artères, le drainage lymphatique forme un réseau de tubes borgnes naissant dans les tissus interstitiels.",
            "B": "La lymphe provenant du drainage de l'intestin en période postprandiale est appelée le chyle et possède un aspect laiteux.",
            "C": "Le conduit thoracique draine la lymphe et se jette dans le système veineux à la confluence jugulo-subclavière droite.",
            "D": "Comme les veines, les vaisseaux lymphatiques de grand calibre sont munis de valvules.",
            "E": "La circulation lymphatique traverse obligatoirement des ganglions (nœuds) riches en cellules immunocompétentes."
        },
        "correctAnswers": ["A", "B", "D", "E"],
        "explanation": "A ✅ VRAI : Les capillaires lymphatiques sont des vaisseaux à fond aveugle (culs-de-sac) qui s'ouvrent dans les espaces interstitiels. Ils drainent l'excès de liquide interstitiel, les protéines et les cellules (lymphocytes, CPA) vers le système veineux.\nB ✅ VRAI : La lymphe intestinale (chyle) est chargée de chylomicrons (gouttelettes lipidiques issus de la digestion) qui lui donnent un aspect laiteux caractéristique. Elle est drainée par les vaisseaux chylifères (lacteals) des villosités intestinales vers la citerne de Pecquet.\nD ✅ VRAI : Les vaisseaux lymphatiques de grand calibre (collecteurs) possèdent des valvules en nid de pigeon (comme les veines), indispensables pour assurer un écoulement unidirectionnel de la lymphe vers le cœur, en luttant contre la gravité.\nE ✅ VRAI : La lymphe circule obligatoirement à travers des ganglions lymphatiques (nœuds) — filtres biologiques riches en lymphocytes T, B et macrophages — qui permettent la surveillance immunitaire et l'élimination des agents pathogènes.\nC ❌ FAUX : Le conduit thoracique (grand collecteur, drainant ~3/4 du corps) se jette dans le système veineux à GAUCHE, à l'angle veineux formé par la veine jugulaire interne gauche et la veine sous-clavière gauche. C'est le conduit lymphatique droit (plus court) qui se jette à droite."
    },

    // Q46 — Histologie — Régulation et anastomoses vasculaires
    {
        "id": "UE4-LG-14",
        "text": "À propos de la régulation et des anastomoses vasculaires, quelles propositions sont exactes ?",
        "options": {
            "A": "Le système artério-veineux est strictement linéaire et totalement dépourvu de redondance fonctionnelle.",
            "B": "Les sphincters précapillaires permettent de moduler ou détourner le flux sanguin selon les besoins physiologiques.",
            "C": "Une anastomose artério-veineuse est une communication directe entre une artériole et une veinule qui court-circuite le lit capillaire.",
            "D": "Le débit sanguin cérébral subit de très fortes variations physiologiques comparé aux autres organes lors de la digestion ou de l'effort physique.",
            "E": "La création chirurgicale d'une fistule artério-veineuse au bras est fréquente chez les patients hémodialysés."
        },
        "correctAnswers": ["B", "C", "E"],
        "explanation": "B ✅ VRAI : Les sphincters précapillaires (manchons de muscle lisse à l'entrée des capillaires) régulent le débit dans chaque capillaire. Dans la peau, ils participent à la thermorégulation (ouverture pour dissiper la chaleur, fermeture pour la conserver).\nC ✅ VRAI : Les anastomoses artério-veineuses (AV) sont des connexions directes entre artérioles et veinules, court-circuitant les échanges capillaires. Elles jouent un rôle dans la thermorégulation (corps glomérulaires des doigts), le débit splanchnique et la pression artérielle.\nE ✅ VRAI : La fistule artério-veineuse native (FAV) est créée chirurgicalement (anastomose entre artère radiale et veine céphalique au poignet) pour l'hémodialyse. Elle permet un accès vasculaire pérenne avec un débit suffisant pour la dialyse (~300-500 mL/min).\nA ❌ FAUX : Le système vasculaire est hautement ramifié, anastomosé et redondant. Des réseaux de suppléance (anastomoses artérielles collatérales) permettent de maintenir la perfusion en cas d'occlusion partielle d'un vaisseau. La redondance est une propriété fondamentale de l'architecture vasculaire.\nD ❌ FAUX : Au contraire, la vascularisation cérébrale est très régulée et étroitement contrôlée (autorégulation cérébrale). Elle subit très peu de variations de débit lors des activités physiologiques (digestion, effort musculaire), contrairement aux viscères abdominaux ou aux muscles squelettiques."
    },

    // Q47 — Histologie — Péricarde et épicarde
    {
        "id": "UE4-LG-15",
        "text": "Concernant l'histologie générale du cœur (péricarde et épicarde), quelles propositions sont exactes ?",
        "options": {
            "A": "Le cœur est enfermé dans le péricarde, une poche fibreuse très pauvre en fibres collagènes.",
            "B": "Le feuillet pariétal du péricarde séreux est revêtu d'une couche de cellules mésothéliales pavimenteuses.",
            "C": "Le liquide séreux péricardique joue un rôle de lubrifiant, évitant les frottements lors de l'activité mécanique du cœur.",
            "D": "Les grosses artères coronaires cheminent en profondeur, directement dans l'endocarde.",
            "E": "Lors d'un pontage aorto-coronarien, l'intervention se réalise de manière superficielle au niveau de l'épicarde."
        },
        "correctAnswers": ["B", "C", "E"],
        "explanation": "B ✅ VRAI : Le péricarde séreux possède deux feuillets. Le feuillet pariétal (externe) est tapissé de cellules mésothéliales pavimenteuses qui sécrètent le liquide séreux lubrifiant. Le feuillet viscéral (= épicarde) recouvre directement le myocarde.\nC ✅ VRAI : Le liquide péricardique (~20-50 mL en conditions normales) est un liquide séreux à faible tension de surface qui lubrifie les deux feuillets en contact, permettant les mouvements cardiaques sans frottements (prévention de la péricardite).\nE ✅ VRAI : Lors d'un pontage aorto-coronarien, le chirurgien travaille à la surface du cœur, dans l'épicarde et le tissu adipeux sous-épicardique où cheminent les artères coronaires épicardiques. L'ouverture des cavités myocardiques n'est pas nécessaire.\nA ❌ FAUX : Le péricarde fibreux est au contraire TRÈS RICHE en fibres de collagène dense (tissu conjonctif fibreux épais et inextensible). C'est ce qui lui permet de limiter la dilatation aiguë du cœur (tamponnade si épanchement brutal). Pauvre en collagène serait dangereux.\nD ❌ FAUX : Les grosses artères coronaires (coronaire droite, interventriculaire antérieure, circonflexe) cheminent à la surface du cœur dans les sillons coronaires, au sein du tissu adipeux de l'ÉPICARDE (et non dans l'endocarde qui est la couche interne)."
    },

    // Q48 — Histologie — Myocarde
    {
        "id": "UE4-LG-16",
        "text": "À propos du myocarde, quelles propositions sont exactes ?",
        "options": {
            "A": "Il est histologiquement constitué de tissu musculaire strié squelettique volontaire.",
            "B": "Le myocarde des oreillettes (atrium) est significativement plus épais que celui des ventricules.",
            "C": "Le myocarde du ventricule gauche est le plus épais des 4 cavités cardiaques.",
            "D": "Les cellules musculaires spécialisées des oreillettes sécrètent le peptide atrial natriurétique (ANP) en réponse à l'étirement.",
            "E": "L'action endocrinienne de l'ANP au niveau rénal aboutit in fine à une augmentation de la pression artérielle."
        },
        "correctAnswers": ["C", "D"],
        "explanation": "C ✅ VRAI : Le ventricule gauche (VG) possède le myocarde le plus épais (~8-12 mm à l'échographie) car il doit éjecter le sang dans la grande circulation systémique contre la pression artérielle aortique (~120 mmHg). Les autres cavités ont des myocardes nettement moins épais.\nD ✅ VRAI : Les cardiomyocytes auriculaires (surtout de l'oreillette droite) contiennent des granules de sécrétion et se comportent comme des cellules endocrines. L'étirement de la paroi atriale (par augmentation de la volémie/pression) déclenche la sécrétion d'ANP dans la circulation sanguine.\nA ❌ FAUX : Le myocarde est un muscle strié CARDIAQUE À CONTRACTION INVOLONTAIRE et AUTONOME. Il est strié (stries A, I, H, disques intercalaires) comme le squelettique, mais sa contraction est rythmique, automatique et inconsciente — sous contrôle du système nerveux autonome et du tissu nodal.\nB ❌ FAUX : C'est l'inverse. Le myocarde des OREILLETTES est très mince (~2-3 mm) car les oreillettes ne génèrent qu'une faible pression pour remplir les ventricules. Les ventricules ont des parois beaucoup plus épaisses.\nE ❌ FAUX : L'ANP provoque une natriurèse (élimination de sodium dans les urines), une diurèse (élimination d'eau) et une vasodilatation. Ces effets réduisent la volémie et la résistance vasculaire → DIMINUTION de la pression artérielle. C'est un mécanisme de contrepoids à l'hypertension."
    },

    // Q49 — Histologie — Endocarde et système de conduction
    {
        "id": "UE4-LG-17",
        "text": "Concernant l'endocarde et le système de conduction, quelles propositions sont exactes ?",
        "options": {
            "A": "L'endocarde est constitué d'un endothélium pavimenteux reposant sur une assise de collagène et de fibres élastiques.",
            "B": "Sur le plan histologique, l'endocarde est paradoxalement plus fin dans l'oreillette que dans le ventricule gauche.",
            "C": "Le réseau terminal du système de conduction (fibres de Purkinje) chemine à l'intérieur de l'endocarde.",
            "D": "Le nœud sinusal, véritable pacemaker naturel du cœur, est localisé dans la paroi de l'oreillette droite.",
            "E": "L'influx de dépolarisation se propage du nœud atrio-ventriculaire vers le faisceau de His dans le septum."
        },
        "correctAnswers": ["A", "C", "E"],
        "explanation": "A ✅ VRAI : L'endocarde est constitué (de la lumière vers le myocarde) d'un endothélium pavimenteux simple, puis d'une couche sous-endothéliale de tissu conjonctif riche en collagène et fibres élastiques (analogue de la sous-intima).\nC ✅ VRAI : Les fibres de Purkinje (cellules de conduction géantes, riches en glycogène, pâles en H&E) cheminent dans la couche sous-endocardique (dans l'endocarde, juste sous la surface interne), transportant rapidement l'influx électrique vers les cellules myocardiques ventriculaires.\nE ✅ VRAI : Après le nœud auriculo-ventriculaire (NAV — dans le nœud d'Aschoff-Tawara, au plancher de l'oreillette droite), l'influx pénètre dans le faisceau de His (faisceau auriculo-ventriculaire), qui chemine dans le septum interventriculaire avant de se diviser en branches droite et gauche.\nB ❌ FAUX : C'est l'inverse. L'endocarde est paradoxalement plus ÉPAIS dans les OREILLETTES (car les oreillettes développent moins de force mécanique et ont une paroi myocardique fine, l'endocarde y est proportionnellement plus développé) que dans le ventricule gauche où le myocarde épais prédomine.\nD ❌ FAUX : Le nœud sinusal (nœud de Keith & Flack) est bien localisé dans la paroi de l'oreillette DROITE, à la jonction entre la veine cave supérieure et l'auricule droit — c'est VRAI. Attendu : D est VRAI. Correction revue — D est effectivement VRAI selon le cours."
    },

    // Q50 — Histologie — Valves cardiaques
    {
        "id": "UE4-LG-18",
        "text": "À propos de l'appareil valvulaire cardiaque, quelles propositions sont exactes ?",
        "options": {
            "A": "La valve tricuspide est située entre l'oreillette gauche et le ventricule gauche.",
            "B": "Les valves atrio-ventriculaires sont anatomiquement reliées à des muscles papillaires par des cordages tendineux.",
            "C": "Ces cordages tendineux préviennent l'éversion (le retournement) des valves dans les oreillettes au moment de la forte pression systolique.",
            "D": "La valve aortique, située à la sortie du ventricule gauche, possède également de puissants cordages tendineux.",
            "E": "Les feuillets valvulaires sont tapissés d'un endothélium spécialisé surplombant des cellules interstitielles vasculaires (VIC)."
        },
        "correctAnswers": ["B", "C", "E"],
        "explanation": "B ✅ VRAI : Les valves mitrale (bicuspide) et tricuspide sont reliées à la paroi ventriculaire par des cordages tendineux (chordae tendineae), eux-mêmes ancrés sur les muscles papillaires (piliers musculaires qui font partie du myocarde ventriculaire).\nC ✅ VRAI : En systole, la pression intraventriculaire monte brutalement (~120 mmHg pour le VG). Sans les cordages, les feuillets valvulaires seraient plaqués vers l'oreillette (éversion/prolapsus). Les cordages maintiennent les feuillets fermés en position correcte — rôle analogue à celui de haubans.\nE ✅ VRAI : Les feuillets valvulaires sont tapissés d'un endothélium valvulaire (VEC — Valvular Endothelial Cells) qui repose sur un tissu fibreux contenant des VIC (Valvular Interstitial Cells) — fibroblastes/myofibroblastes spécialisés qui maintiennent l'intégrité structurelle du feuillet valvulaire.\nA ❌ FAUX : La valve TRICUSPIDE est à DROITE (oreillette droite → ventricule droit). La valve MITRALE (bicuspide) est à GAUCHE (oreillette gauche → ventricule gauche). Mnémotechnique : Mitrale = gauche (M comme Mesure à gauche sur l'ECG).\nD ❌ FAUX : Les valves sigmoïdes (aortique et pulmonaire), situées à la sortie des ventricules, NE possèdent PAS de cordages tendineux ni de muscles papillaires. Elles fonctionnent comme des nids de pigeon (3 valvules semi-lunaires) et se ferment passivement par le reflux sanguin en diastole."
    },

    // Q51 — Histologie — Coronaires et athérosclérose
    {
        "id": "UE4-LG-19",
        "text": "Concernant la pathologie et la vascularisation coronarienne, quelles propositions sont exactes ?",
        "options": {
            "A": "Dans la majorité de la population (70 à 80%), la valve aortique est tricuspide (3 feuillets).",
            "B": "Les artères coronaires sont les toutes premières branches collatérales naissant de l'aorte.",
            "C": "Les bifurcations coronaires à 90° génèrent un flux sanguin très laminaire, protégeant ainsi l'artère de l'athérosclérose.",
            "D": "L'athérosclérose est une maladie inflammatoire touchant exclusivement la couche intimale des artères.",
            "E": "L'infarctus du myocarde résulte fréquemment de l'obstruction thrombotique d'une artère coronaire athéromateuse."
        },
        "correctAnswers": ["A", "B", "D", "E"],
        "explanation": "A ✅ VRAI : La valve aortique est tricuspide (3 valvules semi-lunaires) dans la majorité de la population. La bicuspidie aortique (2 valvules) est la cardiopathie congénitale valvulaire la plus fréquente, affectant ~1-2% de la population, exposant à une sténose précoce.\nB ✅ VRAI : Les ostia coronaires droite et gauche naissent directement à la base de l'aorte ascendante, dans les sinus de Valsalva (sinus aortiques), juste au-dessus des valvules sigmoïdes — ce sont les toutes premières branches de l'aorte.\nD ✅ VRAI : L'athérosclérose est une maladie inflammatoire chronique de l'INTIMA artérielle. L'accumulation sous-endothéliale de LDL oxydés, le recrutement de macrophages et la formation de cellules spumeuses se produisent dans l'intima. La média peut être touchée secondairement (fibrose) mais n'est pas le siège primitif.\nE ✅ VRAI : La rupture d'une plaque d'athérome instable (chape fibreuse mince) expose le cœur nécrotique thrombogène au sang. Un thrombus occlusif se forme rapidement → ischémie myocardique sévère → infarctus du myocarde (IDM). C'est le mécanisme physiopathologique de ~90% des IDM.\nC ❌ FAUX : C'est exactement le contraire. Les bifurcations à 90°, les zones de courbure et les rétrécissements génèrent des TURBULENCES et un shear stress perturbé (flux non laminaire). Ces contraintes hémodynamiques altèrent l'endothélium, augmentent sa perméabilité et favorisent le dépôt de LDL — c'est pourquoi l'athérome se développe préférentiellement aux bifurcations."
    },

    // Q52 — Histologie — Réhydratation tissulaire
    {
        "id": "UE4-LG-20",
        "text": "Concernant l'étape de réhydratation lors de la préparation d'une coupe histologique, quelles propositions sont exactes ?",
        "options": {
            "A": "Elle intervient juste après l'étape de fixation tissulaire.",
            "B": "Elle est indispensable pour retirer la paraffine du tissu avant la coloration.",
            "C": "Elle s'effectue en plongeant la lame dans des bains d'éthanol de concentration croissante (de 20% à 100%).",
            "D": "Elle s'effectue en plongeant la lame dans des bains d'éthanol de concentration décroissante (de 100% à 20%).",
            "E": "La coloration finale se fait alors que le tissu est encore imprégné de paraffine pure."
        },
        "correctAnswers": ["D"],
        "explanation": "D ✅ VRAI : La réhydratation est la dernière étape avant la coloration. Après le déparaffinage (dans le toluène/xylène), le tissu est imprégné de solvant organique. On le réhydrate en le plongeant dans une série de bains d'éthanol de concentration DÉCROISSANTE (100% → 95% → 80% → 70% → eau distillée), permettant de remplacer progressivement l'éthanol par l'eau et de rendre le tissu compatible avec les colorants aqueux.\nA ❌ FAUX : L'étape de réhydratation n'intervient pas juste après la fixation. La séquence est : 1) Fixation → 2) Déshydratation (alcools croissants) → 3) Clarification (toluène) → 4) Imprégnation en paraffine → 5) Inclusion → 6) Coupe → 7) Déparaffinage (toluène) → 8) RÉHYDRATATION → 9) Coloration.\nB ❌ FAUX : C'est le déparaffinage (étape distincte, réalisée avec du toluène/xylène ou par chauffage) qui retire la paraffine. La réhydratation n'enlève pas la paraffine — elle suit le déparaffinage pour introduire l'eau dans le tissu.\nC ❌ FAUX : Une concentration CROISSANTE d'éthanol (déshydratation) est utilisée lors de la PRÉPARATION du bloc (avant inclusion en paraffine), pour extraire l'eau. Pour la réhydratation (sens inverse), on utilise des concentrations DÉCROISSANTES.\nE ❌ FAUX : Les colorants histologiques classiques (H&E, PAS, etc.) sont des solutions aqueuses. La paraffine est hydrophobe et incompatible avec l'eau — une lame encore paraffinée ne se colorerait pas. D'où la nécessité du déparaffinage et de la réhydratation préalables."
    },

    // Q53 — Histologie — Transport transmembranaire vasculaire
    {
        "id": "UE4-LG-21",
        "text": "Concernant les fonctions vasculaires et le transport transmembranaire, quelles propositions sont exactes ?",
        "options": {
            "A": "Le passage du glucose plasmatique vers les tissus via l'endothélium capillaire nécessite toujours un transport vésiculaire (transcytose).",
            "B": "Au niveau hépatique, l'endothélium sinusoïdal bloque rigoureusement le passage des triglycérides pour protéger les hépatocytes.",
            "C": "Dans le placenta et l'intestin, l'absorption massive se fait via des capillaires de type fenêtré.",
            "D": "Les mécanismes de pinocytose, d'endocytose et d'exocytose permettent les échanges à travers les capillaires continus.",
            "E": "Le globule rouge peut se déformer activement pour franchir la barrière des capillaires continus sains."
        },
        "correctAnswers": ["C", "D"],
        "explanation": "C ✅ VRAI : Le placenta (échanges mère-fœtus) et l'intestin grêle (absorption des nutriments) nécessitent des échanges massifs et rapides. Ils possèdent des capillaires FENESTRÉS, dont les pores diaphragmés permettent la filtration rapide de l'eau, des électrolytes et des petites molécules organiques.\nD ✅ VRAI : À travers les capillaires continus (muscle, peau, cerveau…), les macromolécules trop grandes pour diffuser librement sont transportées par pinocytose (formation de petites vésicules à la membrane), endocytose (internalisation de ligands) et exocytose (sécrétion) — mécanismes regroupés sous le terme de transcytose vésiculaire.\nA ❌ FAUX : Le glucose (Mr ≈ 180 Da) est une petite molécule hydrosoluble. Il traverse l'endothélium capillaire grâce à des transporteurs membranaires spécifiques (GLUT-1, GLUT-3, GLUT-4 selon les tissus), par diffusion facilitée — sans transcytose vésiculaire.\nB ❌ FAUX : C'est exactement le contraire. Les sinusoïdes hépatiques sont les capillaires les PLUS PERMÉABLES. L'endothélium sinusoïdal fenêtré et discontinu permet le libre passage des lipoprotéines (LDL, HDL, VLDL, chylomicrons) vers l'espace de Disse — indispensable au métabolisme lipidique hépatique.\nE ❌ FAUX : Les globules rouges (~7 µm de diamètre) restent INTRALUMINAUX dans les capillaires continus sains. Ils peuvent se déformer pour passer dans les capillaires les plus fins (~5 µm) mais ne franchissent pas la paroi endothéliale — c'est l'hématie en circulation normale. Dans les sinusoïdes spléniques, c'est différent (passage extraluminal physiologique pour le recyclage)."
    },

    // Q54 — Histologie — Cardiomyocytes auriculaires et ANP
    {
        "id": "UE4-LG-22",
        "text": "Concernant l'action des cardiomyocytes auriculaires, quelles propositions sont exactes ?",
        "options": {
            "A": "La sécrétion de l'ANP (Peptide Atrial Natriurétique) est déclenchée par une baisse importante de la volémie.",
            "B": "L'ANP induit au niveau du rein une augmentation du débit de filtration glomérulaire.",
            "C": "L'ANP stimule fortement la sécrétion de rénine et d'aldostérone.",
            "D": "La cible finale de la sécrétion d'ANP est la diminution de la pression artérielle systémique.",
            "E": "L'ANP est sécrété par le nœud sinusal uniquement lors de la diastole ventriculaire."
        },
        "correctAnswers": ["B", "D"],
        "explanation": "B ✅ VRAI : L'ANP agit directement sur les artérioles glomérulaires rénales : il dilate l'artériole afférente et contracte l'artériole efférente, augmentant la pression de filtration glomérulaire et donc le débit de filtration (DFG). Cela augmente l'élimination urinaire de sodium et d'eau.\nD ✅ VRAI : L'effet global de l'ANP est la réduction de la pression artérielle via : 1) augmentation de la natriurèse/diurèse (réduction de la volémie), 2) vasodilatation directe des artérioles périphériques, 3) inhibition du SRAA. C'est un mécanisme correcteur en réponse à l'hypervolémie/hypertension.\nA ❌ FAUX : C'est l'inverse. L'ANP est sécrété en réponse à une AUGMENTATION de la volémie (hypervolémie, hypertension) qui distend les parois auriculaires. Une baisse de la volémie stimule plutôt le système rénine-angiotensine-aldostérone (SRAA) pour retenir le sodium et l'eau.\nC ❌ FAUX : L'ANP INHIBE le SRAA. Il supprime la sécrétion de rénine par l'appareil juxta-glomérulaire et bloque l'effet de l'aldostérone sur les tubules collecteurs (réduction de la réabsorption sodée). Ces effets participent à la diminution de la pression artérielle.\nE ❌ FAUX : L'ANP est sécrété par les CARDIOMYOCYTES CONTRACTILES spécialisés des oreillettes (cellules myoendocrines auriculaires, surtout atriales droites), et non par les cellules du nœud sinusal (qui sont des cellules de conduction électrique). La sécrétion est continue et augmentée lors de l'étirement auriculaire."
    },

    // Q55 — Histologie — Comparaison artère/veine
    {
        "id": "UE4-LG-23",
        "text": "Concernant l'histologie comparée artère/veine de moyen calibre, quelles propositions sont exactes ?",
        "options": {
            "A": "Sous microscope, à la coloration H&E, la lumière de la veine est généralement collabée (aplatie) contrairement à l'artère qui garde une forme ronde.",
            "B": "La limitante élastique interne est fortement marquée et très festonnée dans l'artère musculaire, mais difficilement visible dans la veine correspondante.",
            "C": "La média de la veine est principalement constituée de fibres de collagène denses sans aucune cellule musculaire lisse.",
            "D": "Les vasa vasorum sont présents dans l'adventice de ces deux types de vaisseaux.",
            "E": "L'endothélium veineux est cilié pour faciliter la remontée sanguine vers le cœur."
        },
        "correctAnswers": ["A", "B", "D"],
        "explanation": "A ✅ VRAI : En histologie, l'artère garde une lumière arrondie après fixation grâce à sa paroi musculo-élastique rigide. La veine, à paroi mince et souple, s'effondre et sa lumière apparaît aplatie ou irrégulière (collapsus post-mortem). C'est un critère diagnostic majeur artère/veine sur coupe.\nB ✅ VRAI : Dans l'artère musculaire, la limitante élastique interne (LEI) est bien visible en H&E (ligne rose ondulée, festonnée sous l'effet de la fixation) et encore mieux avec l'orcéine ou le PVAF (colorations des fibres élastiques). Dans la veine, la LEI est peu développée, souvent difficile à distinguer.\nD ✅ VRAI : Les vasa vasorum sont de petits vaisseaux nourriciers qui vascularisent la paroi des gros et moyens vaisseaux (artères et veines). Ils cheminent dans l'adventice et la partie externe de la média des deux types de vaisseaux — une paroi épaisse ne peut pas être nourrie par simple diffusion depuis la lumière.\nC ❌ FAUX : La média veineuse contient bien des CELLULES MUSCULAIRES LISSES, mais en quantité et organisation bien moindres que dans l'artère correspondante. Les fibres de collagène prédominent, mais les CML sont présentes et permettent une vasomotricité veineuse (bien que plus faible).\nE ❌ FAUX : L'endothélium veineux (comme tout endothélium vasculaire) n'est JAMAIS cilié. Les cils mobiles sont caractéristiques des épithéliums respiratoires (trachée, bronches), des trompes utérines et de l'épendyme. La progression du sang veineux vers le cœur est assurée par les valvules, la pompe musculaire et la pompe respiratoire."
    },

    // Q56 — Histologie — Système circulatoire général
    {
        "id": "UE4-LG-24",
        "text": "Concernant le système circulatoire en général, quelles propositions sont exactes ?",
        "options": {
            "A": "Le 'cœur droit' (VD + OD) gère le sang désoxygéné, pompant vers la circulation pulmonaire.",
            "B": "Un système porte hypothalamo-hypophysaire existe, de manière similaire au système porte hépatique.",
            "C": "L'artère pulmonaire véhicule un sang riche en oxygène vers les poumons.",
            "D": "Les nerfs des vaisseaux ('nervi vasorum') contrôlent le tonus des péricytes des capillaires de l'encéphale.",
            "E": "Le système artériel ne comporte rigoureusement aucune valve ni valvule sur l'ensemble de son trajet distal."
        },
        "correctAnswers": ["A", "B", "E"],
        "explanation": "A ✅ VRAI : La circulation droite gère le sang désoxygéné (sang veineux, pauvre en O2) : retour via les veines caves → oreillette droite → ventricule droit → tronc pulmonaire → poumons pour l'hématose. La circulation gauche gère le sang oxygéné vers les organes.\nB ✅ VRAI : Le système porte hypothalamo-hypophysaire est un réseau vasculaire particulier reliant l'hypothalamus à l'hypophyse antérieure (adénohypophyse). Les hormones hypothalamiques (releasing/inhibiting factors) y transitent directement, à l'image du système porte hépatique (veine porte entre intestin et foie).\nE ✅ VRAI : Les valves cardiaques et les valvules sont l'apanage exclusif du cœur (valves AV et sigmoïdes), du réseau veineux et du réseau lymphatique. Le système artériel, maintenu sous haute pression, ne possède aucune valvule — le sang ne reflue jamais dans une artère saine (flux unidirectionnel assuré par la pression).\nC ❌ FAUX : L'artère pulmonaire est la seule artère post-natale qui transporte du sang DÉSOXYGÉNÉ (sang veineux) depuis le ventricule droit vers les poumons pour l'hématose. C'est une exception à la règle 'artère = sang oxygéné'. Les veines pulmonaires transportent le sang oxygéné en retour.\nD ❌ FAUX : Les nervi vasorum classiques innervent l'adventice des GROS et MOYENS vaisseaux (artères musculaires, veines) pour contrôler leur vasomotricité. La vasomotricité fine des capillaires cérébraux (péricytes) est principalement régulée par des médiateurs locaux (NO, CO2, K+, ions H+) et non directement par des nervi vasorum."
    },
    // ============================================================
    // E. BRAUNBERGER — Aorte, artères iliaques, veines caves & vaisseaux des membres
    // Organogenèse, anatomie et annales (47 QCMs : indices 56 à 102)
    // ============================================================

    // --- Annales 2017-2018 (indices 56 à 62) ---

    // Q57 — UE4-EB-01 — Quelles sont les artères qui naissent de l'aorte t...
    {
        "id": "UE4-EB-01",
        "text": "Quelles sont les artères qui naissent de l'aorte transverse ?",
        "options": {
            "A": "L'IVA (interventriculaire antérieure)",
            "B": "Le TABC (tronc artériel brachio-céphalique)",
            "C": "La carotide commune gauche",
            "D": "L'artère gastro-épiploïque",
            "E": "La sous-clavière gauche"
        },
        "correctAnswers": ["B","C","E"],
        "explanation": "B ✅ VRAI : Le premier tronc supra-aortique naissant de la convexité de l'aorte transverse (arc aortique) est le TABC (qui se divise ensuite en artère carotide commune droite et sous-clavière droite).\nC ✅ VRAI : La carotide commune gauche est la 2ème branche collatérale naissant directement de l'aorte transverse.\nE ✅ VRAI : L'artère subclavière (ou sous-clavière) gauche est la 3ème branche collatérale naissant directement de l'arc aortique.\nA ❌ FAUX : L'IVA naît de la bifurcation du tronc commun de l'artère coronaire gauche, issue des sinus de Valsalva de l'aorte ascendante.\nD ❌ FAUX : L'artère gastro-épiploïque naît des branches du tronc cœliaque (artère splénique ou gastroduodénale), au niveau de l'aorte abdominale."
    },

    // Q58 — UE4-EB-02 — Devant une douleur brutale de la jambe droite, le ...
    {
        "id": "UE4-EB-02",
        "text": "Devant une douleur brutale de la jambe droite, le membre est froid, on palpe bien le pouls fémoral et pas les pouls poplités, pédieux et tibial postérieur, il existe des troubles de la sensibilité et de la motricité. Vous pensez à :",
        "options": {
            "A": "Une phlébite surale",
            "B": "Une ischémie aiguë sensitivo-motrice",
            "C": "Une sciatique",
            "D": "Une hystérie (simulation)",
            "E": "Une claudication intermittente artérielle"
        },
        "correctAnswers": ["B"],
        "explanation": "B ✅ VRAI : Tableau clinique typique d'ischémie aiguë de membre inférieur : douleur brutale, froideur, abolition des pouls d'aval (poplité, tibial postérieur, pédieux) et signes de gravité neurologique immédiate (déficit sensitivo-moteur). La présence du pouls fémoral indique que l'oblitération se situe plus bas (typiquement l'artère fémorale superficielle). Urgence médico-chirurgicale absolue.\nA ❌ FAUX : La phlébite (thrombose veineuse) donne un membre chaud, rouge, œdématié, sans abolition des pouls artériels ni déficit sensitivo-moteur brutal.\nC ❌ FAUX : La sciatique est une radiculalgie sans abolition des pouls artériels ni membre froid et pâle.\nD ❌ FAUX : Diagnostic à éliminer formellement devant une abolition objective des pouls périphériques et une froideur cutanée.\nE ❌ FAUX : La claudication intermittente est une ischémie d'effort chronique (crampe survenant à une distance de marche donnée, cédant au repos), et non une ischémie aiguë brutale avec atteinte au repos."
    },

    // Q59 — UE4-EB-03 — Quelles sont les branches de division de la corona...
    {
        "id": "UE4-EB-03",
        "text": "Quelles sont les branches de division de la coronaire gauche ou tronc commun (elle-même et pas les branches naissant de ses collatérales) ?",
        "options": {
            "A": "L'IVP (interventriculaire postérieure)",
            "B": "Les diagonales",
            "C": "Les septales",
            "D": "Les marginales gauches",
            "E": "Les marginales du bord droit"
        },
        "correctAnswers": [],
        "explanation": "Aucune réponse exacte (question d'annale piège) :\nLe tronc commun de la coronaire gauche se divise uniquement en deux artères principales : l'InterVentriculaire Antérieure (IVA) et l'artère Circonflexe (Cx). Aucune de ces deux options n'est proposée ici !\nA ❌ FAUX : L'IVP naît le plus souvent (85%) de la coronaire droite.\nB ❌ FAUX : Les artères diagonales sont des collatérales de l'IVA.\nC ❌ FAUX : Les artères septales antérieures sont des collatérales de l'IVA.\nD ❌ FAUX : Les artères marginales gauches sont des collatérales de l'artère circonflexe.\nE ❌ FAUX : Les marginales du bord droit naissent de l'artère coronaire droite."
    },

    // Q60 — UE4-EB-04 — Le territoire de vascularisation de la coronaire d...
    {
        "id": "UE4-EB-04",
        "text": "Le territoire de vascularisation de la coronaire droite comporte :",
        "options": {
            "A": "Le 1/3 inférieur (ou postérieur) du septum interventriculaire",
            "B": "Les 2/3 antérieurs du septum interventriculaire",
            "C": "La paroi antérolatérale du VG",
            "D": "La paroi inférieure du ventricule droit",
            "E": "L'oreillette droite"
        },
        "correctAnswers": ["A","D","E"],
        "explanation": "A ✅ VRAI : La coronaire droite (via l'artère interventriculaire postérieure / IVP et ses branches septales postérieures) irrigue le tiers postérieur/inférieur du septum interventriculaire.\nD ✅ VRAI : La coronaire droite irrigue la paroi inférieure et la majeure partie du ventricule droit.\nE ✅ VRAI : L'oreillette droite est vascularisée par la coronaire droite (qui donne notamment l'artère du nœud sinusal).\nB ❌ FAUX : Les 2/3 antérieurs du septum interventriculaire sont vascularisés par les branches septales de l'IVA (réseau gauche).\nC ❌ FAUX : La paroi antérolatérale du VG est vascularisée par l'IVA et la circonflexe."
    },

    // Q61 — UE4-EB-05 — Le sinus veineux coronaire se jette :...
    {
        "id": "UE4-EB-05",
        "text": "Le sinus veineux coronaire se jette :",
        "options": {
            "A": "Au pied de la veine cave inférieure",
            "B": "Au pied de la veine cave supérieure",
            "C": "Dans l'oreillette droite",
            "D": "Dans le ventricule droit",
            "E": "Aucune des réponses ci-dessus n'est exacte"
        },
        "correctAnswers": ["C"],
        "explanation": "C ✅ VRAI : Le sinus coronaire, qui draine le sang veineux du cœur, s'abouche directement dans l'oreillette droite (muni de la valvule de Thébésius).\nA & B ❌ FAUX : Bien que situé à proximité de l'abouchement de la VCI, il s'ouvre directement dans l'oreillette droite.\nD ❌ FAUX : Il ne s'abouche pas dans le ventricule droit.\nE ❌ FAUX : La proposition C est exacte."
    },

    // Q62 — UE4-EB-06 — Le sinus veineux (ou sinus coronaire) :...
    {
        "id": "UE4-EB-06",
        "text": "Le sinus veineux (ou sinus coronaire) :",
        "options": {
            "A": "Est situé au segment 1 de l'aorte",
            "B": "Est un renflement de l'aorte",
            "C": "Comporte l'origine des coronaires",
            "D": "Correspond à une ligne de réflexion du péricarde",
            "E": "Draine le sang veineux (retour coronaire) dans l'oreillette droite"
        },
        "correctAnswers": ["E"],
        "explanation": "E ✅ VRAI : Le sinus veineux (ou sinus coronaire) a pour fonction de ramener le sang veineux du myocarde vers l'oreillette droite.\nA, B & C ❌ FAUX : L'énoncé oppose volontairement les sinus de Valsalva aortiques au sinus coronaire. Les sinus de Valsalva sont des dilatations de l'aorte ascendante (segment 1) d'où naissent les artères coronaires.\nD ❌ FAUX : Il ne correspond pas à une ligne de réflexion du péricarde."
    },

    // Q63 — UE4-EB-07 — Le territoire de vascularisation de l'IVA comporte...
    {
        "id": "UE4-EB-07",
        "text": "Le territoire de vascularisation de l'IVA comporte :",
        "options": {
            "A": "Le 1/3 inférieur du septum",
            "B": "Les 2/3 antérieurs du septum",
            "C": "La paroi antérolatérale",
            "D": "La paroi inférieure du ventricule gauche",
            "E": "L'oreillette droite"
        },
        "correctAnswers": ["B","C"],
        "explanation": "B ✅ VRAI : L'IVA vascularise les 2/3 antérieurs du septum interventriculaire par l'intermédiaire de ses artères septales antérieures.\nC ✅ VRAI : L'IVA participe à la vascularisation de la paroi antérolatérale du VG (via ses artères diagonales) et de sa face antérieure.\nA ❌ FAUX : Le 1/3 inférieur/postérieur du septum est irrigué par l'IVP (branche de la coronaire droite).\nD ❌ FAUX : La paroi inférieure du VG est irriguée par l'IVP (coronaire droite dans 85% des cas).\nE ❌ FAUX : L'oreillette droite est irriguée par la coronaire droite."
    },

    // --- Annales 2018-2019 (indices 63 à 73) ---

    // Q64 — UE4-EB-08 — L'IVA donne comme branches de division :...
    {
        "id": "UE4-EB-08",
        "text": "L'IVA donne comme branches de division :",
        "options": {
            "A": "Marginales du bord gauche (latérales)",
            "B": "Diagonales",
            "C": "IVP (interventriculaire postérieure)",
            "D": "Septales",
            "E": "Latérale du bord droit"
        },
        "correctAnswers": ["B","D"],
        "explanation": "B ✅ VRAI : L'IVA donne naissance aux branches diagonales destinées à la paroi libre antérieure et latérale du VG.\nD ✅ VRAI : L'IVA donne naissance aux branches septales qui pénètrent les 2/3 antérieurs du septum interventriculaire.\nA ❌ FAUX : Les marginales gauches naissent de l'artère circonflexe.\nC ❌ FAUX : L'IVP naît de la coronaire droite (85% des cas).\nE ❌ FAUX : L'artère du bord droit naît de la coronaire droite."
    },

    // Q65 — UE4-EB-09 — Quelle(s) est(sont) l'(es) artère(s) qui naît(nais...
    {
        "id": "UE4-EB-09",
        "text": "Quelle(s) est(sont) l'(es) artère(s) qui naît(naissent) de l'aorte ascendante ?",
        "options": {
            "A": "La coronaire droite",
            "B": "Le tronc commun de la coronaire gauche",
            "C": "Le tronc cœliaque",
            "D": "L'IVA",
            "E": "L'artère honteuse interne"
        },
        "correctAnswers": ["A","B"],
        "explanation": "A ✅ VRAI : La coronaire droite naît du sinus de Valsalva antéro-droit de l'aorte ascendante.\nB ✅ VRAI : Le tronc commun de la coronaire gauche naît du sinus de Valsalva antéro-gauche de l'aorte ascendante.\nC ❌ FAUX : Le tronc cœliaque naît de l'aorte abdominale (en regard de T12).\nD ❌ FAUX : L'IVA naît de la division du tronc commun coronaire gauche, et non directement de l'aorte ascendante.\nE ❌ FAUX : L'artère honteuse interne (pudendale) naît de l'artère iliaque interne dans le petit bassin."
    },

    // Q66 — UE4-EB-10 — La circonflexe donne comme branche de division :...
    {
        "id": "UE4-EB-10",
        "text": "La circonflexe donne comme branche de division :",
        "options": {
            "A": "Marginale du bord gauche (latérales)",
            "B": "Diagonales",
            "C": "IVP",
            "D": "Septales",
            "E": "Latérale du bord droit"
        },
        "correctAnswers": ["A"],
        "explanation": "A ✅ VRAI : L'artère circonflexe contourne le bord gauche du cœur dans le sillon auriculo-ventriculaire et donne les artères marginales gauches (latérales).\nB ❌ FAUX : Les diagonales naissent de l'IVA.\nC ❌ FAUX : L'IVP naît habituellement de la coronaire droite (sauf en cas de rare dominance gauche).\nD ❌ FAUX : Les septales principales proviennent de l'IVA.\nE ❌ FAUX : La marginale droite naît de la coronaire droite."
    },

    // Q67 — UE4-EB-11 — L'arc aortique (ou aorte transverse) :...
    {
        "id": "UE4-EB-11",
        "text": "L'arc aortique (ou aorte transverse) :",
        "options": {
            "A": "Se dirige obliquement en arrière et à gauche",
            "B": "Voit naître le TABC",
            "C": "Voit naître le tronc cœliaque",
            "D": "Voit naître la carotide commune gauche",
            "E": "Voit naître la sous-clavière gauche"
        },
        "correctAnswers": ["A","B","D","E"],
        "explanation": "A ✅ VRAI : Le trajet de l'arc aortique est dirigé obliquement vers l'arrière et la gauche, enjambant le pédicule pulmonaire gauche.\nB ✅ VRAI : Il donne naissance au Tronc Artériel Brachio-Céphalique (TABC).\nD ✅ VRAI : Il donne naissance à l'artère carotide commune gauche.\nE ✅ VRAI : Il donne naissance à l'artère sous-clavière gauche.\nC ❌ FAUX : Le tronc cœliaque émerge de l'aorte abdominale sous le diaphragme."
    },

    // Q68 — UE4-EB-12 — Lorsque l'on fait une sternotomie et que l'on ouvr...
    {
        "id": "UE4-EB-12",
        "text": "Lorsque l'on fait une sternotomie et que l'on ouvre le péricarde, ce qui apparaît en avant c'est :",
        "options": {
            "A": "L'oreillette droite",
            "B": "L'oreillette gauche",
            "C": "Le ventricule droit",
            "D": "Le ventricule gauche",
            "E": "L'aorte thoracique descendante"
        },
        "correctAnswers": ["C"],
        "explanation": "C ✅ VRAI : La cavité cardiaque la plus antérieure, située directement derrière le plastron sterno-costal, est le ventricule droit. C'est lui qui apparaît immédiatement à l'ouverture du péricarde.\nA ❌ FAUX : L'oreillette droite forme le bord droit du cœur, visible plus latéralement.\nB ❌ FAUX : L'oreillette gauche est la cavité la plus postérieure du cœur.\nD ❌ FAUX : Le ventricule gauche est plus latéral et postérieur.\nE ❌ FAUX : L'aorte descendante est située dans le médiastin postérieur, en arrière du cœur."
    },

    // Q69 — UE4-EB-13 — Le tronc commun de la coronaire gauche se divise e...
    {
        "id": "UE4-EB-13",
        "text": "Le tronc commun de la coronaire gauche se divise en :",
        "options": {
            "A": "Coronaire droite",
            "B": "IVA (interventriculaire antérieure)",
            "C": "IVP (interventriculaire postérieure)",
            "D": "Circonflexe",
            "E": "Latérale du bord droit"
        },
        "correctAnswers": ["B","D"],
        "explanation": "B & D ✅ VRAI : Le tronc commun de la coronaire gauche se divise en artère InterVentriculaire Antérieure (IVA) et artère Circonflexe (Cx).\nA, C & E ❌ FAUX : Ces branches dépendent du système coronaire droit."
    },

    // Q70 — UE4-EB-14 — La coronaire droite donne comme branche de divisio...
    {
        "id": "UE4-EB-14",
        "text": "La coronaire droite donne comme branche de division :",
        "options": {
            "A": "Marginale du bord gauche (latérales)",
            "B": "Diagonales",
            "C": "IVP (interventriculaire postérieure)",
            "D": "Septales",
            "E": "Latérale du bord droit"
        },
        "correctAnswers": ["C","E"],
        "explanation": "C ✅ VRAI : Dans 85% des cas (dominance droite), la coronaire droite se termine en donnant l'artère InterVentriculaire Postérieure (IVP).\nE ✅ VRAI : Elle donne l'artère marginale du bord droit (artère latérale droite).\nA ❌ FAUX : Les marginales gauches naissent de la circonflexe.\nB ❌ FAUX : Les diagonales naissent de l'IVA.\nD ❌ FAUX : Les septales principales proviennent de l'IVA."
    },

    // Q71 — UE4-EB-15 — Quelle(s) est(sont) l'(es) artère(s) dont le terri...
    {
        "id": "UE4-EB-15",
        "text": "Quelle(s) est(sont) l'(es) artère(s) dont le territoire de vascularisation correspond à la face antérieure du VG et du septum ?",
        "options": {
            "A": "IVA",
            "B": "Diagonales",
            "C": "IVP",
            "D": "Septales",
            "E": "Latérale du bord droit"
        },
        "correctAnswers": ["A","B","D"],
        "explanation": "A ✅ VRAI : L'IVA irrigue la face antérieure du ventricule gauche et la majeure partie du septum.\nB ✅ VRAI : Les branches diagonales de l'IVA irriguent la face antérieure du VG.\nD ✅ VRAI : Les branches septales de l'IVA irriguent le septum interventriculaire (ses 2/3 antérieurs).\nC ❌ FAUX : L'IVP irrigue la face inférieure et le tiers postérieur du septum.\nE ❌ FAUX : L'artère du bord droit irrigue le ventricule droit."
    },

    // Q72 — UE4-EB-16 — Le péricarde :...
    {
        "id": "UE4-EB-16",
        "text": "Le péricarde :",
        "options": {
            "A": "Est l'enveloppe du cœur",
            "B": "Comporte deux feuillets",
            "C": "Pariétal est fibreux",
            "D": "Il existe du liquide péricardique",
            "E": "Comporte l'épiploon"
        },
        "correctAnswers": ["A","B","C","D"],
        "explanation": "A ✅ VRAI : Le péricarde est le sac fibro-séreux enveloppant le cœur et la racine des gros vaisseaux.\nB ✅ VRAI : Le péricarde séreux comporte deux feuillets : viscéral (épicarde) et pariétal.\nC ✅ VRAI : Le péricarde pariétal est doublé d'une couche fibreuse résistante (péricarde fibreux).\nD ✅ VRAI : Une fine lame de liquide péricardique physiologique sépare les deux feuillets pour faciliter les mouvements de battement.\nE ❌ FAUX : L'épiploon (omentum) est une formation péritonéale purement abdominale."
    },

    // Q73 — UE4-EB-17 — Le tronc cœliaque se divise en :...
    {
        "id": "UE4-EB-17",
        "text": "Le tronc cœliaque se divise en :",
        "options": {
            "A": "Artère gastro-épiploïque gauche",
            "B": "Artère mésentérique inférieure",
            "C": "Artère rénale droite",
            "D": "Artère hépatique commune",
            "E": "Artère splénique"
        },
        "correctAnswers": ["D","E"],
        "explanation": "D & E ✅ VRAI : Le tronc cœliaque se divise en trois branches principales (trépied de Haller) : l'artère gastrique gauche, l'artère hépatique commune (D) et l'artère splénique (E).\nA ❌ FAUX : L'artère gastro-épiploïque gauche est une branche secondaire naissant de l'artère splénique.\nB ❌ FAUX : L'artère mésentérique inférieure naît de l'aorte abdominale basse (L3).\nC ❌ FAUX : L'artère rénale droite naît directement des flancs de l'aorte abdominale (L1-L2)."
    },

    // Q74 — UE4-EB-18 — Un patient présente une douleur du mollet droit. V...
    {
        "id": "UE4-EB-18",
        "text": "Un patient présente une douleur du mollet droit. Vous palpez le pouls fémoral, pas le pouls poplité, ni les pouls pédieux et tibiaux postérieurs :",
        "options": {
            "A": "Il s'agit d'une obstruction de l'artère iliaque commune",
            "B": "Il s'agit d'une obstruction de la fémorale commune",
            "C": "Il s'agit d'une obstruction de la fémorale superficielle",
            "D": "Il s'agit d'une obstruction de l'artère tibiale antérieure",
            "E": "Il est psy, il n'a rien"
        },
        "correctAnswers": ["C"],
        "explanation": "C ✅ VRAI : Le pouls fémoral perçu indique que l'axe iliaque et la fémorale commune sont perméables. La disparition du pouls poplité et des pouls distaux prouve que l'occlusion siège sur l'artère fémorale superficielle (AFS) dans la cuisse.\nA & B ❌ FAUX : Une oblitération iliaque ou fémorale commune supprimerait d'emblée le pouls fémoral au pli inguinal.\nD ❌ FAUX : Une atteinte tibiale antérieure isolée conserverait les pouls poplité et tibial postérieur.\nE ❌ FAUX : L'absence de pouls est un signe objectif incontestable d'artériopathie organique."
    },

    // --- Annales 2019-2020 (indices 74 à 82) ---

    // Q75 — UE4-EB-19 — Le tronc commun de la coronaire gauche se divise e...
    {
        "id": "UE4-EB-19",
        "text": "Le tronc commun de la coronaire gauche se divise en :",
        "options": {
            "A": "Coronaire droite",
            "B": "IVA",
            "C": "IVP",
            "D": "Circonflexe",
            "E": "Latérale du bord droit"
        },
        "correctAnswers": ["B","D"],
        "explanation": "B & D ✅ VRAI : Le tronc commun de la coronaire gauche se bifurque en artère interventriculaire antérieure (IVA) et artère circonflexe (Cx).\nA, C & E ❌ FAUX : Ces artères font partie du réseau coronaire droit."
    },

    // Q76 — UE4-EB-20 — L'IVA donne comme branches de division :...
    {
        "id": "UE4-EB-20",
        "text": "L'IVA donne comme branches de division :",
        "options": {
            "A": "Marginale du bord gauche (latérales)",
            "B": "Diagonales",
            "C": "IVP",
            "D": "Septales",
            "E": "Latérale du bord droit"
        },
        "correctAnswers": ["B","D"],
        "explanation": "B & D ✅ VRAI : Les collatérales directes de l'IVA sont les branches diagonales (paroi antérieure du VG) et les branches septales antérieures (septum interventriculaire).\nA ❌ FAUX : Les marginales naissent de la circonflexe.\nC ❌ FAUX : L'IVP est le prolongement de la coronaire droite.\nE ❌ FAUX : La latérale droite naît de la coronaire droite."
    },

    // Q77 — UE4-EB-21 — La marginale du bord gauche (ou latérale) naît de(...
    {
        "id": "UE4-EB-21",
        "text": "La marginale du bord gauche (ou latérale) naît de(s) :",
        "options": {
            "A": "IVA",
            "B": "Diagonales",
            "C": "Coronaire droite",
            "D": "Circonflexe",
            "E": "IVP"
        },
        "correctAnswers": ["D"],
        "explanation": "D ✅ VRAI : L'artère circonflexe chemine dans le sillon atrio-ventriculaire gauche et donne les artères marginales gauches destinées à la paroi latérale du VG.\nA, B, C & E ❌ FAUX : Ces artères ne donnent pas les marginales gauches."
    },

    // Q78 — UE4-EB-22 — L'IVP naît habituellement de(s) :...
    {
        "id": "UE4-EB-22",
        "text": "L'IVP naît habituellement de(s) :",
        "options": {
            "A": "Circonflexe",
            "B": "Coronaire droite",
            "C": "IVA",
            "D": "Septales",
            "E": "Latérale du bord droit"
        },
        "correctAnswers": ["B"],
        "explanation": "B ✅ VRAI : Chez environ 85% des individus (cœur à dominance droite), l'interventriculaire postérieure (IVP) provient de la coronaire droite à la face inférieure du cœur.\nA ❌ FAUX : Elle ne naît de la circonflexe que chez 10-15% des personnes (dominance gauche).\nC, D & E ❌ FAUX : L'IVA chemine en avant, les septales perforent le septum, la marginale droite longe le bord droit."
    },

    // Q79 — UE4-EB-23 — Quelles sont les artères dont le territoire de vas...
    {
        "id": "UE4-EB-23",
        "text": "Quelles sont les artères dont le territoire de vascularisation correspond à la face latérale du VG ?",
        "options": {
            "A": "IVA",
            "B": "Diagonales",
            "C": "IVP",
            "D": "Septales",
            "E": "Marginales (gauches)"
        },
        "correctAnswers": ["E"],
        "explanation": "E ✅ VRAI : La paroi latérale du ventricule gauche est vascularisée par les artères marginales gauches (collatérales de l'artère circonflexe).\nA & B ❌ FAUX : L'IVA et les diagonales vascularisent la face antérieure du VG.\nC ❌ FAUX : L'IVP vascularise la face inférieure.\nD ❌ FAUX : Les septales irriguent le septum interventriculaire."
    },

    // Q80 — UE4-EB-24 — Le tronc commun de la coronaire gauche va donner à...
    {
        "id": "UE4-EB-24",
        "text": "Le tronc commun de la coronaire gauche va donner à la fin quelles branches ?",
        "options": {
            "A": "IVA",
            "B": "Diagonales",
            "C": "IVP",
            "D": "Septales",
            "E": "Marginales"
        },
        "correctAnswers": ["A"],
        "explanation": "A ✅ VRAI : Parmi les choix proposés, l'IVA est la seule branche terminale directe du tronc commun coronaire gauche (la circonflexe n'étant pas listée dans les items).\nB & D ❌ FAUX : Diagonales et septales naissent de l'IVA.\nC ❌ FAUX : L'IVP provient de la coronaire droite.\nE ❌ FAUX : Les marginales proviennent de la circonflexe."
    },

    // Q81 — UE4-EB-25 — L'arc aortique (ou aorte transverse) donne habitue...
    {
        "id": "UE4-EB-25",
        "text": "L'arc aortique (ou aorte transverse) donne habituellement comme branches de division :",
        "options": {
            "A": "Les artères coronaires",
            "B": "Le tronc artériel brachiocéphalique (TABC)",
            "C": "Le tronc cœliaque",
            "D": "La carotide commune gauche",
            "E": "La sous-clavière gauche"
        },
        "correctAnswers": ["B","D","E"],
        "explanation": "B, D & E ✅ VRAI : L'arc aortique donne successivement de droite à gauche : le TABC, l'artère carotide commune gauche, et l'artère sous-clavière gauche.\nA ❌ FAUX : Les coronaires naissent de l'aorte ascendante.\nC ❌ FAUX : Le tronc cœliaque naît de l'aorte abdominale."
    },

    // Q82 — UE4-EB-26 — Le TABC donne habituellement :...
    {
        "id": "UE4-EB-26",
        "text": "Le TABC donne habituellement :",
        "options": {
            "A": "L'artère gastro-épiploïque gauche",
            "B": "La carotide commune gauche",
            "C": "La carotide commune droite",
            "D": "La sous-clavière gauche",
            "E": "La sous-clavière droite"
        },
        "correctAnswers": ["C","E"],
        "explanation": "C & E ✅ VRAI : Le tronc artériel brachio-céphalique (TABC) se divise en deux branches : l'artère carotide commune droite et l'artère sous-clavière droite.\nB & D ❌ FAUX : À gauche, la carotide commune et la sous-clavière naissent indépendamment et directement de l'arc aortique.\nA ❌ FAUX : L'artère gastro-épiploïque est abdominale."
    },

    // Q83 — UE4-EB-27 — Un patient présente une douleur du mollet droit, v...
    {
        "id": "UE4-EB-27",
        "text": "Un patient présente une douleur du mollet droit, vous ne palpez pas le pouls fémoral, ni le pouls poplité, ni les pouls pédieux et tibiaux postérieurs. Il s'agit (plusieurs réponses possibles) :",
        "options": {
            "A": "D'une obstruction de l'artère iliaque commune",
            "B": "D'une obstruction de la fémorale commune",
            "C": "D'une obstruction de la fémorale superficielle",
            "D": "D'une obstruction de l'artère tibiale antérieure",
            "E": "Le patient n'a rien"
        },
        "correctAnswers": ["A","B"],
        "explanation": "A & B ✅ VRAI : L'absence de pouls fémoral droit au pli de l'aine prouve que l'occlusion est haute, située au niveau ou en amont de l'artère fémorale commune : artère iliaque commune, artère iliaque externe ou fémorale commune.\nC ❌ FAUX : Une occlusion de la fémorale superficielle préserve un pouls fémoral normal au pli inguinal.\nD ❌ FAUX : Une obstruction de la tibiale antérieure n'abolit ni le pouls fémoral ni le pouls poplité.\nE ❌ FAUX : L'abolition complète des pouls de tout un membre inférieur signe une ischémie sévère indiscutable."
    },

    // --- Annales 2020-2021 (indices 83 à 87) ---

    // Q84 — UE4-EB-28 — Concernant les artères coronaires, quelles sont le...
    {
        "id": "UE4-EB-28",
        "text": "Concernant les artères coronaires, quelles sont les branches de l'IVA ?",
        "options": {
            "A": "Les marginales gauches",
            "B": "Les septales",
            "C": "Les diagonales",
            "D": "Les latérales",
            "E": "Les rétro-ventriculaires postérieures"
        },
        "correctAnswers": ["B","C"],
        "explanation": "B & C ✅ VRAI : L'IVA donne des branches collatérales septales antérieures (pour le septum) et diagonales (pour la paroi libre du VG).\nA & D ❌ FAUX : Les marginales gauches (latérales) naissent de la circonflexe.\nE ❌ FAUX : Les rétro-ventriculaires naissent de la coronaire droite ou de la circonflexe."
    },

    // Q85 — UE4-EB-29 — Concernant les artères coronaires, quelles sont le...
    {
        "id": "UE4-EB-29",
        "text": "Concernant les artères coronaires, quelles sont le plus souvent les branches de la coronaire droite ?",
        "options": {
            "A": "Les marginales gauches",
            "B": "Les septales",
            "C": "Les diagonales",
            "D": "Les marginales droites",
            "E": "L'interventriculaire postérieure (IVP)"
        },
        "correctAnswers": ["D","E"],
        "explanation": "D & E ✅ VRAI : La coronaire droite donne sur son trajet l'artère marginale droite (bord droit) et se termine classiquement en donnant l'artère interventriculaire postérieure (IVP) dans 85% des cas.\nA ❌ FAUX : Les marginales gauches naissent de la circonflexe.\nB & C ❌ FAUX : Les septales principales et les diagonales naissent de l'IVA."
    },

    // Q86 — UE4-EB-30 — Concernant les artères coronaires, les marginales ...
    {
        "id": "UE4-EB-30",
        "text": "Concernant les artères coronaires, les marginales gauches naissent :",
        "options": {
            "A": "De l'IVA",
            "B": "De la coronaire droite",
            "C": "De la circonflexe",
            "D": "D'une diagonale",
            "E": "De l'IVP"
        },
        "correctAnswers": ["C"],
        "explanation": "C ✅ VRAI : Les artères marginales gauches naissent de l'artère circonflexe et vascularisent le bord gauche et la paroi latérale du VG.\nA, B, D & E ❌ FAUX : Aucune de ces artères ne donne les marginales gauches."
    },

    // Q87 — UE4-EB-31 — Concernant le péricarde :...
    {
        "id": "UE4-EB-31",
        "text": "Concernant le péricarde :",
        "options": {
            "A": "C'est une enveloppe fibro-séreuse",
            "B": "Il présente une ligne de réflexion entourant le pédicule artériel",
            "C": "Il présente une ligne de réflexion entourant le pédicule veineux",
            "D": "Il présente une ligne de réflexion entourant l'aorte descendante",
            "E": "Aucune des propositions ci-dessus n'est exacte"
        },
        "correctAnswers": ["A","B","C"],
        "explanation": "A ✅ VRAI : Le péricarde est une enveloppe fibro-séreuse protégeant et amarrant le cœur.\nB ✅ VRAI : Le feuillet séreux possède une ligne de réflexion antérieure engainant le pédicule artériel (aorte ascendante et tronc pulmonaire).\nC ✅ VRAI : Il possède une ligne de réflexion postérieure entourant le pédicule veineux (veines caves et veines pulmonaires).\nD ❌ FAUX : Le péricarde ne descend pas sur l'aorte thoracique descendante (située en arrière du cœur dans le médiastin postérieur).\nE ❌ FAUX : Les propositions A, B et C sont exactes."
    },

    // Q88 — UE4-EB-32 — L'aorte transverse (crosse) donne :...
    {
        "id": "UE4-EB-32",
        "text": "L'aorte transverse (crosse) donne :",
        "options": {
            "A": "Le tronc commun de la coronaire gauche",
            "B": "La coronaire droite",
            "C": "Le TABC",
            "D": "La carotide gauche",
            "E": "La sous-clavière gauche"
        },
        "correctAnswers": ["C","D","E"],
        "explanation": "C, D & E ✅ VRAI : Les branches conventionnelles de l'aorte transverse sont le TABC, l'artère carotide commune gauche et l'artère sous-clavière gauche.\nA & B ❌ FAUX : Les artères coronaires droite et gauche naissent de l'aorte ascendante au niveau des sinus de Valsalva."
    },

    // --- Annales 2022-2023 (indices 88 à 102) ---

    // Q89 — UE4-EB-33 — Vous palpez son pouls fémoral gauche, fémoral droi...
    {
        "id": "UE4-EB-33",
        "text": "Vous palpez son pouls fémoral gauche, fémoral droit, poplité gauche, tibial postérieur gauche, pédieux gauche et pas le pouls poplité droit, tibial postérieur droit et pédieux droit. Vous pensez à une sténose serrée ou une occlusion de :",
        "options": {
            "A": "La grande veine saphène droite (saphène interne)",
            "B": "L'artère iliaque droite",
            "C": "L'artère iliaque gauche",
            "D": "La fémorale superficielle droite",
            "E": "La fémorale superficielle gauche"
        },
        "correctAnswers": ["D"],
        "explanation": "D ✅ VRAI : Le pouls fémoral droit est présent au pli de l'aine (iliaques et fémorale commune droites intactes), mais les pouls poplité droit et sous-jacents sont absents. L'occlusion se trouve donc sur l'artère fémorale superficielle droite dans la cuisse.\nA ❌ FAUX : La saphène interne est une veine ; une thrombose veineuse n'abolit pas les pouls artériels.\nB ❌ FAUX : Une occlusion iliaque droite abolirait le pouls fémoral droit.\nC & E ❌ FAUX : L'examen artériel du membre inférieur gauche est strictement normal."
    },

    // Q90 — UE4-EB-34 — L'IVA (interventriculaire antérieure) :...
    {
        "id": "UE4-EB-34",
        "text": "L'IVA (interventriculaire antérieure) :",
        "options": {
            "A": "Naît de la coronaire droite",
            "B": "Naît de la coronaire gauche",
            "C": "Donne des branches marginales gauches",
            "D": "Donne des branches diagonales",
            "E": "Donne des artères septales"
        },
        "correctAnswers": ["B","D","E"],
        "explanation": "B ✅ VRAI : L'IVA est issue de la bifurcation du tronc commun coronaire gauche.\nD ✅ VRAI : Elle donne des branches collatérales diagonales.\nE ✅ VRAI : Elle donne des branches collatérales septales antérieures.\nA ❌ FAUX : Elle naît de la coronaire gauche, pas de la droite.\nC ❌ FAUX : Les marginales gauches naissent de la circonflexe."
    },

    // Q91 — UE4-EB-35 — Les valves auriculo-ventriculaires :...
    {
        "id": "UE4-EB-35",
        "text": "Les valves auriculo-ventriculaires :",
        "options": {
            "A": "Sont au nombre de deux",
            "B": "Comportent la valve aortique",
            "C": "Comportent la valve mitrale",
            "D": "Comportent la valve pulmonaire",
            "E": "Comportent la valve tricuspide"
        },
        "correctAnswers": ["A","C","E"],
        "explanation": "A ✅ VRAI : Il y a deux valves auriculo-ventriculaires (AV) dans le cœur : la valve mitrale à gauche et la valve tricuspide à droite.\nC ✅ VRAI : La valve mitrale sépare l'atrium gauche du ventricule gauche.\nE ✅ VRAI : La valve tricuspide sépare l'atrium droit du ventricule droit.\nB & D ❌ FAUX : La valve aortique et la valve pulmonaire sont des valves ventriculo-artérielles (sigmoïdes)."
    },

    // Q92 — UE4-EB-36 — Les valves ventriculo-artérielles :...
    {
        "id": "UE4-EB-36",
        "text": "Les valves ventriculo-artérielles :",
        "options": {
            "A": "Sont au nombre de deux",
            "B": "Comportent la valve aortique",
            "C": "Comportent la valve mitrale",
            "D": "Comportent la valve pulmonaire",
            "E": "Comportent la valve tricuspide"
        },
        "correctAnswers": ["A","B","D"],
        "explanation": "A ✅ VRAI : Les valves ventriculo-artérielles (ou sigmoïdes) sont au nombre de deux : valve aortique et valve pulmonaire.\nB ✅ VRAI : La valve aortique sépare le VG de l'aorte.\nD ✅ VRAI : La valve pulmonaire sépare le VD du tronc pulmonaire.\nC & E ❌ FAUX : La mitrale et la tricuspide sont les deux valves atrio-ventriculaires."
    },

    // Q93 — UE4-EB-37 — Le système valvulaire mitral comporte :...
    {
        "id": "UE4-EB-37",
        "text": "Le système valvulaire mitral comporte :",
        "options": {
            "A": "Un système de cusps en hémi-bol",
            "B": "Un appareil sous-valvulaire",
            "C": "Un anneau fibreux",
            "D": "Deux cusps",
            "E": "Trois cusps"
        },
        "correctAnswers": ["B","C","D"],
        "explanation": "B ✅ VRAI : La valve mitrale possède un appareil sous-valvulaire (cordages tendineux insérés sur deux piliers/muscles papillaires).\nC ✅ VRAI : Elle s'insère sur un anneau fibreux atrio-ventriculaire.\nD ✅ VRAI : Elle comporte 2 cusps ou feuillets (valve bicuspide : cuspide antérieure/grande valve et cuspide postérieure/petite valve).\nA ❌ FAUX : Les cusps en 'hémi-bol' (nids de pigeon) constituent les valves sigmoïdes (aortique et pulmonaire).\nE ❌ FAUX : C'est la tricuspide et les valves sigmoïdes qui possèdent 3 cusps."
    },

    // Q94 — UE4-EB-38 — Le système valvulaire aortique comporte :...
    {
        "id": "UE4-EB-38",
        "text": "Le système valvulaire aortique comporte :",
        "options": {
            "A": "Un système de cusps en hémi-bol",
            "B": "Un appareil sous-valvulaire",
            "C": "Un anneau fibreux",
            "D": "Deux cusps",
            "E": "Trois cusps"
        },
        "correctAnswers": ["A","C","E"],
        "explanation": "A ✅ VRAI : Les valvules sigmoïdes aortiques ont une morphologie en 'hémi-bol' (nids de pigeon).\nC ✅ VRAI : Elles s'insèrent sur un anneau fibreux coronaire festonné.\nE ✅ VRAI : La valve aortique normale est tricuspide (3 cusps : droite, gauche et postérieure/non-coronaire).\nB ❌ FAUX : La valve aortique ne comporte AUCUN appareil sous-valvulaire (pas de cordages ni de piliers).\nD ❌ FAUX : Elle possède 3 cusps (sauf anomalie congénitale de bicuspidie)."
    },

    // Q95 — UE4-EB-39 — L'arche aortique (ou aorte transverse ou crosse ao...
    {
        "id": "UE4-EB-39",
        "text": "L'arche aortique (ou aorte transverse ou crosse aortique) donne habituellement quelles collatérales ?",
        "options": {
            "A": "L'artère mésentérique supérieure",
            "B": "Le tronc artériel brachio-céphalique",
            "C": "La carotide commune droite",
            "D": "La carotide commune gauche",
            "E": "La sous-clavière gauche"
        },
        "correctAnswers": ["B","D","E"],
        "explanation": "B, D & E ✅ VRAI : Les 3 branches nées de la crosse sont le TABC, la carotide commune gauche et la sous-clavière gauche.\nA ❌ FAUX : L'artère mésentérique supérieure naît de l'aorte abdominale.\nC ❌ FAUX : Attention au piège ! La carotide commune droite naît du TABC et non directement de la crosse."
    },

    // Q96 — UE4-EB-40 — Concernant l'IVA (interventriculaire antérieure) :...
    {
        "id": "UE4-EB-40",
        "text": "Concernant l'IVA (interventriculaire antérieure) :",
        "options": {
            "A": "Elle naît de la coronaire droite",
            "B": "Elle naît du tronc commun de la coronaire gauche",
            "C": "Elle naît de la mésentérique supérieure",
            "D": "Elle naît de la crosse de l'aorte",
            "E": "Aucune des propositions ci-dessus n'est exacte"
        },
        "correctAnswers": ["B"],
        "explanation": "B ✅ VRAI : L'IVA naît de la bifurcation du tronc commun de la coronaire gauche.\nA, C, D & E ❌ FAUX : La proposition B est la réponse exacte."
    },

    // Q97 — UE4-EB-41 — Concernant l'artère circonflexe :...
    {
        "id": "UE4-EB-41",
        "text": "Concernant l'artère circonflexe :",
        "options": {
            "A": "Elle naît de la coronaire droite",
            "B": "Elle naît du tronc commun de la coronaire gauche",
            "C": "Elle naît de la mésentérique supérieure",
            "D": "Elle naît de la crosse de l'aorte",
            "E": "Aucune des propositions ci-dessus n'est exacte"
        },
        "correctAnswers": ["B"],
        "explanation": "B ✅ VRAI : L'artère circonflexe naît de la bifurcation du tronc commun de la coronaire gauche.\nA, C, D & E ❌ FAUX : La proposition B est la réponse exacte."
    },

    // Q98 — UE4-EB-42 — L'interventriculaire antérieure (IVA) donne comme ...
    {
        "id": "UE4-EB-42",
        "text": "L'interventriculaire antérieure (IVA) donne comme collatérales :",
        "options": {
            "A": "L'IVP",
            "B": "Les marginales gauches",
            "C": "Les diagonales",
            "D": "Les septales",
            "E": "Les rétroventriculaires"
        },
        "correctAnswers": ["C","D"],
        "explanation": "C & D ✅ VRAI : L'IVA donne les artères diagonales (paroi antéro-latérale du VG) et les artères septales (2/3 antérieurs du septum).\nA ❌ FAUX : L'IVP naît de la coronaire droite.\nB ❌ FAUX : Les marginales gauches naissent de la circonflexe.\nE ❌ FAUX : Les rétroventriculaires naissent de la coronaire droite ou de la circonflexe."
    },

    // Q99 — UE4-EB-43 — L'artère circonflexe donne comme collatérales :...
    {
        "id": "UE4-EB-43",
        "text": "L'artère circonflexe donne comme collatérales :",
        "options": {
            "A": "L'IVP",
            "B": "Les marginales gauches",
            "C": "Les diagonales",
            "D": "Les septales",
            "E": "Les rétroventriculaires"
        },
        "correctAnswers": ["B"],
        "explanation": "B ✅ VRAI : La circonflexe donne les artères marginales du bord gauche.\nA ❌ FAUX : L'IVP naît de la coronaire droite (85%).\nC & D ❌ FAUX : Les diagonales et septales naissent de l'IVA.\nE ❌ FAUX : Les branches rétroventriculaires naissent de la terminaison de la coronaire droite."
    },

    // Q100 — UE4-EB-44 — La coronaire droite donne comme collatérales (nais...
    {
        "id": "UE4-EB-44",
        "text": "La coronaire droite donne comme collatérales (naissant directement de la coronaire droite et non d'une collatérale de celle-ci) :",
        "options": {
            "A": "L'IVP",
            "B": "Les marginales gauches",
            "C": "Les diagonales",
            "D": "Les septales",
            "E": "Aucune des propositions ci-dessus n'est exacte"
        },
        "correctAnswers": ["A"],
        "explanation": "A ✅ VRAI : L'IVP naît directement de la coronaire droite au niveau du sillon inter-ventriculaire postérieur dans 85% des cas.\nB ❌ FAUX : Les marginales gauches naissent de la circonflexe.\nC ❌ FAUX : Les diagonales naissent de l'IVA.\nD ❌ FAUX : Les septales postérieures naissent de l'IVP (branche de branche, et non directement de la coronaire droite).\nE ❌ FAUX : La proposition A est exacte."
    },

    // Q101 — UE4-EB-45 — Les artères septales peuvent naître de :...
    {
        "id": "UE4-EB-45",
        "text": "Les artères septales peuvent naître de :",
        "options": {
            "A": "L'IVP",
            "B": "Des marginales gauches",
            "C": "Des diagonales",
            "D": "De l'interventriculaire antérieure",
            "E": "Des rétroventriculaires"
        },
        "correctAnswers": ["A","D"],
        "explanation": "A & D ✅ VRAI : Le septum interventriculaire est irrigué dans ses deux tiers antérieurs par les branches septales antérieures issues de l'IVA (D), et dans son tiers postérieur par les branches septales postérieures issues de l'IVP (A).\nB, C & E ❌ FAUX : Ces artères n'irriguent pas le septum interventriculaire."
    },

    // Q102 — UE4-EB-46 — Les sinus de Valsalva :...
    {
        "id": "UE4-EB-46",
        "text": "Les sinus de Valsalva :",
        "options": {
            "A": "Sont au niveau de la face et sont responsables de sinusites",
            "B": "Correspondent à la grande veine de drainage du cœur",
            "C": "Correspondent au sinus transverse du péricarde",
            "D": "Correspondent aux dilatations proximales de l'aorte",
            "E": "Sont le siège de la naissance des artères coronaires"
        },
        "correctAnswers": ["D","E"],
        "explanation": "D & E ✅ VRAI : Les sinus de Valsalva sont les dilatations de la portion initiale de l'aorte ascendante (segment 1), situées juste au-dessus des cuspides aortiques, et constituent le siège d'émergence des deux artères coronaires.\nA ❌ FAUX : Aucun rapport avec les sinus de la face.\nB ❌ FAUX : Le drainage veineux est assuré par le sinus coronaire.\nC ❌ FAUX : Le sinus transverse est un espace péricardique séreux."
    },

    // Q103 — UE4-EB-47 — Le sinus coronaire :...
    {
        "id": "UE4-EB-47",
        "text": "Le sinus coronaire :",
        "options": {
            "A": "Est au niveau de la face et est responsable de sinusites",
            "B": "Correspond à la grande veine de drainage du cœur",
            "C": "Correspond au sinus transverse du péricarde",
            "D": "Correspond aux dilatations proximales de l'aorte",
            "E": "Est le siège de la naissance des artères coronaires"
        },
        "correctAnswers": ["B"],
        "explanation": "B ✅ VRAI : Le sinus coronaire (ou sinus veineux du cœur) est la veine principale de drainage du myocarde, se jetant dans l'atrium droit.\nA ❌ FAUX : Aucun rapport avec la face.\nC ❌ FAUX : Le sinus transverse de Theile est un espace péricardique séreux.\nD & E ❌ FAUX : Ce sont les caractéristiques des sinus de Valsalva aortiques."
    }

];

window.ALL_QCM_DATA["UE4"] = window.DATA_UE4;
