import express from 'express';
import UserController from '../controllers/userController';

const router = express.Router();

// Route for user registration
router.post('/register', UserController.registerUser);

// Route for getting user by username
router.get('/:username', UserController.getUserByUsername);

export default router;
