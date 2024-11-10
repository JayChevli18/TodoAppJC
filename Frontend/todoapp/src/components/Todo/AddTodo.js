import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addTodo } from '../../services/api';
import './TodoStyle.css';

const AddTodo = () => {
    const [taskName, setTaskName] = useState('');
    const [taskDesc, setTaskDesc] = useState('');
    const [taskStatus, setTaskStatus] = useState('Upcoming');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const todoData = {
            taskName,
            taskDesc,
            taskStatus,
            taskDateTime: new Date().toISOString(),
        };
        try {
            await addTodo(todoData);
            navigate('/home');
        } catch (error) {
            console.error('Error adding todo:', error);
        }
    };

    return (
        <div className="todo-container">
            <form onSubmit={handleSubmit} className="todo-form">
              <h1 className="todo-title">Add New Task</h1>
      
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
                <button type="submit" className="todo-button">Add Task</button>
            </form>
        </div>
    );
};

export default AddTodo;
