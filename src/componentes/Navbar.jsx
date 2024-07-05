import React from 'react'
import Button from './Button'
import { AuthContext } from '../routes/AuthProvider'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'


const Navbar = () => {

  const { inicia, cerrar } = useContext(AuthContext);
  const navigate = useNavigate()

  return (
    <div className='fondoPag'>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <img src="src\assets\logo.jpeg" className="navbar-brand" height="{100}/" />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" onClick={() => navigate("/sobreNosotros")}>
                  Sobre nosotros
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Arreglo de cositas feas
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" onClick={() => navigate("/cuenta")}>
                  Mi cuenta
                </a>
              </li>
              <li className="nav-item">
                <a onClick={() => { cerrar() }} className="nav-link">
                  Cerrar Sesión
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

    </div>
  )
}

export default Navbar
