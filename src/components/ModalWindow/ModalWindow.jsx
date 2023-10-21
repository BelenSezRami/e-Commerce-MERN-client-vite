import React from 'react'
import { Button, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './ModalWindow.css'

const ModalWindow = ({ painting_id }) => {

    return (
        <Modal show={true}>
            <Modal.Header closeButton>
                <Modal.Title>¡Nuevo cuadro creado!</Modal.Title>
            </Modal.Header>
            <Modal.Body style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div>
                    <Link to={'/crear-cuadro'} className='create-new-painting-button'>Crear otra ficha</Link>
                </div>
                <div>
                    <Link to={`/detalles/${painting_id}`} className='new-painting-details-button'>Detalles del nuevo cuadro</Link>
                    <Link to={'/galeria'} className='back-to-galerie-button'>Volver a Galería</Link>
                </div>
            </Modal.Body>

        </Modal>
    )
}

export default ModalWindow