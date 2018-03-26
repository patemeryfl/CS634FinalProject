import { h, Component } from 'preact';
import style from './style';

export default class Calendar extends Component {
	state = {}
	
	render() {
		return (
			<div class={style.container}>
				<h1>Calendar</h1>
				<p>This is the second page.</p>
			</div>
		);
	}
}