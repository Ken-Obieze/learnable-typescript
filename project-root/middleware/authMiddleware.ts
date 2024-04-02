import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { User } from '../models/userModel';

// Define a new interface extending the Request interface
interface AuthenticatedRequest extends Request {
    user?: User;
}

export function authenticateToken(req: AuthenticatedRequest, res: Response, next: NextFunction) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (token == null) return res.sendStatus(401);

  jwt.verify(token, process.env.JWT_SECRET as string, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user as User;
    next();
  });
}

export function authorizeRoles(roles: string[]) {
  return (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
    if (!roles.includes((req.user as User).role)) {
      return res.status(403).json({ message: 'Unauthorized' });
    }
    next();
  };
}
