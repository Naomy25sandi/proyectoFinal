import { useContext, useEffect, useState } from "react"
import Button from "../componentes/Button"
import { useNavigate } from "react-router-dom"
import RutaPrivada from "../routes/RutaPrivada"
import { AuthContext } from "../routes/AuthProvider"
import { GetData } from "../services/ambos"
import Swal from "sweetalert2";

const InicioSesion = () => {
    const [usuario, setUsuario] = useState()// estado para guardar el usuario
    const [correo, setCorreo] = useState()// estado para guardar el correo
    const [contra, setContra] = useState()// estado para almacenar contraseña
    const [data, setData] = useState([])//estado para almacenar los datos ususarios
    const [msg, setMsg] = useState("");// estado para manejar estados
    const navigate = useNavigate()//Hook para la navegacion
    const { inicia, cerrar } = useContext(AuthContext); // contexto para usar las funciones de inicia y cerrar


    useEffect(() => {
        const obtenerUsuarios = async () => {
            const dataUsuarios = await GetData("users") //Llama a una función GetData para obtener datos de usuarios
            setData(dataUsuarios)// actualiza el estado data con los datos obtenidos
        }
        obtenerUsuarios() //Llama a una función GetData para obtener datos de usuarios
    }, []);

    const validaUsuario = () => {
        const user = data.find((user) => user.email === correo && user.password === contra);//// Busca un usuario que coincida con el correo y contraseña ingresados
        if (user) {
            setMsg("Inicio de sesion existoso!");// Actualiza el mensaje de éxito
            localStorage.setItem("id",user.id);// guardo el id y el nombre del usuario en el localstorage
            localStorage.setItem("nombre",user.name);
            setTimeout(()=>{// uso la funcion setTimeOut para si los datos son correctos navegar a home depsues de un segundo
           inicia()
            navigate("/home")
            },1000)
          
        } else {
            Swal.fire({ // uso swwt alert para informar de algun error
                icon:"error",
                text: "Usuario o contraseña incorrecto"
        })
        }
    }

    return (
        <>
            <div className="d-flex flex-column justify-content-center align-content-center  cont-form">
                <h1>Inicio de Sesion </h1>
                <input className="mb-3 rounded" type="email"  placeholder="Correo" onChange={(e) => setCorreo(e.target.value)} />
                <input className="mb-3 rounded" type="password"  placeholder="contraseña" onChange={(e) => setContra(e.target.value)} />
                <Button titulo={"Iniciar Sesión"} type={"button"} className={"btn btn-success"} evento={validaUsuario} />
                <li onClick={() => navigate("/registro")}>No tienes cuenta?</li>
            </div>
              <div className="contiene-p">
                <p>{msg}</p>
                </div>
        </>
    )
}
export default InicioSesion
