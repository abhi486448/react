import React from 'react'
import About from './pages/About'
import './index.css'
import { Route, Routes } from 'react-router-dom'
import Contect from './pages/Contect'
import Home from './pages/Home'
import Product from './pages/Product'
import Header from './components/Header'

//install npm i react-router-dom

const ReactRouterDome = () => {
  return (
    <div>
        <Header />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contect' element={<Contect />} />
            <Route path='/product' element={<Product />} />
        </Routes>
    </div>
  )
}

export default ReactRouterDome