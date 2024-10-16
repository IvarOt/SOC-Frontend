import { Routes, Route } from 'react-router-dom'
import Home from "./pages/Home"
import CardManager from './cards/CardManager.jsx'
import Navbar from './components/Navbar'
import DeckManager from './decks/DeckManager.jsx'
import SignUp from './pages/SignUp.jsx'
import Login from './pages/Login.jsx'
import AuthProvider from './hooks/AuthProvider.jsx'
import PrivateRoute from './components/PrivateRoute.jsx'
import Profile from './pages/Profile.jsx'

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
