import { createContext, useState, useEffect } from "react";
import data from "../data/boxes.json";

export const MenuContext = createContext();

export function MenuProvider({ children }) {
  const [menus, setMenus] = useState([]);

  useEffect(() => {
    setMenus(data);
  }, []);

  return (
    <MenuContext.Provider value={{ menus }}>
      {children}
    </MenuContext.Provider>
  );
}
