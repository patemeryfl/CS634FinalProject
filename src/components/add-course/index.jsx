import { h } from 'preact';
import style from './style';
import icons from '../../assets/svgs';

const courseColors = [ '#3F51B5', '#673AB7', '#2196F3', '#B71C1C', '#E91E63', '#01579B', '#4CAF50', '#FFEB3B'];

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
				<button>
					<svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24">
						<path d="" />
					</svg>
				</button>
			</nav>
		</header>
		<article>
			<div class="form-group row">
				<div class="col-sm-4">
					<input type="text" class="form-control" id="number" placeholder="Course Number" onChange={props.handleChange} />
				</div>
				<div class="col-sm-8">
					<input type="text" class="form-control" id="name" placeholder="Course Name" onChange={props.handleChange} />
				</div>
			</div>
			<div class="form-group row">
				<div class="col-sm-12">
					<input type="text" class="form-control" id="teacher" placeholder="Teacher" onChange={props.handleChange} />
				</div>
			</div>
			<div class="form-group row">
				<div class="col-sm-12">
					<input type="email" class="form-control" id="email" placeholder="Email" onChange={props.handleChange} />
				</div>
			</div>
			<div class="form-group row">
				<div class="col-sm-12">
					<textarea class="form-control" id="notes" placeholder="Notes" rows="3" onChange={props.handleChange} />
				</div>
			</div>
			<footer>
				{courseColors.slice(0, 4).map(color => (
					<button onClick={props.handleChange} id="color" value={color} style={{ backgroundColor: color }} />
				))}
				{courseColors.slice(4, 8).map(color => (
					<button onClick={props.handleChange} id="color" value={color} style={{ backgroundColor: color }} />
				))}
			</footer><br />
			<button onClick={props.handleSubmit} class="btn btn-primary">Done</button>
		</article>
	</div>
);

export default AddCourse;
