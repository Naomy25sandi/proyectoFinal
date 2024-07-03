import { Route, Routes } from "react-router-dom"
import Home from "../paginas/Home"
import Registro from "../paginas/Registro"
import Login from "../paginas/InicioSesion"
import '@radix-ui/themes/styles.css';
import { Theme } from "@radix-ui/themes";
import RutaPrivada from "./RutaPrivada";


const RutasPaginas = () => {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element route={<Home />} /> 
            <Route path="/registro" element={<Registro />} />
        </Routes>
    )
}
export default RutasPaginas