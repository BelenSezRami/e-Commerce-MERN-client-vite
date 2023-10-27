import React, { useContext } from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'

import { Link } from 'react-router-dom'
import { AuthContext } from '../../contexts/auth.context'


const Navigation = () => {

  const { user } = useContext(AuthContext)

  return (
    <Navbar style={{ backgroundColor: '#176B87' }} data-bs-theme="dark" className='mb-5'>

      {
        user ? (
          <Container>
            <Navbar.Brand as='span'>
              <Link to="/">Micaela Ramírez</Link>
            </Navbar.Brand>

            <Nav className="me-auto">
              <Nav.Link as='span'>
                <Link to="/">Inicio</Link>
              </Nav.Link>

              <Nav.Link as='span'>
                <Link to="/galeria">Galería</Link>
              </Nav.Link>

              <Nav.Link as='span'>
                <Link to="/contacto">Contacto</Link>
              </Nav.Link>

              <Nav.Link as='span'>
                <Link to="/perfil">Hola, {user.name}</Link>
              </Nav.Link>
            </Nav>
          </Container>

        ) :
          (
            <Container>
              <Navbar.Brand as='span'>
                <Link to="/">Micaela Ramírez</Link>
              </Navbar.Brand>

              <Nav className="me-auto">
                <Nav.Link as='span'>
                  <Link to="/">Inicio</Link>
                </Nav.Link>

                <Nav.Link as='span'>
                  <Link to="/galeria">Galería</Link>
                </Nav.Link>

                <Nav.Link as='span'>
                  <Link to="/contacto">Contacto</Link>
                </Nav.Link>

                <Nav.Link as='span'>
                  <Link to="/iniciar-sesion">LogIn</Link>
                </Nav.Link>

                <Nav.Link as='span'>
                  <Link to="/registro">Registro</Link>
                </Nav.Link>
              </Nav>
            </Container>
          )
      }
    </Navbar>
  )
}

export default Navigation