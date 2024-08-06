// CalendarCompo.js
import React from 'react';
import styled from 'styled-components';

const CalendarContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 20px;

    font-size: 14px;
    font-weight: 100;

    border-top: 1px solid #eee;
    border-bottom: 1px solid #eee;

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
        background-color: #F8C3C3;
        border-radius: 50%;
        color: white;
    }
`;

export const CalendarCompo = ({ selectedDate }) => {
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
                        <th style={{ color: '#F8C3C3' }}>일</th>
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


export const CalendarCompoView = ({ dbData }) => {
    const renderCalendar = (totalDate) => {
        const year = totalDate.year;
        const month = parseInt(totalDate.month, 10) - 1; // 문자열에서 숫자로 변환 후 0-based index로 변경
        const selectedDay = parseInt(totalDate.day, 10); // 문자열에서 숫자로 변환

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
                <td key={dayCount} className={dayCount === selectedDay ? 'selected' : ''}>
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
                    <td key={dayCount} className={dayCount === selectedDay ? 'selected' : ''}>
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
                        <th style={{color:'#F8C3C3'}}>일</th>
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
            {dbData && dbData.totalDate ? renderCalendar(dbData.totalDate) : <div>데이터가 없습니다.</div>}
        </CalendarContainer>
    );
};




