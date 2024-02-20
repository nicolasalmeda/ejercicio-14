import React from 'react'
import Container from 'react-bootstrap/esm/Container';
import '../css/receta.css'

function Receta({receta}) {

  return (
    <div className="card col-12 col-md-4 col-lg-3 card-specific">
      <div className="card-body ">
        <h5 className="card-title">{receta.titulo}</h5>
        <hr/>
        <p className="card-text">{receta.descripcion}</p>
      </div>
    </div>
  );
}

export default Receta