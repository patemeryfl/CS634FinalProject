/* eslint no-case-declarations: 0 */
const ADD_ASSIGNMENT = 'ADD_ASSIGNMENT';
const REMOVE_ASSIGNMENT = 'REMOVE_ASSIGNMENT';
const REMOVE_COURSE_ASSIGNMENTS = 'REMOVE_COURSE_ASSIGNMENTS';
const SUBMIT_ASSIGNMENT = 'SUBMIT_ASSIGNMENT';

const Assignment = (state, action) => {
	switch (action.type) {
		case ADD_ASSIGNMENT:
			return [...state, ...action.data];
		case REMOVE_ASSIGNMENT:
			return [
				...state.slice(0, action.data),
				...state.slice(action.data + 1)
			];
		case SUBMIT_ASSIGNMENT:
			return state.map((item, idx) => {
				if (idx === action.data) item.submitted = !item.submitted;
				return item;
			});
		case REMOVE_COURSE_ASSIGNMENTS:
			return state.filter(assignment => assignment.course !== action.data);
		default:
			return state;
	}
};

export default Assignment;