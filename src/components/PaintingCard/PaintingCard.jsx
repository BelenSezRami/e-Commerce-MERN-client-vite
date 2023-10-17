import React from 'react'
import './paintingCard.css'
import { Card, Col, Container, Row } from 'react-bootstrap'

import { Link } from 'react-router-dom'

const PaintingCard = ({ title, image, _id }) => {
    return (
        <Card className='mb-3 paintingCard'>
            <Card.Img variant="top" src={image} />
            <Card.Body className="d-flex flex-column">
                <Card.Title>{title}</Card.Title>
                <div className="d-flex justify-content-between">
                    <Link to={`/detalles/${_id}`} className="btn btn-dark btn-sm flex-grow-1" style={{ marginRight: '5px' }}>Detalles</Link>
                    <Link to={`/*`} className="btn btn-dark btn-sm">❤</Link>
                </div>
            </Card.Body>
        </Card>
    )
}

export default PaintingCard