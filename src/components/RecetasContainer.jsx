import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/esm/Container'
import Receta from './Receta'
import '../css/recetaContainer.css' 
import { useNavigate } from 'react-router-dom'
import { obtenerRecetas } from '../helpers/queries'

const RecetasContainer = () => {
  const [recetas, setRecetas] = useState([])
  const crear = useNavigate()

  const crearReceta = () => {
    crear('/formulario')
  }

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
    <Container fluid className='receta-container'>
      <h3 className='title-h'>Recetas</h3>
      {recetas.length === 0 ? (
        <div className='btn-container-create-big'>
          <button onClick={crearReceta}>Crear Receta</button>
        </div>
      ) : (
        <Container className='container-receta'>
          <div className='btn-container-create'>
            <button onClick={crearReceta}>Crear Receta</button>
          </div>
          <div className="container d-flex gap-3 flex-wrap ">
            {recetas.map((receta, index) => (
              <Receta key={index} receta={receta}/>
            ))}
          </div>
        </Container>
      )}
    </Container>
  );
}

export default RecetasContainer