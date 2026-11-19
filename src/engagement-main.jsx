import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { EngagementPage } from './AboutPage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <EngagementPage />
  </StrictMode>,
)
