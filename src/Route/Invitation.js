import { Routes, Route, Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { useState, useEffect } from 'react';
import { createGlobalStyle } from 'styled-components'

import ThemeSection from '../section/Theme';
import BasicInfoSection from '../section/Info';
import MainView from '../section/MainView'
import IntroMent from '../section/IntroMent'
import DateSection from '../section/Date'
import CalendarCompo from '../section/Calendar';

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
  /* border: 2px solid black; */
  width: 100%;
  height: 100%;

  img {
    width: 100%;
    height: 100%;
    max-height: 450px;
  }

  div {
    width: 100%;
    height: 300px;
    border: 1px solid black;
    background-color: #eee;
    opacity: 0.5;

    display: flex;
    justify-content: center;
    align-items: center;
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

const SampleContent = styled.p`
    white-space: pre-line;
    line-height: 2;
    font-size: 14px;

    color: #585858;
`;


function Invitation() {

    // 임시 저장하기
    const [totaldata, setTotaldata] = useState()

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
    const [titlecolor, setTitlecolor] = useState('#F8C3C3');

    // 신랑,신부 기본 정보
    const [man, setMan] = useState({
        me: '김OO',
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
        me: '이OO',
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


    // 인사말 
    const [introtitle, setIntrotitle] = useState('');
    const [introcontent, setIntrocontent] = useState('');

    useEffect(() => {
        setIntrotitle('소중한 분들을 초대합니다.');
        setIntrocontent(`저희 두 사람의 작은 만남이
사랑의 결실을 이루어
소중한 결혼식을 올리게 되었습니다.
            
평생 서로 귀하게 여기며
첫 마음 그대로 존중하고 배려하며 살겠습니다.
            
오로지 믿음과 사랑을 약속하는 날
오셔서 축복해 주시면 더 없는 기쁨으로
간직하겠습니다.`);
    }, []);

    // console.log(introcontent);

    // 대표 이미지 url
    const [previewUrl, setPreviewUrl] = useState('');

    // 아코디언 섹션
    const [openSections, setOpenSections] = useState({
        theme: false,
        mainScreen: false,
        basicInfo: false,
        intro: false,
        date: false
    });

    const toggleSection = (section) => {
        setOpenSections({
            ...openSections,
            [section]: !openSections[section]
        });
    };

    const [selectedDate, setSelectedDate] = useState(new Date());

    const handleDateChange = (e) => {
        setSelectedDate(new Date(e.target.value));
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
                            {
                                previewUrl === ''
                                    ?
                                    <div>
                                        <p>대표 이미지</p>
                                    </div>
                                    :
                                    <img src={previewUrl} ></img>
                            }
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
                        <p style={{ fontWeight: 'bold' }}>{introtitle}</p>
                        <br></br>
                        <br></br>

                    </SampleTitle>

                    <SampleContent>
                        {introcontent}
                    </SampleContent>

                    <CalendarCompo selectedDate={selectedDate} />



                </Sample>

                <Selector>
                    <ThemeSection bg={bg} setBg={setBg}
                        titlecolor={titlecolor} setTitlecolor={setTitlecolor}
                        openSection={openSections.theme} toggleSection={() => toggleSection('theme')} />
                    <br></br>


                    <BasicInfoSection
                        manState={manState} womanState={womanState} manDeceasedCheck={manDeceasedCheck} womanDeceasedCheck={womanDeceasedCheck}
                        openSection={openSections.basicInfo} toggleSection={() => toggleSection('basicInfo')} />
                    <br></br>

                    <MainView
                        previewUrl={previewUrl} setPreviewUrl={setPreviewUrl}
                        openSection={openSections.mainScreen} toggleSection={() => toggleSection('mainScreen')} />
                    <br></br>

                    <IntroMent
                        introtitle={introtitle} setIntrotitle={setIntrotitle} introcontent={introcontent} setIntrocontent={setIntrocontent}
                        openSection={openSections.intro} toggleSection={() => toggleSection('intro')} />
                    <br></br>

                    <DateSection
                        selectedDate={selectedDate} handleDateChange={handleDateChange}
                        openSection={openSections.date} toggleSection={() => toggleSection('date')} />

                </Selector>


                {/* <button onClick={() => { Upload() }}>테스트 저장</button> */}
            </Container>
        </>
    );
}


export { Invitation };