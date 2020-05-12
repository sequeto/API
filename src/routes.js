const express = require('express');
const routes = express.Router();

const userController = require('./controllers/userController');

// Rotas
routes.get('/users', userController.list);
routes.post('/users', userController.create);
routes.get('/users/:id', userController.show);
routes.put('/users/:id', userController.update);
routes.delete('/users/:id', userController.delete);

module.exports = routes;