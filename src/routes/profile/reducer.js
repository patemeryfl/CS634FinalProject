const CHANGE_PASSWORD = 'CHANGE_PASSWORD';
const CHANGE_SCHOOL = 'CHANGE_SCHOOL';
const DELETE_ACCOUNT = 'DELETE_ACCOUNT';

const Profile = (state, action) => {
	switch (action.type) {
		case CHANGE_PASSWORD:
			return state;
		case CHANGE_SCHOOL:
			return state;
		case DELETE_ACCOUNT:
			return state;
		default:
			return state;
	}
};

export default Profile;