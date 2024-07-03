import React from 'react'

export async function getUsuarios() {
    try {
      let response = await fetch('http://localhost:3001/products', {
        method: "GET",
        mode: "cors",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
        },
      });
      let datos = await response.json()
      return datos;
    } catch (e) {
      console.log(e)
    }
  }
  
  export async function actualizaDatos(id,nombre,img, descripcion,precio) {
    try {
      let actualizar = {
      Id: id,
      Nombre: nombre,
      Img: img,
      Descripcion: descripcion,
      Precio: precio

      }
      const response = await fetch(`http://localhost:3001/products`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json"
        },
       
      })
      let datos = await response.json()
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }
  
  
  export async function postData(obj) {
    try {
      let response = await fetch('http://localhost:3001/products', {
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
  export async function deleteTask(id) {
    try {
      const response = await fetch(`http://localhost:3001/server/db/${id}`, {
        method: "DELETE"
      });
      if (response.ok) {
        await getTask();
        alert("Tarea eliminada con exito")
  
      } else {
        alert("Error al eliminar la tarea")
      }
    } catch (error) {
      console.log(error);
    }
  }


