import { h, Component } from 'preact';
import { connect } from 'preact-redux';
import Calendar from 'react-calendar';
import Header from '../../components/header';
import style from './style';

class CalendarView extends Component {
	state = {}
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
						<Calendar onClickDay={this.actions.onClickDay} />
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