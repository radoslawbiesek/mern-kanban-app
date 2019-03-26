import React, { PropTypes } from 'react';
import NotesContainer from '../Note/NotesContainer';
import styles from './Lane.css';
import Edit from '../../components/Edit';

const Lane = (props) => {
  const { lane, laneNotes, updateLane, createNote, deleteLane, editLane } = props;
  const laneId = lane.id;

  return (
    <div className={styles.Lane}>
      <div className={styles.LaneHeader}>
        <div className={styles.LaneAddNote}>
          <button onClick={() => createNote({ task: "New Note"}, laneId)}>Add Note</button>
        </div>
        <Edit
          className={styles.LaneName}
          editing={lane.editing}
          value={lane.name}
          onValueClick={() => editLane(lane.id)}
          onUpdate={name => updateLane({ ...lane, name, editing: false })}
        />
        <div className={styles.LaneDelete}>
          <button onClick={() => deleteLane(laneId)}>Remove Lane</button>
        </div>
      </div>
      <NotesContainer
        notes={laneNotes}
        laneId={laneId}
      />
    </div>
  );
};

// Lane.propTypes = {
//   lane: PropTypes.object,
//   laneNotes: PropTypes.array,
//   addNote: PropTypes.func,
//   updateLane: PropTypes.func,
//   deleteLane: PropTypes.func,
// };

export default Lane;