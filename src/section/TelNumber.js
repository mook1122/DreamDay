import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios'

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
    max-height: ${props => (props.show === 'on' ? '1000px' : '0')};
    overflow: hidden;
    transition: max-height ${props => (props.show === 'on' ? '0.5s ease-in-out' : '0s ease-in-out')};

    > div {
        display: flex;
        align-items: center;
        padding: 10px;

        @media(max-width:650px) {
            flex-direction:column;
            align-items:start;
        }
    }

    p {
        width:80px;
    }

    input {
        width: 280px;
        height: 30px;
        padding: 5px;
        border: 1px solid gray;
        margin-right: 20px;
        border-radius: 4px;
        margin-left: 15px;

        @media(max-width:650px) {
            margin-left:0px;
            margin-top:5px;
        }

    }

`;

const DottedLine = styled.div`

width: 95%;
margin-left: 2.5%;
border-top: 1px dashed #ddd;
margin-top: 15px;
`;


function TelSection({ openSection, toggleSection, setTelNumber }) {

    const handleTelNumber = (e) => {

        const inputId = e.target.id

        setTelNumber(i => ({
            ...i,
            [inputId]: e.target.value
        }))

    }


    return (
        <div>
            <ToggleBar onClick={toggleSection}>
                <p>{openSection === 'off' ? '▲ 연락처' : '▼ 연락처'}</p>
            </ToggleBar>

            <DetailItem show={openSection}>

                {/* <span>* 연락처를 입력하지 않으면 자동으로 나타나지 않습니다.</span> */}

                <DottedLine></DottedLine>

                <div>
                    <p>신랑</p>
                    <input
                        placeholder='010-0000-0000'
                        id='groom'
                        type='text'
                        onChange={handleTelNumber}
                    />
                </div>
                <div>
                    <p>신랑 아버지</p>
                    <input
                        placeholder='010-0000-0000'
                        type='text'
                        id='groomFather'
                        onChange={handleTelNumber}
                    />
                </div>
                <div>
                    <p>신랑 어머니</p>
                    <input
                        placeholder='010-0000-0000'
                        type='text'
                        id='groomMother'
                        onChange={handleTelNumber}
                    />
                </div>

                <DottedLine></DottedLine>

                <div>
                    <p>신부</p>
                    <input
                        placeholder='010-0000-0000'
                        type='text'
                        id='bride'
                        onChange={handleTelNumber}
                    />
                </div>
                <div>
                    <p>신부 아버지</p>
                    <input
                        placeholder='010-0000-0000'
                        type='text'
                        id='brideFather'
                        onChange={handleTelNumber}
                    />
                </div>
                <div>
                    <p>신부 어머니</p>
                    <input
                        placeholder='010-0000-0000'
                        type='text'
                        id='brideMother'
                        onChange={handleTelNumber}
                    />
                </div>

            </DetailItem>
        </div>
    );
}



export default TelSection;

