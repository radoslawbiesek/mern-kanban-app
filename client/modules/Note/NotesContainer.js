import { connect } from 'react-redux';
import noteActions, { deleteNoteRequest, updateNoteRequest } from './NoteActions';
import Notes from './Notes';

const mapDispatchToProps = {
    ...noteActions,
    deleteNote: deleteNoteRequest,
    updateNote: updateNoteRequest,
};

export default connect(
    null, 
    mapDispatchToProps
)(Notes);