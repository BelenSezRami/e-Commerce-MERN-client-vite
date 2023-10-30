import React, { useContext } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/auth.context';

const Navigation = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <Navbar style={{ backgroundColor: '#176B87' }} data-bs-theme="dark" expand="lg" className='mb-5'>

      <Container>

        <Navbar.Brand as='span'>
          <Link to="/">Micaela Ramírez</Link>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-autom">

            <Nav.Link as="span">
              <Link to="/">Inicio</Link>
            </Nav.Link>

            <Nav.Link as="span">
              <Link to="/galeria">Galeria</Link>
            </Nav.Link>

            <Nav.Link as='span'>
              <Link to="/contacto">Contacto</Link>
            </Nav.Link>

            {
              user
                ?
                <>
                  <Nav.Link as="span" onClick={logout}>Cerrar sesión</Nav.Link>

                  <Nav.Link as="span">
                    <Link to="/perfil">¡Hola, {user.name}!</Link>
                  </Nav.Link>

                </>
                :
                <>
                  <Nav.Link as="span">
                    <Link to="/registro">Registro</Link>
                  </Nav.Link>
                  <Nav.Link as="span">
                    <Link to="/iniciar-sesion">Login</Link>
                  </Nav.Link>
                </>
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
