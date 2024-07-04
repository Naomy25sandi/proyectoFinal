import React from 'react'

const Carrusel = () => {
  return (
    <div id="carouselExample" class="carousel slide">
  <div class="carousel-inner">
    <h2>Eventos realizados</h2>
    <div class="carousel-item active">
      <img src="src\assets\bouquet.jpeg" className="d-block w-100"  alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="src\assets\centrodemesa.jpeg" className="d-block w-100"   alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="src\assets\centrodemesa2.jpeg" className="d-block w-100" alt="..."/>
    </div>
  </div>
 
</div>
  )
}

export default Carrusel

