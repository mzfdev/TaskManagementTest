const { Router } = require("express");
const {
  createTask,
  getTaskByUser,
  updateTask,
  deleteTask,
} = require("../controllers/taskController");
const authenticate = require("../middlewares/authenticate");
const router = Router();

router.post("/task", authenticate, createTask);
router.get("/tasks/:id", authenticate, getTaskByUser);
router.put("/task/:id", authenticate, updateTask);
router.delete("/task/:id", authenticate, deleteTask);

module.exports = router;
