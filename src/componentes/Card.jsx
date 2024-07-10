import React, { useEffect, useState } from 'react'
import Button from './Button'
import { useNavigate } from 'react-router-dom'
import { deleteProductos, getProductos, postData, } from '../services/fetchproducts'
import { actualizaDatos } from '../services/ambos'


//Este componente define la estructura de cada producto, como el nombre, descripcion y precio
const Card = ({ id, descripcion1, precio1, imagen1 }) => {
  const [descripcion, setDescripcion] = useState(descripcion1)
  const [precio, setPrecio] = useState(precio1)
  const [imagen, setImagen] = useState(imagen1)
  const navigate = useNavigate()
  //useeffect para que no se encicle crear un hook para setear los valores, valores que obtengo por los input.
  //useEffect(() => {

  //actualizarProducto()
  //}, []);
  const actualizarProducto = async () => {
    console.log("aqui vamos", descripcion, precio)
    const obj = {
      id: id,
      descripcion: descripcion,
      precio: precio,
      imagen: imagen
    }
    await actualizaDatos(obj, 'productos')
  }


  const eliminar = async () => {
    await deleteProductos(id)
  }
  const handleImage = (e) => {
    const file = document.getElementById("upload-file").files[0];
    const reader = new FileReader();
    if (file) {
      reader.onload = function (e) {
        setImagen(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  }
  return (
    <>
      <box maxwidth="240px">
        <h2>Hola</h2>
        <card>
          <flex gap={3} align="center">
            <avatar
              size={3}
              src={imagen}
              radius="full"
              fallback="T"
            >
              <box>
                <img src={imagen} height={200} />


                <text as="div" size={2} color="gray">
                  {descripcion}
                </text>
                <text as="div" size={2} color="gray">
                  {precio}
                </text>
                <div>
                  <input className="mb-3 rounded" type="text" placeholder="Descripcion" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} />
                  <input className="mb-3 rounded" type="text" placeholder="Precio" value={precio} onChange={(e) => setPrecio(e.target.value)} />
                  <input className='file' id="upload-file" accept="image/x-png,image/gif,image/jpeg" type="file" onChange={handleImage} />
                </div>
                <Button class="btn btn-outline-light" titulo={"Actualizar imagen"} type={"button"} evento={actualizarProducto} />
                {/* <Button class="btn btn-outline-light" titulo={"Eliminar imagen"} type={"button"} evento={eliminar} /> */}
              </box>
            </avatar>
          </flex>
        </card>
      </box>

    </>
  )
}

export default Card

