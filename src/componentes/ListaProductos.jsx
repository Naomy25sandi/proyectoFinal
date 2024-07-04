import Card from "./Card"

const ListaProductos = ({ listado }) => {
    return (
        <>
            {listado.map((producto) => (
                <Card
                    key={producto.id}
                    nombre={producto.nombre}
                    precio={producto.precio}
                />
            ))}
        </>
    )
}
export default ListaProductos