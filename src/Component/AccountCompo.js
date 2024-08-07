import React, { useState } from 'react';
import styled from 'styled-components';
import { Copyright } from '../styles/MainCard';

const AccountContainer = styled.div`
  width: 100%;

  #groom_section {

  }

  #bride_section {

  }
`;

const ShowAccount = styled.div.withConfig({
    shouldForwardProp: (prop) => !['showcontent'].includes(prop),
})`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .title {
    font-size: 15px;
    background-color: #F3F3F3;
    border-radius: 5px;
    width: 80%;
    height: 40px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer; 
    padding: 0 10px; 
  }

  .arrow {
    position: absolute;
    right: 15px;
    top: 13px;
    font-size: 10px;
    transition: transform 0.5s; 
    transform: ${props => (props.showcontent === 'on' ? 'rotate(180deg)' : 'rotate(0deg)')};
  }

  .content {
    width: 80%;
    overflow: hidden;
    max-height: ${props => (props.showcontent === 'on' ? '500px' : '0')}; 
    transition: max-height 0.5s ease-out; 
  }
`;

const AccountInfoBox = styled.div.withConfig({
    shouldForwardProp: (prop) => !['showcontent'].includes(prop),
})`
  display: ${props => (props.showcontent === '' ? 'none' : 'flex')};
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 13px;
  padding-top: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid #eee;

  .acc1 {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding-bottom: 10px;

    > span {
      height: 25px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  .copy_btn {
    width: 55px;
    height: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgb(243, 243, 243);
    cursor: pointer;
    font-weight: bold;
  }
`;

const KakaoBtn = styled.a.withConfig({
    shouldForwardProp: (prop) => !['showcontent'].includes(prop),
})`
  width: 55px;
  height: 25px;
  display: ${props => (props.showcontent === '' ? 'none' : 'flex')};
  justify-content: center;
  align-items: center;
  background-image: url('https://i.namu.wiki/i/DRTBUHA314XYTx-pkzY4XSmQ0Job0j10vQhiETotjLCGUULQemriSC67Yh9UCsYq7Dw7WyvK0GkP9f3jP8r8gA.svg');
  background-repeat: no-repeat;
  background-position: 2px center;
  background-size: 50px;
  cursor: pointer;
`;

