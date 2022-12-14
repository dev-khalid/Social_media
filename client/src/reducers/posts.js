import { CREATE_POST, UPDATE_POST } from "../constants/postConstants";
export default (posts=[],action) => { 
    switch (action.type) {
      case 'FETCH_ALL':
        return action.payload;
      case CREATE_POST:
        return [...posts, action.payload];
      case 'LIKE': 
        return posts.map(post => post._id==action.payload._id ? action.payload : post); 
      case UPDATE_POST:
        return posts.map((post) =>
          post._id == action.payload._id ? action.payload : post
        );
      case 'DELETE':
        return posts.filter((post) => post._id !== action.payload);
      default:
        return posts;
    }
}
//responsible to update the global state when .... 