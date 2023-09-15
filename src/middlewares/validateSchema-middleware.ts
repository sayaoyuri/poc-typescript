import Joi from "joi"
import { NextFunction, Request, Response } from "express";
import errors from "../protocols/error-protocol";

const validateSchema = (schema: Joi.Schema) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate( req.body, { abortEarly: false } );

    const err = error?.details.map(e => e.message).join('\n');
    
    if(error) throw errors.badRequest(err);

    next();
  };
};

export default validateSchema;