import React from 'react'
import Sidebar from './Sidebar'

const Programs = () => {
    return (
        <div>
            <Sidebar />
            <div className="py-12">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl font-bold text-blue-800">Programas Académicos</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-bold text-blue-700">Educación Académica</h3>
                            <p className="mt-4 text-gray-600">Formamos estudiantes en ciencias, matemáticas, lenguas y más, con un enfoque integral que promueve el liderazgo y la responsabilidad.</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-bold text-blue-700">Entrenamiento Físico</h3>
                            <p className="mt-4 text-gray-600">Desarrollamos habilidades físicas y mentales para fortalecer el cuerpo y la mente, mediante actividades deportivas y ejercicios de resistencia.</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-bold text-blue-700">Liderazgo y Valores</h3>
                            <p className="mt-4 text-gray-600">Promovemos el respeto, la disciplina y el trabajo en equipo para formar líderes con un fuerte sentido de responsabilidad y compromiso.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Programs