import React from 'react';
import { useState, useEffect } from 'react';
import styled from 'styled-components';

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
            width:80px;
        }
    }

    #title_box {
        width: 350px;
        height: 27px;
        padding: 5px;
        border: 1px solid gray;
        margin-right: 20px;
        border-radius: 2px;

    }

    #title_box:focus {
        outline: 1px solid black;
    }

    #content_box {
        width: 350px;
        height:300px;
        padding: 5px;
        border: 1px solid gray;
        margin-right: 20px;
        overflow:scroll;

    }

    #content_box:focus {
        outline: 1px solid black;
    }

    
`;



function IntroMent({ openSection, toggleSection , introtitle, setIntrotitle , introcontent , setIntrocontent}) {


    return (
        <div>
            <ToggleBar onClick={toggleSection}>
                <p>{openSection ? '▲ 인사말' : '▼ 인사말'}</p>
            </ToggleBar>

            <DetailItem show={openSection}>
                <br></br>
                <div>
                    <p>제목</p>
                    <input
                        type='text'
                        id='title_box'
                        value={introtitle}
                        onChange={(e)=>{setIntrotitle(e.target.value)}}
                    />
                </div>

                <div>
                    <p>내용</p>
                    <textarea
                        type='text'
                        id='content_box'
                        value={introcontent}
                        onChange={(e)=>{setIntrocontent(e.target.value)}}

                    />
                </div>

            </DetailItem>
        </div>
    );
}


export default IntroMent;
