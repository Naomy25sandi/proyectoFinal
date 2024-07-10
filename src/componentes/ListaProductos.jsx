import { useEffect } from "react"
import Card from "./Card"

//Este componente define la lista de productos, muestra cada Card, segun los datos que esten en la API
const ListaProductos = ({ listado }) => {


    return (
        <>
            {listado.map((producto) => (
               
                <Card
                
                    id={producto.id}
                    descripcion={producto.descripcion}
                    precio={producto.precio}
                    imagen={producto.imagen}
                    
                />
                
            ))}
        </>
    )
}
export default ListaProductos