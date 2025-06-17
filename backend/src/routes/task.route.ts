import express from 'express';
import { createTask, deleteTask, getSingleTask, getTasks, updateTask } from '../controllers/task.controller';
const router = express.Router();

router.get('/tasks', getTasks)
router.get('/tasks/:id', getSingleTask)
router.post('/tasks', createTask)
router.put('/tasks/:id', updateTask)
router.delete('/tasks/:id', deleteTask)

export default router;