import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import db from './db/db';
import roomRoutes from './routes/roomRoutes';
import userRoutes from './routes/userRoutes';
import cors from 'cors';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Routes
app.use('/api/v1/rooms', roomRoutes);
app.use('/api/v1/users', userRoutes);

// Error handling middleware
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
