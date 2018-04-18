/*eslint react/jsx-no-bind: 0*/
import { h, Component } from 'preact';
import { connect } from 'preact-redux';
import Calendar from 'react-calendar';
import Header from '../../components/header';
import style from './style';

class CalendarView extends Component {
	state = {
		assignments: [
			{
				title: 'Final Project',
				course: 'CS634',
				color: '#B71C1C',
				dueDate: 20,
				submitted: false
			},
			{
				title: 'Priority Scheduling',
				course: 'CS622',
				color: '#B71C1C',
				dueDate: 18,
				submitted: true
			},
			{
				title: 'Hueristic Algorithms',
				course: 'CS622',
				color: '#4CAF50',
				dueDate: 20,
				submitted: false
			}
		]
	}
	actions = {
		onClickDay: (value) => {
			console.log(value, 'was clicked');
		}
	}

	render() {
		return (
			<div>
				<Header title="Calendar" />
				<div class={style.container}>
					<article>
						<Calendar
							onClickDay={this.actions.onClickDay}
							tileContent={
								({ date, view }) =>
									this.state.assignments.map(assign =>
										date.getDate() === assign.dueDate ?
											<svg xmlns="http://www.w3.org/2000/svg" width="5" height="5" viewBox="0 0 24 24">
												<circle cx="12" cy="12" r="12" fill={assign.color} />
											</svg> : null
									)
							}
						/>
					</article>
					<footer>
						<ul class="list-group">
							{this.props.Assignments.map(assignment => (
								<li class="list-group-item">{assignment.title}</li>
							))}
						</ul>
					</footer>
				</div>
			</div>
		);
	}
}

export default connect(state => state)(CalendarView);