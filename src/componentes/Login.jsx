import { useState } from "react"
import Button from "./Button"


const Login = () => {
  const [usuario, setUsuario]= useState()
  const [correo, setCorreo] = useState()
  const [contra, setContra]= useState()

 function registro() {
    async function datos() {
        await postData(usuario, correo, contra)
    }
    datos()
  }
    return (
        <>
            <h1>Iniciar Sesión</h1>
            <input type="text" value={usuario} placeholder="Nombre" onChange={(e)=> setUsuario(e.target.value)}/>
            <input type="email" value={correo} placeholder="Correo" onChange={(e)=>setCorreo(e.target.value) } />
            <input type="password" value={contra} placeholder="contraseña" onChange={(e)=> setContra.target.value}/>

            <Button titulo={"Iniciar Sesión"} type={"button"} className={"btn btn-success"} evento={""} />
        </>
    )

}
export default Login