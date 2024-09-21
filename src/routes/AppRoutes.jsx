import { Route, Routes } from 'react-router-dom'
import Home from '@/pages/Home.jsx'
import ParticipantList from '@/pages/ParticipantList.jsx'
import RegistrationForm from '@/pages/RegistrationForm.jsx'

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/participant-list" element={<ParticipantList />} />
      <Route path="/registration-form" element={<RegistrationForm />} />
    </Routes>
  )
}

export default AppRoutes
