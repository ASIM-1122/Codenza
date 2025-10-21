import './App.css'
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import LandingPage from './components/users/Landing/LandingPage'

function App() {

  return (
    <>
      
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
  
    </>
  )
}

export default App
