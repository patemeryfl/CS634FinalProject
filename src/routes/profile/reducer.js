const SIGN_IN = 'SIGN_IN';
const SIGN_OUT = 'SIGN_OUT';

const Profile = (state, action) => {
	switch (action.type) {
		case SIGN_IN:
			console.log(action.data, 'signed in');
			return state;
		case SIGN_OUT:
			console.log(action.data, 'signed out');
			return state;
		default:
			return state;
	}
};

export default Profile;