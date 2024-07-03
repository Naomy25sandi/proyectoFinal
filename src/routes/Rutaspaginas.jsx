import { Route, Routes } from "react-router-dom"
import Home from "../paginas/Home"
import Registro from "../paginas/Registro"
import Login from "../paginas/InicioSesion"
import '@radix-ui/themes/styles.css';
import { Theme } from "@radix-ui/themes";
import RutaPrivada from "./RutaPrivada";
import AuthProvider from "./AuthProvider";
import InicioSesion from "../paginas/InicioSesion";
import SobreNosotros from "../paginas/SobreNosotros";
import Micuenta from "./Micuenta";


const RutasPaginas = () => {
    return (

        <AuthProvider>
            <Routes>
                <Route path="/" element={<InicioSesion />} />
                <Route path="/Login" element={<InicioSesion />} />
                <Route path="/home" element={<RutaPrivada route={<Home />} />} />
                <Route path="/registro" element={<Registro />} />
                <Route path="/sobreNosotros" element={<SobreNosotros/>} />
                <Route path="/micuenta" element={<Micuenta/>} />
            </Routes>
        </AuthProvider>

    )
}
export default RutasPaginas