// import React from 'react'
// // import Todos from '../Todos';

const initState = {
	post: [
		{
			id: '1',
			title: 'Monday',
			body: 'React uses ES6, and you should be familiar with some of the new features like:'
		},
		{
			id: '2',
			title: 'Tuesday',
			body: 'Props are arguments passed into React components.'
		},
		{
			id: '3',
			title: 'Wednesday',
			body: 'Props are passed to components via HTML attributes.'
		},
		{
			id: '4',
			title: 'Thursday',
			body: 'React-Router: Router parameters'
		},
		{
			id: '5',
			title: 'Friday ',
			body: 'Higher Order Components and Axios'
		},
		{
			id: '6',
			title: 'Saturday',
			body: 'Redux: Redux Store, Actions and Reducers '
		}
	]
};

const rootReducer = (state = initState, action) => {
	if (action.type === 'DELETE_POST') {
		let newPosts = state.post.filter((post) => {
			return action.id !== post.id;
		});
		return {
			...state,
			post: newPosts
		};
	}
	return state;
};

export default rootReducer;
