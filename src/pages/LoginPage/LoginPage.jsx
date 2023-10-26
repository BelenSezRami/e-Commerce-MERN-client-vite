import React from 'react'

import { Col, Container, Row } from 'react-bootstrap'
import LoginForm from '../../components/LoginForm/LoginForm'

const LoginPage = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <h1>Iniciar sesión</h1>
                    <hr />
                    <LoginForm />
                </Col>
            </Row>
        </Container>
    )
}

export default LoginPage