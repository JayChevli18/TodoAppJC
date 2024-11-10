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
        required: true
    },
    taskDateTime: {
        type: Date,
        required: true
    }
}, { timestamps: true });


module.exports = mongoose.model('Todo', todoSchema);
