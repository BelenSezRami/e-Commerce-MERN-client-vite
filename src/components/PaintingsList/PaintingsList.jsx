import React from 'react'
import PaintingCard from '../PaintingCard/PaintingCard'
import { Col } from 'react-bootstrap'


const PaintingsList = ({ paintings, favorites }) => {
    return (

        paintings.map(elm => {
            return (
                <Col md={{ span: 4 }} key={elm._id}>
                    <PaintingCard {...elm} isFavorite={favorites && favorites.includes(elm._id)} />
                </Col>
            )

        })
    )
}

export default PaintingsList