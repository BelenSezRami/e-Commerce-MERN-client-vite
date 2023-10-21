import React from 'react'
import { Button, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './ModalWindow.css'

const ModalWindow = () => {

    return (
        <Modal show={true}>
            <Modal.Header closeButton>
                <Modal.Title>¡Nuevo cuadro creado!</Modal.Title>
            </Modal.Header>
            <Modal.Body style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div className='mr-auto'>
                    <Button className='m-1'>
                        Crear nueva ficha
                    </Button>
                </div>
                <div className='ml-auto'>
                    <Link to={`/detalles/${painting_id}`} className='back-to-galerie-button'>Volver a Galería</Link>
                    <Link to={'/galeria'} className='back-to-galerie-button'>Volver a Galería</Link>
                </div>
            </Modal.Body>

        </Modal>
    )
}

export default ModalWindow