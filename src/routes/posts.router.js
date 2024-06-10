const express = require('express')
const postUseCase = require('../usescases/posts.usescases');

const router = express.Router();

// create //
// getAll //
// findById //
// deleteById //
// updateById //

router.post('/', async (request, response) => {
    try{
        const postCreated = await postUseCase.create(request.body);
        response.json({
            success: true, 
            data: { postCreated },
        })        
    }catch(error){
        response.status(error.status || 500);
        response.json({
            success: false,
            error: error.message,
        })
    }
})

router.get('/', async (request, response) => {
    try{
        const allPosts = await postUseCase.getAll();
        response.json({
            success: true, 
            data: allPosts,
        })
    }catch(error){
        response.status(error.status || 500);
        response.json({
            success: false,
            error: error.message,
        })
    }
})

router.get('/:id', async (request, response) => {
    try{
        const { id } = request.params;
        const postFound = await postUseCase.getById(id);
        response.json({
            success: true, 
            data: { postFound },
        })
    }catch(error){
        response.status(error.status || 500);
        response.json({
            success: false,
            error: error.message,
        })
    }
})

router.delete('/', async (request, response) => {
    try{
        const { id } = request.params;
        const postDeleted = await postUseCase.deleteById(id);
        response.json({
            success: true,
            data: { postDeleted },
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
        const newPostData = request.body;
        const updatedPost = await postUseCase.updateById(id,newPostData);

        response.json({
            success: true,
            data: { updatedPost },
        })
    }catch(error){
        response.status(error.status || 500);
        response.json({
            success: false,
            error: error.message,
        })
    }
})

module.exports = router;