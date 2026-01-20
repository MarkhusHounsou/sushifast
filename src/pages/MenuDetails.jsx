import { useContext } from "react";
import { useParams } from "react-router-dom";
import { MenuContext } from "../context/MenuProvider";
import "../styles/MenuDetails.css";

// Importation dynamique des images depuis le dossier assets
const images = import.meta.glob("../assets/*.{jpg,jpeg,png,webp}", {
  eager: true,
  import: "default",
});

/**
 * MenuDetails - Page de détails d'un menu spécifique
 * Affiche toutes les informations détaillées d'un menu :
 * - Image, nom, nombre de pièces, prix
 * - Liste complète des aliments avec leurs quantités
 * - Liste des saveurs
 */
export default function MenuDetails() {
  // Récupération des données des menus depuis le contexte
  const { menus } = useContext(MenuContext);

  // Récupération de l'ID du menu depuis l'URL (paramètre dynamique)
  const { id } = useParams();

  // Recherche du menu correspondant à l'ID
  const menu = menus.find((m) => m.id === parseInt(id));

  // Si le menu n'existe pas, afficher un message d'erreur
  if (!menu) return <p className="text-center mt-5">Menu introuvable</p>;

  // Récupération de l'image correspondante au menu
  const imgSrc =
    images[`../assets/${menu.image}.jpg`] ||
    images[`../assets/${menu.image}.png`] ||
    images[`../assets/${menu.image}.webp`];

  return (
    <div className="container py-5">
      <div className="row">
        {/* Colonne gauche : Image du menu */}
        <div className="col-md-6 mb-4">
          <img
            src={imgSrc}
            alt={menu.nom}
            className="img-fluid rounded shadow-sm menu-image-hover"
            style={{ height: "350px", objectFit: "cover" }}
          />
        </div>

        {/* Colonne droite : Informations détaillées */}
        <div className="col-md-6">
          {/* Nom du menu */}
          <h1>{menu.nom}</h1>

          {/* Nombre de pièces */}
          <p className="text-muted">{menu.pieces} pièces</p>

          {/* Prix */}
          <h3 className="fw-bold">{menu.prix.toFixed(2)} €</h3>

          {/* Bouton de commande (non fonctionnel dans cette version) */}
          <button className="btn btn-secondary">Commander</button>

          {/* Section : Liste des aliments */}
          <h5 className="mt-4">Aliments :</h5>
          <ul className="list-group mb-3">
            {menu.aliments.map((aliment, idx) => (
              <li key={idx} className="list-group-item d-flex justify-content-between align-items-center">
                {/* Nom de l'aliment */}
                {aliment.nom}
                {/* Quantité de l'aliment (badge) */}
                <span className="badge bg-secondary rounded-pill">{aliment.quantite}</span>
              </li>
            ))}
          </ul>

          {/* Section : Liste des saveurs */}
          <h5>Saveurs :</h5>
          <p>
            {menu.saveurs
              .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
              .join(", ")}
          </p>
        </div>
      </div>
    </div>
  );
}
