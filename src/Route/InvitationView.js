import { Routes, Route, Link, useNavigate, useParams } from 'react-router-dom'
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
    const [dbData, setDbData] = useState(null);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

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
    
    // console.log(dbData.titlecolor);
    

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

                    </SampleHeader>
                </Sample>
            </Container>
        </>
    );
}

export default InvitationView;