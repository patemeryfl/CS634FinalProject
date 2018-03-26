import { h, Component } from 'preact';
import style from './style';

export default class Assignments extends Component {
	state = {
		assignments: [
			{
				title: 'Assignment 1',
				course: 'CS634',
				dueDate: '12/31/2018'
			},
			{
				title: 'Assignment 1',
				course: 'CS634',
				dueDate: '12/31/2018'
			}
		]
	}
	
	render(props, state) {
		return (
			<div class={style.container}>
				<h1>Assignments</h1>
				<ul>
					<li>Test</li>
					{state.assignments.map(assignment => (
						<li>
							<h2>{assignment.title}</h2>
							<h4>{assignment.course}</h4>
							<p>{assignment.dueDate}</p>
						</li>
					))}
				</ul>
			</div>
		);
	}
}