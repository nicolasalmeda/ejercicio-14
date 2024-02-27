import React from 'react'
import "../css/home.css"
import { useNavigate } from 'react-router-dom'
import Container from 'react-bootstrap/esm/Container'

const Home = () => {

  const ver = useNavigate()

  const verRecetas = () => {
    ver('/recetas')
  }

  return (
    <Container fluid className='home'>
      <Container className='home'>
        <h3>Bienvenido al blog de recetas</h3> 
        <p>Tu destino culinario para explorar el fascinante mundo de la gastronomía! Aquí en nuestro rincón digital, nos embarcamos en un viaje lleno de sabores, aromas y experiencias culinarias que te inspirarán en la cocina.

        Desde deliciosas recetas caseras hasta creaciones gourmet, nuestro blog está diseñado para todos los amantes de la cocina, ya sean expertos chefs o aficionados apasionados. Descubre la alegría de cocinar a través de nuestras detalladas recetas, consejos prácticos y relatos personales que hacen que cada plato cuente una historia única.

        Nos esforzamos por ser tu fuente de inspiración culinaria, proporcionando ideas frescas y creativas que se adaptan a todos los gustos y niveles de habilidad. ¡Prepárate para explorar nuevos ingredientes, técnicas innovadoras y, lo más importante, disfrutar del proceso de crear deliciosos momentos en tu cocina!

        Únete a nosotros mientras compartimos nuestra pasión por la buena comida y la conexión que crea entre las personas. ¡Bienvenido a nuestro mundo gastronómico, donde cada receta es una invitación a saborear la vida!</p>
      <p className='p-btn'>Para ingresar haz clik en el siguiente botón</p>
      <button className='recetas-btn' onClick={verRecetas}>Ver Recetas</button>
      </Container>
    </Container>
  )
}

export default Home