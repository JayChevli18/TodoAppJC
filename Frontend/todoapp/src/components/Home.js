import React from 'react';
import { useNavigate } from 'react-router-dom';
import { logout } from '../services/api'; // Import logout service

const Home = () => {
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            console.log(localStorage.getItem('token'));
            await logout(); // Call the logout API
            localStorage.removeItem('token'); // Clear the token from localStorage
            navigate('/login'); // Redirect to the login page
        } catch (err) {
            console.error('Error logging out:', err);
        }
    };

    return (
        <div style={{ padding: '20px', textAlign: 'center' }}>
            <h1>Welcome to the Home Page!</h1>
            <p>You are now logged in.</p>
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
        </div>
    );
};

export default Home;
