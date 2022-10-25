/**
 * @BUG
 * 1.Current date time is not matching. It's need to be fixed using moment.
 */

import React from 'react'; 
import useStyles from './styles';
import { useSelector } from 'react-redux';
import { Grid,CircularProgress } from '@material-ui/core';
import Post from './Post/Post'; 
const Posts = () => {
    const posts = useSelector(state => state.posts);    
    const classes = useStyles(); 
    return (
        !posts.length ? <CircularProgress /> : (
            <Grid className={classes.container} container alignItems='stretch' spacing={3}>
                {posts.map((post) => (
                    <Grid item key={post._id} xs={12} sm={6} md={6} >
                        <Post post={post} />
                    </Grid>
                ))}
            </Grid>
        )
        )

}
export default Posts; 