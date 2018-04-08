import { h, Component } from 'preact';
import { Router } from 'preact-router';
import { Provider } from 'preact-redux';
import store from '../state/redux';

import Footer from './footer';

import Upcoming from '../routes/upcoming';
import CalendarView from '../routes/calendar';
import Assignments from '../routes/assignments';
import Courses from '../routes/courses';
import Profile from '../routes/profile';

import '../style/bootstrap.css';

if (module.hot) {
	require('preact/debug');
}

export default class App extends Component {

	handleRoute = e => {
		this.currentUrl = e.url;
	};

	render() {
		return (
			<Provider store={store}>
				<div id="app">
					<Router onChange={this.handleRoute}>
						<Upcoming path="/" />
						<CalendarView path="/calendar" />
						<Assignments path="/assignments" />
						<Courses path="/courses" />
						<Profile path="/profile" to="/"/>
					</Router>
					<Footer />
				</div>
			</Provider>
		);
	}
}
