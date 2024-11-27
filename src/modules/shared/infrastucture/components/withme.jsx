import React from "react";

const Withme = () => {
  return (
    <div className="mt-10 mx-auto max-w-7xl">
      <h1 className="text-4xl font-bold text-center mb-8">Nuestra Misión y Visión</h1>
      <div className="flex flex-col sm:flex-row p-6 rounded-lg shadow-lg text-center gap-6">
        <div className="flex-1 p-4">
          <h2 className="text-2xl font-semibold mb-2">MISIÓN</h2>
          <p className="text-base leading-relaxed">
            Somos un colegio misionero de la Congregación de los Padres de la Preciosa Sangre, que brindamos una formación integral a los estudiantes, promoviendo el desarrollo de competencias, inspirados en la vivencia de los valores de la Sangre de Cristo, que les permitan desenvolverse moral y éticamente para construir un mundo más justo y fraterno.
          </p>
        </div>
        <div className="flex-1 p-4">
          <h2 className="text-2xl font-semibold mb-2">VISIÓN</h2>
          <p className="text-base leading-relaxed">
            Ser reconocidos como una Institución Educativa que forma líderes misioneros, creativos y críticos, tomando en cuenta el carisma y los valores institucionales, contando con un equipo de educadores comprometidos con la mejora continua, además de una infraestructura y tecnología de avanzada, que fortalecen la calidad educativa y el logro de certificaciones nacionales e internacionales.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Withme;