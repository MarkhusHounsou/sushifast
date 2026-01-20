import { useContext, useState } from "react";
import { MenuContext } from "../context/MenuProvider";
import { Link } from "react-router-dom";
import "../styles/Home.css";
import DropdownMulti from "../components/DropdownMulti";
import DropdownSimple from "../components/DropdownSimple";

// Importation dynamique des images depuis le dossier assets
const images = import.meta.glob("../assets/*.{jpg,jpeg,png,webp}", {
  eager: true,
  import: "default",
});

/**
 * Home - Page d'accueil de l'application
 * Affiche la liste complète des menus avec des filtres interactifs :
 * - Filtrage par saveurs (multi-sélection)
 * - Exclusion d'aliments (multi-sélection)
 * - Tri par prix (croissant/décroissant)
 */
export default function Home() {
  // Récupération des données des menus depuis le contexte
  const { menus } = useContext(MenuContext);

  // État pour gérer quel dropdown est actuellement ouvert
  const [openDropdown, setOpenDropdown] = useState(null);

  // États pour les différents filtres
  const [selectedFlavors, setSelectedFlavors] = useState([]); // Saveurs sélectionnées
  const [excludedIngredients, setExcludedIngredients] = useState([]); // Aliments à exclure
  const [priceSort, setPriceSort] = useState(""); // Type de tri par prix

  // Extraction de toutes les saveurs uniques disponibles dans les menus
  const allSaveurs = [...new Set(menus.flatMap((m) => m.saveurs))].sort();

  // Extraction de tous les ingrédients uniques disponibles dans les menus
  const allIngredients = [
    ...new Set(menus.flatMap((m) => m.aliments.map((a) => a.nom))),
  ].sort();

  // Application des filtres sur les menus
  let filteredMenus = menus;

  // Filtre 1 : Saveurs sélectionnées (le menu doit contenir TOUTES les saveurs cochées)
  if (selectedFlavors.length > 0) {
    filteredMenus = filteredMenus.filter((menu) =>
      selectedFlavors.every((s) => menu.saveurs.includes(s))
    );
  }

  // Filtre 2 : Exclusion d'aliments (le menu ne doit contenir AUCUN des aliments cochés)
  if (excludedIngredients.length > 0) {
    filteredMenus = filteredMenus.filter(
      (menu) =>
        !menu.aliments.some((a) => excludedIngredients.includes(a.nom))
    );
  }

  // Tri par prix
  if (priceSort === "asc") {
    // Tri croissant : du moins cher au plus cher
    filteredMenus = [...filteredMenus].sort((a, b) => a.prix - b.prix);
  } else if (priceSort === "desc") {
    // Tri décroissant : du plus cher au moins cher
    filteredMenus = [...filteredMenus].sort((a, b) => b.prix - a.prix);
  }

  return (
    <div onClick={() => setOpenDropdown(null)}>
      <div className="container py-5">
        <h1 className="text-center mb-5">Nos Box Sushi</h1>

        {/* SECTION FILTRES */}
        <div
          className="d-flex flex-wrap align-items-center mb-4 gap-3"
          onClick={(e) => e.stopPropagation()} // Empêche la fermeture des dropdowns lors du clic
        >
          {/* Filtre multi-sélection : Saveurs */}
          <DropdownMulti
            title="Saveurs"
            options={allSaveurs}
            selected={selectedFlavors}
            onChange={setSelectedFlavors}
            isOpen={openDropdown === "saveurs"}
            onToggle={() =>
              setOpenDropdown(openDropdown === "saveurs" ? null : "saveurs")
            }
          />

          {/* Filtre multi-sélection : Exclusion d'aliments */}
          <DropdownMulti
            title="Exclure des aliments"
            options={allIngredients}
            selected={excludedIngredients}
            onChange={setExcludedIngredients}
            isOpen={openDropdown === "ingredients"}
            onToggle={() =>
              setOpenDropdown(
                openDropdown === "ingredients" ? null : "ingredients"
              )
            }
          />

          {/* Filtre simple : Tri par prix */}
          <DropdownSimple
            title="Prix"
            selected={priceSort}
            onChange={setPriceSort}
            isOpen={openDropdown === "prix"}
            onToggle={() =>
              setOpenDropdown(openDropdown === "prix" ? null : "prix")
            }
            options={[
              { value: "asc", label: "Moins cher → Plus cher" },
              { value: "desc", label: "Plus cher → Moins cher" },
              { value: "", label: "Aucun tri" },
            ]}
          />

          {/* Bouton de réinitialisation de tous les filtres */}
          <button
            className="btn btn-outline-danger ms-auto"
            onClick={() => {
              setSelectedFlavors([]);
              setExcludedIngredients([]);
              setPriceSort("");
            }}
          >
            Réinitialiser
          </button>
        </div>

        {/* SECTION AFFICHAGE DES MENUS */}
        <div className="row g-4">
          {filteredMenus.map((menu) => {
            // Récupération de l'image correspondante au menu
            const imgSrc =
              images[`../assets/${menu.image}.jpg`] ||
              images[`../assets/${menu.image}.png`] ||
              images[`../assets/${menu.image}.webp`];

            return (
              <div key={menu.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
                {/* Carte de menu */}
                <div className="card shadow-sm h-100 card-hover card-image-hover">
                  {/* Image cliquable du menu */}
                  <Link to={`/menu/${menu.id}`}>
                    <img
                      src={imgSrc}
                      className="card-img-top"
                      alt={menu.nom}
                      style={{ height: "180px", objectFit: "cover" }}
                    />
                  </Link>

                  {/* Corps de la carte avec les informations */}
                  <div className="card-body d-flex flex-column">
                    {/* Nom du menu (cliquable) */}
                    <Link
                      to={`/menu/${menu.id}`}
                      className="text-decoration-none text-dark"
                    >
                      <h5 className="card-title">{menu.nom}</h5>
                    </Link>

                    {/* Nombre de pièces */}
                    <p className="text-muted mb-1">{menu.pieces} pièces</p>

                    {/* Liste des saveurs */}
                    <p className="small">
                      <strong>Saveurs :</strong>{" "}
                      {menu.saveurs
                        .map(
                          (s) => s.charAt(0).toUpperCase() + s.slice(1)
                        )
                        .join(", ")}
                    </p>

                    {/* Liste des aliments */}
                    <p className="small">
                      <strong>Aliments :</strong>{" "}
                      {menu.aliments
                        .map(
                          (a) =>
                            a.nom.charAt(0).toUpperCase() + a.nom.slice(1)
                        )
                        .join(", ")}
                    </p>

                    {/* Prix du menu */}
                    <h5 className="mt-auto fw-bold">
                      {menu.prix.toFixed(2)} €
                    </h5>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
