import Posts from "../models/post.js";


/** 
 * @Serving : /posts/
 * @Request_Type : GET  
 */

export const getPosts = async (req,res) =>{ 
    try {
        let posts = await Posts.find();
        res.status(200).json(posts); 
    } catch (error) {
        res.status(404).json({message: error.message}); 
    }
}

/** 
 * @Serving : /posts/
 * @Request_Type : POST  
 */

export const createPost = async (req,res) =>{ 
    const postBody = req.body;
    try {
        const post = await Posts.create(postBody); //this is a async await pattern so any type of error will be passed 
        //to next block 
        res.status(201).json(post); 
    } catch (error) {
        res.status(409).json({message: error.message}); 
    }

}