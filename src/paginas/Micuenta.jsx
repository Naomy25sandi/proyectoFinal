import React, { useEffect, useState } from 'react'
import Button from '../componentes/Button'
import { useNavigate, } from 'react-router-dom'
import ListaProductos from '../componentes/ListaProductos'
import Navbar from '../componentes/Navbar'
import Form from '../componentes/Form'
import { GetData } from '../services/ambos'




const Micuenta = () => {
  const [productos, setProductos] = useState([])
  const navigate = useNavigate()

  //post
  useEffect(() => {
    const extraerP = async () => {
      const data = await GetData("productos")
      setProductos(data)
    }
    extraerP();
  }, [productos])


  return (
    <div className='cont-home'>
      <Navbar />
      <br /><br />
      <h1>Bienvenido {localStorage.getItem("nombre")}</h1>

      <ListaProductos listado={productos} />
      <Form />
    </div>
  )
}

export default Micuenta
