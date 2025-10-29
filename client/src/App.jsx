import './App.css'
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import LandingPage from './components/users/Landing/LandingPage'
import PricingPage from './components/users/ServicesPage/PricingHeader'
import ServicesPage from './screens/userScreens/ServicesPage'
import ContactUs from './screens/userScreens/ContactUs.jsx'
import AboutUs from './screens/userScreens/AboutUs.jsx'
import SingUpANDLogin from './screens/userScreens/SingUpANDLogin.jsx'

function App() {

  return (
    <>
      
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/account" element={<SingUpANDLogin />} />
        </Routes>
  
    </>
  )
}

export default App
