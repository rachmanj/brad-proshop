import express from 'express';
const router = express.Router();
import { getProjects } from '../controllers/projectController.js';
import { protect, admin } from '../middleware/authMiddleware.js';

router.route('/').get(getProjects);

export default router;
