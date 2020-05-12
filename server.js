const express = require('express');
const mongoose = require('mongoose');
const cors =  require('cors');
app = express();
app.use(express.json());
app.use(cors())

const url = 'mongodb+srv://usuario_admin:JrBiEWCWnRtl2iM2@cluster0-ljyuo.mongodb.net/test?retryWrites=true&w=majority'

mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true});

mongoose.connection.on('connected', () => {
    console.log('Conectado');
})

require('./src/models/user');

app.use('/v1', require('./src/routes'));

app.listen(3000);