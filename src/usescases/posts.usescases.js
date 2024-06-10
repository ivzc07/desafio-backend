const Posts = require('../models/posts.model');
const createError = require('http-errors');
const encrypt = require('../lib/encrypt');
const { response } = require('express');
// create //
// getAll //
// findById //
// deleteById //
// updateById //

async function create(postData, userID) {

    const postsFound = await Posts.findOne({ title: postData.title });

    if(postsFound){
        throw createError(409, 'Title already exists');
    }

    postData.user = userID;
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

async function deleteById(id, userID){

    const post = await Posts.findById(id)

    userID = JSON.stringify(userID);
    newID = JSON.stringify(post.user._id);

    if(newID != userID){
        throw createError(401, "You cant delete this post, you not the owner")
    }
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