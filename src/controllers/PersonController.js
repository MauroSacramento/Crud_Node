const Person = require('../models/Person');

module.exports = {
    async store(req, res) {
        const { name, salary, approved } = req.body;

        const data = {
            name,
            salary,
            approved
        }

        const person = await Person.create(data);

        return res.status(201).json({person, msg: "Usuário criado com sucesso"});
    }
}