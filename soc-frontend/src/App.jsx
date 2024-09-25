import { Routes, Route } from 'react-router-dom'
import Home from "./Home"
import CardList from './CardList'
import CardCreation from './CardCreation'
import Navbar from './assets/Navbar'

function App() {
  return (
    <>
    <div className='bg-dark text-white min-vh-100'>
      <Navbar />
      <div className="m-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="CardList" element={<CardList />} />
          <Route path="CardCreation" element={<CardCreation />} />
        </Routes>
      </div>
      </div>
    </>
  )
}

export default App
