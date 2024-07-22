import React, { useState } from 'react';
import styled from 'styled-components';
import CalendarCompo from './Calendar';

const ToggleBar = styled.div`
    background-color: white;
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    cursor: pointer;

    > p {
        margin-left: 15px;
        font-size: 18px;
    }
`;

const DetailItem = styled.div.withConfig({
    shouldForwardProp: (prop) => !['show'].includes(prop),
})`
    border-top: 1px solid #eee;
    background-color: white;
    width: 100%;
    max-height: ${props => (props.show ? '500px' : '0')};
    overflow: hidden;
    transition: max-height ${props => (props.show ? '0.5s ease-in-out' : '0s ease-in-out')};

    > div {
        display: flex;
        align-items: center;
        padding: 10px;

        p {
            width: 80px;
        }
    }
`;

const DateSection = ({ openSection, toggleSection , selectedDate , handleDateChange}) => {


    return (
        <div>
            <ToggleBar onClick={toggleSection}>
                <p>{openSection ? '▲ 예식 일시' : '▼ 예식 일시'}</p>
            </ToggleBar>

            <DetailItem show={openSection}>
                <div>
                    <p>예식일</p>
                    <input
                        type='date'
                        value={selectedDate.toISOString().split('T')[0]}
                        onChange={handleDateChange}
                    />
                </div>

            </DetailItem>
        </div>
    );
};

export default DateSection;
