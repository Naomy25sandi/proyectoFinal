import React from 'react'
import Button from '../componentes/Button'
import Home from '../paginas/Home'
import { useNavigate } from 'react-router-dom'

const Micuenta = () => {
  const navigate = useNavigate()
  return (
    <div>
      <br /><br />
      <h1>Bienvenido {localStorage.getItem("nombre")}</h1>
      <Button titulo={"Home"} type={"button"} className={"btn btn-success"} onClick={ navigate("/home")}/>
    </div>
  )
}

export default Micuenta
