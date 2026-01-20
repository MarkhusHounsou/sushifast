import { createContext, useState, useEffect } from "react";
import data from "../data/boxes.json";

// Création du contexte pour partager les données des menus dans toute l'application
export const MenuContext = createContext();

/**
 * MenuProvider - Composant fournisseur de contexte
 * Charge les données des menus depuis boxes.json et les rend disponibles
 * à tous les composants enfants via le Context API de React
 */
export function MenuProvider({ children }) {
  // État local contenant la liste de tous les menus
  const [menus, setMenus] = useState([]);

  // Chargement des données au montage du composant
  useEffect(() => {
    // Initialisation des menus avec les données du fichier JSON
    setMenus(data);
  }, []);

  // Fourniture des données aux composants enfants
  return (
    <MenuContext.Provider value={{ menus }}>
      {children}
    </MenuContext.Provider>
  );
}
