import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const FavoritePaintingCard = ({ title, image, _id }) => {
    return (
        <Card className='mb-3 paintingCard'>
            <Card.Img variant='top' src={image} className='painting-image' />
            <Card.Body className='d-flex flex-column'>
                <Card.Title>{title}</Card.Title>
                <div className='d-flex justify-content-between'>
                    <Link to={`/detalles/${_id}`} className='btn btn-dark btn-sm flex-grow-1'>
                        Detalles
                    </Link>
                </div>
            </Card.Body>
        </Card>
    );
};

export default FavoritePaintingCard;
