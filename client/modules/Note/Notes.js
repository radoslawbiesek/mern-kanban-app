import React, { PropTypes } from 'react';
import Note from './Note';
import styles from './Notes.css';
import Edit from '../../components/Edit';
import { updateNote, deleteNote } from './NoteActions';

const Notes = ({ notes, laneId, editNote, updateNote, deleteNote }) => {
  return (<ul className={styles.notes}>{notes.map((note) =>
    <Note
      id={note.id}
      key={note.id}
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
        onDelete={() => deleteNote(note.id, lanId)}
      />
    </Note>
  )}</ul>);
};

// Notes.propTypes = {
//   notes: PropTypes.array,
//   deleteNote: PropTypes.func,
//   updateNote: propTypes.func,
//   laneId: propTypes.string,
//   editNote: propTypes.func,
//   notes: propTypes.array,
// };

export default Notes;