const Person = require('../models/Person');
const { z } = require('zod')

module.exports = {
    async store(req, res) {
        const userSchema = z.object({
            name: z.string().min(2),
            email: z.string().email("Insira um email válido").min(5).toLowerCase(),
            password: z.string().min(6),
            confirmPassword: z.string().min(6)
        });

        const { name, email, password, confirmPassword } = req.body;

        // const data = {
        //     name,
        //     email,
        //     password,
        //     confirmPassword
        // }

        const data = userSchema.parse({
            name,
            email,
            password,
            confirmPassword,
        })

        try {
            const person = await Person.create(data);

            res.status(201).json({person, msg: "Usuário criado com sucesso"});
        } catch (error) {
            console.log(error)
        }
    },

    //Listar as pessoas
    async index(req, res) {
        return res.send("Wonderful");
    },

    // Pegar uma pessoa
    async show(req, res){

    },

    // Update uma pessoa
    async update(req, res){},

    // Delete uma pessoa
    async destroy(req, res){}
}