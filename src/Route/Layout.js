import styled from 'styled-components'
import { Routes, Route, Link, useNavigate } from 'react-router-dom'


const HeaderNav = styled.header`
  width: 100%;
  background-color: white;
  z-index: 100;
  position: sticky;
  top: 0;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    max-width: 1200px;
    width: 100%;
  }
`;

const Title = styled.h1`
  margin: 0;
  display : flex;

  font-family: "Gugi", sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 30px;
  cursor: pointer;

  img {
    width:40px;
    margin-right:10px;
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

function Header() {

  let navigate = useNavigate()

  return (
    <HeaderNav>
      <div>

        <Title onClick={() => { navigate('/') }}>
          <img src={process.env.PUBLIC_URL + `/img/main-logo.png`}></img>
          드림데이
        </Title>
        <Menu className='main_header_menu'>
          <ul>
            <li onClick={() => { navigate('/invitation') }}>모바일 청첩장</li>
            {/* <li onClick={() => { navigate('/thanks-card') }}>감사장</li> */}
            <li onClick={() => { navigate('/sample') }}>샘플</li>
            <li onClick={() => { navigate('/mypage') }}>마이페이지</li>
          </ul>
        </Menu>
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
  border: 1px solid black;
  border-radius: 8px;
  cursor: pointer;
  background-color: white;
  transition: background-color 0.3s ease, transform 0.3s ease;
  margin-right: 10px;

  &:hover {
    background-color: #f0f0f0;
    transform: scale(1.05);
  }
`;

const PreviewBtn = styled.span`
width: 80px;
height: 30px;
display: flex;
justify-content: center;
align-items: center;
  border: 1px solid black;
  border-radius: 8px;
  cursor: pointer;
  background-color: white;
  transition: background-color 0.3s ease, transform 0.3s ease;
  margin-right: 10px;

  &:hover {
    background-color: #f0f0f0;
    transform: scale(1.05);
  }

  @media (min-width: 1100px) {
    display: none;
  }
`;

function InvitationHeader({ Upload , handlePreviewModal}) {
  let navigate = useNavigate();

  return (
    <HeaderNav>
      <div>
        <Title onClick={() => { navigate('/') }}>
          <img src={`${process.env.PUBLIC_URL}/img/main-logo.png`} alt="로고" />
          드림데이
        </Title>

        <InvitationMenu>
          <ul>
            <PreviewBtn className='preview' onClick={()=>{handlePreviewModal()}}>미리보기</PreviewBtn>
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
transform: (translateY(0%));

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
        <a>
          GitHub Link
        </a>
      </FooterGit>
    </Foot>
  );
}

export { Footer, Header, InvitationHeader };