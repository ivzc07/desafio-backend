const express = require('express')
const postUseCase = require('../usescases/posts.usescases');
const auth = require('../middlewares/auth.middleware');
const router = express.Router();


router.post('/', auth, async (request, response) => {
    try{
        
        const postCreated = await postUseCase.create(request.body, request.user._id);
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

router.get('/search', async (request, response) => {
    try{

        const { search } = request.query
        const allPosts = await postUseCase.getAll(search);
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

router.delete('/:id',auth, async (request, response) => {
    try{
        const { id } = request.params;

        const postDeleted = await postUseCase.deleteById(id,request.user._id); 
          
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

router.patch('/:id',auth, async (request, response) => {
    try{

        const { id } = request.params;

        const newPostData = request.body;
       
        const updatedPost = await postUseCase.updateById(id,newPostData,request.user._id);

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