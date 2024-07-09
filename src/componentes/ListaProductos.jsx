import { useEffect } from "react"
import Card from "./Card"

//Este componente define la lista de productos, muestra cada Card, segun los datos que esten en la API
const ListaProductos = ({ listado }) => {
useEffect(()=>{

},[])
    return (
        <>
            {listado.map((producto) => (
               
                <Card
                
                    key={producto.id}
                    nombre={producto.nombre}
                    precio={producto.precio}
                    img={producto.imagen}
                    
                />
                
            ))}
        </>
    )
}
export default ListaProductos