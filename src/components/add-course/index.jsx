import { h } from 'preact';
import style from './style';
import icons from '../../assets/svgs';

const AddCourse = (props) => (
	<div class={style.container}>
		<header class={style.header}>
			<nav>
				<button onClick={props.toggleView}>
					<svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24">
						<path d={icons.back} />
					</svg>
				</button>
				<h2>Add Course</h2>
				<div />
			</nav>
		</header>
		<form onSubmit={props.handleSubmit} action="javascript:">
			<div class="form-group">
				<label for="course">Course</label>
				<select class="form-control" id="course">
					{props.courses.map(course => (
						<option>{course.name}</option>
					))}
				</select>
			</div>
			<div class="form-group">
				<label for="title">Assignment Title</label>
				<input type="text" class="form-control" name="title" placeholder="Assignment Title" onChange={props.handleChange} />
			</div>
			<div class="form-group">
				<label for="notes">Notes</label>
				<textarea class="form-control" id="notes" rows="3" />
			</div>
			Date Picker<br />
			DatePicket<br />
			<button type="submit">
					Done
			</button>
		</form>
	</div>
);

export default AddCourse;
