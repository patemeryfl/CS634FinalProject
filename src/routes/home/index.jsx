import { h, Component } from 'preact';
import style from './style';

export default class Home extends Component {
	state = {}

	render() {
		return (
			<div class={style.container}>
				<h1>Home</h1>
				<p>This is the Home component.</p>
			</div>
		);
	}
}
