import RoomType from '../models/roomTypeModel';
import { Request, Response } from 'express';

export const createRoomType = async (req: Request, res: Response) => {
    try {
        const roomType = new RoomType(req.body);
        await roomType.save();
        res.status(201).json(roomType);
    } catch (err: any) {
        res.status(400).json({ message: err.message });
    }
};

export const getAllRoomTypes = async (req: Request, res: Response) => {
    try {
        const roomTypes = await RoomType.find();
        res.json(roomTypes);
    } catch (err: any) {
        res.status(500).json({ message: err.message });
    }
};
