// ============================================================
// CASHMONETIK - All French Content Data
// ============================================================

export const siteConfig = {
  name: 'CashMonetik',
  url: 'https://cashmonetik.fr',
  phone: '+33162343462',
  phoneDisplay: '01 62 34 34 62',
  email: 'support@cashmonetik.fr',
  description: 'Solutions monétiques pour commerces de proximité',
  address: { street: '8 rue de l\'Est', city: 'Boulogne-Billancourt', zip: '92100', country: 'FR' },
  hours: 'Lun-Ven 9h-18h',
};

export const navLinks = [
  { label: 'Solutions', href: '/catalogue' },
  { label: 'Secteurs', href: '/secteurs' },
  { label: 'Showroom', href: '/showroom' },
  { label: 'FAQ', href: '/faq' },
  { label: 'À propos', href: '/a-propos' },
];

export const heroTypedStrings = [
  'encaissements.',
  'transactions.',
  'paiements.',
  'fonds de caisse.',
  'flux monétaires.',
];

export const socialProof = [
  { value: '500+', label: 'commerces équipés' },
  { value: '98%', label: 'clients satisfaits' },
  { value: 'Rapide', label: 'installation' },
];

export const trustBadges = [
  { label: 'Certifié PCI-DSS', icon: 'lock' as const },
  { label: 'Fabriqué en Europe', icon: 'globe' as const },
  { label: 'Conforme RGPD', icon: 'shield' as const },
  { label: 'Garantie 1 an', icon: 'check' as const },
];

export const clientLogos = [
  { src: '/assets/client-spar.svg', alt: 'Spar' },
  { src: '/assets/client-parisistanbul.png', alt: 'Paris Istanbul' },
  { src: '/assets/client-europrimeurs.webp', alt: 'Euro Primeurs' },
  { src: '/assets/client-franprix.webp', alt: 'Franprix' },
  { src: '/assets/client-aubrazier.webp', alt: 'Au Brazier' },
];

export const problems = [
  {
    stat: '2% du CA cash',
    title: 'Erreurs de caisse',
    description: "Les erreurs manuelles coûtent en moyenne 2% de votre chiffre d'affaires cash. Chaque euro mal compté est un euro perdu.",
    icon: 'alertCircle' as const,
  },
  {
    stat: '+30% abandon',
    title: "Files d'attente",
    description: "Vos clients attendent, s'impatientent, partent. Les files d'attente entraînent jusqu'à 30% d'abandon en caisse.",
    icon: 'clock' as const,
  },
  {
    stat: '45 min/jour',
    title: 'Comptage manuel',
    description: '45 minutes par jour perdues à compter, recompter, vérifier. Du temps que vous pourriez consacrer à vos clients.',
    icon: 'clipboard' as const,
  },
  {
    stat: '1re source de perte',
    title: 'Sécurité de vos espèces',
    description: 'Démarque inconnue, vols et oublis fragilisent votre rentabilité. Un coffre sécurisé protège chaque euro. L\'argent transporte jusqu\'à 3 000 bactéries par billet.',
    icon: 'lockOpen' as const,
  },
  {
    stat: 'Image pro',
    title: 'Image de marque',
    description: 'Un équipement moderne contribue à votre image de marque. Vos clients perçoivent un commerce professionnel, innovant et digne de confiance.',
    icon: 'shield' as const,
  },
];

