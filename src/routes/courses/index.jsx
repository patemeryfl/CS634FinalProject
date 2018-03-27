import { h, Component } from 'preact';
import { connect } from 'preact-redux';
import Header from '../../components/header';
import AddCourse from '../../components/add-course';
import style from './style';

class Courses extends Component {
	state = {
		addCourseVisible: false
	}
	actions = {
		addCourse: () => {
			this.setState({ addCourseVisible: !this.state.addCourseVisible });
		}
	}
	render(props, state) {
		if (state.addCourseVisible === true) { return (<AddCourse />);}
		return (
			<div>
				<Header title="Courses" handleClick={this.actions.addCourse} />
				<div class={style.container}>
					{this.props.Courses.map(course => (
						<div class="card">
							<div class="card-body">
								<h5 class="card-title">
									<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24">
										<circle cx="12" cy="12" r="12" fill={course.color} />
									</svg>
									{course.name}
								</h5>
								<h6 class="card-subtitle mb-2 text-muted">{course.teacher}</h6>
								<p class="card-text">
									{this.props.Assignments.map(assignment => (assignment.title))}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		);
	}
}

export default connect(state => state)(Courses);

