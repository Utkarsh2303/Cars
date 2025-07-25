import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Navbar from './components/Navbar.jsx'
import { BrowserRouter } from 'react-router-dom'
import Footer from './components/Footer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <BrowserRouter>
      <Navbar />

      
      <App />
      <Footer/>

    </BrowserRouter>
  </StrictMode>,
)
