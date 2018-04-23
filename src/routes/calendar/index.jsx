/*eslint react/jsx-no-bind: 0*/
import { h, Component } from 'preact';
import { connect } from 'preact-redux';
import Calendar from 'react-calendar';
import Header from '../../components/header';
import style from './style';

class CalendarView extends Component {
	state = { }
	actions = {
		onClickDay: (date) => {
			console.log(date.getDate(), date.getMonth(),  'was clicked');
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
								({ date }) =>
									this.props.Assignments.map(assign =>
										date.getMonth() === parseInt(assign.dueDate.split('/')[0].substring(1,2) - 1) &&
										date.getDate() === parseInt(assign.dueDate.split('/')[1].substring(0,2)) ?
											<svg xmlns="http://www.w3.org/2000/svg" width="7" height="7" viewBox="0 0 24 24">
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