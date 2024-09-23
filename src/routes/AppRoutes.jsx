import { Route, Routes } from 'react-router-dom';
import Home from '@pages/Home.jsx';
import ParticipantList from '@pages/ParticipantList.jsx';
import RegistrationForm from '@pages/RegistrationForm.jsx';
import Login from '@pages/Login.jsx';
import NotFound from '@pages/NotFound.jsx';
import LeaguePage from '@pages/LeaguePage.jsx';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/participant-list" element={<ParticipantList />} />
      <Route path="/registration-form" element={<RegistrationForm />} />
      <Route path="/league" element={<LeaguePage />} />{' '}
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes;
