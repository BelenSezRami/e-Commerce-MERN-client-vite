import React, { useContext, useEffect, useState } from 'react'
import { Card } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'
import userServices from '../../services/user.services'
import { AuthContext } from '../../contexts/auth.context'
import './paintingCard.css'
import fullHeartImage from '/fullheart.svg'
import emptyHeartImage from '/emptyheart.svg'
import paintingsService from '../../services/paintings.services'

const PaintingCard = ({ title, image, _id }) => {

    const { user } = useContext(AuthContext)

    const [isFavorite, setIsFavorite] = useState(false)

    // useEffect(() => {

    //     userServices
    //         .getOneUser(user?._id)
    //         .then(({ data }) => data.favoritePaintings.some(elm => elm._id === _id) ? setIsFavorite(true) : setIsFavorite(false))
    //         .catch(err => console.log(err))

    // }, [user, user?._id])


    const handleFavorite = () => {

        setIsFavorite(true)
        console.log('Adding painting to favorites:', _id, user._id)

        userServices
            .addPaintingToFavorite(_id, String(user._id))
            .then(({ data }) => {
                console.log(`Pintura con id ${_id} agregada a favoritos del ${user.name}`, data)
            })
            .catch(error => {
                console.error('Error al agregar la pintura a favoritos:', error)
            })
    }

    const handleRemoveFavorite = () => {

        // setIsFavorite(false)

        // paintingsService
        //     .removeFavoritePainting(_id, user)
        //     .then(({ data }) => {
        //         console.log(`Pintura con id ${_id} eliminada de favoritos del ${user.name}`, data)
        //     })
        //     .catch(error => {
        //         console.error(error)
        //     })

        console.log('cuadro eliminado de favoritos')
    }


    return (
        <Card className='mb-3 paintingCard'>
            <Card.Img variant="top" src={image} />
            <Card.Body className="d-flex flex-column">
                <Card.Title>{title}</Card.Title>
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