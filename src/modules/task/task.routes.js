import { Router } from "express";
import { getTasks , createTasks, getIdTasks, deleteTasks} from './task.controller.js'

const router = Router();

router.get('/tasks', getTasks)
router.post('/tasks', createTasks)
router.put('/tasks/:id')
router.get('/tasks/:id', getIdTasks)
router.delete('/tasks/:id', deleteTasks)

export default router
