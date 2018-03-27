import { h, Component } from 'preact';
import { connect } from 'preact-redux';
import Header from '../../components/header';
import style from './style';

class Calendar extends Component {
	state = {}
	
	render() {
		return (
			<div>
				<Header title="Calendar" />
				<div class={style.container}>
					<p>This is the second page.</p>
				</div>
			</div>
		);
	}
}

export default connect(state => state)(Calendar);