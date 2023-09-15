import { Router } from "express";
import validateSchema from "../middlewares/validateSchema-middleware";
import { taskIdSchema, taskSchema, updateTaskSchema } from "../schemas/task-schema";
import taskController from "../controllers/task-controller";

const taskRouter = Router();
taskRouter.post('/tasks', validateSchema(taskSchema), taskController.create);
taskRouter.get('/tasks', taskController.readAll);
taskRouter.put('/tasks', validateSchema(updateTaskSchema), taskController.updateById);
taskRouter.delete('/tasks', validateSchema(taskIdSchema), taskController.deleteById);

export default taskRouter;