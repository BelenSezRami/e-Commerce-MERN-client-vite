import { React, useContext, useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Col, Container, Row } from 'react-bootstrap'
import { AuthContext } from '../../contexts/auth.context'

import paintingsService from '../../services/paintings.services'
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner'

import './PaintingDetailsPage.css'

const PaintingDetailsPage = () => {

    const { painting_id } = useParams()
    const { user } = useContext(AuthContext)

    const [painting, setPainting] = useState()

    useEffect(() => {
        paintingsService
            .getOnePainting(painting_id)
            .then(({ data }) => setPainting(data))
            .catch(err => console.log(err))
    }, [painting_id])

    return (

        <Container>
            {
                !painting
                    ?
                    <LoadingSpinner />
                    :
                    <>
                        <Row>
                            <img src={painting.image} alt="" />
                        </Row>

                        <Row>
                            <Col md={{ span: 12 }} className='painting-info'>
                                <h2>{painting.title.toUpperCase()}</h2>
                                <p>{painting.description}</p>
                                <p>Dimensiones: {painting.height} x {painting.width}cm</p>
                                <ul>Técnicas:</ul>
                                {painting.techniques.map((technique, index) => (
                                    <li key={index}>{technique}</li>
                                ))}
                                <p>{painting.year}</p>
                                <p>{painting.price}€</p>
                                {
                                    !painting.sold
                                        ?
                                        <p>En stock</p>
                                        :
                                        <p>Vendido</p>
                                }
                            </Col>
                        </Row>

                        <Row className='row-of-buttons'>
                            <Col md={{ span: 12 }} className='painting-info'>
                                <Link to={'/'} className='index-button'>Volver a Inicio</Link>
                                <Link to={'/*'} className='add-to-cart-button'>Añadir al carrito</Link>
                                <Link to={'/galeria'} className='back-to-galerie-button'>Volver a Galería</Link>

                                {
                                    user?.role === 'ADMIN' && (
                                        <Link to={'/editar-cuadro/:id'} className='edit-painting-button'>Volver a Galería</Link>
                                    )
                                }
                            </Col>
                        </Row>
                    </>
            }
        </Container>
    )
}

export default PaintingDetailsPage