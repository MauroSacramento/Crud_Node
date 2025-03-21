const express = require('express');
const app = express();

app.use(express.json())

app.get("/test", (req, res) => {
    return res.send("Hello, I got here")
})

app.listen(3333, ()=> {
    console.log("Servidor rodando na porta 3333");
})