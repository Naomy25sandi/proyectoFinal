import React from 'react'
import Button from './Button'

const Navbar = () => {
  return (
    <div className='fondoPag'>
    <header class="header">
        <div class="logo">
           <img src='assets/logo.jpeg'/>
        </div>
        <nav>
            <ul class="nav-links">
                <li><a href="#">Nuestros servicios</a></li>
                <li><a href="#">Arreglos florales</a></li>
                <li><a href="#">Eventos realizados</a></li>
            </ul>
        </nav>
      <Button titulo={"Contactenos"} type={"button"} className={"btn btn-success"}/>

    </header>
  </div>
  )
}

export default Navbar
