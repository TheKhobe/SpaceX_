import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import Home from './pages/Home'
import RocketInfo from './pages/RocketInfo'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
<BrowserRouter>
  <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/rockets/:rocketsId' element={<RocketInfo/>} />
  </Routes>
</BrowserRouter>
)
