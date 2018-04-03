/* eslint react/jsx-no-bind: 0 */
import { h, Component } from 'preact';
import { connect } from 'preact-redux';
import Header from '../../components/header';
import AddAssignment from '../../components/add-assignment';
import Assignment from '../../components/assignment';
import style from './style';

class Assignments extends Component {
	state = {
		addAssignmentVisible: false,
		assignment: {
			title: null,
			course: null,
			dueDate: null,
			submitted: false
		},
		filter: 'ALL'
	}
	actions = {
		toggleAddAssignment: () => {
			this.setState({ addAssignmentVisible: !this.state.addAssignmentVisible });
		},
		handleInput: e => {
			debugger;
			const assignment = this.state.assignment;
			assignment[e.target.id] = e.target.value;
			this.setState({ assignment });
		},
		addAssignment: () => {
			this.props.dispatch({ type: 'ADD_ASSIGNMENT', data: this.state.assignment });
			this.actions.toggleAddAssignment();
		},
		removeAssigment: (number) => {
			this.props.dispatch({ type: 'REMOVE_ASSIGNMENT', data: number });
		},
		submitAssigment: (number) => {
			this.props.dispatch({ type: 'SUBMIT_ASSIGNMENT', data: number });
		},
		changeFilter: (filter) => {
			this.setState({ filter });
		}
	}
	
	render(props, state) {
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
		return (
			<div>
				<Header title="Assignments" handleClick={this.actions.toggleAddAssignment} />
				<div class={style.container}>
					<span>
						<div class="btn-group" role="group">
							<button type="button" class="btn btn-secondary" onClick={() => this.actions.changeFilter('ALL')}>All</button>
							<button type="button" class="btn btn-secondary" onClick={() => this.actions.changeFilter('NOT-SUBMITTED')}>Not Submitted</button>
							<button type="button" class="btn btn-secondary" onClick={() => this.actions.changeFilter('SUBMITTED')}>Submitted</button>
						</div>
					</span>
					{this.props.Assignments.map((assignment, index) => {
						switch (this.state.filter) {
							case 'ALL':
								return <Assignment actions={this.actions} data={assignment} index={index} />;
							case 'NOT-SUBMITTED':
								if (assignment.submitted === false) return (<Assignment actions={this.actions} data={assignment} index={index} />);
								break;
							case 'SUBMITTED':
								if (assignment.submitted === true) return (<Assignment actions={this.actions} data={assignment} index={index} />);
								break;
							default:
								return (<div>No Assignment Added</div>);
						}
					}
					)}
				</div>
			</div>
		);
	}
}
export default connect(state => state)(Assignments);