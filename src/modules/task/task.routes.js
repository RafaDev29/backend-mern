import { Router } from "express";
import { getTasks , createTasks} from './task.controller.js'

const router = Router();

router.get('/tasks', getTasks)
router.post('/tasks', createTasks)
router.put('/tasks/:id')
router.get('/tasks/:id')
router.delete('/tasks/:id')

export default router
