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
    max-height: ${props => (props.show === 'on' ? '2000px' : '0')};
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
    margin: 20px 0 20px 0;

    }
    .title_box {
        width: 370px;
        height: 27px;
        padding: 5px;
        border: 1px solid gray;
        margin-right: 20px;
        border-radius: 2px;

    }

    .itle_box:focus {
        outline: 1px solid black;
    }

.content_box {
        width: 370px;
        height:100px;
        padding: 5px;
        border: 1px solid gray;
        margin-right: 20px;
        overflow:scroll;

    }

.content_box:focus {
        outline: 1px solid black;
    }

`;

const AccountBox = styled.div`

display: flex;
justify-content: flex-start;
align-items: start;
flex-direction: column;


.group_title {
        width: 370px;
        height: 30px;
        padding: 5px;
        border: 1px solid gray;
        margin-right: 20px;
        border-radius: 4px;

    }

.bank {
        width: 60px;
        margin-right: 10px;
        height: 27px;
        padding: 5px;
        border: 1px solid gray;
        border-radius: 2px;
    }

.account {
        width: 200px;
        margin-right: 10px;
        height: 27px;
        padding: 5px;
        border: 1px solid gray;
        border-radius: 2px;
    }

.holder {
        width: 90px;
        height: 27px;
        padding: 5px;
        border: 1px solid gray;
        border-radius: 2px;
    }

.kakaolink {
        width: 370px;
        height: 30px;
        padding: 5px 5px 5px 65px;
        border: 1px solid gray;
        margin-right: 20px;
        border-radius: 4px;
        margin-top: 10px;

        background-image: url('https://i.namu.wiki/i/DRTBUHA314XYTx-pkzY4XSmQ0Job0j10vQhiETotjLCGUULQemriSC67Yh9UCsYq7Dw7WyvK0GkP9f3jP8r8gA.svg');
        background-repeat : no-repeat;
        background-position: 5px center;
        background-size : 50px;
    }

    .kakao_img {
            position: absolute;
            left: 10px; /* 이미지를 인풋 필드 안으로 이동 */
            top: 50%;
            transform: translateY(-50%);
            pointer-events: none; /* 이미지를 클릭할 수 없게 함 */
    }
    
