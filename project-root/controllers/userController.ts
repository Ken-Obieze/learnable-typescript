import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import UserService from '../services/userService';
import { Request, Response } from 'express';

class UserController {
    private userService = new UserService();

    async registerUser(req: Request, res: Response) {
        try {
            const { username, password, role } = req.body;

            // Check if username is already taken
            const existingUser = await this.userService.getUserByUsername(username);
            if (existingUser) {
                return res.status(400).json({ message: 'Username already exists' });
            }

            // Hash the password
            const hashedPassword = await bcrypt.hash(password, 10);

            // Create user
            const newUser = await this.userService.createUser(username, hashedPassword, role);

            res.status(201).json(newUser);
        } catch (error: any) {
            res.status(500).json({ message: error.message });
        }
    }

    async getUserByUsername(req: Request, res: Response) {
        try {
            const { username } = req.params;
            const user = await this.userService.getUserByUsername(username);
            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }
            res.json(user);
        } catch (error: any) {
            res.status(500).json({ message: error.message });
        }
    }
}

export default new UserController();
