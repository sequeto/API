const express = require('express');
const mongoose = require('mongoose');
app = express();

const url = 'mongodb+srv://usuario_admin:JrBiEWCWnRtl2iM2@cluster0-ljyuo.mongodb.net/test?retryWrites=true&w=majority'

mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true});

mongoose.connection.on('connected', () => {
    console.log('Conectado');
})


app.get('/',(req, res) => {
    res.send({message: 'Conectado'});
});

app.listen(3000);