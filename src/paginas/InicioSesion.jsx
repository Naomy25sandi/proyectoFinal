import { useContext, useEffect, useState } from "react"
import Button from "../componentes/Button"
import { useNavigate } from "react-router-dom"
import RutaPrivada from "../routes/RutaPrivada"
import { AuthContext } from "../routes/AuthProvider"
import { GetData } from "../services/ambos"
import Swal from "sweetalert2";

const InicioSesion = () => {
    const [usuario, setUsuario] = useState()
    const [correo, setCorreo] = useState()
    const [contra, setContra] = useState()
    const [data, setData] = useState([])
    const [msg, setMsg] = useState("");
    const navigate = useNavigate()
    const { inicia, cerrar } = useContext(AuthContext);


    useEffect(() => {
        const obtenerUsuarios = async () => {
            const dataUsuarios = await GetData("users")// revisar si esta correcto
            setData(dataUsuarios)
        }
        obtenerUsuarios()
    }, []);

    const validaUsuario = () => {
        const user = data.find((user) => user.email === correo && user.password === contra);
        if (user) {
            setMsg("Inicio de sesion existoso!");
            localStorage.setItem("id",user.id);
            localStorage.setItem("nombre",user.name);
            setTimeout(()=>{
           inicia()
            navigate("/home")
            },1000)
          
        } else {
            Swal.fire({
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
