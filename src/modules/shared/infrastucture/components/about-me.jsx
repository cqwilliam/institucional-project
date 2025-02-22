import React from "react";

const AboutMe = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="flex m-6 h-96 w-4/5 justify-center gap-6">
        <img
          src="fondo.jpeg"
          alt=""
          className="object-cover w-2/4 rounded-md shadow-md shadow-black"
        />
        <div className="text-end pt-6 pr-8">
          <h1 className="font-bold text-3xl mb-4">BIENVENIDOS</h1>
          <p>
            Gracias por ingresar al sitio WEB y conocer más sobre nuestro
            maravilloso colegio. El Pestalozzi fue fundado bajo la dirección de
            Adolf Berger el 9 de septiembre de 1941 en el Club Suizo, junto a un
            grupo de pioneros suizos, quienes en momentos de crisis mundial
            creyeron en la educación suizo-peruana y fundaron la asociación. A
            ellos, ofrezco mi reconocimiento y agradecimiento, ya que durante la
            dura época de la II Guerra Mundial no se dejaron impresionar y, con
            un «ahora sí lo hacemos», tuvieron la visión de comprar el predio en
            el cual se ubica actualmente nuestro colegio, que hoy es un
            tranquilo y organizado oasis en la ciudad de Lima.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
