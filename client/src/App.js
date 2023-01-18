import React, { useEffect } from 'react';
import memories from './images/memories.png';

import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import useStyles from './styles';
import { useDispatch } from 'react-redux';
import { getPosts } from './actions/posts';
import axios from 'axios';
let latestData; 
const grabData = () => {
  axios.get('http://localhost:5000/ok') 
};

const token = await grabData();
console.log('grab data function : ', token,latestData);


const App = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, [getPosts]);

  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography variant="h2" className={classes.heading} align="center">
          Memories
        </Typography>
        <img
          height="60"
          src={memories}
          alt="memories"
          className={classes.image}
        />
      </AppBar>
      <Grow in>
        <Container>
          <Grid
            container
            justify="space-between"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item xs={12} sm={7}>
              <Posts />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};
export default App;

/**
 * @TASK FOR TOMORROW
 * Update posts functionality on frontend as well as backend.
 * Delete posts functionality on frontend as well as backend.
 */
