import { createStore, applyMiddleware, compose,combineReducers } from 'redux'; 
import thunk from 'redux-thunk';  
import { reducers } from './reducers/index.js'; 
//could have created a reducer here also . and put it inside the reducer variable 
//step 3 on redux - calling the store . store will then call the reducer 
export default createStore(reducers, compose(applyMiddleware(thunk)));  

/**
 * @Steps I should follow to make the redux working
 * 1.Create the action . As ususal it's a api call
 * 2.Create a update machanism with reducers 
 * 3.Create Constants . So that nothing misses
 * 4.Combine all the reducers in one object 
 * 5.Create store with that object
 */