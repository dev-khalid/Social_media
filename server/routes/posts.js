import {Router} from 'express'; 
import { createPost, getPosts,updatePost } from '../controllers/posts.js';

const router = Router(); 


/**
    @Serving Route : /posts
*/

router.get('/', getPosts); 
router.post('/',createPost); 
router.patch('/:id',updatePost); 


export default router; 