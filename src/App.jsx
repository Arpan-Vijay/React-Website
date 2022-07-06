import React from 'react'
import '../src/index.css'
import Home from './Routes/Home'
import About from './Routes/About'
import Contact from './Routes/Contact'
import Project from './Routes/Project'
import { Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/project' element={<Project />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
      </Routes>
    </div>
  ) 
}

export default App
