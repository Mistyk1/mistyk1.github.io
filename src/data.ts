const experiences = [
    {
        id: 1,
		title: 'Concours informatique (2021)',
		image: 'prologin.jpg',
        links: [
            { text: 'Prologin', link: 'https://prologin.org/' },
        ],
		description: "Participation au concours informatique Prologin et arrivée aux épreuves régionales",
		details: [
            "Prologin est un concours informatique annuel divisé en trois parties, visant à découvrir la programmation et l'algorithmique. J'ai participé aux éditions de 2021 et 2022, et je suis arrivé aux épreuves régionales lors de l'édition de 2021.",
        ],
        isExperience: true,
    },
    {
        id: 2,
		title: 'Stage de 2e et 3e année de BUT (2024/2025)',
		image: 'stage2eannee.png',
        links: [],
		description: "Stage informatique visant à apprendre les bases d'Unity et le développement d'un prototype de jeu",
		details: [],
        isExperience: true,
    },
]

const projets = [
    {
        id: 3,
		title: 'Jeux de la Vie',
		image: 'gameOfLife.png',
        links: [
            { text: 'Gitlab', link: 'https://gitlab.univ-lille.fr/qualitedev/conway-s-game-of-life' },
            { text: 'Github', link: 'https://github.com/Mistyk1/JeuxNuls' },
        ],
		description: "Plusieurs recréation du Jeu de la Vie de Conway en Python et en Java",
		details: [
            "Le Jeu de la Vie est un jeu qui se joue tout seul. Il est composé d'un plateau de cellules pouvant être vivantes ou mortes, et qui évoluent avec le temps. J'ai recréé ce jeu plusieurs fois dans différents langages. La première recréation a été développée en Python et a été un projet réalisé pendant mes années lycée. La seconde a été développée en Java, mais réalisée durant mon temps libre afin de m'exercer avec les mises à jour automatiques. La dernière a été réalisée peu de temps après, également en Java, mais dans le cadre d'un projet en groupe.",
        ],
    },
    {
        id: 4,
		title: 'Work Work Car',
		image: 'workworkcar.png',
        links: [],
		description: "Un site vitrine présentant un service de covoiturage pour une entreprise informatique",
		details: [
            "Ce site vitrine a été créé lors d'un projet ayant pour but de démontrer nos compétences en développement web. Une maquette du site a d'abord été réalisée avec <a href=\"https://wordpress.com/fr/\">Wordpress</a>, puis recréée en HTML/CSS.",
        ],
    },
    {
        id: 5,
		title: 'Jeu Ludo-Pédagogique',
		image: 'jeuLudoPedagogique.png',
        links: [
            { text: 'Github', link: 'https://github.com/Mistyk1/EleveParfait' },
        ],
		description: "Un jeu dans lequel apprendre est la clé, créer pour être joué par les jeunes",
		details: [
            "Ce jeu a été créé lors d'un projet en binôme ayant pour objectif de concevoir un jeu ludo-pédagogique. Le jeu consiste en une série de questions faisant monter des notes, le but étant d'avoir la note la plus élevée parmi tous les élèves.",
        ],
        hidden: true,
    },
    {
        id: 6,
		title: 'Série de petits jeux',
		image: 'jeuxnuls.png',
        links: [
            { text: 'Github', link: 'https://github.com/Mistyk1/JeuxNuls' },
        ],
		description: "Compilation de jeux tel que le Démineur, le Puissance 4, le Jeu de la Vie, etc...",
		details: [
            "Fait durant mon temps libre, ce projet consiste en une compilation de jeux simples tels que le Démineur, le Puissance 4 et le 2048, mais contient aussi des jeux un peu plus exotiques comme le Jeu de la Vie, le Knucklebones (un mini-jeu repris de Cult of the Lamb), ou Question pour un Carton (un quiz totalement absurde, n'ayant aucune forme de logique).",
        ],
    },
    {
        id: 7,
		title: 'Création en équipe d\'un jeu',
		image: 'jeuEquipe.png',
        links: [
            { text: 'Gitlab', link: 'https://gitlab.univ-lille.fr/2023-projet-agile-de-rentree/groupe-13' },
        ],
		description: "Création d'un jeu sur terminal en équipe sous la méthode Agile",
		details: [
            "Ce jeu a été créé lors d'un projet de groupe ayant pour but de nous apprendre la méthode Agile. Le jeu est un RPG (jeu de rôle) avec des événements générés procéduralement. Nous y jouons un livreur de nourriture qui doit livrer une commande en passant par une forêt remplie de dangers.",
        ],
    },
    {
        id: 8,
		title: 'Jeu Chasse au Monstre',
		image: 'bambi.png',
        links: [
            { text: 'Gitlab', link: 'https://gitlab.univ-lille.fr/sae302/2023/H2_SAE3A' },
        ],
		description: "Création d'un jeu de labyrinthe et de chasse de monstre en équipe de 5",
		details: [
            "Ce jeu a été créé lors d'un projet de groupe et se divise en deux parties: le monstre doit traverser un labyrinthe et le chasseur doit tirer sur le monstre. Le jeu est développé en Java, mais nous demande de développer beaucoup d'autres aspects : les graphismes, l'intelligence artificielle, la modularité du jeu, etc. Le projet est divisé en 3 jalons, marquant tous une version plus développée du jeu.",
        ],
    },
    {
        id: 9,
		title: 'API REST',
		image: 'pizzaland.jpg',
        links: [
            { text: 'Gitlab', link: 'https://gitlab.univ-lille.fr/iut-info-r4.02/2024/groupe-i/blot-maxime/sae4.a02.1-pizzeria-blot-duplouy' },
        ],
		description: "Création d'une API REST sur le thème d'une pizzeria",
		details: [
            "Cette API permet de gérer et d'obtenir des données sur une éventuelle pizzeria. Différents types de données sont disponibles : les ingrédients, les pizzas, les commandes et les utilisateurs. Tous les types de données possèdent des requêtes pour obtenir et modifier les données (excepté les utilisateurs qui peuvent seulement être obtenus). L'obtention de données ne nécessite pas d'authentification, mais la modification en demande une.",
        ],
    },
    {
        id: 10,
		title: 'Shape Em\' Up',
		image: 'jeuShootThemUp.jpg',
        links: [
            { text: 'Gitlab', link: 'https://gitlab.univ-lille.fr/noe.delin.etu/sae-2024-groupei-debay-delin-blot' },
        ],
		description: "Création d'un Shoot Them Up multijoueur en Javascript",
		details: [
            "Ce projet de groupe est un Shoot Them Up (un genre de jeu dans lequel il faut éliminer de grandes vagues d'ennemis) codé en JavaScript et pouvant être joué à quatre personnes. Le joueur peut obtenir différentes armes modifiant sa façon d'éliminer les ennemis, ainsi que des objets modifiant les caractéristiques des armes. De plus, certains objets peuvent améliorer une arme si celle-ci est associée au bon objet.",
        ],
    },
    {
        id: 11,
		title: 'Showdown',
		image: 'showdown.jpg',
        links: [
            { text: 'Github', link: 'https://github.com/Mistyk1/Showdown' },
        ],
		description: "Modification d'un jeu de carte afin d'y ajouter du contenu personnalisé",
		details: [
            "Ce projet personnel vise à ajouter du contenu personnalié à Balatro, un jeu de cartes mélengeant les aspects de plusieurs jeux de carte connu comme le poker ou le solitaire. Le contenu supplémentaire est ajouté grâce à un programme externe créer par la communauté du jeu, injectant le code voulu à l'intérieur du jeu.",
        ],
    },
    {
        id: 12,
		title: 'Site de planification',
		image: 'planificationSpring.png',
        links: [
            { text: 'Gitlab', link: 'https://gitlab.univ-lille.fr/r3.048110937/sae-s5-docto' },
        ],
		description: "Création d'un site basique de planification d'horaires en Java puis avec l'ajout de Spring",
		details: [
            "Ce projet consiste en un site permettant de réserver des horaires spécifiques conçu avec des servlets Java. Le projet a été fait en deux versions, une première basique et une seconde plus élaborée avec Spring et des nouvelles fonctionnalités.",
            "La première version possède uniquement les fonctionnalités de base: la création et/ou connexion à un compte, la réservation d'horaires, la vue sur toute les réservations de l'utilisateur ainsi qu'une vue sur toute les réservations du site (seulement pour les administrateurs).",
            "La seconde version est entièrement faite en Spring, et elle ajoute un système de sécurité, la modularité des horaires et l'envoi de mails.",
        ],
    },
    {
        id: 13,
		title: 'Clickatro',
		image: '',
        links: [],
		description: "",
		details: [],
        hidden: true,
    },
]

export { experiences, projets }