import React from 'react'
import { AuthContext } from './AuthProvider'// Importa el contexto de autenticación desde AuthProvider
import { useContext } from 'react' // Importa el hook useContext de React
import { Navigate } from 'react-router-dom'// Importa el componente Navigate de react-router-dom

// Ruta privada
const RutaPrivada = ({ route }) => {
    let { autentica } = useContext(AuthContext);// Usa el hook useContext para acceder al contexto de autenticación

    return (
        autentica ? route : <Navigate to="/Login" />// si autentica es true, muestra el componente/ruta privada; si no, redirige a /Login
    )
}
export default RutaPrivada
