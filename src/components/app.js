import { h, Component } from 'preact';
import { Router } from 'preact-router';

import Header from './header';
import Footer from './footer';

import Home from '../routes/home';
import Page2 from '../routes/second';
import Page3 from '../routes/third';
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
			<div id="app">
				<Header />
				<Router onChange={this.handleRoute}>
					<Home path="/" />
					<Page2 path="/page2" />
					<Page3 path="/page3" />
					<Profile path="/profile/" user="me" />
					<Profile path="/profile/:user" />
				</Router>
				<Footer />
			</div>
		);
	}
}
