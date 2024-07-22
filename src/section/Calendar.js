// CalendarCompo.js
import React from 'react';
import styled from 'styled-components';

const CalendarContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 20px;

    table {
        border-collapse: collapse;
    }

    th, td {
        padding: 10px;
        text-align: center;
    }

    th {
        color: gray;
    }

    td {
        cursor: pointer;
    }

    .today {
        background-color: #f2f2f2;
        border-radius: 50%;
    }

    .selected {
        background-color: #ff7f7f;
        border-radius: 50%;
        color: white;
    }
`;

const CalendarCompo = ({ selectedDate }) => {
    const renderCalendar = (date) => {
        const year = date.getFullYear();
        const month = date.getMonth();
        const firstDay = new Date(year, month, 1).getDay();
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        const weeks = [];
        let days = [];
        let dayCount = 1;

        for (let i = 0; i < firstDay; i++) {
            days.push(<td key={`empty-${i}`}></td>);
        }

        for (let i = firstDay; i < 7; i++) {
            days.push(
                <td key={dayCount} className={dayCount === date.getDate() ? 'selected' : ''}>
                    {dayCount}
                </td>
            );
            dayCount++;
        }

        weeks.push(<tr key="week-1">{days}</tr>);

        days = [];
        while (dayCount <= daysInMonth) {
            for (let i = 0; i < 7 && dayCount <= daysInMonth; i++) {
                days.push(
                    <td key={dayCount} className={dayCount === date.getDate() ? 'selected' : ''}>
                        {dayCount}
                    </td>
                );
                dayCount++;
            }
            weeks.push(<tr key={`week-${weeks.length + 1}`}>{days}</tr>);
            days = [];
        }

        return (
            <table>
                <thead>
                    <tr>
                        <th>일</th>
                        <th>월</th>
                        <th>화</th>
                        <th>수</th>
                        <th>목</th>
                        <th>금</th>
                        <th>토</th>
                    </tr>
                </thead>
                <tbody>{weeks}</tbody>
            </table>
        );
    };

    return (
        <CalendarContainer>
            {renderCalendar(selectedDate)}
        </CalendarContainer>
    );
};

export default CalendarCompo;
