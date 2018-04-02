import Upcoming from '../routes/upcoming/reducer';
import Calendar from '../routes/calendar/reducer';
import Assignments from '../routes/assignments/reducer';
import Courses from '../routes/courses/reducer';
import Profile from '../routes/profile/reducer';

//Tests//
//import Pat from '../tests/user/Pat';

const initial = {
	Profile: {
		signedIn: false
	},
	Upcoming: [],
	Calendar: [],
	Assignments: [],
	Courses: []
};


const createStore = (reducer, initialState) => {
	let state = initialState;
	let listeners = [];
		
	const getState = () => state;
	const setState = (newState) => state = newState;
	
	const dispatch = (action) => {
		state = reducer(state, action);
		listeners.forEach(listener => listener());
	};
	
	const subscribe = (listener) => {
		listeners.push(listener);
		return () => {
			listeners.filter(l => l !== listener);
		};
	};
	dispatch({ });
	
	return { getState, setState, dispatch, subscribe };
};

const combineReducers = (reducers) => (state , action) => Object.keys(reducers).reduce(
	(nextState, key) => {
		nextState[key] = reducers[key](
			state[key], action);
		return nextState;
	}, {});


const APP = combineReducers({ Profile, Upcoming, Calendar, Assignments, Courses });

export default createStore(APP, initial);