import React from 'react';

interface InputProps {
    id: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    className?: string;
    placeholder?: string;
    required?: boolean;
    type?: string; // Added type prop
}

const Input: React.FC<InputProps> = ({ id, value, onChange, className, placeholder, required, type = 'text' }) => {
    return (
        <input
            id={id}
            type={type}
            value={value}
            onChange={onChange}
            className={className}
            placeholder={placeholder}
            required={required}
        />
    );
};

export default Input;
