import React from 'react';
import { Navigate } from 'react-router-dom';

// PrivateRoute component to protect routes
const PrivateRoute = ({ children }) => {
    const token = localStorage.getItem('token');

    if (!token) {
        // If the user is not logged in, redirect to the login page
        return <Navigate to="/login" />;
    }

    // If the user is logged in, return the children (protected components)
    return children;
};

export default PrivateRoute;
