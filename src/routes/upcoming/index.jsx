import { h, Component } from 'preact';
import { connect } from 'preact-redux';
import Header from '../../components/header';
import Details from '../../components/details';
import Account from '../account';
import style from './style';
import users from '../../tests/users';

class Upcoming extends Component {
	state = {
		addAssignmentVisible: false,
		assignment: {
			title: null,
			course: null,
			dueDate: null,
			submitted: false
		},
		showDetails: false,
		edit: false
	}
	actions = {
		toggleAddAssignment: () => {
			this.setState({ addAssignmentVisible: !this.state.addAssignmentVisible });
		},
		handleInput: e => {
			const assignment = this.state.assignment;
			assignment[e.target.id] = e.target.value;
			this.setState({ assignment });
		},
		addAssignment: () => {
			this.props.dispatch({ type: 'ADD_ASSIGNMENT', data: this.state.assignment });
			this.actions.toggleAddAssignment();
		},
		showDetails: () => {
			this.setState({ showDetails: !this.state.showDetails })
		},
		saveChanges: () => {
			this.setState({ edit: !this.state.edit })
		}
	}

	render() {
		let assignments = false;
		if (this.state.addAssignmentVisible) {
			return (
				<AddAssignment
					toggleView={this.actions.toggleAddAssignment}
					handleSubmit={this.actions.addAssignment}
					handleChange={this.actions.handleInput}
					courses={this.props.Courses}
				/>
			);
		}
		if(this.props.Assignments.length > 0) {
			assignments = true;
		}
		return this.props.Profile.signedIn ? 
		(
			<div>
				<Header title="Upcoming" />
				<div class={style.container}>
					{this.props.Assignments.map(assignment => {
						let due = assignment.submitted ? 'Submitted' : `Due ${assignment.dueDate}`;
						if (this.state.showDetails) { return <Details visible={this.state.showDetails} data={assignment} actions={this.actions} courses={this.props.Courses}/> }
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
