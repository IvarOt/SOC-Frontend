import { Routes, Route } from 'react-router-dom'
import Home from "./pages/Home.jsx"
import CardManager from './pages/CardManager.jsx'
import Navbar from './components/Navbar.jsx'
import SignUp from './pages/SignUp.jsx'
import Login from './pages/Login.jsx'
import AuthProvider from './contexts/AuthContext.jsx'
import PrivateRoute from './components/PrivateRoute.jsx'
import Profile from './pages/Profile.jsx'
import GameComponent from './components/GameComponent.jsx'
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
            <Route path="Game" element={<GameComponent />} />
            <Route path="Profile" element={<Profile />} />
          </Route>
        </Routes>
      </AuthProvider>

    </div>
  )
}

export default App
