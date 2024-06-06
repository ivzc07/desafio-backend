const Users = require('../models/users.model');
const createError = require('http-erros');
const encrypt = require('encrypt');
// create
// getAll
// getById
// deleteById
// updateById

async function create(newUser) {
    const userFound = await Users.findOne({ email: newUser.email });

    if(userFound){
        throw createError(409, 'Email is already in use');
    }


}