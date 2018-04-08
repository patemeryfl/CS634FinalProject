/* eslint no-case-declarations: 0 */
const SIGN_IN = 'SIGN_IN';
const SIGN_UP = 'SIGN_UP';
const SIGN_OUT = 'SIGN_OUT';
import initial from '../../state/initial';

const Account = (state, action) => {
	switch (action.type) {
		case SIGN_IN:
			return state;
		case SIGN_UP:
			return state;
        case SIGN_OUT:
			return state;
		default:
			return state;
	}
};

export default Account;