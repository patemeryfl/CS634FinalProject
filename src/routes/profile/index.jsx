import { h, Component } from 'preact';
import style from './style';

export default class Profile extends Component {
	state = {
		time: Date.now(),
		count: 10
	};

	// Note: `user` comes from the URL, courtesy of our router
	render({ user }, { time, count }) {
		return (
			<div class={style.container}>
				<h1>Profile: {user}</h1>
				<div>Current time: {new Date(time).toLocaleString()}</div>
			</div>
		);
	}
}
