import {Router} from 'express'; 
import { createPost, deletePost, getPosts,updatePost,likePost } from '../controllers/posts.js';

const router = Router(); 


/**
    @Serving Route : /posts
*/

router.get('/', getPosts); 
router.post('/',createPost); 
router.patch('/:id',updatePost);
router.patch('/:id/likePost',likePost);  
router.delete('/:id',deletePost); 

export default router; 