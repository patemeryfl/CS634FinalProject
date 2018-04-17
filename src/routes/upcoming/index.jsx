import { h, Component } from 'preact';
import { connect } from 'preact-redux';
import Header from '../../components/header';
import AddAssignment from '../../components/add-assignment';
import Assignment from '../../components/assignment';
import Account from '../account';
import style from './style';

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
			this.setState({ showDetails: !this.state.showDetails });
		},
		saveChanges: () => {
			this.setState({ edit: !this.state.edit });
		}
	}

	render() {
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
		return this.props.Profile.signedIn ?
			(
				<div>
					<Header title="Upcoming" />
					<div class={style.container}>
						{this.props.Assignments.map(assignment => <Assignment data={assignment} />)}
					</div>
				</div>
			) : <Account />;
	}
}

export default connect(state => state)(Upcoming);
