import React, { useEffect, useState } from 'react'
import { Container, Row } from 'react-bootstrap'
import paintingsService from '../../services/paintings.services'
import PaintingsList from '../../components/PaintingsList/PaintingsList'

const GaleriePage = () => {

    const [paintings, setPaintings] = useState([])

    useEffect(() => {
        paintingsService
            .getAllPaintings()
            .then(({ data }) => setPaintings(data))
            .catch(err => console.log(err))

    }, [])

    return (
        <Container>
            <h1>Galería de cuadros</h1>
            <hr />
            <Row>
                <PaintingsList paintings={paintings} />
            </Row>
        </Container>
    )
}

export default GaleriePage