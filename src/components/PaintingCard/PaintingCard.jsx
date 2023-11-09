import React, { useContext, useState } from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../contexts/auth.context'
import userServices from '../../services/user.services'
import fullHeartImage from '/fullheart.svg'
import emptyHeartImage from '/emptyheart.svg'
import capitalizeFirstLetter from '../../utils/capitalizeFirstLetter'
import './paintingCard.css'

// import paintingsService from '../../services/paintings.services'

const PaintingCard = ({ title, image, _id }) => {

    const { user, setUser } = useContext(AuthContext)

    const [isFavorite, setIsFavorite] = useState(user?.favoritePaintings?.includes(_id))

    const handleFavorite = () => {

        setIsFavorite(true)

        userServices
            .addPaintingToFavorites(user._id, _id)
            .then(updatedUser => {
                setUser(updatedUser)
                setIsFavorite(true)
                console.log(`Pintura con id ${_id} agregada a favoritos del usuario ${user.name}`)
            })
            .catch(err => {
                console.error('Error al agregar la pintura a favoritos:', err)
            })
    }

    const handleRemoveFavorite = () => {

        setIsFavorite(false)

        userServices
            .removePaintingFromFavorites(user._id, _id)
            .then(updatedUser => {
                setUser(updatedUser)
                setIsFavorite(false)
                console.log(`Pintura con id ${_id} eliminada de favoritos del usuario ${user.name}`)
            })
            .catch(error => {
                console.error('Error al eliminar la pintura de favoritos:', error)
            })
    }


    return (
        <Card className='mb-3 paintingCard'>

            <Card.Img variant="top" src={image} className='painting-image' />

            <Card.Body className="d-flex flex-column">

                <Card.Title>{capitalizeFirstLetter(title)}</Card.Title>

                <div className="d-flex justify-content-between">
                    <Link to={`/detalles/${_id}`} className="btn btn-dark btn-sm flex-grow-1">
                        Detalles
                    </Link>

                    {user && (

                        isFavorite ?

                            <button onClick={handleRemoveFavorite} className="btn btn-dark btn-sm fav-button">
                                <img src={fullHeartImage} alt="Heart" className='fav-icon' />
                            </button>

                            :

                            <button onClick={handleFavorite} className="btn btn-dark btn-sm fav-button">
                                <img src={emptyHeartImage} alt="Heart" className='fav-icon' />
                            </button>

                    )}
                </div>

            </Card.Body>

        </Card>
    )
}

export default PaintingCard