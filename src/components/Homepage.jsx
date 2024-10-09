import React from 'react';
import Sidebar from './Sidebar';

const Homepage = () => {
  return (
    <div className=''>
      <Sidebar />
      
      <body className='text-center'>
        <div className='max-w-2xl mx-auto'>
          <div>
            <h1>BIENVENIDO</h1>
            <p>"¡Bienvenido a pedro paulet! Nos alegra que estés aquí. Nuestro compromiso es brindarte una educación 
              integral y un entorno seguro donde cada estudiante puede desarrollarse plenamente. ¡Explora y descubre todo lo que ofrecemos!"</p>
          </div>
          <div>
            <h1>QUIENES SOMOS</h1>
            <p>En pedro paulet, nos dedicamos a la formación integral de nuestros estudiantes,
              combinando la disciplina y los valores de la educación pre militarizada con un sólido enfoque académico.
              Fundada en el año 2000, nuestra misión es desarrollar líderes responsables y comprometidos,
              con un fuerte sentido de pertenencia.
              Nuestro equipo de profesionales altamente capacitados fomenta un ambiente de respeto y colaboración,
              promoviendo el crecimiento tanto académico como personal. Valoramos el trabajo en equipo, la responsabilidad
              y el liderazgo, preparando a nuestros estudiantes para afrontar los retos del futuro con confianza y ética.</p>
          </div>
        </div>

        <div><h1>NOTICIAS Y EVENTOS</h1></div>
        <div><h1>MISION VISION</h1></div>
        <div><h1>UBICACION</h1></div>
        <div><h1>CONTACTO</h1></div>
      </body>
      <footer>
      </footer>
    </div>
  );
}

export default Homepage;
