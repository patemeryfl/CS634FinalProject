import { h, Component } from 'preact';
import { connect } from 'preact-redux';
import Header from '../../components/header';
import SignIn from '../../components/sign-in';
import style from './style';
import users from '../../tests/users';

class Upcoming extends Component {
	state = {
		login: {
			email: null,
			password: null
		}
	}
	actions = {
		validateUser: (credentials) => {
			let user = users.filter((item) => item.Profile.email === credentials.email);
			if (user) {
				if (user[0].Profile.password === credentials.password) {
					return user[0];
				}
				return 'Incorrect Password';
			}
			return 'Cant find that email';
		},
		handleChange: e => {
			const login = this.state.login;
			login[e.target.id] =  e.target.value;
			this.setState({ login });
		},
		handleSubmit: () => {
			//This is an anti-pattern
			const user = this.actions.validateUser(this.state.login);
			this.context.store.setState(user);
			this.props.dispatch({ type: 'SIGN_IN' });
		}
	}
	render() {
		if (!this.props.Profile.signedIn) {
			return (
				<SignIn
					signedIn={this.props.Profile.signedIn}
					handleSubmit={this.actions.handleSubmit}
					handleChange={this.actions.handleChange}
				/>
			);
		}
		return (
			<div>
				<Header title="Upcoming" />
				<div class={style.container}>
					{this.props.Assignments.map(assignment => {
						let due = assignment.submitted ? 'Submitted' : `Due ${assignment.dueDate}`;
						if (assignment === null) {
							return <div><h3>You have no upcoming assignments!</h3><h4>Hooray!</h4></div>;
						}
						return (<div class="card">
							<div class="card-body">
								<article>
									<div>
										<h5 class="card-title">{assignment.title}</h5>
										<h6 class="card-subtitle mb-2 text-muted">{assignment.course}</h6>
										<p class="card-text">{due}</p>
									</div>
									<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
										<circle cx="12" cy="12" r="12" fill={assignment.color} />
									</svg>
								</article>
							</div>
					  </div>);
					})}
				</div>
			</div>
		);
	}
}

export default connect(state => state)(Upcoming);
