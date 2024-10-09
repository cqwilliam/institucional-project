import React from 'react'
import Sidebar from './Sidebar'

const Mission = () => {
    return (
        <div>
            <Sidebar />
            <div className="py-12 bg-gray-100">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl font-bold text-blue-800">Nuestra Misión</h2>
                    <p className="mt-4 text-lg text-gray-700">Brindar educación integral y disciplinada para formar ciudadanos responsables, líderes y con un fuerte sentido de pertenencia a su comunidad.</p>

                    <h2 className="text-3xl font-bold text-blue-800 mt-12">Nuestra Visión</h2>
                    <p className="mt-4 text-lg text-gray-700">Ser el colegio líder en formación pre-militarizada, con un compromiso hacia la excelencia académica, deportiva y cívica.</p>
                </div>
            </div>
        </div>
    )
}

export default Mission