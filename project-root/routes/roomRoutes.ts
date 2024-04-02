import express from 'express';
import * as roomController from '../controllers/roomController';
import { authenticateToken, authorizeRoles } from '../middleware/authMiddleware';

const router = express.Router();

// Routes for Rooms
router.post('/', authenticateToken, authorizeRoles(['admin']), roomController.createRoom);
router.get('/', roomController.getAllRooms);
router.patch('/:roomId', authenticateToken, authorizeRoles(['admin']), roomController.updateRoom);
router.delete('/:roomId', authenticateToken, authorizeRoles(['admin']), roomController.deleteRoom);
router.get('/:roomId', roomController.getRoomById);

export default router;
