import { Routes, Route, Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { useState, useEffect } from 'react';


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import { motion, useAnimation } from 'framer-motion';

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

const AnimatedLetter = styled(motion.span)`
  display: inline-block;
  opacity: 0;
  white-space: pre; // 공백을 유지하도록 설정
  font-family: "Nanum Brush Script", cursive; // 폰트 스타일을 각 글자에 적용
`;

const textVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
    },
  }),
};


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

const Btn = styled.button.withConfig({
  shouldForwardProp: (prop) => !['color', 'bg'].includes(prop),
})`
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

const LargeFont = styled.p.withConfig({
  shouldForwardProp: (prop) => !['weight','color'].includes(prop),
})`
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

@media (max-width:1000px) {
  font-size: 15px;
}

`;

function Main() {

  let navigate = useNavigate()

  const controls = useAnimation();

  useEffect(() => {
    controls.start((i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.6 },
    }));
  }, [controls]);

  const title = "일생에 가장 아름다운 순간";
  const letters = title.split("");

  return (

    <>

      <BannerTitle>
        {letters.map((letter, index) => (
          <AnimatedLetter
            key={index}
            custom={index}
            initial="hidden"
            animate={controls}
            variants={textVariants}
          >
            {letter}
          </AnimatedLetter>
        ))}
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
              회원가입 없이
            </LargeFont>

            <LargeFont weight='bold'>
              나만의 청첩장을 만들어보세요.
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

              <Btn bg='#C0C0C0' onClick={() => { navigate('/view/66b0374c7c87fd56e559e9c1') }}>
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

export { Main };
