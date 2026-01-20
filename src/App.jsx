// Importation des composants de routage React Router
import { Routes, Route } from "react-router-dom";

// Importation des composants de layout (Header et Footer)
import Header from "./components/Header";
import Footer from "./components/Footer";

// Importation des pages de l'application
import Home from "./pages/Home";
import MenuDetails from "./pages/MenuDetails";
import Saveurs from "./pages/Saveurs";
import FiltreSaveurs from "./pages/FiltreSaveurs";
import Aliments from "./pages/Aliments";
import Exclusion from "./pages/Exclusion";
import PrixTotal from "./pages/PrixTotal";
import Extremes from "./pages/Extremes";

// Importation du contexte pour partager les données des menus
import { MenuProvider } from "./context/MenuProvider";

/**
 * Composant principal de l'application SushiFast
 * Gère la structure globale et le routage de toutes les pages
 */
function App() {
  return (
    <>
      {/* MenuProvider enveloppe toute l'application pour partager les données des menus */}
      <MenuProvider>
        {/* Header affiché sur toutes les pages */}
        <Header />

        {/* Configuration des routes de l'application */}
        <Routes>
          {/* Page d'accueil : liste de tous les menus */}
          <Route path="/" element={<Home />} />

          {/* Page de détails d'un menu spécifique (avec ID dynamique) */}
          <Route path="/menu/:id" element={<MenuDetails />} />

          {/* Page affichant les saveurs */}
          <Route path="/saveurs" element={<Saveurs />} />

          {/* Page de filtrage par saveurs (avocat/coriandre) */}
          <Route path="/filtre-saveurs" element={<FiltreSaveurs />} />

          {/* Page listant les aliments d'un menu */}
          <Route path="/aliments/:id" element={<Aliments />} />

          {/* Page d'exclusion d'aliments */}
          <Route path="/exclusion" element={<Exclusion />} />

          {/* Page affichant le prix total */}
          <Route path="/prix-total" element={<PrixTotal />} />

          {/* Page des menus extrêmes (< 13 pièces) */}
          <Route path="/extremes" element={<Extremes />} />
        </Routes>

        {/* Footer affiché sur toutes les pages */}
        <Footer />
      </MenuProvider>
    </>
  );
}

export default App;
