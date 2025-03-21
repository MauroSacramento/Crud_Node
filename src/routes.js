const routes = require('express').Router();
const PersonController = require('./controllers/PersonController');


routes.post("/users", PersonController.store);
routes.get("/users", PersonController.index);


module.exports = routes;