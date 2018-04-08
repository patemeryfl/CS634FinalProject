import { h, Component } from 'preact';
import { connect } from 'preact-redux';
import Header from '../../components/header';
import Account from '../account';
import style from './style';
import users from '../../tests/users';

class Upcoming extends Component {
	state = {
		showDetails: false
	}
	actions = {
		showDetails: () => {
			this.setState({ showDetails: !this.state.showDetails })
		}
	}

	render() {
		return this.props.Profile.signedIn ? 
		(
			<div>
				<Header title="Upcoming" />
				<div class={style.container}>
					{this.props.Assignments.map(assignment => {
						let due = assignment.submitted ? 'Submitted' : `Due ${assignment.dueDate}`;
						if (assignment === null) {
							return <div><h3>You have no upcoming assignments!</h3><h4>Hooray!</h4></div>;
						}
						return (
						<div class="card" onClick={this.actions.showDetails}>
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
		) : <Account />;
	}
}

export default connect(state => state)(Upcoming);
