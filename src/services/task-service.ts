import errors from "../protocols/error-protocol";
import { CreateTask, UpdateTask } from "../protocols/task-protocol";
import taskRepository from "../repositories/task-repository";

async function create (task: CreateTask) {
  return await taskRepository.create(task);
};

async function readAll ()  {
  const tasks = await taskRepository.readAll()

  return tasks.rows;
};

async function updateById (task: UpdateTask)  {
  const update = await taskRepository.updateById(task)

  if(update.rowCount === 0) throw errors.notFound("Task");
};

async function deleteById (id: number)  {
  const del = await taskRepository.deleteById(id);

  if(del.rowCount === 0) throw errors.notFound("Task");
};

const taskService = {
  create,
  readAll,
  updateById,
  deleteById
};

export default taskService;