export const solutions = [
  {
    title: 'Caisses automatiques',
    description: 'Monnayeurs automatiques pour sécuriser et accélérer tous vos encaissements.',
    image: '/assets/caisse-auto.webp',
    features: ['Comptage automatique des espèces', 'Rendu de monnaie intelligent', 'Sécurisation totale des fonds'],
    badge: 'Populaire',
    featured: true,
  },
  {
    title: 'Bornes de commande',
    description: 'Bornes interactives pour une prise de commande autonome et rapide.',
    image: '/assets/borne-commande.webp',
    features: ['Écran tactile grand format', 'Interface personnalisable', 'Paiement intégré'],
  },
  {
    title: 'Caisses tactiles',
    description: 'Points de vente nouvelle génération, compatibles avec tous les paiements.',
    image: '/assets/caisse-tactile.webp',
    features: ['Écran tactile HD', 'Logiciel de caisse intégré', 'Compatible tous paiements'],
  },
  {
    title: 'Balances professionnelles',
    description: 'Pesage intelligent avec écran tactile et impression ticket intégrée.',
    image: '/assets/balance.webp',
    features: ['Écran tactile intuitif', 'Impression ticket intégrée', 'Gestion produits simplifiée'],
  },
  {
    title: 'Robot Sparkoz',
    description: 'Robot de nettoyage autonome de dernière génération pour vos locaux.',
    image: '/assets/robot-sparkoz.webp',
    features: ["8h d'autonomie", 'Couverture 2000m²', 'Navigation LiDAR'],
    badge: 'Nouveau',
    badgeColor: 'green' as const,
  },
];

export const howItWorks = [
  {
    number: '01',
    title: 'Audit gratuit',
    description: 'Un expert analyse vos besoins et vous recommande la solution idéale. 30 minutes, sans engagement, à distance ou sur place.',
    detail: '30 minutes',
    detailIcon: 'clock' as const,
  },
  {
    number: '02',
    title: 'Installation rapide',
    description: 'Livraison, installation et configuration complète par nos techniciens certifiés. Formation de votre équipe incluse. Clé en main.',
    detail: 'Mise en service rapide',
    detailIcon: 'zap' as const,
  },
  {
    number: '03',
    title: 'Support continu',
    description: "Maintenance préventive, mises à jour automatiques et support technique 24/7. Vous n'êtes jamais seul.",
    detail: '24/7 illimité',
    detailIcon: 'headphones' as const,
  },
];

export const stats = [
  { value: 500, suffix: '+', label: 'Commerces équipés' },
  { value: 98, suffix: '%', label: 'Clients satisfaits' },
  { value: 48, suffix: 'h', label: "Délai d'installation" },
  { value: 24, suffix: '/7', label: 'Support technique' },
];

export const testimonials = [
  {
    quote: "Depuis l'installation de la caisse automatique, nos erreurs de caisse ont disparu. On gagne 2 heures par jour sur le comptage.",
    author: 'Marie Dupont',
    role: 'Gérante - Boulangerie Le Pain Doré',
    initials: 'MD',
  },
  {
    quote: 'La borne de commande a boosté notre panier moyen de 20%. Les clients adorent. Le support est top, vraiment réactif.',
    author: 'Philippe Laurent',
    role: 'Directeur - Tabac Presse Saint-Michel',
    initials: 'PL',
  },
  {
    quote: 'On a réduit notre temps de fermeture de caisse de 45 minutes à 5 minutes. Investissement rentabilisé en 2 mois.',
    author: 'Sophie Benali',
    role: 'Propriétaire - Supermarché Frais Market',
    initials: 'SB',
  },
];

export const sectors = [
  {
    title: 'Boulangeries',
    description: "Encaissement rapide aux heures de pointe, gestion des stocks et fidélisation client automatisée.",
    icon: '/assets/icon-boulangerie.png',
  },
  {
    title: 'Tabacs',
    description: 'Conformité réglementaire, traçabilité totale et sécurisation renforcée de vos fonds de caisse.',
    icon: '/assets/icon-tabac.png',
  },
  {
    title: 'Supermarchés',
    description: 'Multi-caisses, rapports centralisés et solutions self-checkout pour fluidifier le passage en caisse.',
    icon: '/assets/icon-supermarche.png',
  },
  {
    title: 'Pharmacies',
    description: 'Discrétion maximale, intégration logiciel métier et sécurité renforcée pour votre officine.',
    icon: '/assets/icon-pharmacie.svg',
  },
];

