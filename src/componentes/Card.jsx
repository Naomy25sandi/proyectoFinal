import React from 'react';
import Button from './Button';
import { useNavigate } from 'react-router-dom';
import { actualizaDatos, deleteProductos } from '../services/ambos';

// Este componente define la estructura de cada producto, como el nombre, descripcion y precio
const Card = ({ descripcion1, precio1, imagen1, btnAgg, btnEditar, btnEliminar }) => {
  return (
    <div className="card" style={{ maxWidth: "240px" }}>
      <img src={imagen1} className="card-img-top" alt="Producto" style={{ height: "200px" }} />
      <div className="card-body">
        <h5 className="card-title">Descripción: {descripcion1}</h5>
        <p className="card-text">Precio: {precio1}</p>
        <Button className="btn btn-outline-light" titulo="Actualizar producto" type="button" evento={btnEditar} />
        <Button className="btn btn-outline-light" titulo="Eliminar producto" type="button" evento={btnEliminar} />
      </div>
    </div>
  );
}

export default Card;
