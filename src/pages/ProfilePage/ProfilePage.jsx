import React, { useContext, useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { AuthContext } from '../../contexts/auth.context'
import { Link } from 'react-router-dom'
import userServices from '../../services/user.services'
import PaintingsList from '../../components/PaintingsList/PaintingsList'
import './ProfilePage.css'

const ProfilePage = () => {

    const { user } = useContext(AuthContext)

    const [profileUser, setProfileUser] = useState(true)

    const getUser = () => {

        userServices
            .getOneUser(user._id)
            .then(({ data }) => setProfileUser(data))
            .catch(err => console.log(err))
    }

    useEffect(() => {
        getUser()
    }, [user._id])

    return (
        <Container>
            <Row className='justify-content-center align-items-center'>
                <Col className='d-flex justify-content-center'>
                    <img src={profileUser.avatar} alt="profile-picture" className='profile-picture' />
                </Col>
                <Col className='text-md-left text-center mt-3 mt-md-0'>
                    <div className='profile-info'>
                        <h2 className='name'>{profileUser.name} {profileUser.lastName}</h2>
                        <h3 className='info'>{profileUser.email}</h3>
                        <br />
                        <Link to={`/editar-perfil/${profileUser._id}`} className='edit-profile-button'>Editar perfil</Link>
                    </div>
                </Col>
            </Row>
            <hr />
            <Row className='text-center'>
                <Col>
                    <h4>Tus cuadros favoritos</h4>
                    {profileUser.favoritePaintings && profileUser.favoritePaintings.length > 0 ? (
                        <PaintingsList paintings={profileUser.favoritePaintings} />
                    ) : (
                        <p>No tienes cuadros favoritos.</p>
                    )}
                </Col>
            </Row>
        </Container>
    )
}

export default ProfilePage