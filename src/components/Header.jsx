import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
      <div className="container">
        <Link className="navbar-brand" to="/">Sushifast</Link>

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><Link className="nav-link" to="/">Menus</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/extremes">Menus extrêmes</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
