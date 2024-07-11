import './App.css';
import { Routes, Route, Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { Footer, Header } from './Route/Layout'


const BannerTitle = styled.div`

text-align: center;

font-size: 5vw;
margin-top: 4%;

font-family: "Nanum Brush Script", cursive;
  font-weight: 400;
  font-style: normal;
`;


const Banner = styled.div`

margin-top: 4%;
margin-bottom: 4%;

display: flex;
justify-content: center;
align-items: center;

`;

const BannerItem = styled.div`

  max-width: 1300px;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    max-width: 450px;

  }

  div {
    /* padding: 0 40px; */
    width: 50%;

    font-size: 30px;
  }

`;

function App() {

  let navigate = useNavigate()

  return (
    <div>

      <Header></Header>

      <Routes>

        <Route path='/' element={
          <>

            <BannerTitle>
              일생에 가장 아름다운 순간
            </BannerTitle>

            <Banner>

              <BannerItem>
                <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                  <img src={process.env.PUBLIC_URL + `/img/banner.jpg`}></img>   
                </div>

                <div>
                  <p>
                    무료로 만들어보세요!
                  </p>
                  <p>
                    샘플을 찾아보고
                  </p>
                  <p>
                    마음에 드는 청첩장을 골라보세요.
                  </p>
                </div>


              </BannerItem>

            </Banner>


          </>
        } />

      </Routes>

      <Footer></Footer>



    </div>
  );
}

export default App;
