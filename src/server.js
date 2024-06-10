const express = require('express');
const cors = require('cors');
const app = express();
const usersRouter = require('./routes/users.router');
const postsRouter = require('./routes/posts.router');
const authRouter = require('./routes/auth.router');

//middlewares
app.use(cors());
app.use(express.json());

app.use('/users', usersRouter);
app.use('/posts', postsRouter);
app.use('/auth', authRouter);

app.get('/',(request, response) => {
    response.json({
        message : "Desafio APIv1",
    });
})

module.exports = app;