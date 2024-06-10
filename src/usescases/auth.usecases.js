const jwt = require('../lib/jwt')
const User = require('../models/users.model')
const createError = require('http-errors');
const encrypt = require('../lib/encrypt')

async function login (email, password){
    const user = await User.findOne({ email : email});

    if(!user){
        throw createError(401, 'Invalid Data');
    }

    const isPasswordValid = await encrypt.compare(password, user.password);

    if(!isPasswordValid){
        throw createError(401,'Invalid Data');
    }

    const token = jwt.sign({id: user._id })

    return token; 
    
}

module.exports = {
    login,
}