import { pool } from '../../config/db.js'
// import pool from '../../config/db.js'  esto tambien serivria pero lo exportarias tu objeto con export defauld


const getTasks = async (req, res) => {
    try {

        const [result] = await pool.query("select* from tasks")
        res.json(result)
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }

}

const createTasks = async (req, res) => {

    try {
        const { title, description } = req.body
        const [result] = await pool.query(
            "INSERT INTO tasks(title, description) VALUES (?,?)",
            [title, description]
        )
        res.json({
            id: result.insertId,
            title,
            description

        }
        )
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }

}


const updateTasks = async (req, res) => {
    const { title, description } = req.body;
    const [result] = await pool.query("select * from tasks where id = ? ", [req.body, req.params.id])
    if (result.length == 0) {
        return res.status(404).json({ message: "task no foud" })
    } else {
        pool.query("update tasks set title = ? , set description = ? where id=?")
    }
    res.json({
        result
    })
}


const updateTasks1 = async (req, res) => {
    try {
        const { title, description } = req.body
        const { id } = req.params
        const [result] = await pool.query("UPDATE tasks SET ? WHERE id= ?", [req.body, req.params.id])
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: "task no found" })
        }
        res.json({
            id,
            title,
            description

        }
        )
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }

}



const getIdTasks = async (req, res) => {

    try {
        const [result] = await pool.query("select * from tasks where id = ? ", [req.params.id])
        if (result.length == 0) {

            return res.status(404).json({ message: "task no found" })
        }

        res.json(result[0])
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }

}


const deleteTasks = async (req, res) => {
    try {
        const [result] = await pool.query("delete from tasks where id= ?", [req.params.id])
        if (result.affectedRows === 0) {

            return res.status(404).json({ message: "task no found" })
        }

        return res.sendStatus(204)
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }


}

export {
    getTasks, createTasks, getIdTasks, deleteTasks, updateTasks, updateTasks1
}