import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Form, Button, Row } from 'react-bootstrap'
import authService from '../../services/auth.services'

const SignupForm = () => {

    const [signupData, setSignupData] = useState({
        name: '',
        email: '',
        password: '',
        avatar: '',
        role: ''
    })

    const navigate = useNavigate()

    const handleInputChange = e => {
        const { value, name } = e.target
        setSignupData({ ...signupData, [name]: value })
    }

    const handleSubmit = e => {
        e.preventDefault()

        authService
            .signup(signupData)
            .then(({ data }) => navigate('/galeria'))
            .catch(err => next(err))
    }

    const { name, email, password, avatar } = signupData

    return (
        <Form onSubmit={handleSubmit}>
            <Row className='mt-4'>
                <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="text" value={name} onChange={handleInputChange} name="name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" value={email} onChange={handleInputChange} name="email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" value={password} onChange={handleInputChange} name="password" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="avatar">
                    <Form.Label>Foto de perfil</Form.Label>
                    <Form.Control type="file" value={avatar} onChange={handleInputChange} name="avatar" />
                </Form.Group>
            </Row>
            <Row className='mt-4'>
                <Button style={{ backgroundColor: '#053B50', borderColor: '#053B50' }} type="submit">
                    Crear usuario
                </Button>
            </Row>
        </Form>
    )
}

export default SignupForm