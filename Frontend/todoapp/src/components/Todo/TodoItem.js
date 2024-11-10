import React from 'react';

const TodoItem = ({ todo, onDelete, onEdit }) => {
    return (
        <div>
            <h3>{todo.taskName}</h3>
            <p>{todo.taskDesc}</p>
            <p>Status: {todo.taskStatus}</p>
            <p>Created: {new Date(todo.taskDateTime).toLocaleString()}</p>
            <button onClick={() => onEdit(todo._id)}>Edit</button>
            <button onClick={() => onDelete(todo._id)}>Delete</button>
        </div>
    );
};

export default TodoItem;
