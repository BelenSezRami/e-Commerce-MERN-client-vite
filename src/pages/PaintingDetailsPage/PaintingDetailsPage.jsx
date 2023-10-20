import React from 'react'
import { useEffect, useState } from 'react'

import { useParams, Link } from 'react-router-dom'
import paintingsService from '../../services/paintings.services'
import { Col, Container, Row } from 'react-bootstrap'

import './PaintingDetailsPage.css'


const PaintingDetailsPage = () => {

    const { painting_id } = useParams()

    const [painting, setPainting] = useState()

    useEffect(() => {
        paintingsService
            .getOnePainting(painting_id)
            .then(({ data }) => setPainting(data))
            .catch(err => console.log(err))
    }, [])

    return (

        <Container>
            {
                !painting
                    ?
                    <p>Cargando...</p>
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
                                <p>{new Date(painting.year).getFullYear()}</p>
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

                        <Row>
                            <Col md={{ span: 12 }} className='painting-info'>
                                <Link to={'/'} className='index-button'>Volver a Inicio</Link>
                                <Link to={'/galeria'} className='back-to-galerie-button'>Volver a Galería</Link>
                                <Link to={'/*'} className='add-to-cart-button'>Añadir al carrito</Link>
                            </Col>
                        </Row>
                    </>
            }
        </Container>
    )
}

export default PaintingDetailsPage