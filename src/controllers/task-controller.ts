import { Request, Response } from "express";
import { CreateTask, UpdateTask } from "../protocols/task-protocol";
import httpStatus from 'http-status';
import taskService from "../services/task-service";
import errors from "../protocols/error-protocol";

async function create (req: Request, res: Response) {
  const { name, person, dueDate } = req.body as CreateTask;

  const task = { name, person, dueDate };

  await taskService.create(task);

  return res.sendStatus(httpStatus.CREATED);
};

async function readAll (req: Request, res: Response)  {
  const tasks = await taskService.readAll();

  return res.status(httpStatus.OK).send(tasks);
};

async function updateById (req: Request, res: Response)  {
  const { id, status } = req.body as UpdateTask;

  const task = { id, status };

  await taskService.updateById(task);

  return res.sendStatus(httpStatus.OK);
};

async function deleteById (req: Request, res: Response)  {
  const { id } = req.body as UpdateTask;

  await taskService.deleteById(Number(id));

  return res.sendStatus(httpStatus.OK);
};

const taskController = {
  create,
  readAll,
  updateById,
  deleteById
};

export default taskController;