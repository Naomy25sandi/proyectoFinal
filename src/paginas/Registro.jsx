import { useRef, useState, useEffect } from "react"
import Button from "../componentes/Button"
import { GetData, postData } from "../services/ambos"
import { useNavigate } from "react-router-dom"
import Swal from "sweetalert2"


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
  const [msg, setMsg] = useState("");
  // llamo la funcion de posdata 

  const darData = async (obj) => {
    const datos = await postData(obj, "users")
    setData(datos)
  }
  // llamo la funcion de get data con el usseffect
  useEffect(() => {
    const obtenerUsuarios = async () => {
      const dataUsuarios = await GetData("users")
      console.log(dataUsuarios)
      setData(dataUsuarios)
    }
    obtenerUsuarios()
  }, []);
  // validaciones para los espacios en blanco
  const validaUsuario = async () => {
    const nombreTrim = nombreRef.current.value.trim()
    const emailTrim = emailRef.current.value.trim()
    const passwordTrim = passwordRef.current.value.trim()

    const user = data.find((user) => user.email === correo);
    if (user) {
      Swal.fire({
        icon: "error",
        title: "Usuario existente",
        text: "El correo electronico ya esta registrado"
      });
      navigate("/") // lo direcciono a login ya tiene cuenta
    } else {
      if (!nombreTrim || !emailTrim || !passwordTrim) {
        Swal.fire({
          icon: "error",
          text: "Llene todos los campos"
        })
      } else {
        darData({
          name: usuario,
          email: correo,
          password: contra
        })

        navigate("/")
        setMsg("Usuario registrado existosamente!")
      }
    }
  }

  return (
    <div>
      <div className="d-flex flex-column justify-content-center align-content-center  cont-form">
        <div className="container">
          <div className="inp">
            <h1>Registro</h1>
            <input className="mb-3 rounded" type="text" placeholder="Nombre" ref={nombreRef} onChange={(e) => setUsuario(e.target.value)} />
            <input className="mb-3 rounded" type="email" placeholder="Email" ref={emailRef} onChange={(e) => setCorreo(e.target.value)} />
            <input className="mb-3 rounded" type="password" placeholder="contraseña" ref={passwordRef} onChange={(e) => setContra(e.target.value)} />

            <Button titulo={"Registrarse"} type={"button"} className={"btn btn-success"} evento={validaUsuario} />
            <li onClick={() => navigate("/login")}>Iniciar Sesión</li>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Registro