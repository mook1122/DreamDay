import './App.css';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components'
import { Footer, Header } from './Route/Layout'
import {Main} from './Route/Main'
import {Invitation} from './Route/Invitation'

function App() {
  const location = useLocation();
  let navigate = useNavigate()

  return (
    <div>

      <Header></Header>

      <Routes>

        <Route path='/' element={ <Main></Main> } />
        <Route path='/invitation' element={ <Invitation></Invitation>} />

      </Routes>

      {location.pathname !== '/invitation' && <Footer />}


    </div>
  );
}

export default App;
