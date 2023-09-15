import Joi from "joi";
import { CreateTask, UpdateTask } from "../protocols/task-protocol";

export const taskSchema = Joi.object<CreateTask>({
  name: Joi.string().min(3).max(50).required(),
  person: Joi.string().min(3).max(20).required(),
  status: Joi.boolean(),
  createdAt: Joi.date(),
  dueDate: Joi.date().required()
});

export const updateTaskSchema = Joi.object<UpdateTask>({
  id: Joi.number().min(1).required(),
  status: Joi.boolean().required()
});

export const taskIdSchema = Joi.object<UpdateTask>({
  id: Joi.number().min(1).required(),
});