const express = require('express');
const mongoose = require('mongoose');
const cors =  require('cors');
app = express();
app.use(express.json());
app.use(cors())

const url = // Url para conexão com MongoDB (Banco Excluído).

mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true});

mongoose.connection.on('connected', () => {
    console.log('Conectado');
})

require('./src/models/user');

// Rota
app.use('/v1', require('./src/routes'));

app.listen(3000);