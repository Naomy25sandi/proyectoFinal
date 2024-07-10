import React, { useEffect, useState } from 'react'
import Button from './Button'
import { useNavigate } from 'react-router-dom'
import { actualizaDatos, deleteProductos } from '../services/ambos'


//Este componente define la estructura de cada producto, como el nombre, descripcion y precio
const Card = ({descripcion1, precio1, imagen1, btnAgg, btnEditar,btnEliminar }) => {


  // se llama actualizar producto dentro del useEffect pero se crea la funcion fuera del use effect para poderla usarla en el boton boton.





  return (
    <>
      <box maxwidth="240px">
        <card>
          <flex gap={3} align="center">
            <avatar
              size={3}
              src={imagen1}
              radius="full"
              fallback="T"
            >
              <box>
                <img src={imagen1} height={200} />

                <text as="div" size={2} color="gray">
                  Descripcion: {descripcion1}
                </text> <br />
                <text as="div" size={2} color="gray">
                  Precio {precio1}
                </text>
                <Button class="btn btn-outline-light" titulo={"Agregar producto"} type={"button"} evento={btnAgg} />
                <Button class="btn btn-outline-light" titulo={"Actualizar producto"} type={"button"} evento={btnEditar} />
                <Button class="btn btn-outline-light" titulo={"Eliminar producto"} type={"button"}evento={btnEliminar} />
              </box>
            </avatar>
          </flex>
        </card>
      </box>

    </>
  )
}

export default Card

