import mongoose from 'mongoose'; 
import Posts from '../models/post.js';

/**
 * @Serving : /posts/
 * @Request_Type : GET
 */

export const getPosts = async (req, res) => {
  try {
    let posts = await Posts.find();
    res.status(200).json(posts);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

/**
 * @Serving : /posts/
 * @Request_Type : POST
 */

export const createPost = async (req, res) => {
  const postBody = req.body;
  try {
    const post = await Posts.create(postBody); //this is a async await pattern so any type of error will be passed
    //to next block
    res.status(201).json(post);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

/**
 * @Serving : /posts/:id
 * @Request_Type : patch
 */

export const updatePost = async (req, res) => {
  const { id } = req.params;
  const { title, message, creator, selectedFile, tags } = req.body;
  const toBeUpdated = { creator, title, message, tags, selectedFile };

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send(`No Post with Id: ${id}`);
  }
  try {
    const updatedPost = await Posts.findByIdAndUpdate(id, toBeUpdated, {
      new: true,
    });
    //output user the latest updated file from  database
    res.json(updatedPost);
  } catch (error) {
    //need a proper error handling method on backend.
    res.status(404).send(error.message);
  }
};

/**
 * @Serving : /posts/:id
 * @Request_Type : delete
 */

export const deletePost = async (req, res) => {
  const { id } = req.params; 
    if (!mongoose.Types.ObjectId.isValid(id)) {
      res.status(404).send(`No post found with that ${id}`);
    }
    await Posts.findByIdAndDelete(id);
    res.status(204).send('Post deleted successfully!'); 
};
/**
 * @Serving : /posts/:id/likePost
 * @Request_Type : patch
 */

export const likePost = async (req, res) => {
  const { id } = req.params; 
    console.log(id); 
    if (!mongoose.Types.ObjectId.isValid(id)) {
      res.status(404).send(`No post found with that ${id}`);
    }
    const post =await  Posts.findById(id); 
    const updatedPost = await Posts.findByIdAndUpdate(id,{likeCount: post.likeCount+1},{new: true}); 
 
    res.status(200).json(updatedPost); 
};
