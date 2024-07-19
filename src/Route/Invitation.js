import { Routes, Route, Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { useState } from 'react';
import { createGlobalStyle } from 'styled-components'

import ThemeSection from '../section/Theme';
import BasicInfoSection from '../section/Info';
import MainView from '../section/MainView'

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

const Sample = styled.div.withConfig({
    shouldForwardProp: (prop) => !['bg'].includes(prop),
})`
margin: 20px;
height: 100%;
width: 400px;
border-radius: 10px;
background-color: ${props => props.bg};
padding: 30px;
text-align: center;

overflow: scroll;

  /* Hide scrollbar for WebKit-based browsers (e.g., Chrome, Safari) */
  ::-webkit-scrollbar {
    display: none;
  }

  /* Hide scrollbar for IE, Edge, and Firefox */
  -ms-overflow-style: none;  /* Internet Explorer and Edge */
  scrollbar-width: none;  /* Firefox */


`;

const Selector = styled.div`

    margin: 20px;
    height: 100%;
    width: 600px;

    display: flex;
    flex-direction: column;
    align-items: center;

    overflow: scroll;

  /* Hide scrollbar for WebKit-based browsers (e.g., Chrome, Safari) */
  ::-webkit-scrollbar {
    display: none;
  }

  /* Hide scrollbar for IE, Edge, and Firefox */
  -ms-overflow-style: none;  /* Internet Explorer and Edge */
  scrollbar-width: none;  /* Firefox */


    > div {
        width: 100%;
    }

`;

const SampleHeader = styled.div`
`;

const MainImgBox = styled.div`

border: 2px solid black;
width: 100%;
height: 100%;
height: 300px;
max-height: 400px;

img {
    width: 100%;
    height: 100%;
}

`;


const SampleTitle = styled.div.withConfig({
    shouldForwardProp: (prop) => !['titlecolor'].includes(prop),
})`

color: ${props => props.titlecolor};


* {
  font-family: "Nanum Myeongjo", serif;
  font-weight: 400;
  font-style: normal;
}

`;

function Invitation() {

    // 임시 저장하기
    const [totaldata, setTotaldata] = useState()

    // console.log(totaldata);
    const Upload = () => {
        setTotaldata({
            bg: bg,
            titlecolor: titlecolor,
            previewUrl: previewUrl,
            man: man
        });
        console.log(totaldata);
        console.log(123);
    }


    // 테마 백그라운드 컬러
    const [bg, setBg] = useState('#FAFAFA');
    // 테마 강조 컬러
    const [titlecolor, setTitlecolor] = useState('black');

    // 신랑,신부 기본 정보
    const [man, setMan] = useState({
        me: '',
        father: '',
        mom: '',
        fatherDeceased: '',
        momDeceased: ''

    });

    const manState = (field, value) => {
        setMan(manSpread => ({
            ...manSpread,
            [field]: value
        }));
    };

    const manDeceasedCheck = (field, checked) => {
        setMan(manSpread => ({
            ...manSpread,
            [field]: checked ? '故' : ''
        }));
    };

    const [woman, setWoman] = useState({
        me: '',
        father: '',
        mom: '',
        fatherDeceased: '',
        momDeceased: ''
    });

    const womanState = (field, value) => {
        setWoman(womanSpread => ({
            ...womanSpread,
            [field]: value
        }));
    };

    const womanDeceasedCheck = (field, checked) => {
        setWoman(womanSpread => ({
            ...womanSpread,
            [field]: checked ? '故' : ''
        }));
    };



    // 대표 이미지 url
    const [previewUrl, setPreviewUrl] = useState('123');

    // 아코디언 섹션
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

            <GlobalStyle></GlobalStyle>

            <Container>
                <Sample bg={bg}>
                    {/* 샘플 컴포넌트 내용 */}

                    <SampleHeader>

                        <SampleTitle titlecolor={titlecolor}>
                            <p style={{ fontWeight: 'bold' }}>THE MARRIAGE</p>
                        </SampleTitle>
                        <br></br>

                        <h1>날짜 표기 해야함</h1>

                        <br></br>
                        <br></br>

                        <MainImgBox >
                            <img src={previewUrl} ></img>
                        </MainImgBox>

                        <br></br>
                        <br></br>

                        <p>{man.me} , {woman.me} 결혼합니다.</p>

                        {/* 이미지칸 생성 해야함 */}
                        <br></br>
                        <br></br>
                        <p>2024. 07. 15. Monday 12:00 PM</p>
                        {/* 날짜 API이용해서 바꿔야함 */}
                    </SampleHeader>

                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>

                    <SampleTitle titlecolor={titlecolor}>
                        <p style={{ fontSize: '11px' }}>I N V I T A T I ON</p>
                        <br></br>
                        <p style={{ fontWeight: 'bold' }}>소중한 분들을 초대 합니다.</p>
                    </SampleTitle>


                </Sample>

                <Selector>
                    <ThemeSection bg={bg} setBg={setBg}
                        titlecolor={titlecolor} setTitlecolor={setTitlecolor}
                        openSection={openSections.theme} toggleSection={() => toggleSection('theme')} />
                    <br></br>


                    <BasicInfoSection
                        manState={manState} womanState={womanState} manDeceasedCheck={manDeceasedCheck}
                        openSection={openSections.basicInfo} toggleSection={() => toggleSection('basicInfo')} />
                    <br></br>

                    <MainView
                        previewUrl={previewUrl} setPreviewUrl={setPreviewUrl}
                        openSection={openSections.mainScreen} toggleSection={() => toggleSection('mainScreen')} />
                    {/* <CalendarSection openSection={openSections.calendar} toggleSection={() => toggleSection('calendar')} /> */}
                </Selector>


                <button onClick={() => { Upload() }}>테스트 저장</button>
            </Container>
        </>
    );
}


export { Invitation };