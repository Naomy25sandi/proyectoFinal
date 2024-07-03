import React, { useState } from 'react'
import Button from './Button'
import { useNavigate } from 'react-router-dom'
import { deleteTask } from '../services/fetchproducts'



const Card = ({img,descripcion,precio}) => {
  const navigate = useNavigate()
  const actualizarProducto = ()=>{
   navigate("/registro")
  }

  const eliminar = async()=>{
    await deleteTask(id)
  }
  return (
    <>
    <box maxwidth="240px">
      <card>
        <flex gap={3} align="center">
          <avatar
            size={3}
            src={img}
            radius="full"
            fallback="T"
          >
            <box>
              <img src={img} height={200}/>
                
              
              <text as="div" size={2} color="gray">
                {descripcion}
              </text>
              <text as="div" size={2} color="gray">
                {precio}
              </text>
              <Button titulo={"Actualizar imagen"} type= {"button"} evento={actualizarProducto}/>
              <Button titulo={"Eliminar imagen"} type= {"button"} evento={eliminar}/>
            </box>
          </avatar>
        </flex>
      </card>
    </box>
    
  </>
  )
}

export default Card

