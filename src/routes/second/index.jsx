import { h, Component } from 'preact';
import style from './style';

export default class Page2 extends Component {
	state = {}
	
	render() {
		return (
			<div class={style.container}>
				<h1>Page 2</h1>
				<p>This is the second page.</p>
			</div>
		);
	}
}