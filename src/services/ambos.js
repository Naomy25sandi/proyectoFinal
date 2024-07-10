const API_URL = "http://localhost:3001/"

const GetData = async (endpoint) => {
    try {
        console.log(endpoint)
        let response = await fetch(`http://localhost:3001/${endpoint}`, {
            method: "GET",
            mode: "cors",
            headers: {
                "Content-type": "application/json"
            },
          
        })
        const datos = await response.json()

        return datos;
    } catch (error) {
        console.log(error)
    }
}
export {GetData}



const postData = async (obj, endpoint) => {
    try {
        let response = await fetch(`http://localhost:3001/${endpoint}`, {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(obj)
        })
        const data = await response.json()
        console.log(data);
        return data
    } catch (error) {
        console.log(error)
    }
}
export { postData }


export async function actualizaDatos (obj, endpoint) {
    try {
        const response = await fetch(`http://localhost:3001/${endpoint}`+ "/" + obj.id,{
            method: "PUT",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(obj)

        })
        let datos = await response.json()
        console.log(datos);
    } catch (error) {
        console.error(error);
    }
}


export async function deleteProductos(id) {
    try {
        const response = await fetch(`http://localhost:3001/productos` + "/" + id, {
            method: "DELETE"
        });
        if (response.ok) {
            console.log("producto eliminado con exito")

        } else {
            console.log("Error al eliminar el producto")
        }
    } catch (error) {
        console.log(error);
    }
}