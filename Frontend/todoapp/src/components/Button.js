import React from 'react';
import './Button.css';

const Button = ({ type = "button", label, onClick, color = "blue" }) => (
    <button type={type} onClick={onClick} className={`button button--${color}`}>
        {label}
    </button>
);

export default Button;
