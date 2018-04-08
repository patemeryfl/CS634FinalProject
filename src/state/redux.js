import Upcoming from '../routes/upcoming/reducer';
import Calendar from '../routes/calendar/reducer';
import Assignments from '../routes/assignments/reducer';
import Courses from '../routes/courses/reducer';
import Profile from '../routes/profile/reducer';
import Account from '../routes/account/reducer';
import initial from './initial';

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


const APP = combineReducers({ Account, Profile, Upcoming, Calendar, Assignments, Courses });

export default createStore(APP, initial);