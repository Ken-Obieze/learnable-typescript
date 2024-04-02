import mongoose, { Schema, Document } from 'mongoose';

export interface User extends Document {
  username: string;
  password: string;
  role: 'guest' | 'admin';
}

const userSchema: Schema = new Schema({
  username: { 
    type: String, 
    unique: true, 
    required: true
  },
  password: { 
    type: String,
    required: true 
  },
  role: { 
    type: String, 
    enum: ['guest', 'admin'], 
    default: 'guest'
  }
});

export default mongoose.model<User>('User', userSchema);
