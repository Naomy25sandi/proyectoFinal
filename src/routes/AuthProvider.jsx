// Importaciones necesarias desde React y react-router-dom
import {createContext, useState} from "react";
import { useActionData } from "react-router-dom";
export const AuthContext = createContext();
// Creación del contexto de autenticación utilizando createContext de React

const AuthProvider = ({children})=>{
    // Estado para controlar si el usuario está autenticado o no
    const [autentica, setAutentica] = useState(false);
    const inicia= ()=>setAutentica(true);// Función para iniciar sesión, establece autentica en true
    const cerrar = ()=> setAutentica(false);// Función  para cerrar sesió, establece autentica en false
    return (
        <AuthContext.Provider value={{autentica,inicia, cerrar}}>
       {children} {/* Renderiza los componentes hijos envueltos dentro del proveedor */}
        </AuthContext.Provider>
    )
} 
export default AuthProvider;