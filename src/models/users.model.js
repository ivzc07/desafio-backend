const mongoose = require('mongoose');

const modelName = 'Users';

const schema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength: 2,
        maxLength: 100,
    },
    profilePic: {
        type: String,
        required: true,
        minLength: 2,
        maxLength: 150,
    },
    email: {
        type: String,
        required: true,
        match: /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/,
    },
    password: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },

}) 

module.exports = mongoose.model(modelName, schema);