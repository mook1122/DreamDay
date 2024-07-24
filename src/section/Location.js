import React from 'react';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Map, MapMarker } from "react-kakao-maps-sdk";
// import useKakaoLoader from "./useKakaoLoader"

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

    
`;



function Location({ openSection, toggleSection }) {

    const [totallocation, setTotallocation] = useState({
        title: '오시는 길',
        location: '',
        hall: '',
        floor: '',
        tel: ''
    })

    const handleLocationTitle = (e) => {
        setTotallocation(i => ({
            ...i,
            title: e.target.value
        }))

        console.log(totallocation);
    }

    return (
        <div>
            <ToggleBar onClick={toggleSection}>
                <p>{openSection ? '▲ 예식 장소' : '▼ 예식 장소'}</p>
            </ToggleBar>

            <DetailItem show={openSection}>
                <div>
                    <p>제목</p>
                    <input
                        placeholder='오시는 길'
                        type='text'
                        onChange={handleLocationTitle}
                    />
                </div>

                <br></br>

                <div>
                    <p>주소</p>
 
                </div>
            </DetailItem>
        </div>
    );
}


export default Location;
