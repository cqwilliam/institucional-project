import React from 'react'
import Sidebar from './Sidebar'

const Contact = () => {
    return (
        <div>
            <Sidebar />
            <div className="py-12 bg-gray-200">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl font-bold text-blue-800">Contacto</h2>
                    <p className="mt-4 text-lg text-gray-700">Dirección: Calle Ficticia 123, Ciudad, País</p>
                    <p className="mt-2 text-lg text-gray-700">Teléfono: (123) 456-7890</p>
                    <p className="mt-2 text-lg text-gray-700">Email: contacto@colegiopedropaulet.edu</p>

                    <div className="mt-8">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d825.318219138085!2d-70.12457800937284!3d-15.504107293525614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9167f37c75abf47b%3A0x5b48767441ca017f!2sInstitucion%20Educativa%20Privada%20Pedro%20Paulet!5e0!3m2!1ses!2spe!4v1728487113068!5m2!1ses!2spe" width="100%" height="450" ></iframe>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact