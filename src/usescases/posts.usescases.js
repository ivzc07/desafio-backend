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

async function getAll (search) 
{   
    const postsData = await Posts.find().populate('user')
    if(!search) return postsData
    const dataFiltered = postsData.filter((elemento)=>elemento.title.includes(search))
    return dataFiltered;
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
    
    const post = await Posts.findById(id);

    newPostData.updateAt = Date.now();
    newPostData.user = post.user;
    
    const postUpdated =  await Posts.findByIdAndUpdate(id,newPostData,{ new : true})
    if (!postUpdated) throw createError(404, "Post not found")

    return postUpdated;
}

module.exports = {
    create, 
    getAll,
    getById, 
    deleteById,
    updateById,
}