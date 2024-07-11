import './App.css';
import { Routes, Route, Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { Footer, Header } from './Route/Layout'

const Btn = styled.button`
color:white;
background-color:green;
`;

function App() {

  let navigate = useNavigate()

  return (
    <div>

      <Routes>
        <Route path='/' element={
          <>    
          <Btn onClick={() => { navigate('/11') }}>Simple</Btn>
          <button>asd</button>
          </>
        }/>

        <Route path='/11' element={<Header></Header>} />
      </Routes>



    </div>
  );
}

export default App;
