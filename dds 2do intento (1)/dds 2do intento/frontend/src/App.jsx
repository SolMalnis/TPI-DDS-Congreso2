import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter, Route, Routes, Navigate} from "react-router-dom"

import {Menu} from "./components/Menu"
import {Footer} from './components/Footer'
import PagInicio from "./components/PagInicio"
import Evaluacion from './components/Evaluacion/Evaluacion'
import Congresos from './components/Congreso/TablaCongreso'


import Sala from './components/Sala/Sala'
import Congreso from './components/Congreso/Congreso'

function App() {
  

  return (
    <>
    <BrowserRouter>

      <Menu/>
     
      <div className="divBody">
          <Routes>
          <Route path="/Inicio" element={<PagInicio/>}/>
          <Route path="/congresos" element={<Congresos/>}/>
          <Route path="/evaluacion" element={<Evaluacion/>}/>
          <Route path="/sala" element={<Sala/>}/>
          <Route path="/congreso" element={<Congreso/>}/>
          <Route path="*" element={<Navigate to="/Inicio" replace />}/> 
                
          </Routes>
        </div>
      <Footer/>
      </BrowserRouter>
    
    </>
  )
}

export default App
