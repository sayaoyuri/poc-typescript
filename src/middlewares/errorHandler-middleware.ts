import { ErrorRequestHandler, NextFunction, Request, Response } from "express";
import { Error } from "../protocols/error-protocol";
import httpStatus from "http-status";

export const errorHandler = (error: Error | TypeError, req: Request, res: Response, next: NextFunction) => {
  console.log(error);

  if(error.name === 'NotFound') return res.status(httpStatus.NOT_FOUND).send(error.message);
  if(error.name === 'BadRequest') return res.status(httpStatus.BAD_REQUEST).send(error.message);

  return res.status(httpStatus.INTERNAL_SERVER_ERROR).send("Sorry, something went wrong!");
};