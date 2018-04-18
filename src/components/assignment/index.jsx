/* eslint react/jsx-no-bind: 0 */
/* eslint no-unused-vars: 0 */
import { h, Component } from 'preact';
import Details from '../details';
import style from './style';

class Assignment extends Component {

	state = {
		showDetails: false
	}
	actions = {
		showDetails: () => {
			this.setState({ showDetails: !this.state.showDetails });
		}
	}

	render(props) {
		const { title, course, dueDate, submitted, color } = props.data;
		let status = `Due ${dueDate}`;
		if (submitted) status = 'Submitted';
		return (
			this.state.showDetails ? <Details data={props.data} actions={this.actions} /> :

				<div class="card" onClick={this.actions.showDetails}>
					<div class="card-body">
						<article>
							<div>
								<h5 class="card-title">{title}</h5>
								<h6 class="card-subtitle mb-2 text-muted">{course}</h6>
								<p class="card-text">{status}</p>
							</div>
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
								<circle cx="12" cy="12" r="12" fill={color} />
							</svg>
						</article>
						{props.showButtons ?
							<footer>
								<button class="btn btn-danger" onClick={() => props.actions.removeAssigment(props.index)}>Remove</button>
								{status !== 'Submitted' ?
									<button class="btn btn-success" onClick={() => props.actions.submitAssigment(props.index)}>Submit</button>
									: <div />}
							</footer> : <div />
						}
					</div>
				</div>

				// <div class="card" onClick={this.actions.showDetails}>
				// 	<div class="card-body">
				// 		<h5 class="card-title">{title}</h5>
				// 		<h6 class="card-subtitle mb-2 text-muted">{course}</h6>
				// 		<p class="card-text">{status}</p>
				// 		{showButtons ?
				// 			<footer>
				// 				<button class="btn btn-danger" onClick={() => props.actions.removeAssigment(props.index)}>Remove</button>
				// 				{status !== 'Submitted' ?
				// 					<button class="btn btn-success" onClick={() => props.actions.submitAssigment(props.index)}>Submit</button>
				// 					: <div />}
				// 			</footer> : <div />
				// 		}
				// 	</div>
				// </div>
		);
	}
}

export default Assignment;