import { Request, Response } from 'express';
import * as roomService from '../services/roomService';

export const createRoom = async (req: Request, res: Response) => {
    try {
        const room = await roomService.createRoom(req.body);
        res.status(201).json(room);
    } catch (err: any) {
        res.status(400).json({ message: err.message });
    }
};

export const getAllRooms = async (req: Request, res: Response) => {
    try {
        const rooms = await roomService.getAllRooms();
        res.json(rooms);
    } catch (err: any) {
        res.status(500).json({ message: err.message });
    }
};

export const updateRoom = async (req: Request, res: Response) => {
    try {
        const room = await roomService.updateRoom(req.params.roomId, req.body);
        res.json(room);
    } catch (err: any) {
        res.status(400).json({ message: err.message });
    }
};

export const deleteRoom = async (req: Request, res: Response) => {
    try {
        await roomService.deleteRoom(req.params.roomId);
        res.json({ message: 'Room deleted successfully' });
    } catch (err: any) {
        res.status(500).json({ message: err.message });
    }
};

export const getRoomById = async (req: Request, res: Response) => {
    try {
        const room = await roomService.getRoomById(req.params.roomId);
        if (!room) {
            return res.status(404).json({ message: 'Room not found' });
        }
        res.json(room);
    } catch (err: any) {
        res.status(500).json({ message: err.message });
    }
};
