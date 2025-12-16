import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import MenuDetails from "./pages/MenuDetails";
import Saveurs from "./pages/Saveurs";
import FiltreSaveurs from "./pages/FiltreSaveurs";
import Aliments from "./pages/Aliments";
import Exclusion from "./pages/Exclusion";
import PrixTotal from "./pages/PrixTotal";
import Extremes from "./pages/Extremes";
import { MenuProvider } from "./context/MenuProvider";


function App() {
  return (
    <>
    <MenuProvider>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu/:id" element={<MenuDetails />} />
        <Route path="/saveurs" element={<Saveurs />} />
        <Route path="/filtre-saveurs" element={<FiltreSaveurs />} />
        <Route path="/aliments/:id" element={<Aliments />} />
        <Route path="/exclusion" element={<Exclusion />} />
        <Route path="/prix-total" element={<PrixTotal />} />
        <Route path="/extremes" element={<Extremes />} />
      </Routes>

      <Footer />   
      </MenuProvider>
    </>
  );
}

export default App;
