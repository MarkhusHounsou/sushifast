# 🍣 SushiFast - Application Web React

![SushiFast Banner](https://img.shields.io/badge/Status-Livr%C3%A9-success?style=for-the-badge) 
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![Bootstrap](https://img.shields.io/badge/bootstrap-%238511FA.svg?style=for-the-badge&logo=bootstrap&logoColor=white)

![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Live-blue?style=for-the-badge&logo=github)

**SushiFast** est une plateforme moderne de consultation de menus de sushis développée avec React. Conçu pour offrir une expérience utilisateur fluide, le projet met en avant des fonctionnalités avancées de filtrage, de tri et de gestion dynamique des données.

### 🔗 [Voir le site en ligne (GitHub Pages)](https://MarkhusHounsou.github.io/sushifast)

---

## ✨ Fonctionnalités Clés

- 🏮 **Catalogue Interactif** : Exploration complète des menus avec visuels haute résolution et détails précis.
- 🔍 **Filtrage Intelligent** : Recherche par saveurs spécifiques (ex: avocat, coriandre) et exclusion d'aliments indésirables.
- 🏷️ **Détails Menus** : Fiche technique pour chaque box listant les ingrédients et quantités.
- 📊 **Analyse de Données** : Identification automatique des menus "extrêmes" (< 13 pièces) et calcul du prix total du lot.
- ↕️ **Tri Dynamique** : Classement par prix pour trouver rapidement les meilleures offres.

---

## 🛠️ Stack Technique

- **Frontend core** : React 18
- **Build Tool** : Vite.js
- **Routing** : React Router DOM (HashRouter pour la compatibilité GitHub Pages)
- **Styling** : Bootstrap 5 & Custom CSS
- **Data Management** : JSON local & Context API pour le partage d'état

---

## 🚀 Installation Locale

1.  **Cloner le dépôt** :
    ```bash
    git clone https://github.com/MarkhusHounsou/sushifast.git
    cd sushifast
    ```
2.  **Installer les dépendances** :
    ```bash
    npm install
    ```
3.  **Lancer le serveur de développement** :
    ```bash
    npm run dev
    ```

---

## 🌐 Procédure de Déploiement

Cette application est configurée pour un déploiement automatisé sur **GitHub Pages**. Voici la procédure suivie pour garantir un fonctionnement optimal :

### 1. Configuration Technique
- **Base Path** : Le fichier `vite.config.js` est configuré avec `base: "/sushifast/"` pour assurer le chargement correct des assets sur les serveurs de GitHub.
- **Routing** : Utilisation de `HashRouter` à la place de `BrowserRouter` pour éviter les erreurs `404` lors du rafraîchissement des pages profondes.
- **NoJekyll** : Un fichier `.nojekyll` est présent dans le dossier `public` pour désactiver le traitement Jekyll de GitHub et accélérer le déploiement.

### 2. Commande de Déploiement
Le projet utilise le package `gh-pages`. Pour mettre à jour le site en ligne, une seule commande suffit :

```bash
npm run deploy
```

**Ce que fait cette commande :**
1. Elle exécute `npm run build` (script `predeploy`) pour générer les fichiers optimisés dans le dossier `dist`.
2. Elle pousse le contenu du dossier `dist` sur une branche isolée nommée `gh-pages`.
3. GitHub Pages publie ensuite automatiquement le contenu de cette branche.

---

## 👨‍💻 Auteur
**Markhus Hounsou**  
*Projet réalisé dans le cadre d'un cursus de développement Frontend.*

---
© 2026 SushiFast - Tous droits réservés.
