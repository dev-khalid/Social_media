import React from 'react';
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from '@material-ui/core';
import useStyles from './styles';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { deletePost, editAction, likePost } from '../../../actions/posts';

const Post = ({ post }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const currentId = post._id;

  const handleEdit = () => {
    if (currentId) dispatch({ type: 'SET_CURRENT_ID', payload: currentId });
  };
  const handleDelete = () => { 
    dispatch(deletePost(currentId));  
  }
  const handleLike = () => { 
    dispatch(likePost(currentId)); 
  }
  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image={
          post.bgImage ||
          'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'
        }
        title={post.title}
      ></CardMedia>
      <div className={classes.overlay}>
        <Typography variant="h6">{post.creator}</Typography>
        <Typography variant="body2">
          {moment(post.createdAt).fromNow()}
        </Typography>
      </div>
      <div className={classes.overlay2}>
        <Button style={{ color: 'white' }} size="small">
          <MoreHorizIcon onClick={handleEdit} fontSize="medium" />
        </Button>
      </div>
      <div className={classes.details}>
        <Typography variant="body2" color="textSecondary" component="h2">
          {post.tags?.split(',').map((tag) => `#${tag}`)}
        </Typography>
      </div>
      <Typography
        variant="h5"
        component="h2"
        className={classes.title}
        gutterBottom
      >
        {post.title && post.title[0].toUpperCase() + post.title.slice(1)}
      </Typography>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {post.message}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button size="small" color="primary">
          <ThumbUpAltIcon fontSize="small" onClick={handleLike}/> {post.likeCount}
        </Button>
        <Button size="small" color="primary">
          <DeleteIcon fontSize="small" onClick={handleDelete} />
        </Button>
      </CardActions>
    </Card>
  );
};
export default Post;
