import Note from '../models/note';
import lane from '../models/lane';
import uuid from 'uuid';

export function getSomething(req, res) {
  return res.status(200).end();
}

export function addNote(req, res) {
  const { note, laneId } = req.body;

  if (!note || !note.task || !laneId) {
    res.status(400).end();
  }

  const newNote = new Note({
    task: note.task,
  })
  newNote.id = uuid();
  
  newNote.save((err, saved) => {
    if (err) {
      res.status(500).send(err);
    }
    lane.findOne({ id: laneId})
      .then(lane => {
        lane.notes.push(saved);
        return lane.save();
      })
      .then(() => {
        res.json(saved);
      });
  });
}

export function deleteNote(req, res) {
  Note.findOne( { id: req.params.noteId }).exec((err, note) => {

    if (err) {
      res.status(500).send(err);
    }

    lane.findOne({"notes" : { $in: [note._id] } } )
      .then(lane => {
        const notesCopy = lane.notes.filter(noteCopy => noteCopy.id !== note.id);
        lane.notes = notesCopy;
        return lane.save();
      })

    note.remove(() => {
      res.status(200).end();
    });
  });
}

export function getNotes(req, res) {
  Note.find().exec((err, notes) => {
    if (err) {
      res.status(500).send(err);
    }
  res.json( { notes });
  });
}

export function updateNote(req, res) {
  if (!req.body.note.task) {
    res.status(403).end();
  }

  Note.findOneAndUpdate({"id": req.params.noteId}, {"task": req.body.note.task}, function(err, updated) {
    if (err) {
      res.status(500).send(err);
    }
    res.json(updated);
  })
}