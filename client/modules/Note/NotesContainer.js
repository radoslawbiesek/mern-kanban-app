import { connect } from 'react-redux';
import * as noteActions from './NoteActions';
import Notes from './Notes';
import { updateNoteRequest, deleteNoteRequest } from './NoteActions';

const mapDispatchToProps = {
    ...noteActions,
    updateNote: updateNoteRequest,
    deleteNote: deleteNoteRequest,
};

export default connect(
    null, 
    mapDispatchToProps
)(Notes);