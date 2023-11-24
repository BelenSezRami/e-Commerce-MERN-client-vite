import React, { useContext, useState } from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../contexts/auth.context'
import userServices from '../../services/user.services'
import fullHeartImage from '/fullheart.svg'
import emptyHeartImage from '/emptyheart.svg'
import './paintingCard.css'

const PaintingCard = ({ title, image, _id }) => {

    const { user, setUser } = useContext(AuthContext)
    const isFavorite = user?.favoritePaintings?.includes(_id)

    const handleFavorite = () => {
        userServices
            .addPaintingToFavorites(user._id, _id)
            .then((updatedUser) => {
                setUser(updatedUser.data)
            })
            .catch((err) => {
                console.error('Error al agregar la pintura a favoritos:', err)
            })
    }

    const handleRemoveFavorite = () => {
        userServices
            .removePaintingFromFavorites(user._id, _id)
            .then((updatedUser) => {
                setUser(updatedUser.data)
            })
            .catch((error) => {
                console.error('Error al eliminar la pintura de favoritos:', error)
            })
    }

    const handleToggleFavorite = () => {
        if (isFavorite) {
            handleRemoveFavorite()
        } else {
            handleFavorite()
        }
    }

    return (
        <Card className='mb-3 paintingCard'>

            <Card.Img variant='top' src={image} className='painting-image' />

            <Card.Body className='d-flex flex-column'>
                <Card.Title>{title}</Card.Title>

                <div className='d-flex justify-content-between'>
                    <Link to={`/detalles/${_id}`} className='btn btn-dark btn-sm flex-grow-1'>
                        Detalles
                    </Link>

                    {
                        user &&
                        (
                            <button onClick={handleToggleFavorite} className='btn btn-dark btn-sm fav-button'>
                                <img src={isFavorite ? fullHeartImage : emptyHeartImage} alt='Heart' className='fav-icon' />
                            </button>
                        )
                    }
                </div>

            </Card.Body>

        </Card>
    )
}

export default PaintingCard