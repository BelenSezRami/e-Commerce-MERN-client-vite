import React from 'react'
import { Container } from 'react-bootstrap'
import NewPaintingForm from '../../components/NewPaintingForm/NewPaintingForm'

const NewPaintingPage = () => {

    return (
        <Container>
            <h1>Nuevo cuadro</h1>

            <hr />

            <NewPaintingForm />

        </Container>
    )
}

export default NewPaintingPage