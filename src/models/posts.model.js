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
        maxLength: 250,
    },
    body: {
        type: String,
        required: true,
        minLength: 2,
        maxLength: 300,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users',
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