const ADD_ASSIGNMENT = 'ADD_ASSIGNMENT';
const REMOVE_ASSIGNMENT = 'REMOVE_ASSIGNMENT';

const Assignment = (state, action) => {
	switch (action.type) {
		case ADD_ASSIGNMENT:
			console.log(action.data, 'added');
			return state;
		case REMOVE_ASSIGNMENT:
			console.log(action.data, 'removed');
			return state;
		default:
			return state;
	}
};

export default Assignment;