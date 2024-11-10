import React, { useEffect, useState } from 'react';
import { fetchTodos, deleteTodo } from '../../services/api';
import TodoItem from './TodoItem';
import { useNavigate } from 'react-router-dom';
import SearchTodo from './SearchTodo';
import {logout} from '../../services/api';
const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const [filteredTodos, setFilteredTodos] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const getTodos = async () => {
            try {
                const response = await fetchTodos();
                setTodos(response.data.data);
                setFilteredTodos(response.data.data);
            } catch (error) {
                console.error('Error fetching todos:', error);
            }
        };
        getTodos();
    }, []);

    const handleDelete = async (id) => {
        try {
            await deleteTodo(id);
            setTodos(todos.filter(todo => todo._id !== id));
            setFilteredTodos(filteredTodos.filter(todo => todo._id !== id));
        } catch (error) {
            console.error('Error deleting todo:', error);
        }
    };

    const handleEdit = (id) => {
        navigate(`/todo/edit/${id}`);
    };
    const handleSearchResults = (searchQuery) => {
        if (searchQuery.trim() === '') {
            setFilteredTodos(todos);
        } else {
            const results = todos.filter((todo) =>
                todo.taskName.toLowerCase().includes(searchQuery.toLowerCase())
            );
            setFilteredTodos(results);
        }
    };

    const handleLogout = async () => {
        try {
            console.log(localStorage.getItem('token'));
            await logout();
            localStorage.removeItem('token');
            navigate('/');
        } catch (err) {
            console.error('Error logging out:', err);
        }
    };

    return (
        <div>
            <h1>Todo List</h1>
            <button onClick={() => navigate('/todo/add')}>Add Task</button>
            <button
                onClick={handleLogout}
                style={{
                    padding: '10px 20px',
                    backgroundColor: 'red',
                    color: 'white',
                    border: 'none',
                    cursor: 'pointer',
                }}
            >
                Logout
            </button>
            <SearchTodo handleSearchResults={handleSearchResults} />
            <div>
            {filteredTodos.length > 0 ? (
                    filteredTodos.map(todo => (
                        <TodoItem key={todo._id} todo={todo} onDelete={handleDelete} onEdit={handleEdit} />
                    ))
                ) : (
                    <p>No tasks found</p>
                )}
            </div>
        </div>
    );
};

export default TodoList;
