import { Router } from "express";
import taskRouter from "./task-router";

const router = Router();
router.use(taskRouter);

export default router;