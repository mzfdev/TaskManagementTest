const pool = require('../dbconnection')

//Creating a new task 
const createTask = async(req,res)=>{
    try{
        const {task_name, description, user_id} = req.body;
        const response = await pool.query('insert into task (task_name, description, user_id) values ($1, $2, $3)', [task_name, description, user_id]);
        console.log(response);
        res.status(201).json({
            message: 'task created',
            body : {
                tasks : {task_name, description, user_id}
            }
        });
    }catch(error){
        res.status(500).json({
            message:'Internal Server error'
        })
    }
}

//Get all tasks by user
const getTaskByUser = async(req, res) => {
    try{
        const { id } = req.params;
        const response = await pool.query('select * from task where user_id = $1', [id]);
        console.log(response.rows);
        res.status(200).json(response.rows);
    }catch(error){
        res.status(500).json({
            message:'Internal Server error'
        })
    }
}

//Update task by id
const updateTask = async(req, res) => {
    try{
        const id = req.params.id
        const {task_name, description} = req.body;
        const response = await pool.query('UPDATE task SET task_name = $1, description = $2 WHERE id = $3', [task_name, description, id]);
        res.json(`Task with id: ${id} was updated`)
    }catch(error){
        res.status(500).json({
            message:'Internal Server error'
        })
    }
}

//Deleting task by id
const deleteTask = async(req,res)=>{
    try{
        const id = req.params.id;
        const response = await pool.query('DELETE FROM task WHERE id = $1', [id]);
        res.json(`task with id: ${id} was deleted`)
    }catch(error){
        res.status(500).json({
            message:'Internal Server error'
        })
    }
}

module.exports = {
    createTask,
    getTaskByUser,
    updateTask,
    deleteTask
}