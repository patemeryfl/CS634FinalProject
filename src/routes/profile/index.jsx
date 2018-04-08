import { h, Component } from 'preact';
import { connect } from 'preact-redux';
import { route } from 'preact-router';
import Header from '../../components/header';
import initial from '../../state/initial';
import style from './style';

class Profile extends Component {
	state = {}

	actions = {
		signOut: () => {
			this.context.store.setState(initial);
			this.props.dispatch({ type: "SIGN_OUT" });
			route(this.props.to, true);
		}
	}

	render(props, state) {
		return (
			<div>
				<Header title="Profile" handleClick={this.actions.signOut}/>
				<div class={style.container}>
					<h1>Profile: {this.props.Profile.name}</h1>
				</div>
			</div>
		);
	}
}
export default connect(state => state)(Profile);