function AccountBox({ account }) {
    const [showGroomContent, setShowGroomContent] = useState('off');
    const [showBrideContent, setShowBrideContent] = useState('off');

    const toggleGroomContent = () => {
        setShowGroomContent(showGroomContent === 'off' ? 'on' : 'off');
    };

    const toggleBrideContent = () => {
        setShowBrideContent(showBrideContent === 'off' ? 'on' : 'off');
    };


    const handleCopy = (e) => {
        console.log(account.groom.details.accountNumber);
        const number = e.target.getAttribute('data-number');
        console.log(number);

        if (navigator.clipboard && window.isSecureContext) {
            // navigator.clipboard 사용 가능
            navigator.clipboard.writeText(number).then(() => {
                alert('전화번호가 복사되었습니다.');
            }).catch((err) => {
                console.error('전화번호 복사 실패:', err);
            });
        } else {
            // navigator.clipboard 사용 불가 (비HTTPS 환경 등)
            const textArea = document.createElement("textarea");
            textArea.value = number;
            // Avoid scrolling to bottom
            textArea.style.position = "fixed";
            textArea.style.top = "0";
            textArea.style.left = "0";
            textArea.style.opacity = "0";
            document.body.appendChild(textArea);
            textArea.focus();
            textArea.select();
            try {
                document.execCommand('copy');
                alert('전화번호가 복사되었습니다.');
            } catch (err) {
                console.error('전화번호 복사 실패:', err);
            }
            document.body.removeChild(textArea);
        }
    };

    return (
        <>
            <AccountContainer>
                <ShowAccount showcontent={showGroomContent} id='groom_section'>
                    <div className="title" onClick={toggleGroomContent}>
                        {account.groom.details.group}
                        <span className="arrow">▲</span>
                    </div>
                    <div className="content">
                        <AccountInfoBox showcontent={account.groom.details.accountNumber}>
                            <div className='acc1'>
                                <span>{account.groom.details.bank}</span>
                                <span>{account.groom.details.accountNumber}</span>
                                <span data-number={account.groom.details.accountNumber} className='copy_btn' onClick={handleCopy}>복사하기</span>
                            </div>
                            <div className='acc1'>
                                <span>{account.groom.details.accountName}</span>
                                <KakaoBtn
                                    showcontent={account.groom.details.kakaoPay}
                                    href={account.groom.details.kakaoPay} target="_blank"></KakaoBtn>
                            </div>
                        </AccountInfoBox>
                        <AccountInfoBox showcontent={account.groomFather.details.accountNumber}>
                            <div className='acc1'>
                                <span>{account.groomFather.details.bank}</span>
                                <span >{account.groomFather.details.accountNumber}</span>
                                <span className='copy_btn' data-number={account.groomFather.details.accountNumber} onClick={handleCopy}>복사하기</span>
                            </div>
                            <div className='acc1'>
                                <span>{account.groomFather.details.accountName}</span>
                                <KakaoBtn
                                    showcontent={account.groomFather.details.kakaoPay}
                                    href={account.groomFather.details.kakaoPay} target="_blank"></KakaoBtn>
                            </div>
                        </AccountInfoBox>
                        <AccountInfoBox showcontent={account.groomMother.details.accountNumber}>
                            <div className='acc1'>
                                <span>{account.groomMother.details.bank}</span>
                                <span >{account.groomMother.details.accountNumber}</span>
                                <span className='copy_btn' data-number={account.groomMother.details.accountNumber} onClick={handleCopy}>복사하기</span>
                            </div>
                            <div className='acc1'>
                                <span>{account.groomMother.details.accountName}</span>
                                <KakaoBtn
                                    showcontent={account.groomMother.details.kakaoPay}
                                    href={account.groomMother.details.kakaoPay} target="_blank"></KakaoBtn>
                            </div>
                        </AccountInfoBox>
                    </div>
                </ShowAccount>

                <br></br>

                <ShowAccount showcontent={showBrideContent} id='bride_section'>
                    <div className="title" onClick={toggleBrideContent}>
                        {account.bride.details.group}
                        <span className="arrow">▲</span>
                    </div>
                    <div className="content">
                        <AccountInfoBox showcontent={account.bride.details.accountNumber}>
                            <div className='acc1'>
                                <span>{account.bride.details.bank}</span>
                                <span >{account.bride.details.accountNumber}</span>
                                <span className='copy_btn' data-number={account.bride.details.accountNumber} onClick={handleCopy}>복사하기</span>
                            </div>
                            <div className='acc1'>
                                <span>{account.bride.details.accountName}</span>
                                <KakaoBtn
                                    showcontent={account.bride.details.kakaoPay}
                                    href={account.bride.details.kakaoPay} target="_blank"></KakaoBtn>
                            </div>
                        </AccountInfoBox>
                        <AccountInfoBox showcontent={account.brideFather.details.accountNumber}>
                            <div className='acc1'>
                                <span>{account.brideFather.details.bank}</span>
                                <span >{account.brideFather.details.accountNumber}</span>
                                <span className='copy_btn' data-number={account.brideFather.details.accountNumber} onClick={handleCopy}>복사하기</span>
                            </div>
                            <div className='acc1'>
                                <span>{account.brideFather.details.accountName}</span>
                                <KakaoBtn
                                    showcontent={account.brideFather.details.kakaoPay}
                                    href={account.brideFather.details.kakaoPay} target="_blank"></KakaoBtn>
                            </div>
                        </AccountInfoBox>
                        <AccountInfoBox showcontent={account.brideMother.details.accountNumber}>
                            <div className='acc1'>
                                <span>{account.brideMother.details.bank}</span>
                                <span >{account.brideMother.details.accountNumber}</span>
                                <span className='copy_btn' data-number={account.brideMother.details.accountNumber} onClick={handleCopy}>복사하기</span>
                            </div>
                            <div className='acc1'>
                                <span>{account.brideMother.details.accountName}</span>
                                <KakaoBtn
                                    showcontent={account.brideMother.details.kakaoPay}
                                    href={account.brideMother.details.kakaoPay} target="_blank"></KakaoBtn>
                            </div>
                        </AccountInfoBox>
                    </div>
                </ShowAccount>
                <br></br>
            </AccountContainer>
        </>
    );
}

export default AccountBox;
