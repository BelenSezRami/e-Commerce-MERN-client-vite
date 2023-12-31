import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Form, Button, Row } from 'react-bootstrap'
import authService from '../../services/auth.services'
import uploadServices from '../../services/upload.services'

const SignupForm = () => {

    const [signupData, setSignupData] = useState({
        name: '',
        lastName: '',
        email: '',
        password: '',
        avatar: '',
        role: '',
    })
    const [loadingImage, setLoadingImage] = useState(false)

    const { name, lastName, password, email } = signupData

    const navigate = useNavigate()

    const handleInputChange = e => {
        const { value, name } = e.target
        setSignupData({ ...signupData, [name]: value })
    }

    const handleSubmit = e => {
        e.preventDefault()

        authService
            .signup(signupData)
            .then(() => navigate('/iniciar-sesion'))
            .catch(err => console.log(err))
    }

    const handleFileUpload = e => {

        setLoadingImage(true)

        const formData = new FormData()
        formData.append('image', e.target.files[0])

        uploadServices
            .uploadImage(formData)
            .then(res => {
                setSignupData({ ...signupData, avatar: res.data.cloudinary_url })
                setLoadingImage(false)
            })
            .catch(err => {
                console.log(err)
                setLoadingImage(false)
            })
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Row className='mt-4'>
                <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="text" value={name} onChange={handleInputChange} name="name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="lastName">
                    <Form.Label>Apellido</Form.Label>
                    <Form.Control type="text" value={lastName} onChange={handleInputChange} name="lastName" />
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
                    <Form.Control type="file" onChange={handleFileUpload} />
                </Form.Group>
            </Row>

            <Row className='mt-4'>
                <Button style={{ backgroundColor: '#053B50', borderColor: '#053B50' }} type="submit" disabled={loadingImage}>
                    {loadingImage ? 'Cargando imagen...' : 'Crear usuario'}
                </Button>
            </Row>
        </Form>
    )
}

export default SignupForm