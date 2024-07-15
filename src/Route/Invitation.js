import { Routes, Route, Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { useState } from 'react';
import { createGlobalStyle } from 'styled-components'

import ThemeSection from '../section/Theme';
import BasicInfoSection from '../section/Info';

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

display: flex;
justify-content: center;
align-items: center;

height: 85%;
margin-top: 15px;



`;

const Sample = styled.div`
margin: 20px;
height: 100%;
width: 400px;
border-radius: 10px;
background-color: ${props => props.bg};

`;

const Selector = styled.div`

    margin: 20px;
    height: 100%;
    border: 2px solid black;
    width: 600px;
    padding: 10px; // 지워야함

    display: flex;
    flex-direction: column;
    align-items: center;

    > div {
        width: 100%;
    }

`;


function Invitation() {
    const [bg, setBg] = useState('white');

    const [openSections, setOpenSections] = useState({
        theme: false,
        mainScreen: false,
        basicInfo: false,
        calendar: false
    });

    const toggleSection = (section) => {
        setOpenSections({
            ...openSections,
            [section]: !openSections[section]
        });
    };

    return (
        <>
            <Container>
                <Sample bg={bg}>
                    {/* 샘플 컴포넌트 내용 */}
                </Sample>

                <Selector>
                    <ThemeSection bg={bg} setBg={setBg} openSection={openSections.theme} toggleSection={() => toggleSection('theme')} />
                        <br></br>
                    <BasicInfoSection openSection={openSections.basicInfo} toggleSection={() => toggleSection('basicInfo')} />
                    {/* <MainScreenSection openSection={openSections.mainScreen} toggleSection={() => toggleSection('mainScreen')} />
                    <CalendarSection openSection={openSections.calendar} toggleSection={() => toggleSection('calendar')} /> */}
                </Selector>
            </Container>
        </>
    );
}


export { Invitation };