import React, { useContext, useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { AuthContext } from '../../contexts/auth.context'
import { Link } from 'react-router-dom'
import userServices from '../../services/user.services'
import FavoritePaintingsList from '../../components/FavoritePaintingsList/FavoritePaintingsList'
import './ProfilePage.css'

const ProfilePage = () => {

    const { user } = useContext(AuthContext)
    const [profileUser, setProfileUser] = useState(null)

    const getUser = () => {
        userServices
            .getOneUser(user._id)
            .then((response) => {
                setProfileUser(response.data)
            })
            .catch((error) => {
                console.error(error)
            })
    }

    useEffect(() => {
        getUser()
    }, [user._id])

    return (
        <Container>
            <Row className='justify-content-center align-items-center'>

                <Col className='d-flex justify-content-center'>
                    {profileUser && (
                        <img src={profileUser.avatar} alt="profile-picture" className='profile-picture' />
                    )}
                </Col>

                <Col className='text-md-left text-center mt-3 mt-md-0'>
                    {profileUser && (
                        <div className='profile-info'>
                            <h2 className='name'>{profileUser.name} {profileUser.lastName}</h2>
                            <h3 className='info'>{profileUser.email}</h3>
                            <br />
                            <Link to={`/editar-perfil/${profileUser._id}`} className='edit-profile-button'>Editar perfil</Link>
                        </div>
                    )}
                </Col>

            </Row>

            <hr />

            <Container>
                <Row className='text-center'>

                    <h4>Tus cuadros favoritos</h4>

                    <Col className='justify-content-center'>
                        <FavoritePaintingsList favoritePaintings={profileUser?.favoritePaintings} />
                    </Col>

                </Row>
            </Container>
        </Container>
    )
}

export default ProfilePage