import upcoming from '../routes/upcoming';
import calendar from '../routes/calendar';
import assignments from '../routes/assignments';
import courses from '../routes/courses';
import profile from '../routes/profile';

const initialState = {
	user: {
		name: null,
		school: null
	},
	course: [],
	assignments: []
};


const createStore = (reducer, initialState) => {
	let state = initialState;
	let listeners = [];
		
	const getState = () => state;
	
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
	dispatch({});
	
	return { getState, dispatch, subscribe };
};

const combineReducers = (reducers) => (state , action) => Object.keys(reducers).reduce(
	(nextState, key) => {
		nextState[key] = reducers[key](
			state[key], action);
		return nextState;
	}, {});


const APP = combineReducers({ upcoming, calendar, assignments, courses, profile });

export default createStore(APP, initialState);