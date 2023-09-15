import { db } from "../database/db-connection";
import { CreateTask, Task, UpdateTask } from "../protocols/task-protocol";

async function create (task: CreateTask) {
  const { name, person, dueDate } = task;

  return await db.query<CreateTask>(`
    INSERT INTO tasks (name, person, "dueDate") VALUES ($1, $2, $3);
  `, [name, person, dueDate]);
};

async function readAll () {
  return await db.query<Task>(`SELECT * FROM tasks;`);
};

async function updateById (task: UpdateTask) {
  const { id, status } = task;

  return await db.query(`UPDATE tasks SET status=$1 WHERE id=$2;`, [status, id]);
};

async function deleteById (id: number) {
  return await db.query(`DELETE FROM task WHERE id=$1`, [id]);
}

const taskRepository = { 
  create,
  readAll,
  updateById,
  deleteById 
};

export default taskRepository;