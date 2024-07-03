import React from 'react'
import { AuthContext } from './AuthProvider'
import { useContext } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

const RutaPrivada = () => {
    const {autentica}= useContext(AuthContext);

  return (
    autentica ? route : <Navigate to="/Login"/>
  )
}

export default RutaPrivada
