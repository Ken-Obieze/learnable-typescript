import mongoose, { Schema, Document } from 'mongoose';

export interface RoomType extends Document {
  name: string;
}

const roomSchema: Schema = new Schema({
  name: {
    type: String,
    required: [true, 'Room name is required']
  },
  roomType: {
    type: Schema.Types.ObjectId,
    ref: 'RoomType',
    required: [true, 'Room type is required']
  },
  price: {
    type: Number,
    required: [true, 'Room price is required']
  }
});

export default mongoose.model('Room', roomSchema);
