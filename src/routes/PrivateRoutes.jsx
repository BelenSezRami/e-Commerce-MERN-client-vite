import React, { useContext } from 'react'
import { AuthContext } from '../contexts/auth.context'
import { Navigate, Outlet } from 'react-router-dom'
import LoadingSpinner from '../components/LoadingSpinner/LoadingSpinner'

const PrivateRoutes = () => {

    const { user, isLoading } = useContext(AuthContext)

    if (isLoading) {
        return <LoadingSpinner />
    }

    if (!user) {
        return <Navigate to='/iniciar-sesion' />
    }

    return <Outlet />
}

export default PrivateRoutes