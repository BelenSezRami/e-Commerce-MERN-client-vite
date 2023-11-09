import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Button, Form, Row } from 'react-bootstrap'
import uploadServices from '../../services/upload.services'
import userService from '../../services/user.services'
import { AuthContext } from '../../contexts/auth.context'

const EditProfileForm = () => {

    const navigate = useNavigate()

    const { user_id } = useParams()

    const { updateUser } = useContext(AuthContext)

    const [userData, setUserData] = useState({
        name: '',
        lastName: '',
    })

    const [loadingImage, setLoadingImage] = useState(false)

    const getUser = () => {
        userService
            .getOneUser(user_id)
            .then(({ data }) => setUserData(data))
            .catch(err => console.log(err))
    }

    useEffect(() => {
        getUser()
    }, [user_id])

    const handleSubmit = e => {
        e.preventDefault()
        userService
            .editUser(user_id, userData)
            .then(() => {
                updateUser(userData)
                navigate(`/perfil/${userData._id}`)
            })
            .catch(err => console.log(err))
    }

    const handleFileUpload = e => {

        setLoadingImage(true)

        const formData = new FormData()
        formData.append('image', e.target.files[0])

        uploadServices
            .uploadImage(formData)
            .then(res => {
                setUserData({ ...userData, avatar: res.data.cloudinary_url })
                setLoadingImage(false)
            })
            .catch(err => {
                console.log(err)
                setLoadingImage(false)
            })
    }

    const handleInputChange = e => {
        const { value, name } = e.target
        setUserData({ ...userData, [name]: value })
    }

    return (

        <Form onSubmit={handleSubmit}>

            <Form.Group className="mb-3" >
                <Form.Label>Nombre</Form.Label>
                <Form.Control type="text" value={userData.name} onChange={handleInputChange} name='name' />
            </Form.Group>

            <Form.Group className="mb-3" controlId="lastName">
                <Form.Label>Apellido</Form.Label>
                <Form.Control type="text" value={userData.lastName} onChange={handleInputChange} name="lastName" />
            </Form.Group>

            <Form.Group className="mb-3" >
                <Form.Label>Imagen de perfil</Form.Label>
                <Form.Control type="file" onChange={handleFileUpload} name='avatar' />
            </Form.Group>

            <Row className='mt-4'>
                <Button style={{ backgroundColor: '#053B50', borderColor: '#053B50' }} type="submit" disabled={loadingImage}>
                    {loadingImage ? 'Cargando imagen...' : 'Guardar cambios'}
                </Button>
            </Row>

        </Form>
    )
}

export default EditProfileForm