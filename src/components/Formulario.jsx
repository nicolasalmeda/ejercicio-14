import React, { useEffect } from 'react'
import {useForm} from 'react-hook-form'
import '../css/formulario.css'
import Container from 'react-bootstrap/esm/Container'
import { useNavigate, useParams } from 'react-router-dom'
import { actualizarReceta, crearReceta, obtenerRecetaPorId } from '../helpers/queries'
import Swal from 'sweetalert2'

const Formulario = ({titulo,edit}) => {
  const {
    register,
    handleSubmit,
    formState: {errors},
    setValue,
    reset
  } = useForm()

  const {id} = useParams()
  const recetaPage = useNavigate()

  useEffect(() => {
    if(edit){
      cargarDatosReceta()
    }
  },[])

  const cargarDatosReceta = async () => {
    const respuesta = await obtenerRecetaPorId(id);
    setValue('titulo', respuesta.titulo);
    setValue('imagen', respuesta.imagen);
    setValue('descripcion', respuesta.descripcion);
  }

  const onSubmit = async (receta) => {
    if(edit){
      //llamar a la funcion encargada de pedirle a la api editar un producto
      receta = {...receta, id: id};
      const respuesta = await actualizarReceta(receta);
      if(respuesta.status === 200){
        Swal.fire({
          title: "Receta editada",
          text: `La receta "${receta.titulo}" fue editada correctamente`,
          icon: "success"
        });
        //limpiar el formulario
        reset()
      }else{
        Swal.fire({
          title: "Ocurrio un error",
          text: `El producto "${receta.titulo}" no pudo ser editado. Intenta esta operación en unos minutos.`,
          icon: "error"
        });
      }
      recetaPage("/recetas");

    }else{
        //llamar a la funcion encargada de pedirle a la api crear un producto
      const respuesta = await crearReceta(receta);
      //agregar un mensaje si el codigo es 201 todo salio bien, caso contrario mostrar un mensaje de que ocurrio un error
      if(respuesta.status === 201){
        Swal.fire({
          title: "Receta creada",
          text: `El producto "${receta.titulo}" fue creado correctamente`,
          icon: "success"
        });
        //limpiar el formulario
        reset()
      }else{
        Swal.fire({
          title: "Ocurrio un error",
          text: `El producto "${receta.titulo}" no pudo ser creado. Intenta esta operación en unos minutos.`,
          icon: "error"
        });
      }

      recetaPage("/recetas");
    }
  }
  return (
    <div className='container-formulario'>
      <Container className='subtitle'>
        <h4>{titulo}</h4>
      </Container>
        <form onSubmit={handleSubmit(onSubmit)} className='form'>
          <label>
            Titulo de la receta:
            <input 
            type="text"
            placeholder='Ej: Torta de chocolate'
            {...register("titulo",
            { 
              required: "El titulo de la receta es obligatorio",
              maxLength:{
                value: 50,
                message: "El titulo de la receta debe tener menos de 20 caracteres"
              },
              minLength:{
                value: 5,
                message: "El titulo de la receta debe tener al menos 5 caracteres"
              } })} />
            {errors.titulo && <span>{errors.titulo.message}</span>}
          </label>
          <label>
            Imagen de la receta:
            <input
            type="text"
            placeholder="Ej: https://www.pexels.com/es-es/vans-en-blanco-y-negro-fuera-de-la-decoracion-para-colgar-en-la-pared-1230679/"
              {...register("imagen",{ 
              required: "La imagen de la receta es obligatorio",
              pattern: {
                value: /(http)?s?:?(\/\/[^"']*\.(?:png|jpg|jpeg|gif|png|svg))/i,
                message:
                  "Debe ingresar una URL de imagen valida (png|jpg|jpeg|gif|png|svg)",
              },
              })} />
            {errors.imagen && <span>{errors.imagen.message}</span>}
          </label>
          <label>
            Descripcion de la receta:
            <input className='input-receta' type="text"  {...register("descripcion",{ 
              required: "La descripción de la receta es obligatorio",
              minLength:{
                value: 20,
                message: "La descripción de la receta debe tener al menos 5 caracteres"
              }, 
              maxLength:{
                value: 100,
                message: "La descripción de la receta debe tener menos de 100 caracteres"
              } })} />
            {errors.descripcion && <span>{errors.descripcion.message}</span>}
          </label>                  
        <button className='button-crear-receta' type="submit">Enviar</button>
      </form>
    </div>
  )
}


export default Formulario