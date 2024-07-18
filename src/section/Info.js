import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';

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


`;

const Info = styled.div`


    >div{
        display: flex;
        align-items: center;
        padding: 10px;

        p {

            width: 80px;
        }
    }   

    #name_box {
        width: 150px;
        height: 30px;
        padding: 5px;
        border: 1px solid gray;
        margin-right: 20px;
        border-radius: 4px;

    }

    #name_box:focus {
        outline: 1px solid black;
    }
    
`;

const Bar = styled.span`

    display: block;
    width: 90%;
    margin-left: 5%;
    border: 1px dashed #eee;

`;



function BasicInfoSection({ openSection, toggleSection, setMan }) {


    return (
        <div>
            <ToggleBar onClick={toggleSection}>
                <p>{openSection ? '▲ 기본 정보' : '▼ 기본 정보'}</p>
            </ToggleBar>

            <DetailItem show={openSection}>

                <Info>
                    <br></br>

                    <div>
                        <p>🤵🏻신랑</p>
                        <input
                            type='text'
                            id='name_box'
                            onChange={(e) => { setMan(e.target.value) }}
                        />
                    </div>

                    <div>
                        <p>아버지</p>
                        <input
                            type='text'
                            id='name_box'
                            placeholder='성함(OOO)'
                            onChange={(e) => { setMan(e.target.value) }}
                        />


                        <input
                            type='checkbox'
                            id='check'
                        />
                        &nbsp;故
                    </div>

                    <div>
                        <p>어머니</p>
                        <input
                            type='text'
                            id='name_box'
                            placeholder='성함(OOO)'
                            onChange={(e) => { setMan(e.target.value) }}
                        />

                        <input
                            type='checkbox'
                            id='check'
                        />
                        &nbsp;故
                    </div>

                    <br></br>
                    <Bar></Bar>
                    <br></br>

                    <div>
                        <p>👰🏻신부</p>
                        <input
                            type='text'
                            id='name_box'
                            onChange={(e) => { setMan(e.target.value) }}
                        />
                    </div>

                    <div>
                        <p>아버지</p>
                        <input
                            type='text'
                            id='name_box'
                            placeholder='성함(OOO)'
                            onChange={(e) => { setMan(e.target.value) }}
                        />


                        <input
                            type='checkbox'
                            id='check'
                        />
                        &nbsp;故
                    </div>

                    <div>
                        <p>어머니</p>
                        <input
                            type='text'
                            id='name_box'
                            placeholder='성함(OOO)'
                            onChange={(e) => { setMan(e.target.value) }}
                        />

                        <input
                            type='checkbox'
                            id='check'
                        />
                        &nbsp;故
                    </div>

                    <br></br>


                </Info>

            </DetailItem>
        </div>
    );
}

export default BasicInfoSection;
