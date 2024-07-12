import { Routes, Route, Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { useState } from 'react';
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
#root {
    height: 100%;
}
html {
    height: 100%;
}
  body {
    height: 100%;
    background-color: #EFEFEF;
}
`
const Container = styled.div`

display: flex;
justify-content: center;
align-items: center;

height: 85%;
margin-top: 15px;


div:first-child , div:nth-child(2) {
    margin: 20px;
    border-radius: 10px;
    height: 100%;

}

`;

const Sample = styled.div`

width: 400px;
background-color: ${props => props.bg};
overflow-y: scroll;

`;

const Selector = styled.div`

    background-color: white;

    width: 600px;

`;

function Invitation() {

    let [bg, setBg] = useState('white')

    const handleRedClick = () => {
        setBg('red');
    };


    return (
        <>

            <GlobalStyle>

            </GlobalStyle>

            <Container>

                <Sample bg={bg}>

                </Sample>


                <Selector>

                    <button onClick={handleRedClick}>빨강</button>
                    <button>파랑</button>

                </Selector>

            </Container>



        </>
    )

}

export { Invitation };