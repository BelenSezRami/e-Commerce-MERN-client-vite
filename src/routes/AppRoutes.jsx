import React from 'react'
import { Route, Routes } from 'react-router-dom'
import GaleriePage from '../pages/GaleriePage/GaleriePage'

const AppRoutes = () => {
    return (

        <Routes>
            <Route path='/' element={<h1>INICIO</h1>} />
            <Route path='/galeria' element={<GaleriePage />} />
            <Route path='/contacto' element={<h1>CONTACTO</h1>} />
            <Route path='/crear-cuadro' element={<h1>CREAR CUADRO</h1>} />
            <Route path='/detalles/:cuadro_id' element={<h1>DETALLES DEL CUADRO</h1>} />
            <Route path='/registro' element={<h1>REGISTRO</h1>} />
            <Route path='/iniciar-sesion' element={<h1>INICIAR SESION</h1>} />
            <Route path='/perfil' element={<h1>PERFIL</h1>} />
            <Route path='/*' element={<h1>404</h1>} />
        </Routes>
    )
}

export default AppRoutes