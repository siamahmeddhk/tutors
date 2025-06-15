import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { router } from './router/router.jsx'
import { RouterProvider } from 'react-router'
import Authprovider from './Auth/Authprovider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Authprovider>
     <RouterProvider router={router} />
    </Authprovider>
  </StrictMode>,
)
