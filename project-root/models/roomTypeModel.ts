import mongoose, { Schema, Document } from 'mongoose';

const roomTypeSchema: Schema = new Schema({
  name: {
    type: String,
    required: [true, 'Room type name is required']
  }
});

export default mongoose.model('RoomType', roomTypeSchema);
