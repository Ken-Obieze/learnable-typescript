import Joi from 'joi';
import Room from '../models/roomModel';

// Joi schema for room validation
const roomSchema = Joi.object({
    name: Joi.string().required(),
    roomType: Joi.string().required(),
    price: Joi.number().required()
});

// Function to create a room
export const createRoom = async (roomData: any) => {
    // Validate room data
    const { error } = roomSchema.validate(roomData);
    if (error) {
        throw new Error(error.details[0].message);
    }

    // Create new room instance
    const room = new Room(roomData);

    // Save room to database
    await room.save();

    return room;
};

// Function to fetch all rooms
export const getAllRooms = async () => {
    return Room.find();
};

// Function to update a room
export const updateRoom = async (roomId: string, roomData: any) => {
    // Validate room data
    const { error } = roomSchema.validate(roomData);
    if (error) {
        throw new Error(error.details[0].message);
    }

    // Update room in database
    return Room.findByIdAndUpdate(roomId, roomData, { new: true });
};

// Function to delete a room
export const deleteRoom = async (roomId: string) => {
    return Room.findByIdAndDelete(roomId);
};

// Function to fetch a room by ID
export const getRoomById = async (roomId: string) => {
    return Room.findById(roomId);
};
