import React from 'react'
import { Link } from 'react-router-dom'; // Importamos Link de React Router


const Sidebar = () => {
    return (
        <div>
            <head className='flex justify-between items-center px-8 bg-slate-950'>
                <div>
                    <img src="/pedro.png" alt="Imagen de Pedro" className='w-28 rounded-full' />
                </div>
                <nav>
                    <ul className='flex gap-3 text-white'>
                        <li><Link to="/">Inicio</Link></li>
                        <li><Link to="/about">Acerca de</Link></li>
                        <li><Link to="/mission">Misión y Visión</Link></li>
                        <li><Link to="/programs">Programas Académicos</Link></li>
                        <li><Link to="/activities">Actividades Curriculares</Link></li>
                        <li><Link to="/contact">Contacto</Link></li>
                        <li><Link to="/news">Noticias y Eventos</Link></li>
                    </ul>
                </nav>
            </head>
        </div>
    )
}

export default Sidebar