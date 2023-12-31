import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {
  return (
    <Navbar expand="lg" className="bg-dark text-white">
      <Container fluid>
        <Navbar.Brand className='text-white' href="#">Asfand</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link className='text-white' href="#action1">Home</Nav.Link>
            <Nav.Link className='text-white' href="#action2">Projects</Nav.Link>
            <NavDropdown className='text-white' title="Reviews" id="">
              <NavDropdown.Item  href="#action3">Buyer Review</NavDropdown.Item>
              <NavDropdown.Item  href="#action4">
                Seller Review
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            
          </Nav>
          <Form className="d-flex">
           
            <Button variant="outline-success">login</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;