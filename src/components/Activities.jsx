import React from 'react'
import Sidebar from './Sidebar'

const Activities = () => {
    return (
        <div>
            <Sidebar />
            <div className="py-12 bg-gray-100">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl font-bold text-blue-800">Galería de Actividades</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                        <img src="/images/activity1.jpg" alt="Actividad 1" className="rounded-lg shadow-md" />
                        <img src="/images/activity2.jpg" alt="Actividad 2" className="rounded-lg shadow-md" />
                        <img src="/images/activity3.jpg" alt="Actividad 3" className="rounded-lg shadow-md" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Activities