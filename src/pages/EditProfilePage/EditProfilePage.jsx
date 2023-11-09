import React, { useContext } from 'react'
import EditProfileForm from '../../components/EditProfileForm/EditProfileForm'
import { AuthContext } from '../../contexts/auth.context'
import { Container } from 'react-bootstrap'

const EditUserPage = () => {

    const { user } = useContext(AuthContext)

    return (
        <Container>
            <h1>Perfil de {user.name}</h1>

            <EditProfileForm />
        </Container>
    )

}

export default EditUserPage