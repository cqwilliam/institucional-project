// Footer.js
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 py-12">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Descripción */}
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d961.1588485085961!2d-70.1249528304924!3d-15.504032006763962!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9167f37c75abf47b%3A0x5b48767441ca017f!2sInstitucion%20Educativa%20Privada%20Pedro%20Paulet!5e0!3m2!1ses!2spe!4v1731417179489!5m2!1ses!2spe"
              className="w-4/5 border-none bounded-md  h-4/5"
              loading="lazy"
            ></iframe>
          </div>

          {/* Enlaces de navegación */}
          <div>
            <h3 className="text-white text-lg font-medium mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-gray-200">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-200">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-200">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-200">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-200">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-lg font-medium mb-4">Information</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-gray-200">
                  Clients
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-200">
                  Team
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-200">
                  Career
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-200">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-200">
                  Journal
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Línea divisoria */}
        <div className="border-t border-gray-700 my-8"></div>

        {/* Redes sociales y botón */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © 2019-2020 Todos los derechos reservados
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-gray-200">
              Instagram
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-200">
              Twitter
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-200">
              Facebook
            </a>
          </div>
          <button className="mt-4 md:mt-0 bg-pink-500 text-white py-2 px-6 rounded-full hover:bg-pink-600">
            Contact Us
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
