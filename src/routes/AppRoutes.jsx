import React from 'react'
import { Route, Routes } from 'react-router-dom'
import GaleriePage from '../pages/GaleriePage/GaleriePage'
import PaintingDetailsPage from '../pages/PaintingDetailsPage/PaintingDetailsPage'
import NewPaintingPage from '../pages/NewPaintingPage/NewPaintingPage'
import SignupPage from '../pages/SignupPage/SignupPage'
import LoginPage from '../pages/LoginPage/LoginPage'
import ProfilePage from '../pages/ProfilePage/ProfilePage'
import PrivateRoutes from './PrivateRoutes'

const AppRoutes = () => {
    return (

        <Routes>
            <Route path='/' element={<h1>INICIO</h1>} />
            <Route path='/galeria' element={<GaleriePage />} />
            <Route path='/contacto' element={<h1>CONTACTO</h1>} />
            <Route path='/detalles/:painting_id' element={<PaintingDetailsPage />} />
            <Route path='/registro' element={<SignupPage />} />
            <Route path='/iniciar-sesion' element={<LoginPage />} />

            <Route path='/perfil' element={<PrivateRoutes admittedRoles={['ADMIN', 'USER']} />} >
                <Route path='' element={<ProfilePage />} />
            </Route>

            <Route element={<PrivateRoutes admittedRoles={['ADMIN']} />}>
                <Route path='/crear-cuadro' element={<NewPaintingPage />} />
            </Route>


            <Route path='/*' element={<h1>404</h1>} />
        </Routes>
    )
}

export default AppRoutes