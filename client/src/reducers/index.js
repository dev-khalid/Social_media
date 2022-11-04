import { combineReducers } from 'redux';
import { SET_CURRENT_ID } from '../constants/postConstants';
import posts from './posts';
//step 4 on redux. this will update the changes on global state .
export const reducers = combineReducers({
  posts,
  currentId: (state='',action) => { 

    if (action.type == SET_CURRENT_ID) { 
      return action.payload;
    } else {
      return state;
    }
  },
});
