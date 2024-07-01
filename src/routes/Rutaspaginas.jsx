import { Route, Routes } from "react-router-dom"
import Home from "../paginas/Home"
import Registro from "../paginas/Registro"
import Login from "../paginas/InicioSesion"

const RutasPaginas = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/home" element={<Home />} />
                <Route path="/registro" element={<Registro />} />
            </Routes>
        </>
    )
}
export default RutasPaginas