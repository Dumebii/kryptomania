import Image from 'next/image';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import navbrand from '../../public/navbrand.jpg'

function Navigationbar() {
  return (
    <Navbar bg="light" expand="lg" >
      <Container className='justify-between flex gap-5'>
        <Navbar.Brand href="#home"><Image src={navbrand} alt="navbrand" width={30} height={30} className="rounded-full" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="https://wa.me/message/OM5UPFY3SGRPC1" target="_blank" className='text-gray-900'>Contact</Nav.Link>
            <Nav.Link href="https://instagram.com/trade_with_kryptomania?igshid=YmMyMTA2M2Y=" target="_blank" className='text-gray-900'>Socials</Nav.Link>
            <Nav.Link href="https://twitter.com/Krptomania?t=8JirOOvzUsw8tmHar4gUSA&s=09" target="_blank" className='text-gray-900'>Twitter</Nav.Link>
            <Nav.Link href="https://instagram.com/trade_with_kryptomania?igshid=YmMyMTA2M2Y=" target="_blank" className='text-gray-900'>Instagram</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigationbar;
