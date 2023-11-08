import React, { useContext } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { AuthContext } from '../../contexts/auth.context'

const ProfilePage = () => {

    const { user } = useContext(AuthContext)
    console.log(user)
    return (
        <Container>
            <Row>
                <Col><h1>{user.name}</h1></Col>
            </Row>

            <Row>

                Información de {user.name} {user.lastName}
                <p>{user.email}</p>
                <p>{user.role}</p>
                <img src={user.avatar} alt="" />
            </Row>

        </Container>
    )
}

export default ProfilePage