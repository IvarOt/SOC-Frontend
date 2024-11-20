import { Routes, Route } from 'react-router-dom'
import Home from "/src/pages/Home.jsx"
import CardManager from '/src/pages/CardManager.jsx'
import Navbar from '/src/components/Navbar'
import SignUp from '/src/pages/SignUp.jsx'
import Login from '/src/pages/Login.jsx'
import AuthProvider from '/src/contexts/AuthContext.jsx'
import PrivateRoute from '/src/components/PrivateRoute.jsx'
import Profile from '/src/pages/Profile.jsx'
import '/src/api/Interceptors'

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
            <Route path="Profile" element={<Profile />} />
          </Route>
        </Routes>
      </AuthProvider>

    </div>
  )
}

export default App
