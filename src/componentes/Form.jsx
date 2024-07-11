import { useState } from "react"
import Button from "./Button"
import { postData } from "../services/ambos"


//Permite subir los datos hacia la API
const Form = () => {
    const [descripcion, setDescripcion] = useState("")
    const [precio, setPrecio] = useState("")
    const [imagen, setImagen] = useState("")
// funcion para mostrar la imagen
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

   // post
    const traerP = async () => {
        await postData({
            descripcion: descripcion,
            precio: precio,
            imagen: imagen
        }, 'productos')
        window.location.reload();
    }

    return (
        <div>
            <form>
                <div className="form-group row">
                    <label htmlFor="staticEmail" className="col-sm-2 col-form-label">
                        Tipo de arreglo
                    </label>
                    <div className="col-sm-10">
                        <input
                            type="text"
                            readOnly=""
                            className="form-control-plaintext"
                            placeholder="Tipo de arreglo floral"
                            onChange={(e) => setDescripcion(e.target.value)}
                        />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="inputPassword" className="col-sm-2 col-form-label">
                        Precio
                    </label>
                    <div className="col-sm-10">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Precio"
                            onChange={(e) => setPrecio(e.target.value)}
                        />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="inputPassword" className="col-sm-2 col-form-label">
                        Imagen
                    </label>
                    <div className="col-sm-10">
                        <input className='file' id="upload-file" accept="image/x-png,image/gif,image/jpeg" type="file" onChange={handleImage} />
                    </div>

                </div>
                <Button titulo={"Agregar imagen"} type={"button"} className={"btn btn-success"} evento={traerP} />
            </form>
        </div>
    )
}

export default Form
