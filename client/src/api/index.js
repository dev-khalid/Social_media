import axios from 'axios'; 
const url = 'http://localhost:5000/posts'; 

//I like the way they seperated the api calls .


export const fetchPosts = () => axios.get(url); 
export const createPost = (newPost) => axios.post(url,newPost); 

