import React from 'react'
import { Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './ModalWindow.css'

const ModalWindow = ({ painting_id, showModal, setShowModal, resetForm }) => {

    return (
        <Modal show={showModal} onHide={() => setShowModal(false)}>
            <Modal.Header style={{ textAlign: 'center', justifyContent: 'center' }}>                <Modal.Title>¡Nuevo cuadro creado!</Modal.Title>
            </Modal.Header>
            <Modal.Body style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div>
                    <Link
                        to={'/crear-cuadro'}
                        className='create-new-painting-button'
                        onClick={() => {
                            setShowModal(false)
                            resetForm()
                        }}
                    >
                        Crear otra ficha
                    </Link>
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