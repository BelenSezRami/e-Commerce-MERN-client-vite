import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Form, Row } from 'react-bootstrap'

import authService from '../../services/auth.services'
import { AuthContext } from '../../contexts/auth.context'


const LoginForm = () => {

    const { authenticateUser, storeToken } = useContext(AuthContext)

    const [loginData, setLoginData] = useState({
        email: '',
        password: '',
    })

    const navigate = useNavigate()

    const handleInputChange = e => {
        const { value, name } = e.target
        setLoginData({ ...loginData, [name]: value })
    }

    const handleSubmit = e => {
        e.preventDefault()

        authService
            .login(loginData)
            .then(({ data }) => {
                storeToken(data.authToken)
                authenticateUser()
                navigate('/')
            })
            .catch(err => next(err))
    }

    const { email, password } = loginData

    return (
        <Form onSubmit={handleSubmit}>
            <Row className='mt-4'>
                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" value={email} onChange={handleInputChange} name="email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" value={password} onChange={handleInputChange} name="password" />
                </Form.Group>
            </Row>

            <Row className='mt-4'>
                <Button style={{ backgroundColor: '#053B50', borderColor: '#053B50' }} type="submit">
                    Iniciar sesión
                </Button>
            </Row>
        </Form>
    )
}

export default LoginForm