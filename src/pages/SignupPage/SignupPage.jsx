import React from 'react'

import { Col, Container, Row } from 'react-bootstrap'
import SignupForm from '../../components/SignupForm/SignupForm'

const SignupPage = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <h1>Registro</h1>
                    <hr />
                    <SignupForm />
                </Col>
            </Row>

        </Container>
    )
}

export default SignupPage