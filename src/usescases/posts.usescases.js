const Posts = require('../models/posts.model');
const createError = require('http-errors');
const encrypt = require('../lib/encrypt');
// create //
// getAll //
// findById //
// deleteById //
// updateById //

async function create(postData) {

    const postsFound = await Posts.findOne({ title: postData.title });

    if(postsFound){
        throw createError(409, 'Title already exists');
    }

   

    const newPost = await Posts.create(postData);

    return newPost;

}

async function getAll () 
{
    const postsData = await Posts.find().populate('user')

    return postsData;
}

async function getById (id) {
    const post = await Posts.findById(id).populate('user');

    return post; 
}

async function deleteById(id){
    const postDeleted = await Posts.findByIdAndDelete(id);

    return postDeleted;
}

async function updateById(id,newPostData){
    
    newPostData.updateAt = Date.now();
    
    const postUpdated =  await Posts.findByIdAndUpdate(id,newPostData,{ new : true})
      
    return postUpdated;
}

module.exports = {
    create, 
    getAll,
    getById, 
    deleteById,
    updateById,
}