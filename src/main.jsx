import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import PortContext from './context/PortContext.jsx'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
    <PortContext>
        <App />
    </PortContext>
)
