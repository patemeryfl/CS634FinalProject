import { h, Component } from 'preact';
import { connect } from 'preact-redux';
import Header from '../../components/header';
import style from './style';

class Profile extends Component {
	state = {}

	render(props, state) {
		return (
			<div>
				<Header title="Profile" />
				<div class={style.container}>
					<h1>Profile: {this.props.Profile.name}</h1>
				</div>
			</div>
		);
	}
}
export default connect(state => state)(Profile);