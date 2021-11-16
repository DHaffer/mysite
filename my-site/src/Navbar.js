import { Container, Navbar, Nav, Row, Col, Stack } from 'react-bootstrap';

function NavigationBar() {
    return (
      <div className="NavigationBar">
            <Navbar bg="dark" variant="dark">
                    <Container fluid>
                        <Row></Row>
                        <Row>
                            <Nav>
                                <Nav.Link href="#Home" className="navbarlinks">Home</Nav.Link>
                                <Nav.Link href="#Blog" className="navbarlinks">Blog</Nav.Link>
                                <Nav.Link href="#Music" className="navbarlinks">Music</Nav.Link>
                                <Nav.Link href="#About" className="navbarlinks">About</Nav.Link>
                                <Nav.Link href="#Contact" className="navbarlinks">Contact</Nav.Link>
                             </Nav>
                        </Row>
                        <Row></Row>
                    </Container>
            </Navbar>
        </div>
                    
    );

}
  
  export default NavigationBar;