const Todo = require("../model/todoModel");

exports.addTask = async (req, res) => {
    try {
        const { taskName, taskDesc, taskStatus } = req.body;

        if (!taskName || !taskDesc) {
            return res.status(400).json({ success: false, message: 'All fields are required' });
        }

        const task = await Todo.create({
            user: req.user._id,
            taskName,
            taskDesc,
            taskDateTime: Date.now(),
            taskStatus: taskStatus || 'Upcoming'
        });

        res.status(201).json({ success: true, data: task });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};

exports.getTask = async (req, res) => {
    try {
        const tasks = await Todo.find({ user: req.user._id });
        res.status(200).json({ success: true, data: tasks });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};

exports.deleteTask = async (req, res) => {
    try {
        const task = await Todo.findOneAndDelete({ _id: req.params.id, user: req.user._id });
        if (!task)
            return res.status(404).json({ success: false, message: 'Task not found!' });
        res.status(200).json({ success: true, message: 'Task deleted successfully!' });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};

exports.updateTask = async (req, res) => {
    try {
        const { taskName, taskDesc, taskStatus } = req.body;

        if (!taskName || !taskDesc) {
            return res.status(400).json({ success: false, message: 'Task name and description are required' });
        }

        const task = await Todo.findOneAndUpdate(
            { _id: req.params.id, user: req.user._id },
            { taskName, taskDesc, taskStatus },
            { new: true }
        );

        if (!task) return res.status(404).json({ success: false, message: 'Task not found' });

        res.status(200).json({ success: true, data: task });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};


exports.getTaskById = async (req, res) => {
    try {

        const taskId = req.params.id;
        const task = await Todo.findOne({
            _id: taskId,
            user: req.user._id
        });

        if (!task) {
            return res.status(404).json({ success: false, message: 'Task not found' });
        }

        res.status(200).json({ success: true, data: task });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};


exports.searchTask = async (req, res) => {
    try {
//        console.log("Fsf");
        const searchQuery = req.query.taskName;
//        console.log("cc", searchQuery);
        if (!searchQuery) {
            return res.status(400).json({ success: false, message: 'Please provide a task name to search' });
        }

        const tasks = await Todo.find({
            user: req.user._id,
            taskName: { $regex: searchQuery, $options: 'i' } // Case-insensitive search
        });

        if (tasks.length === 0) {
            return res.status(404).json({ success: false, message: 'No tasks found' });
        }

        res.status(200).json({ success: true, data: tasks });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};