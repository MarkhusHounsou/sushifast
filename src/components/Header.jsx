import { Link } from "react-router-dom";

/**
 * Header - Composant de navigation principal
 * Affiche la barre de navigation avec les liens vers les différentes pages
 */
export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
      <div className="container">
        {/* Logo/Nom du site - Lien vers la page d'accueil */}
        <Link className="navbar-brand" to="/">Sushifast</Link>

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto">
            {/* Lien vers la liste complète des menus */}
            <li className="nav-item"><Link className="nav-link" to="/">Menus</Link></li>

            {/* Lien vers la page des menus extrêmes (< 13 pièces) */}
            <li className="nav-item"><Link className="nav-link" to="/extremes">Menus extrêmes</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
