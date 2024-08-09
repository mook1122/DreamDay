import { Routes, Route, Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import { createGlobalStyle } from 'styled-components'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

import { InvitationHeader } from './Layout';
import ThemeSection from '../section/Theme';
import BasicInfoSection from '../section/Info';
import MainView from '../section/MainView'
import IntroMent from '../section/IntroMent'
import DateSection from '../section/Date'
import { CalendarCompo } from '../section/Calendar';
import Location from '../section/Location';
import TelSection from '../section/TelNumber';
import TelModal from '../Component/TelModal';
import AccountSection from '../section/Account';
import AccountBox from '../Component/AccountCompo';

import {
    Container, SampleModalBox, Sample, SampleHeader, SampleTitle,
    TelBox, FamilyBox, UnderBar, MapContainer, CalendarDate, CalendarTime,
    SampleContent, MainImgBox, LocationContainer, Selector, HeaderDate, HeaderInfo, Copyright
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


function Invitation() {

    const navigate = useNavigate();


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

            const response = await axios.get(`https://dreamday.co.kr/api/post/image?file=${fileName}`);
            return response.data;
        } catch (error) {
            console.error('Presigned URL 요청 실패:', error);
            return null;
        }
    };

    // 모든 데이터DB 저장

    const Upload = async () => {
        try {
            const selectedFile = document.querySelector('input[type="file"]').files[0];
            console.log(selectedFile);

            let previewUrl = null;

            if (selectedFile) {
                const presignedUrlData = await getPresignedUrl(selectedFile.name);

                if (!presignedUrlData) {
                    alert('Presigned URL을 가져오는 데 실패했습니다.');
                    return;
                }

                const formData = new FormData();
                for (const key in presignedUrlData.fields) {
                    if (presignedUrlData.fields.hasOwnProperty(key)) {
                        formData.append(key, presignedUrlData.fields[key]);
                    }
                }
                formData.append('file', selectedFile);

                await axios.post(presignedUrlData.url, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                });
                console.log('이미지 업로드 완료');

                previewUrl = presignedUrlData.url + '/' + presignedUrlData.fields.key;
            } else {
                console.log('선택된 파일이 없습니다. 이미지 업로드를 건너뜁니다.');
            }

            const data = {
                bg,
                titlecolor,
                introtitle,
                introcontent,
                previewUrl: previewUrl, // S3 이미지 URL 또는 null
                man,
                woman,
                totalDate,
                totallocation,
                telNumber,
                account
            };

            const response = await axios.post('https://dreamday.co.kr/upload', data);
            // console.log('서버 응답:', response);
            if (response.status === 200) {
                // console.log('데이터 저장 성공:', response.data);

                // 로컬스토리지에서 기존 배열 가져오기
                let uploadedIds = JSON.parse(localStorage.getItem('uploadedDataIds')) || [];

                // console.log('기존 로컬스토리지 데이터:', uploadedIds);
                // 새 _id 값을 배열에 추가
                uploadedIds.push(response.data.id);

                // 배열을 로컬스토리지에 저장
                localStorage.setItem('uploadedDataIds', JSON.stringify(uploadedIds));
                // console.log('새로운 로컬스토리지 데이터:', JSON.parse(localStorage.getItem('uploadedDataIds')));

                alert('청첩장이 생성 되었습니다. 마이페이지에서 확인 해보세요!');
                navigate('/mypage');

            } else {
                throw new Error('데이터 저장 실패');
            }
        } catch (error) {
            console.error('업로드 실패:', error);
            alert('업로드에 실패했습니다: ' + error.message);
        }
    };



    // 모바일 미리보기
    const [previewModal, setPreviewModal] = useState('off')

    const handlePreviewModal = () => {
        if (previewModal === 'off') {
            setPreviewModal('on')
        } else {
            setPreviewModal('off')
        }
    }

    return (
        <>

            <InvitationHeader Upload={Upload} handlePreviewModal={handlePreviewModal}></InvitationHeader>
            <GlobalStyle></GlobalStyle>

            <Container>
                <SampleModalBox preview={previewModal}>

                    <Sample bg={bg} id='sample'>
                        {/* 샘플 컴포넌트 내용 */}
                        <div className='close_sample_modal' onClick={handlePreviewModal}>x</div>

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
                                >{totalDate.year}년 {totalDate.month}월 {totalDate.day}일 {totalDate.Kr_weekdays}, {totalDate.midday} {totalDate.hour}시 {totalDate.minute}분
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
                            {totalDate.Kr_weekdays} {totalDate.midday} {totalDate.hour}시 {totalDate.minute}분
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
                        <br></br>

                        <Copyright>
                            Copyrightⓒ2024. DreamDay All rights reserved.
                        </Copyright>

                    </Sample>
                </SampleModalBox>


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


            </Container>
        </>
    );
}


export { Invitation };