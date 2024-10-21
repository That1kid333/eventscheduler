import React from 'react';

interface TextareaProps {
    id: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    className?: string;
    placeholder?: string;
    rows?: number;
}

const Textarea: React.FC<TextareaProps> = ({ id, value, onChange, className, placeholder, rows = 3 }) => {
    return (
        <textarea
            id={id}
            value={value}
            onChange={onChange}
            className={className}
            placeholder={placeholder}
            rows={rows}
        />
    );
};

export default Textarea;
