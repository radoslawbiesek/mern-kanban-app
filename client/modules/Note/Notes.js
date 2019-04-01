import React, { PropTypes } from 'react';
import Note from './Note';
import styles from './Notes.css';
import Edit from '../../components/Edit';
import { updateNote, deleteNote, editNote } from './NoteActions';

const Notes = ({ notes, laneId, editNote, updateNote, deleteNote, moveWithinLane }) => (
  <ul className={styles.notes}>{notes.map((note) =>
    <Note
      id={note.id}
      key={note.id}
      moveWithinLane={moveWithinLane}
      editing={note.editing}
    >
      <Edit 
        editing={note.editing}
        value={note.task}
        onValueClick={() => editNote(note.id)}
        onUpdate={(task) => updateNote({
          ...note,
          task,
          editing: false,
        })}
        onDelete={() => deleteNote(note.id, laneId)}
      />
    </Note>
    )}
  </ul>
);

// Notes.propTypes = {
//   notes: PropTypes.array,
//   deleteNote: PropTypes.func,
//   updateNote: PropTypes.func,
//   laneId: PropTypes.string,
//   editNote: PropTypes.func,
//   notes: PropTypes.array,
// };

export default Notes;