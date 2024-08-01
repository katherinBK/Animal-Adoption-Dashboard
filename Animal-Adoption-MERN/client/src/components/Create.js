import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';

const Create = (props) => {
    const history = useHistory();

    const [petName, setPetName] = useState("");
    const [petType, setPetType] = useState("");
    const [petDesc, setPetDesc] = useState("");
    const [skill1, setSkill1] = useState("");
    const [skill2, setSkill2] = useState("");
    const [skill3, setSkill3] = useState("");

    const [errors, setErrors] = useState([]);

    const addPet = (e) => {
        e.preventDefault();
        const petData = {
            name: petName, type: petType, description: petDesc, skill1, skill2, skill3
        }
        axios.post('http://localhost:8000/api/pets/new', petData)
            .then(res => {
                console.log(res.data)
                history.push('/')
            })
            .catch(err => {
                console.log(err.response.data)
                const errorResponse = err.response.data.errors;
                const errorArr = [];
                for (const key of Object.keys(errorResponse)) {
                    errorArr.push(errorResponse[key].message)
                }
                setErrors(errorArr);
            })
    }

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center py-6">
            <div className="w-full max-w-3xl bg-white shadow-md rounded-lg p-6">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-2xl font-bold text-gray-800">Refugio de Animales</h1>
                    <Link to={'/'} className="text-blue-500 hover:text-blue-700">Inicio</Link>
                </div>
                <form onSubmit={addPet} className="space-y-6">
                    {errors.map((err, index) => <p key={index} className="text-red-500">{err}</p>)}
                    <div>
                        <label className="block text-gray-700">Nombre del Animal:</label>
                        <input type="text" onChange={(e) => { setPetName(e.target.value) }} value={petName} className="mt-1 p-2 w-full border rounded-md" />
                    </div>
                    <div>
                        <label className="block text-gray-700">Especie:</label>
                        <input type="text" onChange={(e) => { setPetType(e.target.value) }} value={petType} className="mt-1 p-2 w-full border rounded-md" />
                    </div>
                    <div>
                        <label className="block text-gray-700">Descripción:</label>
                        <input type="text" onChange={(e) => { setPetDesc(e.target.value) }} value={petDesc} className="mt-1 p-2 w-full border rounded-md" />
                    </div>
                    <div>
                        <p className="text-gray-700">Habilidades (opcional):</p>
                        <div>
                            <label className="block text-gray-700">Habilidad 1:</label>
                            <input type="text" onChange={(e) => { setSkill1(e.target.value) }} value={skill1} className="mt-1 p-2 w-full border rounded-md" />
                        </div>
                        <div>
                            <label className="block text-gray-700">Habilidad 2:</label>
                            <input type="text" onChange={(e) => { setSkill2(e.target.value) }} value={skill2} className="mt-1 p-2 w-full border rounded-md" />
                        </div>
                        <div>
                            <label className="block text-gray-700">Habilidad 3:</label>
                            <input type="text" onChange={(e) => { setSkill3(e.target.value) }} value={skill3} className="mt-1 p-2 w-full border rounded-md" />
                        </div>
                    </div>
                    <input type="submit" value="Agregar Animal" className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700" />
                </form>
            </div>
        </div>
    )
}

export default Create;
