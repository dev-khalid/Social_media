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
import { editAction } from '../../../actions/posts';

const Post = ({ post }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleEdit = () => {
    const currentId = post._id; 
    if (currentId) dispatch({ type: 'SET_CURRENT_ID', payload: currentId });
  };

  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image={
          post.selectedFile ||
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
          {post.tags.map((tag) => `#${tag}`)}
        </Typography>
      </div>
      <Typography
        variant="h5"
        component="h2"
        className={classes.title}
        gutterBottom
      >
        {post.title}
      </Typography>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {post.message}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button size="small" color="primary">
          <ThumbUpAltIcon fontSize="small" />
          Like {post.likeCount}
        </Button>
        <Button size="small" color="primary">
          <DeleteIcon fontSize="small" />
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};
export default Post;
