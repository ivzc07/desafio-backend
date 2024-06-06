const mongoose = require('mongoose');

const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;

const MONGO_URI = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`;

function connect() {
    return mongoose.connect(MONGO_URI);
}

module.exports = { connect };