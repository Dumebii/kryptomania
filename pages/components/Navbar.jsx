import Image from 'next/image';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import navbrand from '../../public/navbrand.jpg'

function Navigationbar() {
  return (
    <Navbar bg="light" expand="lg" >
      <Container className='justify-between flex gap-5'>
        <Navbar.Brand href="#home"><Image src={navbrand} alt="navbrand" width={50} height={50} className='rounded-full' /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="wa.link/5rulrl" className='text-gray-900'>Contact</Nav.Link>
            <Nav.Link href="https://instagram.com/trade_with_kryptomania?igshid=YmMyMTA2M2Y=" className='text-gray-900'>Socials</Nav.Link>
            <Nav.Link href="https://twitter.com/Kryptomania9?t=yorSooDP1Z1dpfODelt7Rw&s=09" className='text-gray-900'>Twitter</Nav.Link>
            <Nav.Link href="https://instagram.com/trade_with_kryptomania?igshid=YmMyMTA2M2Y=" className='text-gray-900'>Instagram</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigationbar;
