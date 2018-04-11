/* eslint react/jsx-no-bind: 0 */
import { h, Component } from 'preact';
import { connect } from 'preact-redux';
import Header from '../../components/header';
import AddCourse from '../../components/add-course';
import style from './style';
import icons from '../../assets/svgs';

class Courses extends Component {
	state = {
		addCourseVisible: false,
		course: {
			name: null,
			teacher: null,
			email: null,
			number: null,
			notes: null,
			color: null
		}
	}
	actions = {
		showAddCourse: () => {
			this.setState({ addCourseVisible: !this.state.addCourseVisible });
		},
		handleInput: e => {
			const course = this.state.course;
			course[e.target.id] = e.target.value;
			this.setState({ course });
		},
		addCourse: () => {
			this.props.dispatch({ type: 'ADD_COURSE', data: this.state.course });
			this.actions.showAddCourse();
		},
		removeCourse: (number) => {
			this.props.dispatch({ type: 'REMOVE_COURSE', data: number });
			this.props.dispatch({ type: 'REMOVE_COURSE_ASSIGNMENTS', data: number });
		}
	}
	render(props, state) {
		if (state.addCourseVisible === true) {
			return (
				<AddCourse
					toggleView={this.actions.showAddCourse}
					handleChange={this.actions.handleInput}
					handleSubmit={this.actions.addCourse}
					courses={this.props.Courses}
				/>);
		}
		return (
			<div>
				<Header title="Courses" handleClick={this.actions.showAddCourse} />
				<div class={style.container}>
					{this.props.Courses.map(course => (
						<div class="card">
							<div class="card-body">
								<h5 class="card-title">
									<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24">
										<circle cx="12" cy="12" r="12" fill={course.color} />
									</svg>
									{course.name}
									<button onClick={() => this.actions.removeCourse(course.number)}>
										<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
											<path d={icons.remove} />
										</svg>
									</button>
								</h5>
								<h6 class="card-subtitle mb-2 text-muted">{course.teacher}</h6>	
								<p class="card-text">
								{this.props.Assignments.map(assignment => {
									if(assignment.course === course.number) {
										return (<div> - {assignment.title}<br /></div>);
									}
								}) }
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

