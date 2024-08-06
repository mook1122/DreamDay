import { Routes, Route, Link, useNavigate, useParams } from 'react-router-dom'
import styled from 'styled-components'
import { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import { createGlobalStyle } from 'styled-components'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

import {
    Sample, SampleHeader, SampleTitle,
    TelBox, FamilyBox, UnderBar, MapContainer, CalendarDate, CalendarTime,
    SampleContent, MainImgBox, LocationContainer, Selector, HeaderDate, HeaderInfo
} from '../styles/MainCard';
import TelModal from '../Component/TelModal';
import { CalendarCompoView } from '../section/Calendar'
import Invitation from './Invitation';

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

function InvitationView({ }) {
    const [dbData, setDbData] = useState(null);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    // 연락처 모달
    const [telModal, setTelModal] = useState('off')
    const [modalScroll, setModalScroll] = useState('0')
    const handleModal = () => {
        const scrollElement = document.getElementById('sample').scrollTop;
        console.log(123);


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

    // DB 데이터 요청
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/view/${id}`);
                setDbData(response.data);
            } catch (error) {
                console.error('데이터 조회 실패:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [id]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!dbData) {
        return <div>데이터가 없습니다.</div>;
    }

    console.log(dbData);




    return (
        <>
            <GlobalStyle />

            <Container>
                <Sample bg={dbData.bg} id='sample'>
                    {/* 샘플 컴포넌트 내용 */}
                    <SampleHeader>
                        <SampleTitle titlecolor={dbData.titlecolor}>
                            <p className='kr_title'>THE MARRIAGE</p>
                        </SampleTitle>
                        <br />

                        <HeaderDate>
                            {dbData.totalDate.year} / {dbData.totalDate.month} / {dbData.totalDate.day}
                        </HeaderDate>

                        <br></br>
                        <br></br>

                        <MainImgBox >
                            {
                                dbData.previewUrl === ''
                                    ?
                                    <div>
                                        {/* <p>대표 이미지</p> */}
                                    </div>
                                    :
                                    <img src={dbData.previewUrl} ></img>
                            }
                        </MainImgBox>

                        <br></br>
                        <br></br>

                        <HeaderInfo>
                            <p className='header_info_name'>{dbData.man.me}&nbsp;&nbsp;·&nbsp;&nbsp;{dbData.woman.me}</p>

                            <br></br>
                            <p
                                className='header_info_location'
                            >{dbData.totalDate.year}년 {dbData.totalDate.month}월 {dbData.totalDate.day}일 {dbData.totalDate.Kr_weekdays} {dbData.totalDate.midday} {dbData.totalDate.hour}시 {dbData.totalDate.minute}분
                                <br></br>
                                {dbData.totallocation.hall_name} {dbData.totallocation.hall}
                            </p>
                        </HeaderInfo>


                    </SampleHeader>

                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>

                    <SampleTitle titlecolor={dbData.titlecolor}>
                        <p className='en_title'>I N V I T A T I O N</p>
                        <br></br>
                        <p className='kr_title'>{dbData.introtitle}</p>
                        <br></br>
                        <br></br>

                    </SampleTitle>

                    <SampleContent>
                        {dbData.introcontent}
                    </SampleContent>

                    <UnderBar>
                        <div></div>
                    </UnderBar>

                    <br></br>
                    <br></br>


                    <FamilyBox>
                        <p>
                            <span className='family_name'>
                                {dbData.man.fatherDeceased + dbData.man.father} {dbData.man.momDeceased + dbData.man.mom}</span> 의 아들 <span className='family_name'>{dbData.man.me}
                            </span>
                        </p>
                        <p>
                            <span className='family_name'>
                                {dbData.woman.fatherDeceased + dbData.woman.father} {dbData.woman.momDeceased + dbData.woman.mom}</span> 의 &nbsp;&nbsp;딸&nbsp;&nbsp; <span className='family_name'>{dbData.woman.me}
                            </span>
                        </p>
                    </FamilyBox>

                    <br></br>
                    <br></br>

                    {
                        dbData.telNumber.groom === '' ?
                            <TelBox></TelBox>
                            :
                            <TelBox>
                                <div onClick={handleModal}>
                                    <FontAwesomeIcon icon={faPhone} /> &nbsp; 연락하기
                                </div>
                            </TelBox>
                    }

                    <TelModal
                        man={dbData.man} telModal={telModal} modalScroll={modalScroll} telNumber={dbData.telNumber} woman={dbData.woman}
                        handleModal={handleModal}
                    />

                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>


                    <CalendarDate>
                        {dbData.totalDate.year}.{dbData.totalDate.month}.{dbData.totalDate.day}
                    </CalendarDate>

                    <CalendarTime>
                        {dbData.totalDate.Kr_weekdays} {dbData.totalDate.midday} {dbData.totalDate.hour}시 {dbData.totalDate.minute}분
                    </CalendarTime>

                    <CalendarCompoView dbData={dbData} />
                    <br></br>

                    <p>{dbData.man.me + ',' + dbData.woman.me + '의 결혼식이' + dbData.totalDate.dDay}일 남았습니다.</p>

                    <br></br>
                    <br></br>
                    <br></br>

                    <SampleTitle titlecolor={dbData.titlecolor}>
                        <p className='en_title'>L O C A T I O N</p>
                        <br></br>
                        <p className='kr_title'>{dbData.totallocation.title}</p>
                    </SampleTitle>

                    <LocationContainer>

                        <br></br>
                        <p className='location_hall' >{dbData.totallocation.hall_name} {dbData.totallocation.hall}</p>
                        <p>{dbData.totallocation.location}</p>
                        <br></br>
                        {
                            dbData.totallocation.tel === ''
                                ?
                                <p>
                                </p>
                                :
                                <p className='location_tel' >
                                    Tel. {dbData.totallocation.tel}
                                </p>
                        }

                        {/* <MapContainer ref={mapContainer} show={showMap}></MapContainer> */}
                        <br></br>
                        <br></br>
                    </LocationContainer>

                </Sample>
            </Container>
        </>
    );
}

export default InvitationView;