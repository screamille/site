// ─────────────────────────────────────────────────────────────
//  TOUT CE QUI EST À PERSONNALISER EST ICI
// ─────────────────────────────────────────────────────────────

// Préfixe des liens (ex. "/site" sur GitHub Pages, "" sur Vercel ou un vrai domaine)
export const BASE = import.meta.env.BASE_URL.replace(/\/$/, "");

export const SITE = {
  // Nom provisoire : change-le ici, il se met à jour partout
  nom: "Atelier Site IA",
  url: "https://www.exemple.fr", // ton futur nom de domaine
  auteur: "Sandro",
  email: "contact@exemple.fr",
  accroche: "Créez le site qui vous amène des clients — avec l'IA, sans savoir coder",
  description:
    "Formation pas à pas pour artisans, commerçants et indépendants : créez, mettez en ligne et faites connaître votre site avec Claude, sans écrire une ligne de code.",
};

export const OFFRE = {
  nomFormation: "Mon Site avec l'IA",
  prixNormal: 197,
  prixLancement: 97,
  prevente: true, // true = prix de lancement + mention "prévente"
  placesLancement: 30,
  garantieJours: 14,
  // Lien de paiement : Stripe Payment Link, Systeme.io, etc.
  // ⚠️ Pointe pour l'instant vers une page de simulation (/paiement-test) le temps de brancher un vrai prestataire.
  lienPaiement: `${BASE}/paiement-test/`,
};

// Formulaire e-mail (Systeme.io, Brevo, MailerLite…) : colle ici l'URL "action" du formulaire
export const EMAIL_FORM_ACTION = "#formulaire-a-configurer";

export const CADEAU = {
  titre: "Les 20 prompts pour créer votre site avec Claude",
  sousTitre: "Copiez-collez, adaptez à votre métier, et obtenez une page d'accueil prête en une soirée.",
};

export const MODULES = [
  {
    titre: "Poser les bases",
    duree: "45 min",
    points: [
      "Ce que votre site doit faire pour vous (et ce qui est inutile)",
      "Choisir son nom de domaine et son hébergement (gratuit ou presque)",
      "Installer les outils : Claude, un éditeur, un compte d'hébergement",
    ],
  },
  {
    titre: "Construire le site avec Claude",
    duree: "1 h 30",
    points: [
      "Faire générer la structure du site par l'IA, étape par étape",
      "Page d'accueil, services, contact : les textes qui donnent envie d'appeler",
      "Modifier le design sans toucher au code (ou presque)",
    ],
  },
  {
    titre: "Mettre en ligne",
    duree: "45 min",
    points: [
      "Publier le site gratuitement en quelques clics",
      "Brancher votre nom de domaine",
      "Formulaire de contact, mentions légales, cookies : être en règle",
    ],
  },
  {
    titre: "Être trouvé sur Google",
    duree: "1 h 30",
    points: [
      "Google Search Console et Google Business Profile",
      "Trouver les mots que vos clients tapent vraiment",
      "Écrire des pages qui se positionnent, avec l'aide de l'IA",
    ],
  },
  {
    titre: "Automatiser avec des agents IA",
    duree: "1 h",
    points: [
      "Créer un agent qui propose et rédige vos articles",
      "Un agent qui surveille votre référencement chaque semaine",
      "Garder la main : relire, corriger, valider",
    ],
  },
];

export const FAQ = [
  {
    q: "Je n'y connais rien en informatique, c'est pour moi ?",
    r: "Oui. La formation part de zéro. Si vous savez envoyer un e-mail et copier-coller, vous pouvez suivre.",
  },
  {
    q: "Combien coûtent les outils ?",
    r: "Vous pouvez démarrer avec les offres gratuites. Le seul coût vraiment nécessaire est le nom de domaine (environ une dizaine d'euros par an). Un abonnement payant à Claude est conseillé mais pas obligatoire au début.",
  },
  {
    q: "Combien de temps pour avoir mon site en ligne ?",
    r: "La plupart des gens peuvent avoir une première version en ligne en un week-end, en suivant les modules dans l'ordre.",
  },
  {
    q: "C'est quoi, la prévente ?",
    r: "Vous achetez la formation avant sa sortie complète, à prix réduit. Les modules sont publiés au fur et à mesure, et vos questions orientent le contenu.",
  },
  {
    q: "Et si ça ne me convient pas ?",
    r: "Vous êtes remboursé sur simple e-mail pendant la durée de la garantie, sans justification.",
  },
];
