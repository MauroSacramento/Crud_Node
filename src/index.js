require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const app = express()

// Import controllers
const PersonController = require('./controllers/PersonController');

app.use(express.json())

// conexão com o banco de dados
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = encodeURIComponent(process.env.DB_PASSWORD);

mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.tsfby.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`)
.then( () => {
    console.log("Database connected");
})
.catch( (err) => console.log(err));

// Routes
app.use("/api", routes)



app.listen(3333, ()=> {
    console.log("Servidor rodando na porta 3333");
})