export const faqItems = [
  {
    question: 'Combien coûtent vos solutions ?',
    answer: "Nos solutions sont disponibles en location ou à l'achat. Le coût dépend de la configuration choisie et de votre secteur d'activité. Contactez-nous pour un devis personnalisé gratuit.",
  },
  {
    question: "Quel est le délai d'installation ?",
    answer: "L'installation se fait rapidement. Cela inclut la livraison, l'installation, la configuration et la formation de votre équipe.",
  },
  {
    question: 'Proposez-vous une formation ?',
    answer: "Oui, une formation complète de 2h est incluse dans chaque installation. Notre équipe forme vos collaborateurs à l'utilisation quotidienne de l'équipement.",
  },
  {
    question: 'Quelle est la durée de la garantie ?',
    answer: 'Tous nos équipements sont garantis 1 an pièces et main d\'œuvre. Nous proposons également des extensions de garantie.',
  },
  {
    question: 'Comment fonctionne le support technique ?',
    answer: 'Notre support technique est disponible 24/7 par téléphone et email. En cas de panne, un technicien intervient sous 24h sur site.',
  },
  {
    question: 'Vos solutions sont-elles compatibles avec mon logiciel de caisse ?',
    answer: 'Nos équipements sont compatibles avec la majorité des logiciels de caisse du marché. Notre équipe technique vérifie la compatibilité lors de l\'audit gratuit.',
  },
  {
    question: 'Proposez-vous la location ?',
    answer: 'Oui, nous proposons des formules de location avec maintenance incluse. C\'est la solution idéale pour maîtriser votre budget.',
  },
  {
    question: 'Dans quelles régions intervenez-vous ?',
    answer: 'Nous intervenons sur toute la France métropolitaine. Notre réseau de techniciens couvre l\'ensemble du territoire.',
  },
];

export const chatbotResponses: Record<string, string> = {
  prix: "Nos solutions sont disponibles en location ou à l'achat. Installation et formation incluses dans tous nos contrats.\n\nPour obtenir un devis personnalisé adapté à votre activité, contactez-nous au 01 62 34 34 62 ou demandez un audit gratuit sur notre page contact !",
  installation: "L'installation se fait rapidement ! Notre processus :\n1. Livraison sur site\n2. Installation et configuration\n3. Formation de votre équipe (2h)\n4. Tests et mise en service\n\nTout est inclus dans votre contrat.",
  produits: "Notre gamme complète :\n- Caisses automatiques (monnayeurs)\n- Bornes de commande interactives\n- Caisses tactiles nouvelle génération\n- Balances professionnelles connectées\n- Robot Sparkoz (nettoyage autonome)\n\nChaque solution est personnalisable.",
  contact: "Contactez notre équipe commerciale :\n- Tél : 01 62 34 34 62\n- Email : support@cashmonetik.fr\n- Horaires : Lun-Ven 9h-18h\n\nOu demandez un audit gratuit sur notre page contact !",
};

export const chatbotQuickReplies = [
  { topic: 'prix', label: 'Tarifs et prix' },
  { topic: 'installation', label: "Délai d'installation" },
  { topic: 'produits', label: 'Nos produits' },
  { topic: 'contact', label: 'Parler à un conseiller' },
];

export const showcaseData = [
  {
    title: 'Cafés & Restaurants',
    description: "Solutions d'encaissement modernes pour optimiser votre service client et sécuriser vos transactions.",
    image: '/assets/showcase-cafe.webp',
    navTitle: 'CAFÉS & RESTAURANTS',
    navDesc: 'Encaissement moderne',
  },
  {
    title: 'Tabacs & Presse',
    description: 'Équipements adaptés aux contraintes réglementaires avec traçabilité complète et sécurité renforcée.',
    image: '/assets/showcase-tabac.webp',
    navTitle: 'TABACS & PRESSE',
    navDesc: 'Conformité & sécurité',
  },
  {
    title: 'Boulangeries',
    description: 'Caisses tactiles et monnayeurs automatiques pour fluidifier le service aux heures de pointe.',
    image: '/assets/showcase-boulangerie.webp',
    navTitle: 'BOULANGERIES',
    navDesc: 'Rapidité & efficacité',
  },
];

