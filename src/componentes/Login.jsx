import { useState } from "react"
import Button from "./Button"
import { getUsuarios } from "../services/fetch"
import { useNavigate } from "react-router-dom"


const Login = () => {
    const [usuario, setUsuario] = useState()
    const [correo, setCorreo] = useState()
    const [contra, setContra] = useState()
    const [data, setData] = useState()
    const navigate = useNavigate()

    function login() {
        // console.log("aqui vamos", usuario)
        async function datos() {
            const datos_server = await getUsuarios()
            setData(datos_server)
        }
        datos()
        console.log("vamos aqui", data)
        if (data) {
            const user = data.find((user) => user.email === correo);
            console.log("datos filtrados", user)
            console.log(contra)
            if (user.password == contra) {
                console.log("usuario validado con contra")
                navigate("/home")
            } else {
                console.log("usuario correcto contra no")
            }
        }
    }

    return (
        <>
            <h1>Iniciar Sesión</h1>
            <input type="text" value={usuario} placeholder="Nombre" onChange={(e) => setUsuario(e.target.value)} />
            <input type="email" value={correo} placeholder="Correo" onChange={(e) => setCorreo(e.target.value)} />
            <input type="password" value={contra} placeholder="contraseña" onChange={(e) => setContra(e.target.value)} />

            <Button titulo={"Iniciar Sesión"} type={"button"} className={"btn btn-success"} evento={login} />
        </>
    )

}
export default Login