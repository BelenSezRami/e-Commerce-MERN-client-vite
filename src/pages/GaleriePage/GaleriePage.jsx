import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import paintingsService from '../../services/paintings.services'

const GaleriePage = () => {

    const [paintings, setPaintings] = useState([])

    useEffect(() => {
        paintingsService
            .getAllPaintings()
            .then(({ data }) => console.log(data))
            .catch(err => console.log(err))

    }, [])

    return (
        <Container>
            <h1>Galería de cuadros</h1>
            <hr />
        </Container>
    )
}

export default GaleriePage