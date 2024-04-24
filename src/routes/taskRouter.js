const { Router } = require('express');
const { createTask, getTaskByUser, updateTask, deleteTask } = require('../controllers/taskController');
const router = Router();

router.post('/task', createTask)
router.get('/tasks/:id', getTaskByUser);
router.put('/task/:id',updateTask)
router.delete('/task/:id', deleteTask);

module.exports = router;