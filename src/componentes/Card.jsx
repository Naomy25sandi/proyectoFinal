import React, { useState } from 'react'
import Button from './Button'
import { useNavigate } from 'react-router-dom'
import { deleteProductos, getProductos, postData } from '../services/fetchproducts'



//Este componente define la estructura de cada producto, como el nombre, descripcion y precio
const Card = ({ img, descripcion, precio, nombre }) => {
  const navigate = useNavigate()

  const actualizarProducto = async() => {
   await actualizarDatos(id,nombre,img,descripcion,precio)
  }

  const eliminar = async () => {
    await deleteProductos(id)
  }
  return (
    <>
      <box maxwidth="240px">
        <h2>{nombre}</h2>
        <card>
          <flex gap={3} align="center">
            <avatar
              size={3}
              src={img}
              radius="full"
              fallback="T"
            >
              <box>
                <img src={img} height={200} />


                <text as="div" size={2} color="gray">
                  {descripcion}
                </text>
                <text as="div" size={2} color="gray">
                  {precio}
                </text>
                <Button class="btn btn-outline-light" titulo={"Actualizar imagen"} type={"button"} evento={actualizarProducto} />
                <Button class="btn btn-outline-light" titulo={"Eliminar imagen"} type={"button"} evento={eliminar} />
              </box>
            </avatar>
          </flex>
        </card>
      </box>

    </>
  )
}

export default Card

