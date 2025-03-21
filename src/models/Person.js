const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    confirmPassword: String
});


module.exports = mongoose.model("Person", personSchema);
