import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Main = () => {
    const [allPets, setAllPets] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/pets')
            .then(res => {
                console.log(res.data.pets);
                setAllPets(res.data.pets);
            })
            .catch(err => console.log(err));
    }, []);

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center py-6">
            <div className="w-full max-w-5xl bg-white shadow-md rounded-lg p-6">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-2xl font-bold text-gray-800">Refugio de Animales</h1>
                    <Link to="/pets/create" className="text-blue-500 hover:text-blue-700">Agregar</Link>
                </div>
                <div>
                    <h3 className="text-lg font-semibold text-gray-700 mb-4">Animales disponibles</h3>
                    <div className="overflow-x-auto">
                        <table className="min-w-full bg-white">
                            <thead>
                                <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                                    <th className="py-3 px-6 text-left">Nombre</th>
                                    <th className="py-3 px-6 text-left">Especie</th>
                                    <th className="py-3 px-6 text-left">Descripción</th>
                                    <th className="py-3 px-6 text-center">Acciones</th>
                                </tr>
                            </thead>
                            <tbody className="text-gray-600 text-sm font-light">
                                {allPets.map((pet, i) => (
                                    <tr key={i} className="border-b border-gray-200 hover:bg-gray-100">
                                        <td className="py-3 px-6 text-left whitespace-nowrap">{pet.name}</td>
                                        <td className="py-3 px-6 text-left">{pet.type}</td>
                                        <td className="py-3 px-6 text-left">
                                            <Link to={`/pets/${pet._id}`} className="text-blue-500 hover:text-blue-700">Detalles</Link> | 
                                            <Link to={`/pets/${pet._id}/edit`} className="text-blue-500 hover:text-blue-700"> Editar</Link>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;

