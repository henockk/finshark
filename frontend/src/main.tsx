import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { searchCompanies } from './api.tsx'

console.log(searchCompanies("tsla"))
createRoot(document.getElementById('root')!).render(
 

 
 <StrictMode>
    <App />
  </StrictMode>,
)
