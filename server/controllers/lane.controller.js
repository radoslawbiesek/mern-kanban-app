import Lane from '../models/lane';
import deleteNote from '../controllers/note.controller';
import uuid from 'uuid';

export function getSomething(req, res) {
  return res.status(200).end();
}

export function getLanes(req, res) {
  Lane.find().exec((err, lanes) => {
    if (err) {
      res.status(500).send(err);
    }
  res.json( { lanes });
  });
}

export function deleteLane(req, res) {
  Lane.findOne( { id: req.params.laneId }).exec((err, lane) => {
    if (err) {
      res.status(500).send(err);
    }

    lane.remove(() => {
      res.status(200).end();
    });
  });
}

export function updateLane(req, res) {
  if (!req.body.name) {
    res.status(403).end();
  }

  Lane.findOneAndUpdate({"id": req.params.laneId}, {"name": req.body.name}, function(err, updated) {
    if (err) {
      res.status(500).send(err);
    }
    res.json(updated);
  })
}

export function addLane(req, res) {
  if (!req.body.name) {
    res.status(403).end();
  }

  const newLane = new Lane(req.body);

  newLane.notes = [];

  newLane.id = uuid();
  newLane.save((err, saved) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json(saved);
  });
}