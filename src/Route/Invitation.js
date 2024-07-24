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
import Location from '../section/Location';

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

const HeaderDate = styled.p`
    font-size: 30px;
    font-family: "Crimson Pro", serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;

`;

const SampleContent = styled.p`
    white-space: pre-line;
    line-height: 2;
    font-size: 14px;

    color: #585858;
`;

const UnderBar = styled.div`

    width: 50px;
    border-bottom: 1px solid #eee;

`;

const CalendarDate = styled.p`
    font-size: 22px;
    color: #544f4f;
    /* font-family: 'gowun Dodum", sans-serif'; */
`;
const CalendarTime = styled.p`
    font-size: 15px;
    color: #544f4f;
    margin-top: 10px;
    /* font-family: 'gowun Dodum", sans-serif'; */
    
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
        me: '김드림',
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
        me: '이데이',
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

    // 예식 일시

    const [selectedDate, setSelectedDate] = useState(new Date());
    const [totalDate, setTotalDate] = useState({
        year: '',
        month: '',
        day: '',
        weekdays: '',
        Kr_weekdays: '',
        hour: '12',
        minute: '00',
        midday: '낮',
    });

    useEffect(() => {
        updateTotalDate(selectedDate);
    }, [selectedDate]);

    const handleDateChange = (e) => {
        setSelectedDate(new Date(e.target.value));
    };

    const updateTotalDate = (date) => {
        const year = date.getFullYear();
        const month = ('0' + (date.getMonth() + 1)).slice(-2);
        const day = ('0' + date.getDate()).slice(-2);
        const weekdaysArray = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const krWeekdaysArray = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];
        const weekdays = weekdaysArray[date.getDay()];
        const Kr_weekdays = krWeekdaysArray[date.getDay()];

        setTotalDate(i => ({
            ...i,
            year: year,
            month: month,
            day: day,
            weekdays: weekdays,
            Kr_weekdays: Kr_weekdays
        }));
    };

    const handleChangeHour = (e) => {
        console.log(e.target.value);
        const newHour = e.target.value;

        if (newHour < 12) {
            setTotalDate(i => ({
                ...i,
                hour: newHour,
                midday: '오전'
            }));
        } else if (newHour > 12) {
            setTotalDate(i => ({
                ...i,
                hour: newHour - 12,
                midday: '오후'
            }));
        } else if (newHour == 12) {
            setTotalDate(i => ({
                ...i,
                hour: newHour,
                midday: '낮'
            }));
        }
        console.log(totalDate);
    };

    const handleChangeMinute = (e) => {
        setTotalDate(i => ({
            ...i,
            minute: e.target.value
        }))
    };

    // 대표 이미지 url
    const [previewUrl, setPreviewUrl] = useState('');

    // 아코디언 섹션
    const [openSections, setOpenSections] = useState({
        theme: false,
        mainScreen: false,
        basicInfo: false,
        intro: false,
        date: false,
        location : false
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

                        <HeaderDate>
                            {totalDate.year} / {totalDate.month} / {totalDate.day}
                        </HeaderDate>

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

                        <p style={{ fontSize: '20px', fontStyle: 'normal', fontFamily: 'gowun Dodum, sans-serif' }}>{man.me}&nbsp;&nbsp;·&nbsp;&nbsp;{woman.me}</p>

                        <br></br>
                        <p
                            style={{ fontSize: '16px', fontStyle: 'normal', fontFamily: 'gowun Dodum, sans-serif' }}
                        >{totalDate.year}년 {totalDate.month}월 {totalDate.day}일 {totalDate.Kr_weekdays}, {totalDate.midday} {totalDate.hour}:{totalDate.minute}</p>
                    </SampleHeader>

                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>

                    <SampleTitle titlecolor={titlecolor}>
                        <p style={{ fontSize: '11px' }}>I N V I T A T I O N</p>
                        <br></br>
                        <p style={{ fontWeight: 'bold' }}>{introtitle}</p>
                        <br></br>
                        <br></br>

                    </SampleTitle>

                    <SampleContent>
                        {introcontent}
                    </SampleContent>

                    <br></br>
                    <br></br>
                    <br></br>


                    <CalendarDate>
                        {totalDate.year}.{totalDate.month}.{totalDate.day}
                    </CalendarDate>

                    <CalendarTime>
                        {totalDate.Kr_weekdays} {totalDate.midday} {totalDate.hour}시
                    </CalendarTime>
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
                        selectedDate={selectedDate}
                        handleDateChange={handleDateChange} handleChangeHour={handleChangeHour} handleChangeMinute={handleChangeMinute}
                        openSection={openSections.date} toggleSection={() => toggleSection('date')} />
                    <br></br>

                    <Location
                        openSection={openSections.location} toggleSection={() => toggleSection('location')} />

                </Selector>


                {/* <button onClick={() => { Upload() }}>테스트 저장</button> */}
            </Container>
        </>
    );
}


export { Invitation };