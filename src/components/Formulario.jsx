import React from 'react'
import {useForm} from 'react-hook-form'
import '../css/formulario.css'
import Container from 'react-bootstrap/esm/Container'
import { useNavigate } from 'react-router-dom'

const Formulario = () => {
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm()

  const receta = useNavigate()

  const onSubmit = (data) => {
    console.log(data)
    const recetasLocalStorage = JSON.parse(localStorage.getItem('recetas')) || [];
    const nuevaReceta = { id: Date.now(), ...data };
    const nuevasRecetas = [...recetasLocalStorage, nuevaReceta];
    localStorage.setItem('recetas', JSON.stringify(nuevasRecetas));
    if(data.titulo && data.descripcion){
      alert(`Titulo: ${data.titulo} \nDescripcion: ${data.descripcion} \nDatos enviados correctamente`)
      receta('/recetas')
    }else{
      alert('Complete todos los campos')
    }
  }
  return (
    <div className='container-formulario'>
      <Container className='subtitle'>
        <h4>Llenar formulario para crear una receta</h4>
      </Container>
        <form onSubmit={handleSubmit(onSubmit)} className='form'>
          <label>
            Titulo de la receta:
            <input type="text" {...register("titulo",{ required: true })} />
            {errors.titulo && <span>Este campo es obligatorio</span>}
          </label>
          <label>
            Descripcion de la receta:
            <input className='input-receta' type="text"  {...register("descripcion",{ required: true })} />
            {errors.descripcion && <span>Este campo es obligatorio</span>}
          </label>                  
        <button className='button-crear-receta' type="submit">Enviar</button>
      </form>
    </div>
  )
}


export default Formulario