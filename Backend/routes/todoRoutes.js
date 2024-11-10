const express=require("express");
const todoController=require("../controller/todoController");
const authMiddleware=require("../middleware/authMiddleware");

const router=express.Router();

router.post('/tasks', authMiddleware.protect, todoController.addTask);
router.get('/tasks', authMiddleware.protect, todoController.getTask);
router.delete('/tasks/:id', authMiddleware.protect, todoController.deleteTask);
router.put('/tasks/:id', authMiddleware.protect, todoController.updateTask);
router.get('/tasks/find', authMiddleware.protect, todoController.searchTask);
router.get('/tasks/:id', authMiddleware.protect, todoController.getTaskById);

module.exports = router;

