import { useContext } from "react";
import { MenuContext } from "../context/MenuProvider";
import { Link } from "react-router-dom";
import "../styles/Home.css";

// Importation dynamique des images depuis le dossier assets
const images = import.meta.glob("../assets/*.{jpg,jpeg,png,webp}", {
  eager: true,
  import: "default",
});

/**
 * Extremes - Page des menus extrêmes
 * Affiche uniquement les menus ayant strictement moins de 13 pièces
 * Calcule et affiche le prix total de tous ces menus
 */
export default function Extremes() {
  // Récupération des données des menus depuis le contexte
  const { menus } = useContext(MenuContext);

  // Filtrage : ne garder que les menus avec moins de 13 pièces
  const extremeMenus = menus.filter((menu) => menu.pieces < 13);

  // Calcul du prix total de tous les menus extrêmes
  const totalPrice = extremeMenus.reduce((acc, menu) => acc + menu.prix, 0);

  return (
    <div className="container py-5">
      {/* Titre de la page */}
      <h1 className="text-center mb-5">Menu Extrêmes (&lt; 13 pièces)</h1>

      {/* Affichage du prix total dans un encart informatif */}
      <div className="alert alert-info text-center mb-5">
        <h4>Prix Total de ces menus : <span className="fw-bold">{totalPrice.toFixed(2)} €</span></h4>
      </div>

      {/* Grille d'affichage des menus extrêmes */}
      <div className="row g-4">
        {extremeMenus.map((menu) => {
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
                      .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
                      .join(", ")}
                  </p>

                  {/* Liste des aliments */}
                  <p className="small">
                    <strong>Aliments :</strong>{" "}
                    {menu.aliments
                      .map((a) => a.nom.charAt(0).toUpperCase() + a.nom.slice(1))
                      .join(", ")}
                  </p>

                  {/* Prix du menu */}
                  <h5 className="mt-auto fw-bold">{menu.prix.toFixed(2)} €</h5>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
