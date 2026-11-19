import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { CareersPage } from './AboutPage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CareersPage />
  </StrictMode>,
)
