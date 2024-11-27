import React from 'react';
import { useNavigate } from 'react-router-dom';

const Wallpaper = ({ title, subtitle, years, showButton = true, onlyTitle = false }) => {
  const navigate = useNavigate();

  return (
    <div className="relative rounded-ee-[60px] overflow-hidden w-screen h-screen">
      <img
        src="fondos.jpeg"
        alt="Descripción de la imagen"
        className="object-cover w-full h-full pointer-events-none"
      />

      {/* Capa de opacidad sobre la imagen */}
      <div className="absolute inset-0 bg-stone-900 opacity-80"></div>

      {/* Texto con fondo oscuro y opacidad adicional */}
      <div className="absolute inset-0 flex items-center sm:ml-32 sm:justify-start justify-center">
        <div className="text-white p-4 rounded-lg grid text-center sm:text-start gap-2">
          {title && (
            <h1 className="sm:text-[30px] text-[30px] text-amber-300">
              {title}
            </h1>
          )}
          
          {/* Renderizado condicional según onlyTitle */}
          {!onlyTitle && (
            <>
              {subtitle && (
                <h1 className="sm:text-[60px] text-[45px] font-bold">
                  {subtitle}
                </h1>
              )}
              {years && (
                <p className="sm:text-[30px] text-[30px] text-amber-300">
                  {years}
                </p>
              )}
              {showButton && (
                <div className="relative">
                  <button
                    onClick={() => navigate("/admision")}
                    className="bg-amber-300 text-xs sm:text-2xl p-2 rounded-md font-bold sm:font-normal"
                    style={{ position: "relative", zIndex: 1 }}
                  >
                    ADMISION 2025
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Wallpaper;
