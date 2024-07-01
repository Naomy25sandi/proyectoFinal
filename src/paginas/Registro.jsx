import { useRef, useState, useEffect } from "react"
import Button from "../componentes/Button"
import { postData, getUsuarios } from "../services/fetch"
import { useNavigate } from "react-router-dom"


// se crea la constante de registro en la cual le doy estados a mis input
const Registro = () => {

  const [usuario, setUsuario] = useState()
  const [correo, setCorreo] = useState()
  const [contra, setContra] = useState()
  const nombreRef = useRef("")
  const emailRef = useRef("")
  const passwordRef = useRef("")
  const [data, setData] = useState([])
  const navigate = useNavigate()
// llamo la funcion de posdata 
  const darDatos = async (obj) => {
    const datos = await postData(obj)
    setData(datos)
  }
// llamo la funcion de get data con el usseffect
  useEffect(() => {
    const obtenerUsuarios = async () => {
        const dataUsuarios = await getUsuarios()
        setData(dataUsuarios)
    }
    obtenerUsuarios()
}, [])
// validaciones para los espacios en blanco
  const validaUsuario = async() => {
    const nombreTrim = nombreRef.current.value.trim()
    const emailTrim = emailRef.current.value.trim()
    const passwordTrim = passwordRef.current.value.trim()
    
    const user = data.find((user) => user.email === correo);
    if (user) {
      alert("Usuario ya existe")
      navigate("/") // lo direcciono a login ya tiene cuenta
    } else {
      if (!nombreTrim || !emailTrim || !passwordTrim)  {
        alert ("Llene todos los campos")
      }else{
        darDatos({
          name:usuario,
          email:correo,
          password:contra
          
        })
        navigate("/")
      }
    }
  }

  return (
    <div>
     <body className="fondoPag">
      <div className="container">
        <div className="inp">
          <h1>Registro</h1>
          <input  className="mb-3 rounded" type="text" placeholder="Nombre" ref={nombreRef} onChange={(e) => setUsuario(e.target.value)} />
          <input  className="mb-3 rounded" type="email" placeholder="Email" ref={emailRef} onChange={(e) => setCorreo(e.target.value)} />
          <input  className="mb-3 rounded" type="password" placeholder="contraseña" ref={passwordRef} onChange={(e) => setContra(e.target.value)} />
        
          <Button titulo={"Registrarse"} type={"button"} className={"btn btn-success"} evento={validaUsuario} />
        </div>
      </div>
      </body>
    </div>
  )
}
export default Registro