import { useContext, useState } from "react";
import { MenuContext } from "../context/MenuProvider";
import { Link } from "react-router-dom";
import "../styles/Home.css";
import DropdownMulti from "../components/DropdownMulti";
import DropdownSimple from "../components/DropdownSimple";

const images = import.meta.glob("../assets/*.{jpg,jpeg,png,webp}", {
  eager: true,
  import: "default",
});

export default function Home() {
  const { menus } = useContext(MenuContext);

  // Dropdown ouvert
  const [openDropdown, setOpenDropdown] = useState(null);

  // Filtres
  const [selectedFlavors, setSelectedFlavors] = useState([]);
  const [excludedIngredients, setExcludedIngredients] = useState([]);
  const [priceSort, setPriceSort] = useState("");

  // Saveurs uniques
  const allSaveurs = [...new Set(menus.flatMap((m) => m.saveurs))].sort();

  // Ingrédients uniques
  const allIngredients = [
    ...new Set(menus.flatMap((m) => m.aliments.map((a) => a.nom))),
  ].sort();

  // Filtrage
  let filteredMenus = menus;

  if (selectedFlavors.length > 0) {
    filteredMenus = filteredMenus.filter((menu) =>
      selectedFlavors.every((s) => menu.saveurs.includes(s))
    );
  }

  if (excludedIngredients.length > 0) {
    filteredMenus = filteredMenus.filter(
      (menu) =>
        !menu.aliments.some((a) => excludedIngredients.includes(a.nom))
    );
  }

  if (priceSort === "asc") {
    filteredMenus = [...filteredMenus].sort((a, b) => a.prix - b.prix);
  } else if (priceSort === "desc") {
    filteredMenus = [...filteredMenus].sort((a, b) => b.prix - a.prix);
  }

  return (
    <div onClick={() => setOpenDropdown(null)}>
      <div className="container py-5">
        <h1 className="text-center mb-5">Nos Box Sushi</h1>

        {/* FILTRES */}
        <div
          className="d-flex flex-wrap align-items-center mb-4 gap-3"
          onClick={(e) => e.stopPropagation()}
        >
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

        {/* MENUS */}
        <div className="row g-4">
          {filteredMenus.map((menu) => {
            const imgSrc =
              images[`../assets/${menu.image}.jpg`] ||
              images[`../assets/${menu.image}.png`] ||
              images[`../assets/${menu.image}.webp`];

            return (
              <div key={menu.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
                <div className="card shadow-sm h-100 card-hover card-image-hover">
                  <Link to={`/menu/${menu.id}`}>
                    <img
                      src={imgSrc}
                      className="card-img-top"
                      alt={menu.nom}
                      style={{ height: "180px", objectFit: "cover" }}
                    />
                  </Link>

                  <div className="card-body d-flex flex-column">
                    <Link
                      to={`/menu/${menu.id}`}
                      className="text-decoration-none text-dark"
                    >
                      <h5 className="card-title">{menu.nom}</h5>
                    </Link>

                    <p className="text-muted mb-1">{menu.pieces} pièces</p>

                    <p className="small">
                      <strong>Saveurs :</strong>{" "}
                      {menu.saveurs
                        .map(
                          (s) => s.charAt(0).toUpperCase() + s.slice(1)
                        )
                        .join(", ")}
                    </p>

                    <p className="small">
                      <strong>Aliments :</strong>{" "}
                      {menu.aliments
                        .map(
                          (a) =>
                            a.nom.charAt(0).toUpperCase() + a.nom.slice(1)
                        )
                        .join(", ")}
                    </p>

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
