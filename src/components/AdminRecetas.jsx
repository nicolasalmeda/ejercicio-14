import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import "../css/adminRecetas.css"
import ItemRecetas from './ItemRecetas';
import Table from 'react-bootstrap/Table';
import { obtenerRecetas } from '../helpers/queries';

const AdminRecetas = () => {

  const [recetas, setRecetas] = useState([]);

  useEffect(() => {
  obtenerRecetasApi()
  }, [])

  const obtenerRecetasApi = async () => {
    try{
      const recetasApi = await obtenerRecetas()
      setRecetas(recetasApi)
    }catch(error){
      console.error(error)
    }
  }



  return (
    <Container fluid className="mainContainer">
      <div className="d-flex justify-content-between align-items-center mt-5">
        <h1 className="display-4 ">Productos disponibles</h1>
      </div>
      <div className="table-responsive">
        <Table responsive striped bordered hover>
          <thead>
            <tr className="text-center">
              <th>Cod</th>
              <th>Receta</th>
              <th>URL de Imagen</th>
              <th>Descripcion</th>
            </tr>
          </thead>
          <tbody>
            {recetas.map((receta) => (
              <ItemRecetas key={receta.id} receta={receta} setRecetas={setRecetas} />
            ))}
          </tbody>
        </Table>
      </div>
    </Container>
  );
};

export default AdminRecetas;