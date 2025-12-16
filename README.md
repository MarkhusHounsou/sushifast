# SushiFast

Application React de présentation de menus de sushis, réalisée dans le cadre du TP de développement Frontend.

## 📋 Contexte
Le restaurant SushiFast souhaite promouvoir ses menus à travers une application web permettant de consulter les détails, filtrer par préférences et calculer des prix totaux pour certaines catégories de menus.

## 🚀 Installation et Lancement

1.  **Cloner le projet** (ou télécharger les sources)
2.  **Installer les dépendances** :
    ```bash
    npm install
    ```
3.  **Lancer l'application** :
    ```bash
    npm run dev
    ```

## ✅ Réponse aux Spécifications Fonctionnelles

Voici comment chaque point demandé a été implémenté dans l'application :

### 1. Affichage de tous les menus
*   **Localisation** : Page d'accueil (`Route: /`) - composant `Home.jsx`.
*   **Détails** : La page liste l'intégralité des menus présents dans le fichier `boxes.json`. Chaque carte affiche le nom, le nombre de pièces, l'image correspondante et le prix.

### 2. Présentation des saveurs de chaque menu
*   **Localisation** :
    *   Page d'accueil (`Home.jsx`) : Sur chaque carte de menu.
    *   Page détails (`MenuDetails.jsx`) : Liste complète des saveurs.

### 3. Liste des menus contenant : avocat ou coriandre
*   **Localisation** : Page d'accueil (`Home.jsx`).
*   **Implémentation** : Un filtre "Saveurs" (Dropdown multi-sélection) permet de cocher "avocat" et/ou "coriandre". La liste des menus se met à jour dynamiquement pour n'afficher que ceux correspondant aux saveurs sélectionnées.

### 4. Liste des aliments d'un menu donné
*   **Localisation** : Page détails (`Route: /menu/:id`) - composant `MenuDetails.jsx`.
*   **Implémentation** : En cliquant sur un menu depuis l'accueil, on accède à sa fiche détaillée qui liste tous ses ingrédients ainsi que leurs quantités.

### 5. Liste des menus ne contenant pas l'aliment "California Saumon Avocat"
*   **Localisation** : Page d'accueil (`Home.jsx`).
*   **Implémentation** : Un filtre "Exclure des aliments" permet de sélectionner des ingrédients à exclure. En cochant "California Saumon Avocat", la liste retire automatiquement tous les menus contenant cet aliment.

### 6. Prix total des menus < 13 pièces
*   **Localisation** : Page "Menus extrêmes" (`Route: /extremes`) - composant `Extremes.jsx`.
*   **Implémentation** : Une page dédiée filtre les menus ayant strictement moins de 13 pièces. Un encart en haut de page affiche la somme totale des prix de ces menus spécifiques.

### 7. Afficher le menu le plus cher et le moins cher
*   **Localisation** : Page d'accueil (`Home.jsx`).
*   **Implémentation** : Un tri par prix (Dropdown "Prix") permet de classer les menus :
    *   "Moins cher → Plus cher" : Le premier élément est le menu le moins cher.
    *   "Plus cher → Moins cher" : Le premier élément est le menu le plus cher.

## 🛠 Contraintes Techniques Respectées

*   **Source de données** : Utilisation exclusive de `boxes.json`.
*   **Framework CSS** : Bootstrap 5 utilisé pour le layout (Grid system, Cards, Alerts, Headers).
*   **Routage** : Implémenté avec `react-router-dom` (Routes définies dans `App.jsx`).
*   **Header / Footer** : Composants présents sur toutes les pages (`Header.jsx`, `Footer.jsx`).

## 👤 Auteur
Projet réalisé par Markhus Hounsou.
