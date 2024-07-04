import React, { useEffect, useState } from 'react'
import Button from '../componentes/Button'
import Home from './Home'
import { useNavigate,  } from 'react-router-dom'
import { getProductos } from '../services/fetchproducts'
import Card from '../componentes/Card'




const Micuenta = () => {
  const  [productos,setProductos]=useState([])
 
  useEffect(()=>{
    const extraerP = async()=>{
    const data= await getProductos()
    setProductos(data)
    }
    extraerP();
  },[])
  const navigate = useNavigate()
  return (
    <div>
      <br /><br />
      <h1>Bienvenido {localStorage.getItem("nombre")}</h1>
      <Button titulo={"Home"} type={"button"} className={"btn btn-success"} onClick={ navigate("/home")}/>
      {productos.map(producto=><Card img={producto.img} descripcion={producto.descripcion} precio={producto.precio}/>)}
    </div>
  )
}

export default Micuenta
