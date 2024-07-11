import { Route, Routes } from "react-router-dom"
import Home from "../paginas/Home"
import Registro from "../paginas/Registro"
import RutaPrivada from "./RutaPrivada";
import AuthProvider from "./AuthProvider";
import InicioSesion from "../paginas/InicioSesion";
import SobreNosotros from "../paginas/SobreNosotros";
import Micuenta from "../paginas/Micuenta";
import Arreglosflorales from "../paginas/Arreglosflorales";

// creo rutas paginas
const RutasPaginas = () => {
    return (
        //  encapsulo mis rutas con el AuthProvider y asi puedo encapsular la ruta que quiero hacer privada
        <AuthProvider>
            <Routes>
                <Route path="/" element={<InicioSesion />} />
                <Route path="/Login" element={<InicioSesion />} />
                <Route path="/home" element={<RutaPrivada route={<Home />} />} />
                <Route path="/registro" element={<Registro />} />
                <Route path="/sobreNosotros" element={<SobreNosotros />} />
                <Route path="/cuenta" element={<Micuenta />} />
                <Route path="/arreglosflorales" element={<Arreglosflorales />} />
                </Routes>
        </AuthProvider>

    )
}
export default RutasPaginas