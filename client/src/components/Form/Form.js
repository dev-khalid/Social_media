/**
 * @Task_List :
 * 1. Use Formik for form handling
 * 2. Use Yup for form validation
 */
//there will be 2 quality of the images .

/*
Image for banner : 
  Height: 280px 
  Width: 500px 
*/

import React, { useEffect, useState } from 'react';
import useStyles from './styles';
import FileBase from 'react-file-base64';
import { Typography, Button, Paper, TextField } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { createPost, updatePost } from '../../actions/posts';
import axios from 'axios';
import { SET_CURRENT_ID } from '../../constants/postConstants';

//now compress using compressorjs ?
const Form = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const currentId = useSelector((state) => state.currentId);
  const post = useSelector(
    (state) => currentId && state.posts.find((pst) => pst._id == currentId)
  );
  const [postData, setPostData] = useState({
    creator: '',
    title: '',
    message: '',
    tags: '',
    selectedFile: '',
  });
  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  const clear = () => {
    dispatch({ type: SET_CURRENT_ID, payload: '' });
    setPostData({
      creator: '',
      title: '',
      message: '',
      tags: '',
      selectedFile: null,
    });
  };
  const handleImage = (e) => {
    setPostData((post) => ({ ...post, selectedFile: e.target.files[0] }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('creator', postData.creator);
    formData.append('title', postData.title);
    formData.append('message', postData.message);
    formData.append('tags', postData.tags);
    formData.append('post_image', postData.selectedFile);
    //this will go to the localhost:5000/api/posts and uploaded there .
    //also use redux for this.
    if (currentId) {
      dispatch(updatePost(currentId,formData));
    } else {
      dispatch(createPost(formData));
    }

    clear();
  };

  return (
    <Paper>
      <form
        method="post"
        noValidate
        className={`${classes.root} ${classes.form}`}
        onSubmit={handleSubmit}
      >
        <Typography variant="h6">
          {currentId ? `Editing-${post.title}` : 'Creating a Memory'}
        </Typography>
        <TextField
          name="creator"
          variant="outlined"
          label="Creator"
          fullWidth
          value={postData.creator}
          onChange={(e) =>
            setPostData({ ...postData, creator: e.target.value })
          }
        />
        <TextField
          name="title"
          variant="outlined"
          label="Title"
          fullWidth
          value={postData.title}
          onChange={(e) => setPostData({ ...postData, title: e.target.value })}
        />
        <TextField
          name="message"
          variant="outlined"
          label="Message"
          fullWidth
          value={postData.message}
          onChange={(e) =>
            setPostData({ ...postData, message: e.target.value })
          }
        />
        <TextField
          name="tags"
          variant="outlined"
          label="Tags"
          fullWidth
          value={postData.tags}
          onChange={(e) => setPostData({ ...postData, tags: e.target.value })}
        />
        <div className={classes.fileInput}>
          <input type="file" name="post_image" onChange={handleImage} />
          {/*
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setPostData({ ...postData, selectedFile: base64 })
            }
          />*/}
        </div>
        <Button
          className={classes.buttonSubmit}
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          fullWidth
          style={{ marginBottom: 10 }}
        >
          {currentId ? 'Update' : 'Submit'}
        </Button>

        <Button
          variant="contained"
          color="secondary"
          size="small"
          fullWidth
          onClick={clear}
        >
          Clear
        </Button>
      </form>
    </Paper>
  );
};
export default Form;
