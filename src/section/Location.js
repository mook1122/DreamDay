import React from 'react';
import { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';

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
    max-height: ${props => (props.show === 'on' ? '500px' : '0')};
    overflow: hidden;
    transition: max-height ${props => (props.show === 'on' ? '0.5s ease-in-out' : '0s ease-in-out')};


    > div {
        display: flex;
        align-items: center;
        padding: 10px;

        p {
            width:80px;
        }
    }

    input {
        width: 280px;
        height: 30px;
        padding: 5px;
        border: 1px solid gray;
        margin-right: 20px;
        border-radius: 4px;

    }

    #address {
        width:200px;
        margin-right:10px
    }

    button {
        width:70px;
        height:30px;
        cursor: pointer;
    }

`;


function Location({ openSection, toggleSection, totallocation, setTotallocation, setShowMap }) {


    const handleLocationTitle = (e) => {
        setTotallocation(i => ({
            ...i,
            title: e.target.value
        }));
    };
    const handleLocationTel = (e) => {
        setTotallocation(i => ({
            ...i,
            tel: e.target.value
        }));
    };
    const handleLocationHall = (e) => {
        setTotallocation(i => ({
            ...i,
            hall: e.target.value
        }));
    };
    const handleLocationHallName = (e) => {
        setTotallocation(i => ({
            ...i,
            hall_name: e.target.value
        }));
    };

    const handleAddressSearch = () => {
        setShowMap('on');
        new window.daum.Postcode({
            oncomplete: function(data) {
                const addr = data.address;
                setTotallocation(i => ({
                    ...i,
                    location: addr,
                    address: addr,
                }));
            }
        }).open();
    };


    return (
        <div>
            <ToggleBar onClick={toggleSection}>
                <p>{openSection === 'off'? '▲ 예식 장소' : '▼ 예식 장소'}</p>
            </ToggleBar>

            <DetailItem show={openSection}>
                <div>
                    <p>제목</p>
                    <input
                        placeholder='ex) 오시는 길'
                        type='text'
                        value={totallocation.title}
                        onChange={handleLocationTitle}
                    />
                </div>
                <div>
                    <p>주소</p>
                    <input
                        type="text"
                        placeholder="주소"
                        id='address'
                        value={totallocation.address}
                        readOnly
                    />
                    <button onClick={handleAddressSearch}>주소 검색</button>
                </div>
                <div>
                    <p>예식장명</p>
                    <input
                        placeholder='예식장 이름 입력'
                        type='text'
                        value={totallocation.hall_name}
                        onChange={handleLocationHallName}
                    />
                </div>
                <div>
                    <p>층과 홀</p>
                    <input
                        placeholder='층과 웨딩홀 이름 입력'
                        type='text'
                        value={totallocation.hall}
                        onChange={handleLocationHall}
                    />
                </div>
                <div>
                    <p>연락처</p>
                    <input
                        placeholder='예식장 연락처, 02-000-0000'
                        type='text'
                        value={totallocation.tel}
                        onChange={handleLocationTel}
                    />
                </div>
            </DetailItem>
        </div>
    );
}

export default Location;
