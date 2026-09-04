# Vérification factuelle

Vérifié dans le dépôt final Atelier Verette le 2 septembre 2026 :

- Next.js 15.5, React 19.1, TypeScript 5.7, Motion 12.23 et CSS natif.
- Déploiement Vercel et domaine canonique `https://atelierverette.fr`.
- Trois produits : Neverfull, Deauville et Pochette.
- Produits centralisés dans `data/products.ts`, avec galeries, textes alternatifs, cadrages, statut et lien Vinted optionnels.
- Catalogue partagé et vue rapide ; aucune route de fiche produit individuelle.
- Images WebP rendues avec `next/image` et attribut `sizes`.
- Métadonnées globales et par page, Open Graph/Twitter, `robots.ts`, `sitemap.ts` et JSON-LD Organization.
- `prefers-reduced-motion`, lien d’évitement, états de focus et textes alternatifs présents.
- Correction responsive finale : pistes Grid `minmax(0, 1fr)`, enfants réductibles, cadres d’images contraints, empilements mobiles et garde-fou `overflow-x: clip` avec repli.

Intentionnellement non revendiqué :

- aucun score Lighthouse, trafic, conversion, vente ou test utilisateur chiffré ;
- aucune redirection historique non vérifiée dans le dépôt ;
- aucune fiche produit dédiée ou metadata par produit ;
- aucun mécanisme d’écran d’attente dans l’état final du code ;
- aucune attribution photographique ambiguë liée aux personnes visibles dans les images.
