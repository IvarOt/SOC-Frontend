import { Routes, Route } from 'react-router-dom'
import Home from "./pages/Home"
import CardManager from './cards/CardManager.jsx'
import Navbar from './components/Navbar'
import DeckManager from './decks/DeckManager.jsx'
import SignUp from './pages/SignUp.jsx'
import Login from './pages/Login.jsx'

function App() {

  return (
    <div className='bg-dark text-white min-vh-100'>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="CardList" element={<CardManager />} />
        <Route path="DeckListPage" element={<DeckManager />} />
        <Route path="SignUp" element={<SignUp />} />
        <Route path="Login" element={<Login />} />

      </Routes>
    </div>
  )
}

export default App
