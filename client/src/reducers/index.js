import { combineReducers } from 'redux';
import posts from './posts';
//step 4 on redux. this will update the changes on global state .
export const reducers = combineReducers({
  posts,
});
