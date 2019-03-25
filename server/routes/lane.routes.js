import { Router } from 'express';
import * as LaneController from '../controllers/lane.controller';

const router = new Router();

// Add new lane
router.route('/lanes').post(LaneController.addLane);

// Get all lanes
router.route('/lanes').get(LaneController.getLanes);

// Delete lane
router.route('/lanes/:laneId').delete(LaneController.deleteLane);

// Update lane name
router.route('lanes/:laneId').put(LaneController.updateLane);

export default router;
