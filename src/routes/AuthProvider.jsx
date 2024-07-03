import {createContext, useState} from "react";
import { useActionData } from "react-router-dom";

export const AuthContext = createContext();

const AuthProvider = (children)=>{
    const [autentica, setAutentica] = useState(false);
    const inicia= ()=>setAutentica(true);
    const cerrar = ()=> setAutentica(false);
    return (
        <AuthContext.Provider value={{autentica,inicia, cerrar}}>
       {children}
        </AuthContext.Provider>
    )
} 
export default AuthProvider;