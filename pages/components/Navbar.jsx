import Image from 'next/image';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import navbrand from '../../public/navbrand.jpg'

function Navigationbar() {
  return (
    <Navbar bg="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home"><Image src={navbrand} alt="navbrand" width={50} height={50} className='rounded-full' /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className='text-white'>Contact</Nav.Link>
            <Nav.Link href="#link" className='text-white'>Socials</Nav.Link>
            <Nav.Link href="#link" className='text-white'>Twittr</Nav.Link>
            <Nav.Link href="#link" className='text-white'>Instagram</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigationbar;