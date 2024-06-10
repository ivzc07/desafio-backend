const express = require('express');
const app = express();
const usersRouter = require('./routes/users.router');
const postsRouter = require('./routes/posts.router');

app.use(express.json());

app.use('/users', usersRouter);
app.use('/posts', postsRouter);

app.get('/',(request, response) => {
    response.json({
        message : "Koders APIv1",
    });
})

module.exports = app;