import axios from 'axios';
const url = 'http://localhost:5000/posts';

//I like the way they seperated the api calls .

export const fetchPosts = () => axios.get(url);
export const createPost = (newPost) => axios.post(url, newPost);
export const updateP = (id, post) => axios.patch(`${url}/${id}`, post);
export const likePost = (id) => axios.patch(`${url}/${id}/likePost`); 
export const deletePost = (id) => axios.delete(`${url}/${id}`); 