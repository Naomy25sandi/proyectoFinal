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


export const actualizaDatos = async (id, datos, endpoint) => {
    try {
      const response = await fetch(`http://localhost:3001/${endpoint}/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(datos),
      });
  
      if (!response.ok) {
        throw new Error('Error al actualizar el producto');
      }
  
      return await response.json();
    } catch (error) {
      console.error('Error en la función actualizaDatos:', error);
      throw error; // Lanza el error para manejarlo en la función que llama a actualizaDatos
    }
  };
  

export async function deleteProductos(id, endpoint) {
    try {
        const response = await fetch(`http://localhost:3001/${endpoint}` + "/" + id, {
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