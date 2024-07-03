import { BrowserRouter, RouterProvider, createBrowserRouter } from 'react-router-dom'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Theme } from '@radix-ui/themes'
import RutasPaginas from './routes/Rutaspaginas.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
 <BrowserRouter>
     <RutasPaginas/>
  </BrowserRouter>,
 
)
