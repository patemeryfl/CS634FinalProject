const ADD_ITEM = 'ADD_ITEM';
const REMOVE_ITEM = 'REMOVE_ITEM';

const Calendar = (state, action) => {
	switch (action.type) {
		case ADD_ITEM:
			console.log(action.data, 'added');
			return state;
		case REMOVE_ITEM:
			console.log(action.data, 'removed');
			return state;
		default:
			return state;
	}
};

export default Calendar;