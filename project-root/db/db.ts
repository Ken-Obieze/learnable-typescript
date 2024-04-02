import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const uri: string | undefined = process.env.MONGODB_URI;
if (!uri) {
    console.error('MongoDB URI not found in environment variables');
    process.exit(1);
}

mongoose.connect(uri)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('MongoDB connection error:', err));

export default mongoose.connection;
