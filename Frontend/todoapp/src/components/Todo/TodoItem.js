import React from 'react';
import './TodoStyle.css';

const TodoItem = ({ todo, onDelete, onEdit }) => {
    return (
        <div className="todo-item">
            <h3 className="todo-item-title">{todo.taskName}</h3>
            <p className="todo-item-desc">Description: {todo.taskDesc}</p>
            <p className="todo-item-status">Status: {todo.taskStatus}</p>
            <p className="todo-item-date">Created: {new Date(todo.taskDateTime).toLocaleString()}</p>
            <div className="todo-item-buttons">
                <button onClick={() => onEdit(todo._id)} className="todo-item-button edit-button">Edit</button>
                <button onClick={() => onDelete(todo._id)} className="todo-item-button delete-button">Delete</button>
            </div>
        </div>
    );
};

export default TodoItem;
