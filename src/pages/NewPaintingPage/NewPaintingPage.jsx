import React from 'react'
import { Container } from 'react-bootstrap'
import NewPaintingForm from '../../components/NewPaintingForm/NewPaintingForm'
import ModalWindow from '../../components/ModalWindow/ModalWindow'

const NewPaintingPage = () => {

    return (
        <Container>
            <h1>Nuevo cuadro</h1>

            <hr />

            <ModalWindow />

            <NewPaintingForm />

        </Container>
    )
}

export default NewPaintingPage