import { useState } from 'react'

import './App.css'
import Login from './paginas/InicioSesion'
import { BrowserRouter } from 'react-router-dom'
import RutasPaginas from './routes/Rutaspaginas'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <BrowserRouter>
        <RutasPaginas />
      </BrowserRouter>
    </>
  )
}

export default App
