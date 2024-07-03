import React from 'react'
import Button from '../componentes/Button'
import Home from '../paginas/Home'

const Micuenta = () => {
  return (
    <div>
      <br /><br />
      <h1>Bienvenido {localStorage.getItem("nombre")}</h1>
      <Button titulo={"Home"} type={"button"} className={"btn btn-success"} />
    </div>
  )
}

export default Micuenta
