import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Hero from './components/hero.jsx'
import Navbar from './components/navbar.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Hero />
    <Navbar />
  </React.StrictMode>,
)
