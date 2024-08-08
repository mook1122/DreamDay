import './App.css';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components'
import { Footer, Header } from './Route/Layout'
import { Main } from './Route/Main'
import { Invitation } from './Route/Invitation'
import InvitationView from './Route/InvitationView';
import MyPage from './Route/MyPage'

function App() {
  const location = useLocation();
  let navigate = useNavigate()

  return (
    <div>

      {(location.pathname === '/' || location.pathname === '/mypage') && <Header />}

      <Routes>

        <Route path='/' element={<Main></Main>} />
        <Route path='/invitation' element={<Invitation></Invitation>} />
        <Route path='/mypage' element={<MyPage></MyPage>} />
        <Route path='/view/:id' element={<InvitationView></InvitationView>} />

      </Routes>

      {(location.pathname === '/' || location.pathname === '/mypage') && <Footer />}


    </div>
  );
}

export default App;
