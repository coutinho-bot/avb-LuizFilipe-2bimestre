// src/main.jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { FavoritosProvider } from './contexts/FavoritosContext.jsx'
import { BrowserRouter } from 'react-router-dom'  // <--- IMPORTAR

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter> {/* <--- ENVELOPAR */}
      <FavoritosProvider>
        <App />
      </FavoritosProvider>
    </BrowserRouter>
  </React.StrictMode>
)
