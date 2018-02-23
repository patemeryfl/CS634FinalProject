import { h, Component } from 'preact';
import style from './style';

export default class Page3 extends Component {
	state = {}
	
	render() {
		return (
			<div class={style.container}>
				<h1>Page 3</h1>
				<p>This is the third page.</p>
			</div>
		);
	}
}