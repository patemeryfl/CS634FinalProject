/* eslint react/jsx-no-bind: 0 */
import { h } from 'preact';

const Assignment = (props) => {
	const { title, course, dueDate, submitted } = props.data;
	let status = `Due ${dueDate}`;
	if (submitted) status = 'Submitted';
	return (
		<div class="card" onClick={props.actions.showDetails}>
			<div class="card-body">
				<h5 class="card-title">{title}</h5>
				<h6 class="card-subtitle mb-2 text-muted">{course}</h6>
				<p class="card-text">{status}</p>
				<footer>
					<button class="btn btn-danger" onClick={() => props.actions.removeAssigment(props.index)}>Remove</button>
					<button class="btn btn-success" onClick={() => props.actions.submitAssigment(props.index)}>Submit</button>
				</footer>
			</div>
		</div>
	);
};

export default Assignment;