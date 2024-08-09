import { useState } from 'react';
import { styled, keyframes } from 'styled-components'
import { Routes, Route, Link, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';


const HeaderNav = styled.header`
  width: 100%;
  background-color: white;
  z-index: 100;
  position: sticky;
  /* position: absolute; */
  top: 0;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    max-width: 1200px;
    width: 100%;
  }

  @media(max-width:650px) {
    > div {
      padding: 10px 15px;
    }
  }
`;

const Title = styled.div`
  margin: 0;
  display : flex;
  cursor: pointer;

  img {
    width:40px;
    margin-right:10px;
  }

  > p {
    display: flex;
    align-items: center;
    text-align: center;
    font-family: "Gugi", sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 30px;
  }

  @media(max-width:1100px) {
    > p {
      font-size: 25px;
    } 
  }

  @media(max-width:650px) {
    > p {
      font-size: 20px;
    } 

    img {
    width:30px;
    margin-right:10px;
  }
  }
`;

const Menu = styled.nav`
  ul {
    list-style: none;
    display: flex;
    
    li {
      margin-left: 20px;
      font-size : 18px;
      font-weight: 700;
      cursor: pointer;
    }
  }

  @media (max-width:650px) {
      display: none;
  }
`;


const MobileMenuIcon = styled.div`
  display: none;
  cursor: pointer;

  @media (max-width:650px) {
    display: block;
  }
`;

const slideIn = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`;

const slideOut = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(100%);
  }
`;

const MobileMenuContainer = styled.div.withConfig({
  shouldForwardProp: (prop) => !['isopen'].includes(prop),
})`
  position: fixed;
  top: 0;
  right: 0;
  width: 250px;
  height: 100%;
  background-color: white;
  box-shadow: ${props => props.isopen === 'on' ? '-2px 0 5px rgba(0,0,0,0.5)' : 'none'};
  transform: translateX(100%);
  animation: ${props => props.isopen === 'on' ? slideIn : slideOut} 0.3s forwards;
  z-index: 200;

  ul {
    list-style: none;
    padding: 20px;

    li {
      padding: 15px 0;
      font-size: 18px;
      font-weight: 700;
      cursor: pointer;
    }
  }
`;

const CloseButton = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 10px;
  cursor: pointer;
`;

function Header() {
  let navigate = useNavigate();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState('off');

  return (
    <HeaderNav>
      <div>
        <Title onClick={() => { navigate('/') }}>
          <img src={process.env.PUBLIC_URL + `/img/main-logo.png`} alt="logo" />
          <p>드림데이</p>
        </Title>
        <Menu className='main_header_menu'>
          <ul>
            <li onClick={() => { navigate('/invitation') }}>모바일 청첩장</li>
            <li onClick={() => { navigate('/view/66b0374c7c87fd56e559e9c1') }}>샘플</li>
            <li onClick={() => { navigate('/mypage') }}>마이페이지</li>
          </ul>
        </Menu>
        <MobileMenuIcon onClick={() => setMobileMenuOpen('on')}>
          <FontAwesomeIcon icon={faBars} />
        </MobileMenuIcon>
        <MobileMenuContainer isopen={isMobileMenuOpen}>
          <CloseButton onClick={() => setMobileMenuOpen('off')}>
            <FontAwesomeIcon icon={faTimes} size="lg" />
          </CloseButton>
          <ul>
            <li onClick={() => { navigate('/'); setMobileMenuOpen('off'); }}>Home</li>
            <li onClick={() => { navigate('/invitation'); setMobileMenuOpen('off'); }}>모바일 청첩장</li>
            <li onClick={() => { navigate('/view/66b0374c7c87fd56e559e9c1'); setMobileMenuOpen('off'); }}>샘플</li>
            <li onClick={() => { navigate('/mypage'); setMobileMenuOpen('off'); }}>마이페이지</li>
          </ul>
        </MobileMenuContainer>
      </div>
    </HeaderNav>
  );
}

const InvitationMenu = styled.nav`
  ul {
    list-style: none;
    display: flex;
  }
`;

const SaveBtn = styled.span`
width: 80px;
height: 30px;
display: flex;
justify-content: center;
align-items: center;
border: 1px solid #000;
padding: 5px;
cursor: pointer;
transition: all 0.3s ease;
border-radius: 5px;
margin-right: 10px;
background-color: #fff;


  &:hover {
    background-color: #000;
    color: #fff;
  }

  @media(max-width:650px) {
    font-size: 14px;
    width: 65px;
    margin-right: 5px;
  }
`;

const PreviewBtn = styled.span`
width: 80px;
height: 30px;
display: flex;
justify-content: center;
align-items: center;

      border: 1px solid #000;
      padding: 5px;
      cursor: pointer;
      transition: all 0.3s ease;
      border-radius: 5px;
      margin-right: 10px;
      background-color: #fff;

  &:hover {
    background-color: #000;
    color: #fff;
  }

  @media (min-width: 1100px) {
    display: none;
  }

  @media(max-width:650px) {
    font-size: 14px;
    width: 65px;
    margin-right: 5px;
  }
`;

function InvitationHeader({ Upload, handlePreviewModal }) {
  let navigate = useNavigate();

  return (
    <HeaderNav>
      <div>
        <Title onClick={() => { navigate('/') }}>
          <img src={`${process.env.PUBLIC_URL}/img/main-logo.png`} alt="로고" />
          <p>드림데이</p>
        </Title>

        <InvitationMenu>
          <ul>
            <PreviewBtn className='preview' onClick={() => { handlePreviewModal() }}>미리보기</PreviewBtn>
            <SaveBtn onClick={() => { Upload() }}>저장하기</SaveBtn>
          </ul>
        </InvitationMenu>
      </div>
    </HeaderNav>
  );
}



const Foot = styled.footer`

background-color: #2C2C2C;
width: 100%;
height: 80px;

position: relative;
/* position: absolute; */
/* transform: translateY(-100%); */

color: white;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
font-size: 12px;

`;

const FooterGit = styled.p`
cursor: pointer;

:hover {
  color: yellow;
}

display: flex;
justify-content: center;
align-items: center;

> img {
  width: 20px;
  height: 20px;
  background-color: white;
  margin-right: 5px;
}
`

function Footer() {
  return (
    <Foot>
      <p>
        Copyrightⓒ2024. DreamDay All rights reserved.
      </p>
      <br></br>
      <FooterGit>
        {/* <img src={`${process.env.PUBLIC_URL}/img/git.png`} alt='github'></img> */}
        <a href='https://github.com/mook1122/DreamDay'>
          GitHub Link
        </a>
      </FooterGit>
    </Foot>
  );
}

export { Footer, Header, InvitationHeader };