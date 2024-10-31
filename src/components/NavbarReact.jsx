import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from './CartWidget';

function NavbarReact() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">Padel Shop</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <NavDropdown title="Productos" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Nuevos</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Ofertas
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Más Vendidos</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <CartWidget counter={10}/>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarReact;