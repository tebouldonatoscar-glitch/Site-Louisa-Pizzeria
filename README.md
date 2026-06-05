# Chez Louisa — Site vitrine

Site statique de la pizzeria **Chez Louisa** (Garnier Pagès).

## Structure

- `index.html` — page principale (point d'entrée)
- `src/` — composants React/JSX (compilés à la volée par Babel)
- `assets/` — images, logo, menu PDF

## Déploiement

Aucune commande de build nécessaire — c'est un site 100% statique.

Déployé automatiquement sur **Vercel** depuis ce repo : à chaque push sur `main`, le site est redéployé en ~30 secondes.

## Modifier le contenu

- Textes, coordonnées, horaires : `src/data.jsx`
- Pages : `src/home.jsx`, `src/carte.jsx`, `src/coupe.jsx`, `src/contact.jsx`
- Menu PDF : remplacer `assets/menu-chez-louisa.pdf`
