import React from 'react'
import { AuthContext } from './AuthProvider'
import { useContext } from 'react'
import { Navigate } from 'react-router-dom'

const RutaPrivada = ({ route }) => {
    let { autentica } = useContext(AuthContext);

    return (
        autentica ? route : <Navigate to="/Login" />
    )
}
export default RutaPrivada