`;

function AccountSection({ openSection, toggleSection, account, setAccount }) {

    const handleNoticeBoard = (e) => {
        const inputId = e.target.id;
        const value = e.target.value;

        setAccount(prevState => ({
            ...prevState,
            [inputId]: value
        }));
    };


    const handleAccountContent = (e) => {
        const { dataset, value } = e.target;
        const { person, field } = dataset;

        setAccount(prevState => ({
            ...prevState,
            [person]: {
                ...prevState[person],
                details: {
                    ...prevState[person].details,
                    [field]: value
                }
            }
        }));
    };

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
                        className='title_box'
                        id='acc_title'
                        value={account.acc_title}
                        onChange={handleNoticeBoard}
                        data-person="general"
                        data-field="acc_title"
                    />
                </div>

                <div className='inputbox'>
                    <p>내용</p>
                    <textarea
                        type='text'
                        id='acc_content'
                        className='content_box'
                        value={account.acc_content}
                        onChange={handleNoticeBoard}
                        data-person="general"
                        data-field="acc_content"
                    />
                </div>

                <div className='dottedline'></div>

                <AccountBox>
                    <div className='inputbox'>
                        <p>그룹명</p>
                        <input
                            type='text'
                            placeholder='ex) 신랑측 계좌번호'
                            className='group_title'
                            onChange={handleAccountContent}
                            data-person="groom"
                            data-field="group"
                        />
                    </div>

                    <div className='inputbox'>
                        <p>신랑</p>
                        <div>
                            <div>
                                <input
                                    type='text'
                                    placeholder='은행'
                                    className='bank'
                                    onChange={handleAccountContent}
                                    data-person="groom"
                                    data-field="bank"
                                />
                                <input
                                    type='text'
                                    placeholder='계좌'
                                    className='account'
                                    onChange={handleAccountContent}
                                    data-person="groom"
                                    data-field="accountNumber"
                                />
                                <input
                                    type='text'
                                    placeholder='예금주'
                                    className='holder'
                                    onChange={handleAccountContent}
                                    data-person="groom"
                                    data-field="accountName"
                                />
                            </div>
                            <div>
                                <input
                                    type='text'
                                    placeholder='카카오페이 송금 링크'
                                    className='kakaolink'
                                    onChange={handleAccountContent}
                                    data-person="groom"
                                    data-field="kakaoPay"
                                />
                            </div>
                        </div>
                    </div>

                    {/* 신랑 아버지 정보 */}
                    <div className='inputbox'>
                        <p>신랑 아버지</p>
                        <div>
                            <div>
                                <input
                                    type='text'
                                    placeholder='은행'
                                    className='bank'
                                    onChange={handleAccountContent}
                                    data-person="groomFather"
                                    data-field="bank"
                                />
                                <input
                                    type='text'
                                    placeholder='계좌'
                                    className='account'
                                    onChange={handleAccountContent}
                                    data-person="groomFather"
                                    data-field="accountNumber"
                                />
                                <input
                                    type='text'
                                    placeholder='예금주'
                                    className='holder'
                                    onChange={handleAccountContent}
                                    data-person="groomFather"
                                    data-field="accountName"
                                />
                            </div>
                            <div>
                                <input
                                    type='text'
                                    placeholder='카카오페이 송금 링크'
                                    className='kakaolink'
                                    onChange={handleAccountContent}
                                    data-person="groomFather"
                                    data-field="kakaoPay"
                                />
                            </div>
                        </div>
                    </div>

                    {/* 신랑 어머니 정보 */}
                    <div className='inputbox'>
                        <p>신랑 어머니</p>
                        <div>
                            <div>
                                <input
                                    type='text'
                                    placeholder='은행'
                                    className='bank'
                                    onChange={handleAccountContent}
                                    data-person="groomMother"
                                    data-field="bank"
                                />
                                <input
                                    type='text'
                                    placeholder='계좌'
                                    className='account'
                                    onChange={handleAccountContent}
                                    data-person="groomMother"
                                    data-field="accountNumber"
                                />
                                <input
                                    type='text'
                                    placeholder='예금주'
                                    className='holder'
                                    onChange={handleAccountContent}
                                    data-person="groomMother"
                                    data-field="accountName"
                                />
                            </div>
                            <div>
                                <input
                                    type='text'
                                    placeholder='카카오페이 송금 링크'
                                    className='kakaolink'
                                    onChange={handleAccountContent}
                                    data-person="groomMother"
                                    data-field="kakaoPay"
                                />
                            </div>
                        </div>
                    </div>
                </AccountBox>

                <div className='dottedline'></div>

                <AccountBox>
                    <div className='inputbox'>
                        <p>그룹명</p>
                        <input
                            type='text'
                            placeholder='ex) 신부측 계좌번호'
                            className='group_title'
                            onChange={handleAccountContent}
                            data-person="bride"
                            data-field="group"
                        />
                    </div>

                    <div className='inputbox'>
                        <p>신부</p>
                        <div>
                            <div>
                                <input
                                    type='text'
                                    placeholder='은행'
                                    className='bank'
                                    onChange={handleAccountContent}
                                    data-person="bride"
                                    data-field="bank"
                                />
                                <input
                                    type='text'
                                    placeholder='계좌'
                                    className='account'
                                    onChange={handleAccountContent}
                                    data-person="bride"
                                    data-field="accountNumber"
                                />
                                <input
                                    type='text'
                                    placeholder='예금주'
                                    className='holder'
                                    onChange={handleAccountContent}
                                    data-person="bride"
                                    data-field="accountName"
                                />
                            </div>
                            <div>
                                <input
                                    type='text'
                                    placeholder='카카오페이 송금 링크'
                                    className='kakaolink'
                                    onChange={handleAccountContent}
                                    data-person="bride"
                                    data-field="kakaoPay"
                                />
                            </div>
                        </div>
                    </div>

                    <div className='inputbox'>
                        <p>신부 아버지</p>
                        <div>
                            <div>
                                <input
                                    type='text'
                                    placeholder='은행'
                                    className='bank'
                                    onChange={handleAccountContent}
                                    data-person="brideFather"
                                    data-field="bank"
                                />
                                <input
                                    type='text'
                                    placeholder='계좌'
                                    className='account'
                                    onChange={handleAccountContent}
                                    data-person="brideFather"
                                    data-field="accountNumber"
                                />
                                <input
                                    type='text'
                                    placeholder='예금주'
                                    className='holder'
                                    onChange={handleAccountContent}
                                    data-person="brideFather"
                                    data-field="accountName"
                                />
                            </div>
                            <div>
                                <input
                                    type='text'
                                    placeholder='카카오페이 송금 링크'
                                    className='kakaolink'
                                    onChange={handleAccountContent}
                                    data-person="brideFather"
                                    data-field="kakaoPay"
                                />
                            </div>
                        </div>
                    </div>

                    <div className='inputbox'>
                        <p>신부 어머니</p>
                        <div>
                            <div>
                                <input
                                    type='text'
                                    placeholder='은행'
                                    className='bank'
                                    onChange={handleAccountContent}
                                    data-person="brideMother"
                                    data-field="bank"
                                />
                                <input
                                    type='text'
                                    placeholder='계좌'
                                    className='account'
                                    onChange={handleAccountContent}
                                    data-person="brideMother"
                                    data-field="accountNumber"
                                />
                                <input
                                    type='text'
                                    placeholder='예금주'
                                    className='holder'
                                    onChange={handleAccountContent}
                                    data-person="brideMother"
                                    data-field="accountName"
                                />
                            </div>
                            <div>
                                <input
                                    type='text'
                                    placeholder='카카오페이 송금 링크'
                                    className='kakaolink'
                                    onChange={handleAccountContent}
                                    data-person="brideMother"
                                    data-field="kakaoPay"
                                />
                            </div>
                        </div>
                    </div>
                </AccountBox>
            </DetailItem>
        </div>
    );
}

export default AccountSection;
