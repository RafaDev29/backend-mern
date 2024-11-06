import { Router } from "express";
import { getTasks , createTasks, getIdTasks, deleteTasks, updateTasks1} from './task.controller.js'

const router = Router();

router.get('/tasks', getTasks)
router.post('/tasks', createTasks)
router.put('/tasks/:id', updateTasks1)
router.get('/tasks/:id', getIdTasks)
router.delete('/tasks/:id', deleteTasks)

export default router
