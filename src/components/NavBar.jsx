import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import "../css/navbar.css"

const NavBar = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary d-flex justify-content-space-bwtween navbar-color">
      <Container className='container-fluid'>
        <Navbar.Brand href="/">Blog de Recetas</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="container-fluid d-flex justify-content-end">
            <Nav.Link as={NavLink} to="/recetas" activeclassname="navlink-active">Recetas</Nav.Link>
            <Nav.Link as={NavLink} to="/admin" activeclassname="navlink-active">Aministrar recetas</Nav.Link>          
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar