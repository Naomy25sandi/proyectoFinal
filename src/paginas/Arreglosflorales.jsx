import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

const Arreglosflorales = () => {
  return (
    <div>
        <br />
        <h2>Nuestros Arreglos más vendidos</h2>
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="src\assets\arreglo1.jpeg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>Tulipanes y Ortencias</h5>
          <p>Hermosa combinacion de tulipanes con Ortencias</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="src\assets\arreglo4.jpeg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Corazón de Rosas</h5>
          <p>Hermosa combinacion de Rosas y claveles color pastel</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="src\assets\arreglo3.jpeg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Mini corazón </h5>
          <p>
            Hermosa combinacion de Rosas, Lisianthus, astromelias de temporada.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    
   </div>
  )
}

export default Arreglosflorales
