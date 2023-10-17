import React from 'react'
import './paintingCard.css'
import { Button, Card } from 'react-bootstrap'

const PaintingCard = ({ title, image }) => {
    return (
        <Card className='mb-3 paintingCard'>
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Button variant="dark">Go somewhere</Button>
            </Card.Body>
        </Card>
    )
}

export default PaintingCard