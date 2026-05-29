import React from 'react'
import ReactDOM from 'react-dom/client'
import './main.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar from './Navbar'
import UnifiedPortfolio from './UnifiedPortfolio'
import Footer from './Footer'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <BrowserRouter >
    <Navbar />
    <div className="main-content">
      <Routes>
        <Route path="/" element={<UnifiedPortfolio />} />
        <Route path="/about" element={<UnifiedPortfolio />} />
        <Route path="/project" element={<UnifiedPortfolio />} />
        <Route path="/skills" element={<UnifiedPortfolio />} />
        <Route path="/contact" element={<UnifiedPortfolio />} />
      </Routes>
    </div>
    <Footer />
  </BrowserRouter>
)
