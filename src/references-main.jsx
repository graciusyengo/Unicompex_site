import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ReferencesPage from './ReferencesPage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ReferencesPage />
  </StrictMode>,
)
