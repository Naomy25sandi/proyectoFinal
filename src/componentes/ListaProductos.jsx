import { useEffect } from "react"
import Card from "./Card"
import { deleteProductos } from "../services/ambos"

//Este componente define la lista de productos, muestra cada Card, segun los datos que esten en la API
const ListaProductos = ({ listado, btnAgg, btnEditar, btnEliminar }) => {

    const eliminar = async (id) => {
        await deleteProductos(id, 'productos')
    }
    return (
        <>
            {listado.map((producto) => (
                <Card
                    key={producto.id}
                    descripcion1={producto.descripcion}
                    precio1={producto.precio}
                    imagen1={producto.imagen}
                    btnAgg={btnAgg}
                    btnEliminar={() => eliminar(producto.id)}
                    btnEditar={()=>btnEditar(producto.id)}

                />

            ))}
        </>
    )
}
export default ListaProductos