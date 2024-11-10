const Todo = require("../model/todoModel");

exports.addTask = async (req, res) => {
    try {
        const { taskName, taskDesc, taskStatus } = req.body;

        if (!taskName || !taskDesc || !taskStatus) {
            return res.status(400).json({ success: false, message: 'All fields are required' });
        }
        const taskDateTime=new Date();

        const task = await Todo.create({
            user: req.user._id,
            taskName,
            taskDesc,
            taskDateTime,
            taskStatus
        });

        res.status(201).json({ success: true, data: task });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};



