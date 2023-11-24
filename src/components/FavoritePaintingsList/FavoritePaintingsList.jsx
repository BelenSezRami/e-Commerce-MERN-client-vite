import React from 'react'
import FavoritePaintingCard from '../FavoritePaintingCard/FavoritePaintingCard'
import { Col, Row } from 'react-bootstrap'
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner'

const FavoritePaintingsList = ({ favoritePaintings }) => {

    return (
        <Row className='justify-content-center'>
            {
                favoritePaintings
                    ?
                    (
                        favoritePaintings.length > 0
                            ?
                            (
                                favoritePaintings.map((elm) => {
                                    const key = elm._id
                                    return (
                                        <Col md={{ span: 4 }} key={key}>
                                            <FavoritePaintingCard {...elm} />
                                        </Col>
                                    )
                                })
                            )
                            :
                            (
                                <p>Aún no tienes cuadros favoritos.</p>
                            )
                    )
                    :
                    (
                        <LoadingSpinner />
                    )
            }
        </Row>
    )
}

export default FavoritePaintingsList