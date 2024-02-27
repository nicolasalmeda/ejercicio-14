const URI_Resena = import.meta.env.VITE_URI_RESENA;

// POST

export const crearReceta = async (reseta) => {
  try {
    const response = await fetch(URI_Resena, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(reseta)
    });
    return response;
  }catch (error) {
    console.error(error);
  }
}

// GET

export const obtenerRecetas = async () => {
  try {
    const response = await fetch(URI_Resena);
    const recetas = await response.json();
    return recetas;
  }catch (error) {
    console.error(error);
  }
}

// DELETE

export const eliminarReceta = async (id) => {
  try {
    const response = await fetch(`${URI_Resena}/${id}`, {
      method: 'DELETE'
    });
    return response;
  }catch (error) {
    console.error(error);
  }
}

// PUT

export const actualizarReceta = async (reseta) => {
  try {
    const response = await fetch(`${URI_Resena}/${reseta.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(reseta)
    });
    return response;
  }catch (error) {
    console.error(error);
  }
}

// GET BY ID

export const obtenerRecetaPorId = async (id) => {
  try {
    const response = await fetch(`${URI_Resena}/${id}`);
    const resena = await response.json();
    return resena;
  }catch (error) {
    console.error(error);
  }
}



