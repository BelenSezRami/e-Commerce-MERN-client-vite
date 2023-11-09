import React, { useContext } from 'react'
import { AuthContext } from '../contexts/auth.context'
import { Navigate, Outlet } from 'react-router-dom'
import LoadingSpinner from '../components/LoadingSpinner/LoadingSpinner'

const PrivateRoutes = ({ admittedRoles }) => {
    const { user, isLoading } = useContext(AuthContext)

    if (isLoading) {
        return <LoadingSpinner />
    }

    if (!user) {
        return <Navigate to='/iniciar-sesion' />
    }

    if (!user.role || !admittedRoles.includes(user.role)) {
        return <Navigate to="/galeria" />
    }

    return <Outlet />
}

export default PrivateRoutes