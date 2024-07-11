
import React, { useEffect, useState } from 'react'
import Button from '../componentes/Button'
import { useNavigate, } from 'react-router-dom'
import ListaProductos from '../componentes/ListaProductos'
import Navbar from '../componentes/Navbar'
import Form from '../componentes/Form'
import { actualizaDatos, GetData } from '../services/ambos'
import PiePag from '../componentes/PiePag'




const Micuenta = () => {
  const [productos, setProductos] = useState([])
  const navigate = useNavigate()
  const [descripcion, setDescripcion] = useState("")
  const [precio, setPrecio] = useState("")
  const [imagen, setImagen] = useState("")
  const [recarga, setRecarga] = useState(false)

  useEffect(() => {
    const extraerP = async () => {
      const data = await GetData("productos")
      setProductos(data)
    }
    extraerP();
  }, [recarga])

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

  const recargaPag = () => {
    setRecarga(!recarga)
  }

  const update = async (id) => {
    const datos = {
     
      descripcion: descripcion,
      precio: precio,
      imagen: imagen
    }
    await actualizaDatos(id,datos,"productos")
    recargaPag()
  }

  return (
    <div className='cont-home'>
      <Navbar />
      <br /><br />
      <h1>Bienvenido {localStorage.getItem("nombre")}</h1>

      <ListaProductos listado={productos} btnEditar={update} />
      <br/><br/>
      <Form texto={"Agregar producto"} />
      <br/><br/>
      {/*FORMULARIO DE EDITAR  */}
      <h1>Este es el formulario que se debe de llenar antes de actualizar datos de los productos </h1>
      <input placeholder='Descipcion' onChange={(e) => setDescripcion(e.target.value)} />
      <input placeholder='Precio' onChange={(e) => setPrecio(e.target.value)} />
      <input className='file' id="upload-file" accept="image/x-png,image/gif,image/jpeg" type="file" onChange={handleImage} />
      <PiePag/>
    </div>

  )
}

export default Micuenta