export const catalogueProducts = [
  {
    id: 'caisse-automatique',
    title: 'Caisse automatique',
    subtitle: 'Monnayeur automatique nouvelle génération',
    description: 'Sécurisez et accélérez tous vos encaissements avec notre monnayeur automatique. Comptage instantané, rendu de monnaie intelligent et sécurisation totale de vos fonds de caisse.',
    image: '/assets/caisse-auto.webp',
    badge: 'Best-seller',
    features: [
      'Accepte billets et pièces',
      'Rendu de monnaie automatique',
      'Comptage instantané',
      'Coffre sécurisé anti-effraction',
      'Rapports en temps réel',
      'Compatible tous logiciels de caisse',
    ],
  },
  {
    id: 'borne-commande',
    title: 'Borne de commande',
    subtitle: 'Borne interactive tactile',
    description: 'Offrez à vos clients une expérience de commande autonome, rapide et intuitive. Augmentez votre panier moyen de 20% grâce à la suggestion intelligente.',
    image: '/assets/borne-commande.webp',
    features: [
      'Écran tactile 22" ou 32"',
      'Interface personnalisable',
      'Paiement CB intégré',
      'Suggestions intelligentes',
      'Gestion des files d\'attente',
      'Statistiques en temps réel',
    ],
  },
  {
    id: 'caisse-tactile',
    title: 'Caisse tactile',
    subtitle: 'Point de vente tout-en-un',
    description: 'La caisse enregistreuse nouvelle génération. Écran tactile HD, logiciel intégré et compatibilité avec tous les moyens de paiement.',
    image: '/assets/caisse-tactile.webp',
    features: [
      'Écran tactile 15.6" Full HD',
      'Logiciel de caisse intégré',
      'Lecteur CB / NFC intégré',
      'Tiroir-caisse automatique',
      'Imprimante ticket intégrée',
      'Gestion multi-magasins',
    ],
  },
  {
    id: 'balance',
    title: 'Balance professionnelle',
    subtitle: 'Pesage intelligent connecté',
    description: 'Balance professionnelle avec écran tactile intuitif et impression ticket intégrée. Idéale pour les boulangeries, primeurs et traiteurs.',
    image: '/assets/balance.webp',
    features: [
      'Précision 1g',
      'Écran tactile couleur',
      'Impression ticket intégrée',
      'Base de données 10 000 articles',
      'Connexion logiciel de caisse',
      'Nettoyage facile inox',
    ],
  },
  {
    id: 'robot-sparkoz',
    title: 'Robot Sparkoz',
    subtitle: 'Robot de nettoyage autonome',
    description: "Le robot de nettoyage professionnel dernière génération. Navigation LiDAR, 8h d'autonomie et couverture de 2000m². L'avenir de l'entretien de vos locaux.",
    image: '/assets/robot-sparkoz.webp',
    badge: 'Nouveau',
    badgeColor: 'green' as const,
    features: [
      "8h d'autonomie",
      'Couverture 2000m²',
      'Navigation LiDAR',
      'Recharge automatique',
      'Programmation horaire',
      'Capteurs anti-collision',
    ],
  },
];

export const guarantees = [
  {
    title: 'Installation rapide',
    description: 'Livraison, installation et formation incluses. Votre équipement est opérationnel rapidement.',
    icon: 'zap' as const,
  },
  {
    title: 'Garantie satisfait 30 jours',
    description: "Testez nos solutions sans risque. Si vous n'êtes pas satisfait, nous reprenons l'équipement.",
    icon: 'shield' as const,
  },
  {
    title: 'Support 24/7',
    description: 'Notre équipe technique est disponible 24h/24, 7j/7 par téléphone et email.',
    icon: 'headphones' as const,
  },
];

