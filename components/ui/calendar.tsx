import React from 'react';

interface CalendarProps {
    mode: string;
    selected: Date | undefined;
    onSelect: (date: Date | undefined) => void;
    className?: string;
}

const Calendar: React.FC<CalendarProps> = ({ mode, selected, onSelect, className }) => {
    return (
        <div className={className}>
            Calendar Component - Selected Date: {selected?.toString()}
        </div>
    );
};

export default Calendar;
