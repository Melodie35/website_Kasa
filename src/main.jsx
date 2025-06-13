import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Apropos from '@pages/Apropos.jsx'
import Home from '@pages/Home.jsx'
import Logement from '@pages/Logement.jsx'
import Error from '@utils/Error.jsx'

const router = createBrowserRouter([
  {
    path:"/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/Home",
        element: <Home/>
      },
      {
        path: "/Apropos",
        element: <Apropos/>
      },
      {
        path: "/Logement/:lid",
        element: <Logement/>
      },
      {
        path: "*",
        element: <Error/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
