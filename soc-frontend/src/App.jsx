import { Routes, Route } from 'react-router-dom'
import Home from "./pages/Home"
import CardList from './pages/CardList.jsx'
import Navbar from './components/Navbar'
import DeckListPage from './pages/DeckListPage.jsx'

function App() {

  return (
    <div className='bg-dark text-white min-vh-100'>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="CardList" element={<CardList />} />
        <Route path="DeckListPage" element={<DeckListPage />} />
      </Routes>
    </div>
  )
}

export default App
