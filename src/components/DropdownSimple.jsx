/**
 * DropdownSimple - Composant de dropdown avec sélection simple
 * Permet de choisir une seule option parmi plusieurs (ex: tri par prix)
 * 
 * @param {string} title - Titre affiché sur le bouton
 * @param {array} options - Liste des options disponibles (objets avec value et label)
 * @param {string} selected - Valeur actuellement sélectionnée
 * @param {function} onChange - Fonction appelée lors d'un changement de sélection
 * @param {boolean} isOpen - État d'ouverture du dropdown
 * @param {function} onToggle - Fonction pour ouvrir/fermer le dropdown
 */
export default function DropdownSimple({
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
        <div className="dropdown-menu show">
          {/* Génération d'un bouton pour chaque option */}
          {options.map((opt) => (
            <button
              key={opt.value}
              className="dropdown-item"
              onClick={() => onChange(opt.value)} // Applique la valeur sélectionnée
            >
              {opt.label} {/* Affichage du libellé de l'option */}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
