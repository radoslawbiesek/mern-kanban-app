import { connect } from 'react-redux';
import Lane from './Lane';
import * as laneActions from './LaneActions';
import { createNote } from '../Note/NoteActions';

const mapStateToProps = (state, ownProps) => {
    return {
        laneNotes: ownProps.lane.notes.map(noteId => state.notes.find(note => note.id === noteId))
    };
};

const mapDispatchToProps = (state) => {
    return {
        ...laneActions,
        createNote
    };
};

export default connect(
    mapDispatchToProps,
    mapStateToProps
)(Lane);