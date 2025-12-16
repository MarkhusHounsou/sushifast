import { useContext } from "react";
import { useParams } from "react-router-dom";
import { MenuContext } from "../context/MenuProvider";
import "../styles/MenuDetails.css";

const images = import.meta.glob("../assets/*.{jpg,jpeg,png,webp}", {
  eager: true,
  import: "default",
});

export default function MenuDetails() {
  const { menus } = useContext(MenuContext);
  const { id } = useParams(); // Récupère l'id dans l'URL
  const menu = menus.find((m) => m.id === parseInt(id));

  if (!menu) return <p className="text-center mt-5">Menu introuvable</p>;

  const imgSrc =
    images[`../assets/${menu.image}.jpg`] ||
    images[`../assets/${menu.image}.png`] ||
    images[`../assets/${menu.image}.webp`];

  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-md-6 mb-4">
          <img
            src={imgSrc}
            alt={menu.nom}
            className="img-fluid rounded shadow-sm menu-image-hover"
            style ={{ height: "350px", objectFit: "cover" }}
          />
        </div>
        <div className="col-md-6">
          <h1>{menu.nom}</h1>
          <p className="text-muted">{menu.pieces} pièces</p>
          <h3 className="fw-bold">{menu.prix.toFixed(2)} €</h3>
          <button className="btn btn-secondary">Commander</button>

          <h5 className="mt-4">Aliments :</h5>
          <ul className="list-group mb-3">
            {menu.aliments.map((aliment, idx) => (
              <li key={idx} className="list-group-item d-flex justify-content-between align-items-center">
                {aliment.nom}
                <span className="badge bg-secondary rounded-pill">{aliment.quantite}</span>
              </li>
            ))}
          </ul>

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
