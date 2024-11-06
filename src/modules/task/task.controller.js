import {pool} from '../../config/db.js'
// import pool from '../../config/db.js'  esto tambien serivria pero lo exportarias tu objeto con export defauld
 const getTasks = (req, res) =>{
     res.send('obteniendo tareas')
}

const createTasks = (req, res) =>{
    console.log(req.body)
     res.send('tarea creada')
}


const updateTasks = (req, res) =>{
     
}


const getIdTasks = (req, res) =>{
     
}

const deleteTasks = (req, res) =>{
     
}

export  {
    getTasks, createTasks
}