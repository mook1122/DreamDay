import styled from 'styled-components'
import { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";



const TelModal = styled.div.withConfig({
    shouldForwardProp: (prop) => !['show'].includes(prop),
})`
  width: 100%;
  height: 100%;
  top: ${props => (props.top + 'px')};
  left: 0;
  position: absolute;
  background-color: rgba(56, 44, 48, .84); 
  display: ${props => (props.show === 'on' ? 'flex' : 'none')};
  transition: .5s opacity;
  flex-direction: column;
  /* justify-content: center; */
  z-index: 1000;

  color: white;
  font-size: 18px;

  .close_btn{
    position: absolute;
    top: 20px;
    right: 20px;
    cursor: pointer;
    font-size: 30px;
  }

  .small_font {
    font-size: 12px;
}

`;

const Teltitle = styled.div`

margin-top: 100px;
margin-bottom: 70px;
`;

const Telinfo = styled.div`
    margin: 30px;
    text-align: left;
    font-size: 16px;

    .dottedline {
    width: 100%;
    border-top: 1px dashed #eee;
    margin: 10px 0 10px 0;
}



`;

const Telwrap = styled.div.withConfig({
    shouldForwardProp: (prop) => !['show'].includes(prop),
})`

display: ${props => (props.show === '' ? 'none' : 'flex')};
justify-content: space-between;
align-items: center;

font-size: 14px;

> span:first-child {
    width: 65px;
}

`;

function TelModal2({ man, woman, telModal, modalScroll, handleModal, telNumber }) {

    // console.log(document.getElementById('sample'));

    return (
        <>
            <TelModal show={telModal} top={modalScroll}>

                <div className='close_btn' onClick={handleModal}>x</div>

                <Teltitle>
                    <p className='small_font'>CONTACT</p>
                    <p>연락하기</p>
                </Teltitle>

                <Telinfo>
                    <p>신랑측 <span className='small_font'>GROOM</span></p>
                    <div className='dottedline'></div>
                    <div className='tel_flex_box'>
                        <Telwrap show={telNumber.groom}>
                            <span>신랑</span>
                            <span>{man.me}</span>
                            <span><FontAwesomeIcon icon={faPhone} /></span>
                        </Telwrap>
                        <br></br>
                        <Telwrap show={telNumber.groomFather}>
                            <span>신랑 아버지</span>
                            <span>{man.father}</span>
                            <span><FontAwesomeIcon icon={faPhone} /></span>
                        </Telwrap>
                        <br></br>

                        <Telwrap show={telNumber.groomMother}>
                            <span>신랑 어머니</span>
                            <span>{man.mom}</span>
                            <span><FontAwesomeIcon icon={faPhone} /></span>
                        </Telwrap>
                    </div>

                    <br></br>
                    <br></br>

                    <p>신부측 <span className='small_font'>BRIDE</span></p>
                    <div className='dottedline'></div>

                    <div className='tel_flex_box'>
                        <Telwrap show={telNumber.bride}>
                            <span>신부</span>
                            <span>{woman.me}</span>
                            <span><FontAwesomeIcon icon={faPhone} /></span>
                        </Telwrap>
                        <br></br>
                        <Telwrap show={telNumber.brideFather}>
                            <span>신부 아버지</span>
                            <span>{woman.father}</span>
                            <span><FontAwesomeIcon icon={faPhone} /></span>
                        </Telwrap>
                        <br></br>

                        <Telwrap show={telNumber.brideMother}>
                            <span>신부 어머니</span>
                            <span>{woman.mom}</span>
                            <span><FontAwesomeIcon icon={faPhone} /></span>
                        </Telwrap>
                    </div>

                </Telinfo>
            </TelModal>
        </>
    );

}

export default TelModal2;
