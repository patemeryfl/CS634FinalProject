import { h, Component } from 'preact';
import style from './style';
import icons from '../../assets/svgs';
import DatePicker from '../date-picker';

class AddAssignment extends Component {
	componentWillMount() {
		const datepicker = require('vanilla-datepicker');
		datepicker();
	}
	render(props) {
		return (
			<div class={style.container}>
				<header class={style.header}>
					<nav>
						<button onClick={props.toggleView}>
							<svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24">
								<path d={icons.back} />
							</svg>
						</button>
						<h2>Add Assignment</h2>
						<button>
							<svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24">
								<path d="" />
							</svg>
						</button>
					</nav>
				</header>
				<form onSubmit={props.handleSubmit} action="javascript:">
					<div class="form-group">
						<select class="form-control" id="course" onChange={props.handleChange} >
							<option>Choose Course</option>
							{props.courses.map(course => (
								<option value={course.name} >{course.name}</option>
							))}
						</select>
					</div>
					<div class="form-group">
						<input type="text" class="form-control" id="title" placeholder={props.state.assignment.title} onChange={props.handleChange} />
					</div>
					<div class="form-group">
						<textarea class="form-control" id="notes" rows="3" placeholder={props.state.assignment.notes} onChange={props.handleChange} />
					</div>
					<div class="form-row">
						<label class="col-2 col-form-label">Due Date:</label>
						<div class="col-10">
							<DatePicker class="form-control" id="dueDate" onChange={props.setDate} />
						</div>
					</div>
					<button type="submit" class="btn btn-primary">Done</button>
				</form>
			</div>
		);
	}
}

export default AddAssignment;
