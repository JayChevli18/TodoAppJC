import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { editTodo, fetchTodos } from '../../services/api';
import './TodoStyle.css';

const EditTodo = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [taskName, setTaskName] = useState('');
    const [taskDesc, setTaskDesc] = useState('');
    const [taskStatus, setTaskStatus] = useState('');

    useEffect(() => {
        const getTodo = async () => {
            try {
                const response = await fetchTodos();
                const task = response.data.data.find(todo => todo._id === id);
                if (task) {
                    setTaskName(task.taskName);
                    setTaskDesc(task.taskDesc);
                    setTaskStatus(task.taskStatus);
                }
            } catch (error) {
                console.error('Error fetching todo:', error);
            }
        };
        getTodo();
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const updatedTodo = { taskName, taskDesc, taskStatus };
        try {
            await editTodo(id, updatedTodo);
            navigate('/home');
        } catch (error) {
            console.error('Error editing todo:', error);
        }
    };

    return (
        <div className="todo-container">
            <form onSubmit={handleSubmit} className="todo-form">
                <h1 className="todo-title">Edit Task</h1>

                <div>
                    <label>Task Name</label>
                    <input
                        type="text"
                        value={taskName}
                        onChange={(e) => setTaskName(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Task Description</label>
                    <input
                        type="text"
                        value={taskDesc}
                        onChange={(e) => setTaskDesc(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Task Status</label>
                    <select value={taskStatus} onChange={(e) => setTaskStatus(e.target.value)}>
                        <option value="Upcoming">Upcoming</option>
                        <option value="In Progress">In Progress</option>
                        <option value="Completed">Completed</option>
                    </select>
                </div>
                <button type="submit" className="todo-button">Update Task</button>
            </form>
        </div>
    );
};

export default EditTodo;
