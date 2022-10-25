/**
 * @Task_List :
 * 1. Use Formik for form handling
 * 2. Use Yup for form validation
 */

import React, { useEffect, useState } from 'react';
import useStyles from './styles';
import FileBase from 'react-file-base64';
import { Typography, Button, Paper, TextField } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { createPost, udpatePost } from '../../actions/posts';

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
    dispatch({ type: 'SET_CURRENT_ID', payload: '' });
    setPostData({
      creator: '',
      title: '',
      message: '',
      tags: '',
      selectedFile: '',
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    //now just use the action you created right away
    if (currentId) {
      dispatch(udpatePost(currentId, postData));
    } else {
      dispatch(createPost(postData));
    }
    clear();
  };

  return (
    <Paper>
      <form
        autoComplete="off"
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
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setPostData({ ...postData, selectedFile: base64 })
            }
          />
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
