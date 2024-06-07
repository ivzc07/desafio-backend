const express = require('express');
const app = express();
const usersRouter = require('./routes/users.routes');
app.use(express.json());

app.use('/users', usersRouter);

app.get('/',(request, response) => {
    response.json({
        message : "Koders APIv1",
    });
})

module.exports = app;