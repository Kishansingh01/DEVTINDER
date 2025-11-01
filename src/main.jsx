import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
   // When i will do API calls my browser will call two API calls bcz of strictMode.
  <StrictMode>
    <App />
  </StrictMode>
)
