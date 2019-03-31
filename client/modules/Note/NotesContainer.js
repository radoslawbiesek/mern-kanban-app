import { connect } from 'react-redux';
import Notes from './Notes';
import { deleteNoteRequest, editNote, updateNoteRequest, movieWithinLane } from './NoteActions'

const mapDispatchToProps = {
    onValueClick: editNote,
    onUpdate: updateNoteRequest,
    onDelete: deleteNoteRequest,
    movieWithinLane,
};


export default connect(
    null, 
    mapDispatchToProps
)(Notes);