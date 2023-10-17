import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import paintingsService from '../../services/paintings.services'
import PaintingCard from '../../components/PaintingCard/PaintingCard'

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
                {
                    paintings.map(elm => {
                        return (
                            <Col md={{ span: 4 }} key={elm._id}>
                                <PaintingCard {...elm} />
                            </Col>
                        )

                    })
                }
            </Row>
        </Container>
    )
}

export default GaleriePage