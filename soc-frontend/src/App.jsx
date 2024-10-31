import { Routes, Route } from 'react-router-dom'
import Home from "./pages/Home"
import CardManager from './cards/CardManager.jsx'
import Navbar from './components/Navbar'
import DeckManager from './decks/DeckManager.jsx'
import SignUp from './authentication/SignUp.jsx'
import Login from './authentication/Login.jsx'
import AuthProvider from './authentication/AuthProvider.jsx'
import PrivateRoute from './authentication/PrivateRoute.jsx'
import Profile from './authentication/Profile.jsx'
import './api/Interceptors'

function App() {

  return (
    <div className='bg-dark text-white min-vh-100'>
      <AuthProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="SignUp" element={<SignUp />} />
          <Route path="Login" element={<Login />} />
          <Route element={<PrivateRoute />}>
            <Route path="CardList" element={<CardManager />} />
            <Route path="DeckListPage" element={<DeckManager />} />
            <Route path="Profile" element={<Profile />} />
          </Route>
        </Routes>
      </AuthProvider>

    </div>
  )
}

export default App
