import axios from 'axios';
import * as api from '../api/index.js';

//step 2 on redux
export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();
    dispatch({ type: 'FETCH_ALL', payload: data });
  } catch (error) {
    console.error(`Error on getting post : ${error.message}`);
  }
};

export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post);
    //now i need to dispatch the action to update the global state
    dispatch({ type: 'CREATE', payload: data });
  } catch (error) {
    console.error(`Error on post creation : ${error.message}`);
  }
};

export const udpatePost = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updateP(id, post); //here p stands for post
    dispatch({ type: 'UPDATE', payload: data });
  } catch (error) {
    console.error(error.message);
  }
};
export const likePost = (id) => async(dispatch) => { 
  try {
    const {data} = await api.likePost(id);
    dispatch({
      type: 'LIKE', 
      payload: data
    }) 
  } catch (error) {
    console.error(`Error on like post action. ${error.message}`); 
    
  }
}
export const deletePost = (id) => async(dispatch) => { 
  try {
    await api.deletePost(id); 
    dispatch({type: 'DELETE',payload: id});//passing the id so that i can sanitize the post with that id . and don't need to call backend for that. 

  } catch (error) {
    console.error(error.message); 
  }
}