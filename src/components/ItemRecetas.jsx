import { Button } from "react-bootstrap";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { obtenerRecetas, eliminarReceta } from "../helpers/queries";

const ItemRecetas = ({receta,setRecetas}) => {

  const eliminarRecetaApi = async (id) => {
    Swal.fire({
      title: "Estas seguro?",
      text: "No puedes revertir esto!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, borrar"
    }).then(async (result) => {
      if (result.isConfirmed) {
        const respuesta = await eliminarReceta(id);
        Swal.fire({
          title: "Borrado!",
          text: "La receta se ha sido eliminado.",
          icon: "success"
        });
        const repuestaRecetas = await obtenerRecetas();
          const recetasRestantes = await repuestaRecetas;
          setRecetas(recetasRestantes);
        }else{
          Swal.fire({
            title: "Ocurrio un error",
            text: `El producto "${receta.titulo}" no pudo ser eliminado. Intenta esta operación en unos minutos.`,
            icon: "error"
          });
        }
    });
  
  }



  return (
    <tr>
      <td className="text-center">{receta.id}</td>
      <td>{receta.titulo}</td>
      <td className="text-center">
        <img
          src={receta.imagen}
          className="img-thumbnail"
          alt={receta.nombreProducto}
        ></img>
      </td>
      <td>{receta.descripcion}</td>

      <td className="text-center d-flex ">
        <Link to={`/formulario/${receta.id}`}>
        <Button variant="warning" className="me-lg-2">
          <i className="bi bi-pencil-square"></i>
        </Button>
        </Link>
        <Button variant="danger">
          <i className="bi bi-trash" onClick={() => eliminarRecetaApi(receta.id)}></i>
        </Button>
      </td>
    </tr>
  );
};

export default ItemRecetas;