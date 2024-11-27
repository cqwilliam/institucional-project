import React from "react";

const Header = () => {
  return (
    <header className="head">
      <div>
        <div className="bg-overlay flex items-start">
          <nav className="flex justify-between items-center p-4 absolute top-0 left-0 w-full text-white">
            <img src="./logo.png" alt="Logo" className="w-40" />
            <ul className="flex gap-6 justify-between items-center text-2xl">
              <li>
                <a href="" className="headText">
                  Inicio
                </a>
              </li>
              <li>
                <a href="" className="headText">
                  Admision
                </a>
              </li>
              <li>
                <a href="" className="headText">
                  Conócenos
                </a>
              </li>
              <li>
                <a href="" className="headText">
                  Galería
                </a>
              </li>
              <li>
                <a href="" className="headText">
                  Contáctenos
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
