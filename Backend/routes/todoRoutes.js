const express=require("express");
const todoController=require("../controller/todoController");
const authMiddleware=require("../middleware/authMiddleware");

const router=express.Router();
router.post('/tasks', authMiddleware.protect, todoController.addTask);
router.get('/tasks', authMiddleware.protect, todoController.getTask);

module.exports = router;

