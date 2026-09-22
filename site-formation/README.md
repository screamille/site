# Atelier Site IA — site de vente de formation

Site Astro : page de vente, page cadeau (capture d'e-mails), page merci, mentions légales, CGV, confidentialité.

## Lancer en local
```
npm install
npm run dev      # http://localhost:4321
```

## À personnaliser (tout est dans `src/config.ts`)
- Nom du site, domaine, e-mail
- Prix normal / prix de lancement, prévente oui/non
- `lienPaiement` : ton lien Stripe Payment Link ou Systeme.io
- `EMAIL_FORM_ACTION` : l'URL du formulaire de ton outil e-mail (Systeme.io, Brevo, MailerLite…)
- Programme des modules et FAQ

## À faire avant la mise en ligne
1. Remplir les passages surlignés en jaune dans les pages légales (SIRET, adresse, hébergeur, médiateur).
2. Ajouter ta photo (section « Qui suis-je ? » dans `src/pages/index.astro`).
3. Créer le guide gratuit « 20 prompts » et la séquence d'e-mails.
4. Ajouter les témoignages seulement quand tu auras de vrais retours d'élèves.

## Mise en ligne
Pousser sur GitHub puis importer le repo dans Vercel (comme pour ton autre site) : zéro config nécessaire.
