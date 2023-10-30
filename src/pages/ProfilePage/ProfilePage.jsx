import React, { useContext } from 'react'
import { Container } from 'react-bootstrap'
import { AuthContext } from '../../contexts/auth.context'

const ProfilePage = () => {

    const { user } = useContext(AuthContext)

    return (
        <Container>
            <h1>¡Hola, {user.name}</h1>
            <hr />
        </Container>
    )
}

export default ProfilePage