import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import PrivateRoute from './components/PrivateRoute';
import TodoList from './components/Todo/TodoList';
import AddTodo from './components/Todo/AddTodo';
import EditTodo from './components/Todo/EditTodo';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route
                    path="/home"
                    element={
                        <PrivateRoute>
                            <TodoList />
                        </PrivateRoute>
                    }
                />
                <Route
                    path="/todo/add"
                    element={
                        <PrivateRoute>
                            <AddTodo />
                        </PrivateRoute>
                    }
                />
                <Route
                    path="/todo/edit/:id"
                    element={
                        <PrivateRoute>
                            <EditTodo />
                        </PrivateRoute>
                    }
                />
            </Routes>
        </Router>
    );
}

export default App;
