const mongoose = require('mongoose');

const modelName = 'Posts';

const schema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minLength: 2,
        maxLength: 100,
    },
    image: {
        type: String,
        required: true,
        minLength: 2,
        maxLength: 150,
    },
    body: {
        type: String,
        required: true,
        minLength: 2,
        maxLength: 150,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updateAt: {
        type: Date,
        default: Date.now,
    },
    

}) 

module.exports = mongoose.model(modelName, schema);