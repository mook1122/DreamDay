import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios'

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

    .inputbox {
        display: flex;
        padding: 10px;
    }

    p {
        width:80px;
    }
    
    .dottedline {
    width: 95%;
    margin-left:2.5%;
    border-top: 1px dashed #eee;
    margin: 10px 0 10px 0;

    }
        #title_box {
        width: 370px;
        height: 27px;
        padding: 5px;
        border: 1px solid gray;
        margin-right: 20px;
        border-radius: 2px;

    }

    #title_box:focus {
        outline: 1px solid black;
    }

    #content_box {
        width: 370px;
        height:100px;
        padding: 5px;
        border: 1px solid gray;
        margin-right: 20px;
        overflow:scroll;

    }

    #content_box:focus {
        outline: 1px solid black;
    }

`;

const AccountBox = styled.div`

display: flex;
justify-content: flex-start;
align-items: start;
flex-direction: column;


    #group_title {
        width: 370px;
        height: 30px;
        padding: 5px;
        border: 1px solid gray;
        margin-right: 20px;
        border-radius: 4px;

    }

    #bank {
        width: 60px;
        margin-right: 10px;
        height: 27px;
        padding: 5px;
        border: 1px solid gray;
        border-radius: 2px;
    }

    #account {
        width: 200px;
        margin-right: 10px;
        height: 27px;
        padding: 5px;
        border: 1px solid gray;
        border-radius: 2px;
    }

    #holder {
        width: 90px;
        height: 27px;
        padding: 5px;
        border: 1px solid gray;
        border-radius: 2px;
    }

    #kakaolink {
        width: 370px;
        height: 30px;
        padding: 5px;
        border: 1px solid gray;
        margin-right: 20px;
        border-radius: 4px;
        margin-top: 10px;
    }

    .kakao_img {
            position: absolute;
            left: 10px; /* 이미지를 인풋 필드 안으로 이동 */
            top: 50%;
            transform: translateY(-50%);
            pointer-events: none; /* 이미지를 클릭할 수 없게 함 */
    }
    
`;

function AccountSection({ openSection, toggleSection, }) {

    return (
        <div>
            <ToggleBar onClick={toggleSection}>
                <p>{openSection === 'off' ? '▲ 계좌번호' : '▼ 계좌번호'}</p>
            </ToggleBar>

            <DetailItem show={openSection}>
                <div className='inputbox'>
                    <p>제목</p>
                    <input
                        type='text'
                        id='title_box'
                    />
                </div>

                <div className='inputbox'>
                    <p>내용</p>
                    <textarea
                        type='text'
                        id='content_box'

                    />
                </div>

                <div className='dottedline'></div>

                <AccountBox>

                    <div className='inputbox'>
                        <p>그룹명</p>
                        <input
                            type='text'
                            placeholder='신랑측 계좌번호'
                            id='group_title'
                        />
                    </div>


                    <div className='inputbox'>
                        <p>신랑</p>

                        <div>
                            <div>
                                <input
                                    type='text'
                                    placeholder='은행'
                                    id='bank'
                                />
                                <input
                                    type='text'
                                    placeholder='계좌'
                                    id='account'
                                />
                                <input
                                    type='text'
                                    placeholder='예금주'
                                    id='holder'
                                />
                            </div>

                            <div>
                                <input
                                    type='text'
                                    placeholder='카카오페이 송금 링크'
                                    id='kakaolink'
                                />
                            </div>
                        </div>
                    </div>

                    <div className='inputbox'>
                        <p>신랑 아버지</p>

                        <div>
                            <div>
                                <input
                                    type='text'
                                    placeholder='은행'
                                    id='bank'
                                />
                                <input
                                    type='text'
                                    placeholder='계좌'
                                    id='account'
                                />
                                <input
                                    type='text'
                                    placeholder='예금주'
                                    id='holder'
                                />
                            </div>

                            <div>
                                {/* <img className='kakao_img' src={process.env.PUBLIC_URL + `/img/kakao_btn.png`} /> */}
                                <input
                                    type='text'
                                    placeholder='카카오페이 송금 링크'
                                    id='kakaolink'
                                />
                            </div>
                        </div>
                    </div>

                    <div className='inputbox'>
                        <p>신랑 어머님</p>

                        <div>
                            <div>
                                <input
                                    type='text'
                                    placeholder='은행'
                                    id='bank'
                                />
                                <input
                                    type='text'
                                    placeholder='계좌'
                                    id='account'
                                />
                                <input
                                    type='text'
                                    placeholder='예금주'
                                    id='holder'
                                />
                            </div>

                            <div>
                                <input
                                    type='text'
                                    placeholder='카카오페이 송금 링크'
                                    id='kakaolink'
                                />
                            </div>
                        </div>
                    </div>


                </AccountBox>

                <div className='dottedline'></div>


            </DetailItem>
        </div>
    );
}



export default AccountSection;
