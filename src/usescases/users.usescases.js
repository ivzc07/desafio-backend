const Users = require('../models/users.model');
const createError = require('http-errors');
const encrypt = require('../lib/encrypt');
// create //
// getAll //
// findById //
// deleteById //
// updateById //

async function create(userData) {
    const userFound = await Users.findOne({ email: userData.email });

    if(userFound){
        throw createError(409, 'Email is already in use');
    }

    userData.password = await encrypt.encrypt(userData.password);

    const newUser = await Users.create(userData);

    return newUser;

}

async function getAll () 
{
    const users = await Users.find();

    return users;
}

async function getById (id) {
    const user = await Users.findById(id);

    return user; 
}

async function deleteById(id){
    const userDeleted = await Users.deleteById(id);

    return userDeleted;
}

async function updateById(id,newUserData){
    const userUpdated =  await Users.findByIdAndUpdate(id,newUserData,{ new : true})  
    return userUpdated;
}

module.exports = {
    create, 
    getAll,
    getById, 
    deleteById,
    updateById,
}