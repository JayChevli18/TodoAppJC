import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../../services/api';
import Input from '../Input';
import Button from '../Button';
import './AuthForm.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await API.post('/auth/login', { email, password });
            localStorage.setItem('token', response.data.token);
            console.log('Login successful:', response.data);
            navigate('/home');

        } catch (err) {
            setError('Login failed. Please check your credentials.');
        }
    };
    const handleSignupNavigation = () => {
        navigate('/signup');
    };

    return (
        <div className="auth-container">
            <form className="auth-form" onSubmit={handleLogin}>
                <h3 className="auth-head">Welcome To TodoApp!<hr></hr><p className='auth-head-below'>Manage Your Tasks Effortlessly</p></h3>

                <h2 className="auth-title">Login</h2>

                {error && <p className="error-text">{error}</p>}
                <Input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    name="email"
                />
                <Input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    name="password"
                />
                <Button type="submit" label="Login" color="blue" />
                <p className="signup-text">
                    Don’t have an account?{' '}
                    <span onClick={handleSignupNavigation} className="signup-link">
                        Signup
                    </span>
                </p>
            </form>
        </div>
    );
};

export default Login;
