import React from 'react';

interface CalendarProps {
    mode: string;
    selected: Date | undefined;
    onSelect: (date: Date | undefined) => void;
    className?: string;
}

const Calendar: React.FC<CalendarProps> = ({ mode, selected, onSelect, className }) => {
    const month = selected ? selected.getMonth() : new Date().getMonth();
    const year = selected ? selected.getFullYear() : new Date().getFullYear();

    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDay = new Date(year, month, 1).getDay();

    const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);

    return (
        <div className={`calendar ${className}`}>
            <div className="calendar-header">
                <h2>{`October ${year}`}</h2>
            </div>
            <div className="calendar-days">
                {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(day => (
                    <div key={day} className="calendar-day">{day}</div>
                ))}
                {Array.from({ length: firstDay }).map((_, i) => (
                    <div key={i} className="calendar-day empty"></div>
                ))}
                {days.map(day => (
                    <div
                        key={day}
                        className={`calendar-day ${selected?.getDate() === day ? 'selected' : ''}`}
                        onClick={() => onSelect(new Date(year, month, day))}
                    >
                        {day}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Calendar;
