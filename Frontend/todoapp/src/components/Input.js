import React from 'react';
import './Input.css';

const Input = ({ type = "text", placeholder, value, onChange, name }) => (
    <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        name={name}
        className="input"
    />
);

export default Input;
