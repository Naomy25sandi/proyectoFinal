import { useEffect, useState } from "react"
import Button from "../componentes/Button"
import { getUsuarios } from "../services/fetch"
import { useNavigate } from "react-router-dom"


const InicioSesion= () => {
        const [usuario, setUsuario] = useState()
        const [correo, setCorreo] = useState()
        const [contra, setContra] = useState()
        const [data, setData] = useState([])
        const navigate = useNavigate()

        useEffect(() => {
            const obtenerUsuarios = async () => {
                const dataUsuarios = await getUsuarios()
                setData(dataUsuarios)
            }
            obtenerUsuarios()
        }, [])

    const validaUsuario = () => {
        const user = data.find((user) => user.email === correo && user.password === contra);
        if (user) {
            navigate("/home")
        } else {
            alert("INCORRECTO")
        }
    }

return (
    <>

        <h1>Iniciar Sesión</h1>
        <input type="email" value={correo} placeholder="Correo" onChange={(e) => setCorreo(e.target.value)} />
        <input type="password" value={contra} placeholder="contraseña" onChange={(e) => setContra(e.target.value)} />

        <Button titulo={"Iniciar Sesión"} type={"button"} className={"btn btn-success"} evento={validaUsuario} />
        <li onClick={() => navigate("/registro")}>No tienes cuenta?</li>
    </>
)
}
export default InicioSesion
