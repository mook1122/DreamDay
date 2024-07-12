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
          <img src={process.env.PUBLIC_URL + `/img/logo.png`}></img>
          드림데이
        </Title>
        <Menu>
          <ul>
            <li onClick={() => { navigate('/invitation') }}>모바일 청첩장</li>
            <li onClick={() => { navigate('/thanks-card') }}>감사장</li>
            <li onClick={() => { navigate('/sample') }}>샘플</li>
          </ul>
        </Menu>
      </div>
    </HeaderNav>
  );
}


let Foot = styled.footer`

background-color: #2C2C2C;
width: 100%;
height: 50px;

position: relative;
transform: (translateY(0%));

`;

function Footer() {
  return (
    <Foot>

    </Foot>
  );
}

export { Footer, Header };