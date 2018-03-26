import { h, Component } from 'preact';
import { Router } from 'preact-router';
import { Provider } from 'preact-redux';
import store from '../state/redux';

import Header from './header';
import Footer from './footer';

import Upcoming from '../routes/upcoming';
import Calendar from '../routes/calendar';
import Assignments from '../routes/assignments';
import Courses from '../routes/courses';
import Profile from '../routes/profile';

if (module.hot) {
	require('preact/debug');
}

export default class App extends Component {

	/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */
	handleRoute = e => {
		this.currentUrl = e.url;
	};

	render() {
		return (
			<Provider store={store}>
				<div id="app">
					<Header />
					<Router onChange={this.handleRoute}>
						<Upcoming path="/" />
						<Calendar path="/calendar" />
						<Assignments path="/assignments" />
						<Courses path="/courses" />
						<Profile path="/profile/:user" />
					</Router>
					<Footer />
				</div>
			</Provider>
		);
	}
}
