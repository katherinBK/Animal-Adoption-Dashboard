import React, { useState, useEffect } from 'react'
import { useParams, Link, useHistory } from 'react-router-dom'
import axios from 'axios'

const ShowOne = (props) => {

    const { id } = useParams();
    const [pet, setPet] = useState({});
    const history = useHistory();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/pets/${id}`)
            .then(res => {
                setPet(res.data.pet)
                console.log("pet: " + res.data.pet)
            })
            .catch(err => console.log(err))
    }, [])

    const deletePet = (deleteId) => {
        axios.delete(`http://localhost:8000/api/pets/delete/${deleteId}`)
        .then(res => {
          console.log(res.data)
        })
        .catch(err => console.log(err))
        history.push('/')
    }

    return (
        <div>
            <div>
                <h1>Refugio de Animales</h1>
                <Link to={'/'}>Back to home</Link>
            </div>
            <div>
                
            <h1>Details about: {pet.name}</h1>
            <button onClick={() => {deletePet(pet._id)}}>Adoptar a {pet.name}</button>
            </div>
            <div>
                <ul style={{listStyle:'none'}}>
                    <li>Especie: {pet.type}</li>
                    <li>Descripcionn: {pet.description}</li>
                    <li>Habilidades:
                        <ul>
                            <li>{pet.skill1}</li>
                            <li>{pet.skill2}</li>
                            <li>{pet.skill3}</li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default ShowOne