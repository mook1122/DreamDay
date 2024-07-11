import styled from 'styled-components'

const HeaderNav = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: white;
`;

const Title = styled.h1`
  margin: 0;
  display : flex;

  font-family: "Gugi", sans-serif;
  font-weight: 400;
  font-style: normal;
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
    }
  }
`;

function Header() {
  return (
    <HeaderNav>
      <Title>
        <img src={process.env.PUBLIC_URL + `/img/logo.png`}></img>
        드림데이
        </Title>
      <Menu>
        <ul>
          <li>모바일 청첩장</li>
          <li>감사장</li>
          <li>샘플</li>
        </ul>
      </Menu>
    </HeaderNav>
  );
}


function Footer() {
  return (
    <div className="">
      hi
    </div>
  );
}

export { Footer, Header };