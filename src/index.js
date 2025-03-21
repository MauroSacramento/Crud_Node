const express = require('express');
const app = express();
const mongoose = require('mongoose')

// Import controllers
const PersonController = require('./controllers/PersonController');

app.use(express.json())

app.post("/users", PersonController.store)

mongoose.connect("mongodb+srv://maurosacramento35:Kx1O4ClzXoGFwHav@cluster0.tsfby.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then( () => {
    console.log("Database connected");
})
.catch( (err) => console.log(err));

app.listen(3333, ()=> {
    console.log("Servidor rodando na porta 3333");
})