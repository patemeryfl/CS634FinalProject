import { h } from 'preact';
import style from './style';

const Details = ({ data, actions }) => (
	<div class="card">
		<div class={style.header}>
			<h5 class="card-title">{data.title}</h5>
			<button type="button" class="close" onClick={actions.showDetails} aria-label="Close">
				<span aria-hidden="true">&times;</span>
			</button>
		</div>
		<div class="card-body">
			<form onSubmit={actions.handleSubmit} action="javascript:">
				<h6 class="card-subtitle mb-2 text-muted">{data.course}</h6>
				<p class="card-text">{data.title} </p>
				<div class="form-group">
					<textarea class="form-control" id="notes" rows="3" value={data.notes} />
				</div>
			</form>
		</div>
	</div>
);

export default Details;