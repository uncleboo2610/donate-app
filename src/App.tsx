import './App.css';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { MainLayout } from './shared/layout/MainLayout';
import { HomePage } from './modules/home/HomePage';
import { RoomPage } from './modules/video/components/RoomPage';
import { LogInPage } from './modules/auth/components/LogInPage';
import { DonationPage } from './modules/donation/components/DonationPage';
import ProfilePage from './modules/profile/component/ProfilePage';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route errorElement={<h2>Error</h2>}>
          <Route path='/auth/login' element={<LogInPage />} />
        </Route>
        <Route element={<MainLayout />} errorElement={<h2>Error</h2>}>
          <Route path='/' element={<HomePage />} />
          <Route path='/room/:roomId' element={<RoomPage />} />
          <Route path='/donation' element={<DonationPage />} />
          <Route path='/profile' element={<ProfilePage />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