export const features = [
  {
    title: 'Zéro erreur de caisse',
    description: 'Le comptage automatique élimine 100% des erreurs humaines. Chaque centime est comptabilisé avec précision.',
    icon: 'target' as const,
  },
  {
    title: 'Sécurité maximale',
    description: "Coffres anti-effraction, traçabilité complète et suppression du cash accessible. Protégez votre commerce et vos employés.",
    icon: 'shield' as const,
  },
  {
    title: 'Gain de temps',
    description: "Réduisez le temps de comptage de 45 minutes à 5 minutes. Vos équipes se concentrent sur l'essentiel : vos clients.",
    icon: 'clock' as const,
  },
  {
    title: 'ROI en 2 mois',
    description: "Réduction des pertes, gain de productivité et augmentation du panier moyen. L'investissement est rentabilisé rapidement.",
    icon: 'trendingUp' as const,
  },
];

export const processSteps = [
  {
    number: '01',
    tag: 'Étape 1',
    title: 'Prise de contact',
    description: 'Appelez-nous ou remplissez le formulaire. Un conseiller vous recontacte sous 2h.',
    duration: '2h de réponse',
  },
  {
    number: '02',
    tag: 'Étape 2',
    title: 'Audit gratuit',
    description: 'Un expert analyse vos besoins et vous propose la solution la plus adaptée.',
    duration: '30 minutes',
  },
  {
    number: '03',
    tag: 'Étape 3',
    title: 'Installation',
    description: 'Livraison, installation, configuration et formation de votre équipe.',
    duration: 'Rapide',
  },
  {
    number: '04',
    tag: 'Étape 4',
    title: 'Suivi continu',
    description: 'Support 24/7, maintenance préventive et mises à jour automatiques.',
    duration: '24/7 illimité',
  },
];

export const sectorCards = [
  {
    title: 'Boulangeries',
    icon: '/assets/icon-boulangerie.png',
    backTitle: 'Solutions Boulangerie',
    backDescription: 'Optimisez votre service aux heures de pointe avec nos solutions adaptées.',
    backFeatures: ['Monnayeur automatique', 'Balance connectée', 'Caisse tactile rapide', 'Gestion fidélité'],
  },
  {
    title: 'Tabacs & Presse',
    icon: '/assets/icon-tabac.png',
    backTitle: 'Solutions Tabac',
    backDescription: 'Sécurisez vos fonds et respectez les contraintes réglementaires.',
    backFeatures: ['Monnayeur sécurisé', 'Traçabilité totale', 'Conformité fiscale', 'Rapports automatiques'],
  },
  {
    title: 'Supermarchés',
    icon: '/assets/icon-supermarche.png',
    backTitle: 'Solutions Supermarché',
    backDescription: 'Fluidifiez le passage en caisse et centralisez vos rapports.',
    backFeatures: ['Multi-caisses', 'Self-checkout', 'Rapports centralisés', 'Gestion des stocks'],
  },
  {
    title: 'Pharmacies',
    icon: '/assets/icon-pharmacie.svg',
    backTitle: 'Solutions Pharmacie',
    backDescription: 'Discrétion et intégration avec votre logiciel métier.',
    backFeatures: ['Discrétion maximale', 'Intégration LGO', 'Sécurité renforcée', 'Comptage automatique'],
  },
];

export const footerLinks = {
  navigation: [
    { label: 'À propos', href: '/a-propos' },
    { label: 'Secteurs', href: '/secteurs' },
    { label: 'Catalogue', href: '/catalogue' },
    { label: 'Showroom', href: '/showroom' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Contact', href: '/contact' },
  ],
  sectors: [
    { label: 'Boulangeries', href: '/secteurs' },
    { label: 'Tabacs', href: '/secteurs' },
    { label: 'Supermarchés', href: '/secteurs' },
    { label: 'Pharmacies', href: '/secteurs' },
  ],
  legal: [
    { label: 'Mentions légales', href: '/mentions-legales' },
    { label: 'Confidentialité', href: '/politique-confidentialite' },
  ],
};
