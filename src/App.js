import './App.css';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components'
import { Footer, Header } from './Route/Layout'
import {Main} from './Route/Main'
import {Invitation} from './Route/Invitation'
import InvitationView from './Route/InvitationView';

function App() {
  const location = useLocation();
  let navigate = useNavigate()

  return (
    <div>

      {location.pathname == '/' && <Header />}

      <Routes>

        <Route path='/' element={ <Main></Main> } />
        <Route path='/invitation' element={ <Invitation></Invitation>} />
        <Route path='/view/:id' element={ <InvitationView></InvitationView>} />

      </Routes>

      {location.pathname == '/' && <Footer />}


    </div>
  );
}

export default App;
