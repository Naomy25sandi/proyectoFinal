import { useState } from "react"
import Button from "../componentes/Button"
import { postData } from "../services/fetch"



const Registro = () => {

  const [usuario, setUsuario] = useState()
  const [correo, setCorreo] = useState()
  const [contra, setContra] = useState()

  const traerDatos = async () => {
    const datos = await postData()
    setData(datos)
  }

  return (
    <>
      <h1>Registro</h1>
      <input type="text" placeholder="Nombre" onChange={(e) => setUsuario(e.target.value)} />
      <input type="email" placeholder="Email" onChange={(e) => setCorreo(e.target.value)} />
      < input type="password" placeholder="contraseña" onChange={(e) => setContra(e.target.value)} />

      <Button titulo={"Registrarse"} type={"button"} className={"btn btn-succes"} evento={""} />
    </>
  )
}
export default Registro