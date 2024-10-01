import { Routes, Route } from 'react-router-dom'
import Home from "./Pages/Home"
import CardList from './Pages/CardList'
import CardCreation from './Pages/CardCreation'
import Navbar from './Components/Navbar'
import EditCard from './Pages/EditCard.jsx'
import DeckListPage from './Pages/DeckListPage.jsx'

function App() {

  return (
    <>
      <div className='bg-dark text-white min-vh-100'>
        <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="CardList" element={<CardList />} />
            <Route path="CardCreation" element={<CardCreation />} />
            <Route path="EditCard/:id" element={<EditCard/>} />
            <Route path="DeckListPage" element={<DeckListPage/>} />
          </Routes>
      </div>
    </>
  )
}

export default App
