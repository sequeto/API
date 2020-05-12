// Criando modelo de usuário para banco de dados 

const mongoose = require('mongoose');

const user = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required:true
    },

    created: {
        type: Date,
        default: Date.now
    }
})

mongoose.model('user', user);