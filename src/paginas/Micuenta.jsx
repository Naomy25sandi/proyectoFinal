import React, { useEffect, useState } from 'react'
import Button from '../componentes/Button'
import { useNavigate, } from 'react-router-dom'
import ListaProductos from '../componentes/ListaProductos'
import Navbar from '../componentes/Navbar'
import Form from '../componentes/Form'
import { actualizaDatos, GetData } from '../services/ambos'




const Micuenta = () => {
  const [productos, setProductos] = useState([])
  const navigate = useNavigate()
  const [descripcion, setDescripcion] = useState("")
  const [precio, setPrecio] = useState("")
  const [imagen, setImagen] = useState("")

  //post
  useEffect(() => {
    const extraerP = async () => {
      const data = await GetData("productos")
      setProductos(data)
    }
    extraerP();
  }, [productos])

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

  const update = async (id) => {
    const datos = {
      descripcion: descripcion,
      precio: precio,
      imagen: imagen
    }
    await actualizaDatos(id, datos, "productos")
  }

  return (
    <div className='cont-home'>
      <Navbar />
      <br /><br />
      <h1>Bienvenido {localStorage.getItem("nombre")}</h1>

      <ListaProductos listado={productos} btnEditar={update} />
      <Form texto={"Agregar producto"} />

      {/*FORMULARIO DE EDITAR  */}
      <input placeholder='Descipcion' onChange={(e) => setDescripcion(e.target.value)} />
      <input placeholder='Precio' onChange={(e) => setPrecio(e.target.value)} />
      <input className='file' id="upload-file" accept="image/x-png,image/gif,image/jpeg" type="file" onChange={handleImage} />
    </div>
  )
}

export default Micuenta
