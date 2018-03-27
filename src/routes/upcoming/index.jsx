import { h, Component } from 'preact';
import { connect } from 'preact-redux';
import Header from '../../components/header';
import style from './style';

class Upcoming extends Component {
	state = {}

	render() {
		return (
			<div>
				<Header title="Upcoming" />
				<div class={style.container}>
					<p>Assignments</p>
				</div>
			</div>
		);
	}
}

export default connect(state => state)(Upcoming);
