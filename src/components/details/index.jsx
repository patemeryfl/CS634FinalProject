import { h } from 'preact'
import style from './style';

const showDetails = false;

const Details = ({visible, data, actions, courses}) => {
    let showDetails = visible;
    return (
        <div class={showDetails ? "" : "modal-content"}>
            <div class="modal-header">
                <h5 class="modal-title">{data.title}</h5>
                <button type="button" class="close" onClick={() => showDetails = !showDetails} aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <form onSubmit={actions.handleSubmit} action="javascript:">
                    <div class="form-group">
                        <p class="modal-text">{data.course}</p>
                    </div>
                    <div class="form-group">
                        <p class="modal-text">{data.title} </p>
                    </div>
                    <div class="form-group">
                        <textarea class="form-control" id="notes" rows="3" value={data.notes} />
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Details;