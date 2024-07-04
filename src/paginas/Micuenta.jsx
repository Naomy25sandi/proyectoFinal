import React, { useEffect, useState } from 'react'
import Button from '../componentes/Button'
import { useNavigate, } from 'react-router-dom'
import { getProductos } from '../services/fetchproducts'
import ListaProductos from '../componentes/ListaProductos'
import Navbar from '../componentes/Navbar'



const Micuenta = () => {
  const [productos, setProductos] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    const extraerP = async () => {
      const data = await getProductos()
      setProductos(data)
    }
    extraerP();
  }, [])
  return (
    <div>
      <Navbar/>
      <br /><br />
      <h1>Bienvenido {localStorage.getItem("nombre")}</h1>
      <ListaProductos listado={productos} />

    </div>
  )
}

export default Micuenta
