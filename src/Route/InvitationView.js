import { Routes, Route, Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import { createGlobalStyle } from 'styled-components'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
    Sample, SampleHeader, SampleTitle,
    TelBox, FamilyBox, UnderBar, MapContainer, CalendarDate, CalendarTime,
    SampleContent, MainImgBox, LocationContainer, Selector, HeaderDate, HeaderInfo
} from '../styles/MainCard';


const GlobalStyle = createGlobalStyle`
#root {
    height: 100%;
}
html {
    height: 100%;
}
  body {
    height: 100%;
    background-color: #EFEFEF;
}
`

const Container = styled.div`
height: 100%;
display: flex;
justify-content: center;
align-items: center;


`;

function InvitationView() {


    return (
        <>
            <Container>
                <Sample bg={'white'} id='sample'>
                    {/* 샘플 컴포넌트 내용 */}

                    <SampleHeader>

                        <SampleTitle >
                            <p className='kr_title'>THE MARRIAGE</p>
                        </SampleTitle>
                        <br></br>

                    </SampleHeader>
                </Sample>
            </Container>
        </>
    )
}

export default InvitationView;