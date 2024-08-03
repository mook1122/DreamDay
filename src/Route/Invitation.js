import { Routes, Route, Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import { createGlobalStyle } from 'styled-components'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";


import ThemeSection from '../section/Theme';
import BasicInfoSection from '../section/Info';
import MainView from '../section/MainView'
import IntroMent from '../section/IntroMent'
import DateSection from '../section/Date'
import CalendarCompo from '../section/Calendar';
import Location from '../section/Location';
import TelSection from '../section/TelNumber';
import TelModal from '../Component/TelModal';
import AccountSection from '../section/Account';
import AccountBox from '../Component/AccountCompo';

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

@media(max-width:1100px) {
/* flex-direction: column; */

}



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
position:relative;

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

.en_title {
    font-size: 12px;
}

.kr_title {
    font-weight:bold;
    font-size:18px;
}
`;

const HeaderDate = styled.p`
    font-size: 30px;
    font-family: "Crimson Pro", serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;


`;

const HeaderInfo = styled.div`

* {
    /* font-family: 'gowun Dodum", sans-serif'; */
    font-style: normal;
}

.header_info_name {
    font-weight: 600;
    font-size: 18px;
}

.header_info_location {
    color: #888888;
    font-size: 15px;
}

`;

const SampleContent = styled.p`
    white-space: pre-line;
    line-height: 2;
    font-size: 14px;

    color: #585858;
`;

const UnderBar = styled.div`

width: 100%;
display: flex;
justify-content: center;
align-items: center;
margin-top: 15px;
> div {
    width: 70px;
    border-bottom: 1px solid #eee;
}

`;

const FamilyBox = styled.div`

    color: #777777;
    font-size: 15px;
    line-height: 1.5;

.family_name {
    font-size: 16px;
    color: #444444;
}
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

const MapContainer = styled.div`
width: 100%;
    height: 300px;
    margin-top: 10px;
    display: ${props => (props.show === 'on' ? 'block' : 'none')};
`;

const LocationContainer = styled.div`

   * {
    /* font-family: 'gowun Dodum", sans-serif'; */
   }

   line-height: 1.5;
   color: #888888;

   .location_hall {
    font-size: 17px;
    color: #000000;
    font-weight: bold;
   }

   .location_tel {
    font-size: 14px;
   }

`;

const TelBox = styled.div`

width: 100%;
display: flex;
justify-content: center;
align-items: center;

> div {
width: 150px;
height: 50px;

display: flex;
justify-content: center;
align-items: center;

border-radius: 20px;
background-color: #888888;
color: white;
cursor: pointer;
position: absolute;

}

`;


function Invitation() {


    // 아코디언 섹션
    const [openSections, setOpenSections] = useState({
        theme: 'off',
        mainScreen: 'off',
        basicInfo: 'off',
        intro: 'off',
        date: 'off',
        location: 'off',
        tel: 'off',
        account: 'off'
    });

    const toggleSection = (section) => {
        setOpenSections({
            ...openSections,
            [section]: openSections[section] === 'off' ? 'on' : 'off'
        });
    };


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

    const [woman, setWoman] = useState({
        me: '이데이',
        father: '',
        mom: '',
        fatherDeceased: '',
        momDeceased: ''
    });

    // 대표 이미지 url
    const [previewUrl, setPreviewUrl] = useState('');


    // 인사말 
    const [introtitle, setIntrotitle] = useState('소중한 분들을 초대합니다.');
    const [introcontent, setIntrocontent] = useState(`저희 두 사람의 작은 만남이
사랑의 결실을 이루어
소중한 결혼식을 올리게 되었습니다.
            
평생 서로 귀하게 여기며
첫 마음 그대로 존중하고 배려하며 살겠습니다.
            
오로지 믿음과 사랑을 약속하는 날
오셔서 축복해 주시면 더 없는 기쁨으로
간직하겠습니다.`);

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
        dDay: ''
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

        // 현재 날짜와 선택된 날짜의 차이 계산
        const today = new Date();
        const timeDiff = date.getTime() - today.getTime();
        const dayDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));

        setTotalDate(i => ({
            ...i,
            year: year,
            month: month,
            day: day,
            weekdays: weekdays,
            Kr_weekdays: Kr_weekdays,
            dDay: dayDiff
        }));

        // console.log(totalDate);
    };

    // 예식 장소
    const [totallocation, setTotallocation] = useState({
        title: '오시는 길',
        location: '',
        address: '',
        hall_name: '',
        hall: '',
        tel: '',
        x: '',
        y: '',
    })

    const [showMap, setShowMap] = useState('off');

    const mapContainer = useRef(null);

    useEffect(() => {
        if (totallocation.location) {
            const mapOption = {
                center: new window.daum.maps.LatLng(37.537187, 127.005476),
                level: 5
            };
            const map = new window.daum.maps.Map(mapContainer.current, mapOption);
            const geocoder = new window.daum.maps.services.Geocoder();
            const marker = new window.daum.maps.Marker({
                position: new window.daum.maps.LatLng(37.537187, 127.005476),
                map: map
            });

            geocoder.addressSearch(totallocation.address, function (results, status) {
                if (status === window.daum.maps.services.Status.OK) {
                    const result = results[0];
                    const coords = new window.daum.maps.LatLng(result.y, result.x);
                    map.setCenter(coords);
                    marker.setPosition(coords);

                    setTotallocation(i => ({
                        ...i,
                        x: result.road_address.x,
                        y: result.road_address.y
                    }));

                    // console.log(result.road_address.x);
                    // console.log(result.road_address.y);
                    // console.log(result);

                }
            });
        }
        // console.log(totallocation);
    }, [totallocation.address]);


    // 연락처

    const [telNumber, setTelNumber] = useState({
        groom: '',
        groomFather: '',
        groomMother: '',
        bride: '',
        brideFather: '',
        brideMother: ''
    });

    const [telModal, setTelModal] = useState('off')
    const [modalScroll, setModalScroll] = useState('0')
    const handleModal = () => {
        const scrollElement = document.getElementById('sample').scrollTop;

        if (telModal === 'off') {
            setTelModal('on');
            setModalScroll(scrollElement);
            document.getElementById('sample').style.overflowY = 'hidden';
            console.log(typeof scrollElement);
            console.log(scrollElement);
        } else {
            setTelModal('off');
            document.getElementById('sample').style.overflowY = 'scroll';
        }
    };

    // 계좌번호
    const [account, setAccount] = useState({

        acc_title: '마음 전하실 곳',
        acc_content: `참석이 어려우신 분들을 위해
계좌번호를 기재하였습니다.
너그러운 마음으로 양해 부탁드립니다.`,

        groom: {
            details: {
                accountNumber: '',
                bank: '',
                accountName: '',
                kakaoPay: '',
                group: '신랑측 계좌번호'
            }
        },
        groomFather: {
            details: {
                accountNumber: '',
                bank: '',
                accountName: '',
                kakaoPay: ''
            }
        },
        groomMother: {
            details: {
                accountNumber: '',
                bank: '',
                accountName: '',
                kakaoPay: ''
            }
        },
        bride: {
            details: {
                accountNumber: '',
                bank: '',
                accountName: '',
                kakaoPay: '',
                group: '신부측 계좌번호'
            }
        },
        brideFather: {
            details: {
                accountNumber: '',
                bank: '',
                accountName: '',
                kakaoPay: ''
            }
        },
        brideMother: {
            details: {
                accountNumber: '',
                bank: '',
                accountName: '',
                kakaoPay: ''
            }
        }
    });


    // 저장된 이미지 s3업로드
    const getPresignedUrl = async (fileName) => {
        try {
            const response = await axios.get(`http://localhost:8080/api/post/image?file=${fileName}`);
            return response.data;
        } catch (error) {
            console.error('Presigned URL 요청 실패:', error);
            return null;
        }
    };

    // 모든 데이터DB 저장

    const Upload = async () => {
        const selectedFile = document.querySelector('input[type="file"]').files[0];
        const presignedUrlData = await getPresignedUrl(selectedFile.name);

        if (!presignedUrlData) {
            alert('Presigned URL을 가져오는 데 실패했습니다.');
            return;
        }

        const formData = new FormData();
        Object.keys(presignedUrlData.fields).forEach(key => {
            formData.append(key, presignedUrlData.fields[key]);
        });
        formData.append('file', selectedFile);

        try {
            await axios.post(presignedUrlData.url, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log('이미지 업로드 성공');

            const data = {
                bg,
                titlecolor,
                introtitle,
                introcontent,
                previewUrl: presignedUrlData.url + '/' + presignedUrlData.fields.key, // S3 이미지 URL
                man,
                woman,
                totalDate,
                totallocation,
                telNumber,
                account
            };

            await axios.post('http://localhost:8080/upload', data);
            alert('저장 성공');
        } catch (error) {
            console.error('이미지 업로드 실패:', error);
            alert('이미지 업로드에 실패했습니다.');
        }
    };

    return (
        <>

            <GlobalStyle></GlobalStyle>

            <Container>
                <Sample bg={bg} id='sample'>
                    {/* 샘플 컴포넌트 내용 */}

                    <SampleHeader>

                        <SampleTitle titlecolor={titlecolor}>
                            <p className='kr_title'>THE MARRIAGE</p>
                        </SampleTitle>
                        <br></br>

                        <HeaderDate>
                            {totalDate.year} / {totalDate.month} / {totalDate.day}
                        </HeaderDate>

                        {/* <p>{totalDate.weekdays}</p> */}

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

                        <HeaderInfo>
                            <p className='header_info_name'>{man.me}&nbsp;&nbsp;·&nbsp;&nbsp;{woman.me}</p>

                            <br></br>
                            <p
                                className='header_info_location'
                            >{totalDate.year}년 {totalDate.month}월 {totalDate.day}일 {totalDate.Kr_weekdays}, {totalDate.midday} {totalDate.hour}:{totalDate.minute}
                                <br></br>
                                {totallocation.hall_name} {totallocation.hall}
                            </p>
                        </HeaderInfo>
                    </SampleHeader>

                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>

                    <SampleTitle titlecolor={titlecolor}>
                        <p className='en_title'>I N V I T A T I O N</p>
                        <br></br>
                        <p className='kr_title'>{introtitle}</p>
                        <br></br>
                        <br></br>

                    </SampleTitle>

                    <SampleContent>
                        {introcontent}
                    </SampleContent>

                    <UnderBar>
                        <div></div>
                    </UnderBar>

                    <br></br>
                    <br></br>


                    <FamilyBox>
                        <p>
                            <span className='family_name'>
                                {man.fatherDeceased + man.father} {man.momDeceased + man.mom}</span> 의 아들 <span className='family_name'>{man.me}
                            </span>
                        </p>
                        <p>
                            <span className='family_name'>
                                {woman.fatherDeceased + woman.father} {woman.momDeceased + woman.mom}</span> 의 &nbsp;&nbsp;딸&nbsp;&nbsp; <span className='family_name'>{woman.me}
                            </span>
                        </p>
                    </FamilyBox>


                    <br></br>
                    <br></br>

                    {
                        telNumber.groom === '' ?
                            <TelBox></TelBox>
                            :
                            <TelBox>
                                <div onClick={handleModal}>
                                    <FontAwesomeIcon icon={faPhone} /> &nbsp; 연락하기
                                </div>
                            </TelBox>
                    }

                    <TelModal
                        man={man} telModal={telModal} modalScroll={modalScroll} telNumber={telNumber} woman={woman}
                        handleModal={handleModal}
                    />

                    <br></br>
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
                    <br></br>

                    <p>{man.me + ',' + woman.me + '의 결혼식이' + totalDate.dDay}일 남았습니다.</p>

                    <br></br>
                    <br></br>
                    <br></br>

                    <SampleTitle titlecolor={titlecolor}>
                        <p className='en_title'>L O C A T I O N</p>
                        <br></br>
                        <p className='kr_title'>{totallocation.title}</p>
                    </SampleTitle>

                    <LocationContainer>

                        <br></br>
                        <p className='location_hall' >{totallocation.hall_name} {totallocation.hall}</p>
                        <p>{totallocation.location}</p>
                        <br></br>
                        {
                            totallocation.tel === ''
                                ?
                                <p>
                                </p>
                                :
                                <p className='location_tel' >
                                    Tel. {totallocation.tel}
                                </p>
                        }

                        <MapContainer ref={mapContainer} show={showMap}></MapContainer>
                        <br></br>
                        <br></br>
                    </LocationContainer>


                    <SampleTitle titlecolor={titlecolor}>
                        <p className='en_title'>A C C O U N T</p>
                        <br></br>
                        <p className='kr_title'>{account.acc_title}</p>
                        <br></br>
                    </SampleTitle>
                    <SampleContent>
                        {account.acc_content}
                    </SampleContent>
                    <br></br>
                    <AccountBox account={account} />
                    <br></br>

                </Sample>

                <Selector>
                    <ThemeSection bg={bg} setBg={setBg}
                        titlecolor={titlecolor} setTitlecolor={setTitlecolor}
                        openSection={openSections.theme} toggleSection={() => toggleSection('theme')} />
                    <br></br>


                    <BasicInfoSection
                        setMan={setMan} setWoman={setWoman}
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
                        totalDate={totalDate} setTotalDate={setTotalDate}
                        handleDateChange={handleDateChange}
                        // handleChangeHour={handleChangeHour} handleChangeMinute={handleChangeMinute}
                        openSection={openSections.date} toggleSection={() => toggleSection('date')} />
                    <br></br>

                    <Location
                        openSection={openSections.location}
                        toggleSection={() => toggleSection('location')}
                        totallocation={totallocation}
                        setTotallocation={setTotallocation}
                        setShowMap={setShowMap}
                    />
                    <br></br>

                    <TelSection
                        openSection={openSections.tel}
                        toggleSection={() => toggleSection('tel')}
                        setTelNumber={setTelNumber}
                    />
                    <br></br>

                    <AccountSection
                        account={account} setAccount={setAccount}
                        openSection={openSections.account}
                        toggleSection={() => toggleSection('account')}
                    />

                </Selector>


                <button onClick={() => { Upload() }}>테스트 저장</button>
            </Container>
        </>
    );
}


export { Invitation };