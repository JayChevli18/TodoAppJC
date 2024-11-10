const express=require("express");
const todoController=require("../controller/todoController");
const authMiddleware=require("../middleware/authMiddleware");

const router=express.Router();
router.post('/tasks', authMiddleware.protect, todoController.addTask);

module.exports = router;

