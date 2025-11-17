import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import Test from './Test'
import Inicio from './pages/Inicio'
import Glosario from './pages/Glosario'
import TipoDeCarta from './pages/TipoDeCarta'
import Historial from './pages/Historial'
import Competitivo from './pages/Competitivo'
import SobreNosotros from './pages/SobreNosotros'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}> 
          <Route index element={<Inicio />} />
          <Route path="glosario" element={<Glosario />} />
          <Route path="tipo-de-carta" element={<TipoDeCarta />} />
          <Route path="historial" element={<Historial />} />
          <Route path="competitivo" element={<Competitivo />} />
          <Route path="sobre-nosotros" element={<SobreNosotros />} />
        </Route>
        <Route path="/test" element={<Test />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
