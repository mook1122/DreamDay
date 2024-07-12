import './App.css';
import { Routes, Route, Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { Footer, Header } from './Route/Layout'
import {Main} from './Route/Main'

function App() {

  let navigate = useNavigate()

  return (
    <div>

      <Header></Header>

      <Routes>

        <Route path='/' element={ <Main></Main> } />

      </Routes>

      <Footer></Footer>



    </div>
  );
}

export default App;
