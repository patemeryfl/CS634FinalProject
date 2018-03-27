import { h, Component } from 'preact';
import { connect } from 'preact-redux';
import Header from '../../components/header';
import style from './style';

class Assignments extends Component {
	state = {
		assignments: [	]
	}
	
	render(props, state) {
		return (
			<div>
				<Header title="Assignments" />
				<div class={style.container}>
					<ul>
						<li>Test</li>
						{this.props.Assignments.map(assignment => (
							<li>
								<h2>{assignment.title}</h2>
								<h4>{assignment.course}</h4>
								<p>{assignment.dueDate}</p>
							</li>
						))}
					</ul>
				</div>
			</div>
		);
	}
}
export default connect(state => state)(Assignments);