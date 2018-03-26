import { h, Component } from 'preact';
import style from './style';

export default class Courses extends Component {
	state = {
		courses: [
			{
				code: 'CS634',
				teacher: 'Kanabar'
			}
		]
	}
	render(props, state) {
		return (
			<div class={style.container}>
				<h1>Courses</h1>
				{state.courses.map(course => (
					<div>
						<h2>{course.code}</h2>
						<p>{course.teacher}</p>
					</div>
				))}
			</div>
		);
	}
}
