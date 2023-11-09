import React, { useContext, useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { AuthContext } from '../../contexts/auth.context'
import { Link } from 'react-router-dom'
import './ProfilePage.css'
import userServices from '../../services/user.services'

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
            <Row>
                <Col><h1>{profileUser.name}</h1></Col>
            </Row>

            <Row>

                Información de {profileUser.name} {profileUser.lastName}
                <p>{profileUser.email}</p>
                <p>{profileUser.role}</p>
                <img src={profileUser.avatar} alt="" />
            </Row>

            <Row className='mt-4'>
                <Link to={`/editar-perfil/${profileUser._id}`} className='edit-profile-button'>Editar perfil</Link>
            </Row>

        </Container>
    )
}

export default ProfilePage