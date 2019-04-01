import callApi from "../../util/apiCaller";

// Export Constants
export const CREATE_NOTE = 'CREATE_NOTE';
export const UPDATE_NOTE = 'UPDATE_NOTE';
export const DELETE_NOTE = 'DELETE_NOTE';
export const EDIT_NOTE = 'EDIT_NOTE';
export const CREATE_NOTES = 'CREATE_NOTES';
export const MOVE_WITHIN_LANE = 'MOVE_NOTE';

// Export Actions
export function createNote(note, laneId) {
    return {
        type: CREATE_NOTE,
        laneId,
        note,
    };
}

export function createNoteRequest(note, laneId) {
    return dispatch => {
        callApi('notes', 'post', {note, laneId}).then(noteResp => {
            dispatch(createNote(noteResp, laneId));
        });
    }
}

export function updateNote(note) {
    return {
        type: UPDATE_NOTE,
        note
    };
}

export function updateNoteRequest(note) {
    return dispatch => {
        callApi(`notes/${note.id}`, 'put', { note }).then((note) => dispatch(updateNote(note)));
    };
}

export function deleteNote(noteId, laneId) {
    return {
        type: DELETE_NOTE,
        noteId,
        laneId,
    };
}

export function deleteNoteRequest(noteId, laneId) {
    return dispatch => {
        callApi(`notes/${noteId}`, 'delete').then(() => dispatch(deleteNote(noteId, laneId)));
    };
}

export function editNote(noteId) {
    return {
        type: EDIT_NOTE,
        noteId
    };
}

export function createNotes(notes) {
    return {
        type: CREATE_NOTES,
        notes,
    };
}

export function moveWithinLane(laneId, targetId, sourceId) {
    return {
        type: MOVE_WITHIN_LANE,
        laneId,
        targetId,
        sourceId
    };    
}

