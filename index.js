require('dotenv').config();

const server = require('./src/server');
const db = require('./src/lib/db');
const PORT = process.env.PORT || 8080;

db.connect()
    .then(() => {
        server.listen(PORT, () => {
            console.log('DB has been connected');
            console.log('Server running on port: ', PORT);
        })
    })
    .catch((error) =>{
        console.error('DB connection has failed ', error);
    })
    