import {Router} from 'express'; 
import { createPost, deletePost, getPosts,updatePost,likePost } from '../controllers/posts.js';
import uploader from '../utils/file_uploader.js'; 
const router = Router(); 


/**
    @Serving Route : /posts
*/

router.get('/', getPosts); 
router.post('/',uploader.single('post_image'),createPost); 
router.patch('/:id',uploader.single('post_image'),updatePost);
router.patch('/:id/likePost',likePost);  
router.delete('/:id',deletePost); 

export default router; 