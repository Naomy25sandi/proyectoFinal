
import React, { useEffect, useState } from 'react'
import Button from '../componentes/Button'
import { useNavigate, } from 'react-router-dom'
import ListaProductos from '../componentes/ListaProductos'
import Navbar from '../componentes/Navbar'
import Form from '../componentes/Form'
import { actualizaDatos, GetData } from '../services/ambos'
import PiePag from '../componentes/PiePag'




const Micuenta = () => {
  const [productos, setProductos] = useState([])//estado que almacena la lista de productos
  const [descripcion, setDescripcion] = useState("")// estado que almacena la descripcion de mis productos
  const [precio, setPrecio] = useState("")// estado que almacena el precio de los productos
  const [imagen, setImagen] = useState("")// estado que almacena la imagen de los productos
  const navigate = useNavigate()// hook para ayudar en la navegacion
  const [recarga, setRecarga] = useState(false)// estado que recarga la pagina dandole un valor en falso
   
  // se usa para traer los productos del API usando el Get y la funcion asyncronica para ejecutar una vez que se recarga 
  useEffect(() => {
    const extraerP = async () => {
      const data = await GetData("productos")
      setProductos(data)// Actualizar el estado de productos con los datos obtenidos
    }
    extraerP(); // se llama la funcion
  }, [recarga]) //funcion de recarga

  // Función para manejar la carga de imágenes
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

   // Función para actualizar datos de un producto
  const update = async (id) => {
    const datos = {
     
      descripcion: descripcion,
      precio: precio,
      imagen: imagen
    }
    await actualizaDatos(id,datos,"productos")// Llama a una función asincrónica para actualizar datos
    recargaPag()// Llama a recargaPag para actualizar la lista de productos después de la actualización
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