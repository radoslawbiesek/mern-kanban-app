import { connect } from 'react-redux';
import Notes from './Notes';
import * as noteActions from './NoteActions';
import { deleteNoteRequest, updateNoteRequest, movieWithinLane } from './NoteActions'

const mapDispatchToProps = {
    ...noteActions,
    updateNote: updateNoteRequest,
    deleteNote: deleteNoteRequest,
    movieWithinLane
};

export default connect(
    null, 
    mapDispatchToProps
)(Notes);