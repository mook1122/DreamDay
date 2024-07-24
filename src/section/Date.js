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

const DateInput = styled.input`
        width: 120px;
        height: 30px;
        padding: 5px;
        border: 1px solid gray;
        margin-right: 20px;
        border-radius: 4px;

        -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;

    &::-webkit-clear-button,
    &::-webkit-inner-spin-button {
        display: none;
    }
    &::-webkit-calendar-picker-indicator {
        position: relative;
        left: 0;
    }
`;

const TimeSelect = styled.select`
        width: 100px;
        height: 30px;
        padding: 5px;
        border: 1px solid gray;
        margin-right: 20px;
        border-radius: 4px;
`;

const DateSection = ({ openSection, toggleSection, selectedDate, handleDateChange, handleChangeMinute, handleChangeHour }) => {


    return (
        <div>
            <ToggleBar onClick={toggleSection}>
                <p>{openSection ? '▲ 예식 일시' : '▼ 예식 일시'}</p>
            </ToggleBar>

            <DetailItem show={openSection}>
                <div>
                    <p>예식일</p>
                    <DateInput
                        type='date'
                        // value={selectedDate.toISOString().split('T')[0]}
                        onChange={handleDateChange}
                    />
                </div>

                <div>
                    <p>예식시간</p>
                    <TimeSelect onChange={handleChangeHour}>
                        <option value='7'>오전 7시</option>
                        <option value='8'>오전 8시</option>
                        <option value='9'>오전 9시</option>
                        <option value='10'>오전 10시</option>
                        <option value='11'>오전 11시</option>
                        <option value='12' >낮 12시</option>
                        <option value='13'>오후 1시</option>
                        <option value='14'>오후 2시</option>
                        <option value='15'>오후 3시</option>
                        <option value='16'>오후 4시</option>
                        <option value='17'>오후 5시</option>
                        <option value='18'>오후 6시</option>
                        <option value='19'>오후 7시</option>
                        <option value='20'>오후 8시</option>
                        <option value='21'>오후 9시</option>
                        <option value='22'>오후 10시</option>
                        <option value='23'>오후 11시</option>
                    </TimeSelect>

                    <TimeSelect onChange={handleChangeMinute}>
                        <option value='0' >00분</option>
                        <option value='05'>05분</option>
                        <option value='10'>10분</option>
                        <option value='15'>15분</option>
                        <option value='20'>20분</option>
                        <option value='25'>25분</option>
                        <option value='30'>30분</option>
                        <option value='35'>35분</option>
                        <option value='40'>40분</option>
                        <option value='45'>45분</option>
                        <option value='50'>50분</option>
                        <option value='55'>55분</option>
                    </TimeSelect>
                </div>

            </DetailItem>
        </div>
    );
};

export default DateSection;
