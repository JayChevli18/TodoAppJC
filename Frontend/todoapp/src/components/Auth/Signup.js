import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../../services/api';
import Input from '../Input';
import Button from '../Button';
import './AuthForm.css';

const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const navigate = useNavigate();

    const handleSignup = async (e) => {
        e.preventDefault();
        try {
            await API.post('/auth/signup', { name, email, password });
            setSuccess('Signup successful! Redirecting to login...');
            setError('');
            setTimeout(() => navigate('/'), 2000);
        } catch (err) {
            setError('Signup failed. Please try again.');
            setSuccess('');
        }
    };

    return (
        <div className="auth-container">
            <form className="auth-form" onSubmit={handleSignup}>
                <h2 className="auth-title">Signup</h2>

                {error && <p className="error-text">{error}</p>}
                {success && <p className="success-text">{success}</p>}
                <Input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    name="name"
                />
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
                <Button type="submit" label="Signup" color="green" />
            </form>
        </div>
    );
};

export default Signup;
