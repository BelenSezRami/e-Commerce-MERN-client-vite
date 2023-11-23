import React from 'react'
import PaintingCard from '../PaintingCard/PaintingCard'
import { Col } from 'react-bootstrap'

const PaintingsList = ({ paintings }) => {
    return (
        paintings.map((elm) => (
            <Col md={{ span: 4 }} key={elm._id}>
                <PaintingCard {...elm} />
            </Col>
        ))
    )
}

export default PaintingsList
