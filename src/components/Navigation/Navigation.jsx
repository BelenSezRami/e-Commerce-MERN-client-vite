import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'

import { Link } from 'react-router-dom'


const Navigation = () => {
  return (
    <Navbar style={{ backgroundColor: '#176B87' }} data-bs-theme="dark" className='mb-5'>

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
        </Nav>
      </Container>

    </Navbar>
  )
}

export default Navigation