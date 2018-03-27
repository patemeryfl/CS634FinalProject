import { h, Component } from 'preact';
import { connect } from 'preact-redux';
import Header from '../../components/header';
import style from './style';

class Upcoming extends Component {
	state = {}

	render() {
		return (
			<div>
				<Header title="Upcoming" />
				<div class={style.container}>
					{this.props.Assignments.map(assignment => (
						<div class="card">
							<div class="card-body">
								<h5 class="card-title">{assignment.title}</h5>
								<h6 class="card-subtitle mb-2 text-muted">{assignment.course}</h6>
								<p class="card-text">Due {assignment.dueDate}</p>
								<a href="#" class="card-link">Remove</a>
								<a href="#" class="card-link">Submit</a>
							</div>
					  </div>
					))}
				</div>
			</div>
		);
	}
}

export default connect(state => state)(Upcoming);
