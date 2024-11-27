// Header.js
import React, { useState } from "react";
import MenuButton from "./MenuButton";
import NavMenu from "./NavMenu";
import "./header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <aside className="fixed top-0 py-1 w-full bg-slate-600 z-50">
      <div className=" flex justify-between items-center px-3">
        <img src="./logo.png" alt="Logo" className="w-20 sm:w-28" />

        {/* Botón de menú para móvil */}
        <MenuButton toggleMenu={toggleMenu} />

        {/* Menú de navegación */}
        <nav
          className={`fixed top-0 left-0 h-full w-3/4 bg-slate-600 opacity-90 transition-transform duration-500 mt-20 
  ${isMenuOpen ? "translate-x-0" : "-translate-x-full"} 
  sm:static sm:flex sm:translate-x-0 sm:bg-transparent sm:w-auto sm:mt-0`}
        >
          <NavMenu isMenuOpen={isMenuOpen} />
        </nav>
      </div>
    </aside>
  );
};

export default Header;
