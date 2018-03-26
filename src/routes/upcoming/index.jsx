import { h, Component } from 'preact';
import style from './style';

export default class Upcoming extends Component {
	state = {}

	render() {
		return (
			<div class={style.container}>
				<h1>Upcoming Assignments</h1>
				<p>Assignments</p>
			</div>
		);
	}
}
