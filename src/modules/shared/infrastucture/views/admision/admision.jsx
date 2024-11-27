import React from "react";
import Footer from "../../components/footer";
import Header from "../../components/Header/header";
import Wallpaper from "../../components/wallpaper";

const Admision = () => {
  return (
    <div className="overflow-hidden">
      <Header />
      <Wallpaper subtitle={"ADMISION"} showButton={false} />
      <h1 className="mb-6 text-center text-2xl font-semibold text-gray-700">
        Requisitos para la Inscripción
      </h1>
      <div className="w-screen mt-10 flex">
        <img src="admisiones.png" alt="" className="object-cover" />

        <ul className="space-y-3 text-start ml-10">
          <li className="flex items-center gap-3">
            <img src="icons/list-verify.png" alt="" className="w-6" />
            <span className="text-gray-700">DNI Original y Copia</span>
          </li>

          <li className="flex items-center gap-3">
            <img src="icons/list-verify.png" alt="" className="w-6" />
            <span className="text-gray-700">DNI padres de familia</span>
          </li>

          <li className="flex items-center gap-3">
            <img src="icons/list-verify.png" alt="" className="w-6" />
            <span className="text-gray-700">Copia de Acta de Nacimiento</span>
          </li>
          <li className="flex items-center gap-3">
            <img src="icons/list-verify.png" alt="" className="w-6" />

            <span className="text-gray-700">Certificado de Estudios</span>
          </li>
          <li className="flex items-center gap-3">
            <img src="icons/list-verify.png" alt="" className="w-6" />
            <span className="text-gray-700">Pago de Inscripción</span>
          </li>

          <li className="flex items-center gap-3">
            <img src="icons/list-verify.png" alt="" className="w-6" />
            <span className="text-gray-700">Pago de Inscripción</span>
          </li>

          <li className="flex items-center gap-3">
            <img src="icons/list-verify.png" alt="" className="w-6" />
            <span className="text-gray-700">Pago de Inscripción</span>
          </li>

          <li className="flex items-center gap-3">
            <img src="icons/list-verify.png" alt="" className="w-6" />
            <span className="text-gray-700">Pago de Inscripción</span>
          </li>
        </ul>
      </div>
      <Footer />
    </div>
  );
};

export default Admision;
