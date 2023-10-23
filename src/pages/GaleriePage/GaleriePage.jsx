import React, { useEffect, useState } from 'react'
import { Button, Container, Row } from 'react-bootstrap'
import paintingsService from '../../services/paintings.services'
import PaintingsList from '../../components/PaintingsList/PaintingsList'
import { Link } from 'react-router-dom'
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner'

const GaleriePage = () => {

    const [paintings, setPaintings] = useState()

    const updateList = () => {
        paintingsService
            .getAllPaintings()
            .then(({ data }) => setPaintings(data))
            .catch(err => console.log(err))
    }

    useEffect(() => {
        updateList()

    }, [])

    return (
        <Container>
            <h1>Galería de cuadros</h1>

            <div className="d-flex justify-content-between">
                <Link to={'/crear-cuadro'} className="btn btn-dark btn-sm flex-grow-1" style={{ marginRight: '5px' }}>Crear nuevo cuadro</Link>
            </div>

            <hr />

            <Row className='justify-content-center'>

                {
                    !paintings
                        ?
                        <LoadingSpinner />
                        :
                        <PaintingsList paintings={paintings} />
                }

            </Row>
        </Container>
    )
}

export default GaleriePage