import { Routes, Route, Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faPencil } from "@fortawesome/free-solid-svg-icons";


const BannerTitle = styled.div`

text-align: center;

font-size: 5vw;
margin-top: 4%;

font-family: "Nanum Brush Script", cursive;
  font-weight: 400;
  font-style: normal;


  @media (max-width:900px) {
    font-size: 40px;
  }
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

  div:first-child {
    padding-left: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  div:nth-child(2) {
    padding-left: 20px;
  }

  div {
    /* padding: 0 40px; */
    width: 50%;
  }


  @media (max-width: 1000px) {
    flex-direction: column;

    div {
      width: 100%;
    }

    div:first-child {
    padding: 10px;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  div:nth-child(2) {
    padding: 10px;

  }
  }

`;

const Btn = styled.button`

padding: 15px 20px 15px 20px;
color: ${props => props.color};
background-color: ${props => props.bg};
font-size: 16px;
font-weight: bold;
border: none;
border-radius: 10px;
margin-right: 10px;

cursor: pointer;

svg {
  margin-right: 8px;
}

`;

const LargeFont = styled.p`

font-size: 35px;
font-weight: ${props => props.weight};
color: ${props => props.color};

@media (max-width:1000px) {
  font-size: 25px;
}

`;

const BasicFont = styled.p`
font-size: 18px;
color: ${props => props.color};

`;

function Main() {

    let navigate = useNavigate()

    return (

        <>

            <BannerTitle>
                일생에 가장 아름다운 순간
            </BannerTitle>

            <Banner>

                <BannerItem>
                    <div>
                        <img src={process.env.PUBLIC_URL + `/img/banner.jpg`}></img>
                    </div>

                    <div>
                        <LargeFont weight='bold'>
                            무료로 만들어보세요!
                        </LargeFont>

                        <LargeFont>
                            샘플을 찾아보고
                        </LargeFont>

                        <LargeFont weight='bold'>
                            마음에 드는 청첩장을 골라보세요.
                        </LargeFont>

                        <br></br>
                        <br></br>

                        <BasicFont color='gray'>
                            일생에 가장 아름다운 날, <br></br>
                            드림데이에서 모바일 청첩장을 만들어보세요!
                        </BasicFont>

                        <br></br>

                        <div style={{ display: 'flex', width: '100%' }}>

                            <Btn bg='#F7E600' onClick={() => { navigate('/invitation') }}>
                                <FontAwesomeIcon icon={faPencil} />
                                지금 바로 제작하기
                            </Btn>

                            <Btn bg='#C0C0C0'>
                                <FontAwesomeIcon icon={faLink} />
                                샘플보기
                            </Btn>

                        </div>

                        <br></br>

                        <BasicFont color='gray'>
                            가장 아름다운 순간을 만들다.
                        </BasicFont>

                    </div>






                </BannerItem>

            </Banner>


        </>



    );
}

export {Main};
