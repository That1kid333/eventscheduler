import React from 'react';

interface ButtonProps {
    children: React.ReactNode;
    className?: string;
    type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({ children, className, type = 'button' }) => {
    return (
        <button type={type} className={className}>
            {children}
        </button>
    );
};

export default Button;
