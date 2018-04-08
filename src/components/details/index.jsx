import { h } from 'preact'
import style from './style';

const Details = (data) => (
    <div class="modal fade">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">{data.title}</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <h2>{data.class}</h2>
                    <h3>{data.dueDate}</h3>
                    <p>{data.notes}</p>
                </div>
            </div>
        </div>
    </div>
);

export default Details;