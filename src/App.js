import React from 'react'
import HomePage from './Component/HomePage/HomePage'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LableName from './Component/HomePage/LableName';

function App() {
  return (
    <div>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<HomePage/>} />
    <Route path='/LableName' element={<LableName/>} />
    </Routes>
    </BrowserRouter>
      

    </div>
  )
}

export default App
