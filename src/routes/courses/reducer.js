const ADD_COURSE = 'ADD_COURSE';
const REMOVE_COURSE = 'REMOVE_COURSE';

const Courses = (state, action) => {
	switch (action.type) {
		case ADD_COURSE:
			return [...state, action.data];
		case REMOVE_COURSE:
			return state.filter(item => item.number !== action.data );
		default:
			return state;
	}
};

export default Courses;