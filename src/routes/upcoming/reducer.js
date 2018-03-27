const GET_UPCOMING = 'GET_UPCOMING';
const REMOVE_UPCOMING = 'REMOVE_UPCOMING';

const Upcoming = (state, action) => {
	switch (action.type) {
		case GET_UPCOMING:
			console.log(action.data, 'got upcoming');
			return state;
		case REMOVE_UPCOMING:
			console.log(action.data, 'removed upcoming');
			return state;
		default:
			return state;
	}
};

export default Upcoming;