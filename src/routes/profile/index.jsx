import { h, Component } from 'preact';
import { connect } from 'preact-redux';
import { route } from 'preact-router';
import { Link } from 'preact-router/match';
import Header from '../../components/header';
import initial from '../../state/initial';
import icons from '../../assets/svgs';
import style from './style';

const Default = () => (
	<svg xmlns="http://www.w3.org/2000/svg" width="150" height="150" viewBox="0 0 24 24">
		<path d={icons.profile} />
  	</svg>
)

class Profile extends Component {
	state = {}

	actions = {
		signOut: () => {
			this.context.store.setState(initial);
			this.props.dispatch({ type: "SIGN_OUT" });
			route(this.props.to, true);
		},
		deleteAccount: () => { //Same as signing out, resets global to initial state
			this.context.store.setState(initial);
			this.props.dispatch({ type: "SIGN_OUT" });
			route(this.props.to, true);
		}
	}

	render(props, state) {
		let image = <Default />
		if(this.props.Profile.image) {
			image = `<img src="" />`;
		}
		return (
			<div>
				<header class={style.header}>
					<nav>
						<Link href="/profile">
							<svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24">
								<path d={icons.profile} />
							</svg>
						</Link>
						<h2>{props.title}</h2>
						<button onClick={this.actions.signOut}>
							<svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24">
								<path d={icons.signout} />
							</svg>
						</button>
					</nav>
				</header>
				<div class={style.container}>
					<div class={style.top}>
						{image}
						<h2>{this.props.Profile.first} {this.props.Profile.last} | {this.props.Profile.points} Points</h2>
						<h3>{this.props.Profile.school}</h3>
					</div>
					<div class={style.actions}>
						<h2>Change Your Profile</h2>
						<ul class="list-group">
							<li class="list-group-item"><span>Change Password</span></li>
							<li class="list-group-item"><span>Change School</span></li>
							<li class="list-group-item" onClick={this.actions.deleteAccount}><span>Delete Account</span></li>
						</ul>
					</div>
				</div>
			</div>
		);
	}
}
export default connect(state => state)(Profile);
