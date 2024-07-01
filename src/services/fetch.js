//get
export async function getUsuarios() {
  try {
    let response = await fetch('http://localhost:3001/users', {
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

export async function actualizaDatos(idUsuario) {
  try {
    let actualizar = {
      estado: true
    }
    const response = await fetch(`http://localhost:3001`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(task)
    })
    let datos = await response.json()
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}


export async function postData(obj) {
  try {
    let response = await fetch('http://localhost:3001/users', {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(obj)
    })
    const data = response.json()
    console.log(data);
    return data
  } catch (error) {
    console.log(error)
  }

}
export async function deleteTask(id) {
  try {
    const response = await fetch(`http://localhost:3001/api/task/${id}`, {
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