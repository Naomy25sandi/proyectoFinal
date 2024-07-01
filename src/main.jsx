import { RouterProvider , createBrowserRouter } from 'react-router-dom'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const router = createBrowserRouter([
{
  path: "/" ,
  element: <Login />
},

{
  path: "/home",
  element: <Home/>
},
 
{
 path: "./registro",
 element:<Registro />
}
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
