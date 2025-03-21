const routes = require('express').Router();
const PersonController = require('./controllers/PersonController');


routes.post("/auth/register", PersonController.store);
routes.get("/users", PersonController.index);


module.exports = routes;