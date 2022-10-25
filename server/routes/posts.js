import {Router} from 'express'; 
import { createPost, getPosts } from '../controllers/posts.js';

const router = Router(); 


/**
    @Serving Route : /posts
*/

router.get('/', getPosts); 
router.post('/',createPost); 


export default router; 