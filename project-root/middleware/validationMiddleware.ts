import { Request, Response, NextFunction } from 'express';
import Joi from 'joi';

export function validateData(schema: Joi.ObjectSchema<any>) {
  return (req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }
    next();
  };
}
