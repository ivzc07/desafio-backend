const express = require('express');
const userUseCase = require ('../usescases/users.usescases');


const router = express.Router();

router.get('/', async (request, response) => {
    try{
        const users = await userUseCase.getAll();
        response.json({
            success: true,
            data: {users},
        })
    }catch(error){
        response.status(error.status || 500)
        response.json({
            success: false,
            error: error.message,
        })
    }
})

router.post('/', async (request, response) => {
    try{
        const newUser = await userUseCase.create(request.body);
        response.json({
            success: true,
            data: {newUser},
        })
    }catch(error){
        response.status(error.status || 500)
        response.json({
            success:false,
            error: error.message
        })
    }
})

router.get('/:id', async (request, response) => {
    try{
        const { id } = request.params;
        const userFound = await userUseCase.getById(id);
        response.json({
            success: true,
            data: { userFound },
        })
    }catch(error){
        response.status(error.status || 500)
        response.json({
            success: false,
            error: error.message
        })
    }
})

router.delete('/:id', async (request, response) =>{
    try{
        const { id } = request.params;
        const userDeleted = await userUseCase.deleteById(id);
        response.json({
            success: true,
            data: { userDeleted },
        })
    }catch(error){
        response.status(error.status || 500);
        response.json({
            success: false,
            error: error.message,
        })
    }
})

router.patch('/:id', async (request, response) => {
    try{
        const { id } = request.params;
        const updatedKoder = await userUseCase.updateById(id, request.body);
        response.json({
            success: true, 
            data: { updatedKoder },
        })  
    }catch(error){
        response.status(error.status || 500);
        response.json({
            success: false,
            error: error.message
        })
    }
})

module.exports = router;