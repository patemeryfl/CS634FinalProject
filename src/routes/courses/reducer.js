const ADD_COURSE = 'ADD_COURSE';
const REMOVE_COURSE = 'REMOVE_COURSE';

const Courses = (state, action) => {
	switch (action.type) {
		case ADD_COURSE:
			console.log(action.data, 'added');
			return state;
		case REMOVE_COURSE:
			console.log(action.data, 'removed');
			return state;
		default:
			return state;
	}
};

export default Courses;