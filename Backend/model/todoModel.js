const mongoose=require("mongoose");

const todoSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    taskName: {
        type: String,
        required: true
    },
    taskDesc: {
        type: String,
        required: true
    },
    taskStatus: {
        type: String,
        enum: ['Upcoming', 'Pending', 'In Progress', 'Completed'],
        default: 'Upcoming'
    },
    taskDateTime: {
        type: Date,
        default: Date.now
    }
}, { timestamps: true });


module.exports = mongoose.model('Todo', todoSchema);
