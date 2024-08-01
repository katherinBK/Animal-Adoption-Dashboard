const mongoose = require('mongoose');

//schema
const PetSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "No se puede dejar en blanco el campo del Nombre"],
        minLength: [3, "Name must be at least 3 characters"],
        unique: true
    },
    type: { 
        type: String,
        required: [true, "No se puede dejar en blanco el campo de la especie"],
        minLength: [3, "La descripcion debe tener all menos 3 leras"]
    },
    description: {
        type: String,
        required: [true, "No se puede dejar en blanco el campo de la descripcion"],
        minLength: [3, "La descripcion debe tener all menos 3 leras"]
    },
    skill1: {
        type: String
    },
    skill2: {
        type: String
    },
    skill3: {
        type: String
    }
}, {timestamps:true})

const Pet = mongoose.model("Pet", PetSchema);

module.exports = Pet;