export default (posts=[],action) => { 
    switch(action.type) { 
        case 'FETCH_ALL': 
            return action.payload; 
        case 'CREATE': 
            return [...posts,action.payload]; 
        default: 
            return posts; 
    }
}
//responsible to update the global state when .... 