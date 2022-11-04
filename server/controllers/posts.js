import mongoose from 'mongoose';
import Posts from '../models/post.js';
import imageOptimizer from '../utils/image_optimizer.js';
import cloudinaryUploader from '../utils/cloudinary_uploader.js';
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
  try {
    const post = {
      creator: req.body.creator,
      title: req.body.title,
      message: req.body.message,
      tags: req.body.tags,
    };
    //here we need to upload the file to cloudinary first if any .
    if (req.file) {
      //post data has been read successfully by multer .. now just compress them and get the result from cloudinary
      const banner = await imageOptimizer(req.file, 700, 80);
      const bgImage = await imageOptimizer(req.file, 400, 50);
      const bgImageResult = await cloudinaryUploader(bgImage);
      const bannerResult = await cloudinaryUploader(banner);
      post.banner = bannerResult.secure_url;
      post.bgImage = bgImageResult.secure_url;
    }

    const createdPost = await Posts.create(post); //this is a async await pattern so any type of error will be passed
    //to next block
    res.status(201).json(createdPost); 
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
  const post = await Posts.findById(id);
  const updatedPost = await Posts.findByIdAndUpdate(
    id,
    { likeCount: post.likeCount + 1 },
    { new: true }
  );

  res.status(200).json(updatedPost);
};
