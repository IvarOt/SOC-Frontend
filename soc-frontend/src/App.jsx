import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from "./Home"
import CardList from './CardList'
import CardCreation from './CardCreation'

function App() {
  return (
    <>
      <div className="m-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="CardList" element={<CardList />} />
          <Route path="CardCreation" element={<CardCreation />} />
        </Routes>
      </div>
    </>
  )
}

export default App
