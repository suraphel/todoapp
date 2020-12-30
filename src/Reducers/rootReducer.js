// import React from 'react'
// // import Todos from '../Todos';

const initState = {
    post : [ 
        {id:'1', title: "This is for reacct " , body: "React uses ES6, and you should be familiar with some of the new features like:"},
        {id:'2', title: "This is another one for fun" , body: "Props are arguments passed into React components."},
        {id:'3', title: "This is the last one fun" , body: "Props are passed to components via HTML attributes."}
    ]
}

const rootReducer = (state = initState, action) =>{
    if (action.type === 'DELETE_POST'){
        let newPosts = state.post.filter(post => {
            return action.id !== post.id 
        });
        return{
            ...state, 
            post: newPosts
        }
    }
    return state; 
}

export default rootReducer; 