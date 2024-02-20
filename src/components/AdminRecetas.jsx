import React, { useState, useEffect } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import "../css/adminRecetas.css"

const AdminRecetas = () => {
  const [recetas, setRecetas] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedReceta, setSelectedReceta] = useState(null);

  

  useEffect(() => {
    const recetasGuardadas = JSON.parse(localStorage.getItem('recetas')) || [];
    setRecetas(recetasGuardadas);
  },[]);


  const handleDelete = (id) => {
    const nuevasRecetas = recetas.filter((receta) => receta.id !== id);
    localStorage.setItem('recetas', JSON.stringify(nuevasRecetas));
    setRecetas(nuevasRecetas);
  };

  const handleEdit = (receta) => {
    setSelectedReceta(receta);
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleSaveChanges = (newTitulo, newDescripcion) => {
    if (!newTitulo || !newDescripcion) {
      alert('Debe completar todos los campos')
      return;
    }

    const nuevasRecetas = recetas.map((receta) =>
      receta.id === selectedReceta.id
        ? { ...receta, titulo: newTitulo, descripcion: newDescripcion }
        : receta
    );

    localStorage.setItem('recetas', JSON.stringify(nuevasRecetas));
    setRecetas(nuevasRecetas);
    setShowModal(false);
  };

  return (
    <Container fluid className='container-admin-recetas'>
      <h3 className='title-admin'>Administrador de Recetas</h3>
      {recetas.map((receta) => (
        <div key={receta.id} className=" d-flex mb-3 card-admin">
          <strong >{receta.titulo}</strong>
          <div>{receta.descripcion}</div>
          <div className='buttons'>
            <Button variant="primary" onClick={() => handleEdit(receta)}>
              Editar
            </Button>
            <Button variant="danger" className="ml-2" onClick={() => handleDelete(receta.id)}>
              Borrar
            </Button>
          </div>
        </div>
      ))}

      <Modal show={showModal} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Editar Receta</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formTitulo">
              <Form.Label>Título</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese el nuevo título"
                defaultValue={selectedReceta?.titulo}
              />
            </Form.Group>
            <Form.Group controlId="formDescripcion">
              <Form.Label>Descripción</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Ingrese la nueva descripción"
                defaultValue={selectedReceta?.descripcion}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleModalClose}>
            Cerrar
          </Button>
          <Button
            variant="primary"
            onClick={() =>
              handleSaveChanges(
                document.getElementById('formTitulo').value,
                document.getElementById('formDescripcion').value
              )
            }
          >
            Guardar Cambios
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default AdminRecetas;