import { Route, Routes } from "react-router-dom"
import Login from "../componentes/Login"
import Home from "../paginas/Home"
import Registro from "../paginas/Registro"

const RutasPaginas = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/home" element={<Home/>} />
                <Route path="./registro" element={<Registro />}/>
            </Routes>
        </>
    )
}
export default RutasPaginas