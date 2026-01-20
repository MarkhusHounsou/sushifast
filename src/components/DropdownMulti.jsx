import { useState } from "react";

/**
 * DropdownMulti - Composant de dropdown avec sélection multiple
 * Permet de cocher/décocher plusieurs options (ex: saveurs, aliments à exclure)
 * 
 * @param {string} title - Titre affiché sur le bouton
 * @param {array} options - Liste des options disponibles
 * @param {array} selected - Liste des options actuellement sélectionnées
 * @param {function} onChange - Fonction appelée lors d'un changement de sélection
 * @param {boolean} isOpen - État d'ouverture du dropdown
 * @param {function} onToggle - Fonction pour ouvrir/fermer le dropdown
 */
export default function DropdownMulti({
  title,
  options,
  selected,
  onChange,
  isOpen,
  onToggle,
}) {
  return (
    <div
      className="dropdown me-3"
      onClick={(e) => e.stopPropagation()} // Empêche la propagation du clic
    >
      {/* Bouton d'ouverture du dropdown */}
      <button
        className="btn btn-outline-secondary dropdown-toggle"
        onClick={onToggle}
      >
        {title}
      </button>

      {/* Menu déroulant (affiché uniquement si isOpen est true) */}
      {isOpen && (
        <div className="dropdown-menu show p-3">
          {/* Génération d'une checkbox pour chaque option */}
          {options.map((opt) => (
            <div key={opt} className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                checked={selected.includes(opt)} // Coché si l'option est dans la liste selected
                onChange={() => {
                  // Si l'option est déjà sélectionnée, la retirer
                  if (selected.includes(opt)) {
                    onChange(selected.filter((s) => s !== opt));
                  } else {
                    // Sinon, l'ajouter à la liste
                    onChange([...selected, opt]);
                  }
                }}
              />
              <label className="form-check-label">
                {/* Affichage de l'option avec première lettre en majuscule */}
                {opt.charAt(0).toUpperCase() + opt.slice(1)}
              </label>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
