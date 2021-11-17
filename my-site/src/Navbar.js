import { Container, Navbar, Nav, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';


function NavigationBar() {
    return (
      <div className="NavigationBar">
            <Navbar bg="dark" variant="dark">
                    <Container fluid>
                        <Row></Row>
                        <Row>
                            <Nav>
                                <Nav.Link as={NavLink} to="/" className="navbarlinks">Home</Nav.Link>
                                <Nav.Link as={NavLink} to="/blog" className="navbarlinks">Blog</Nav.Link>
                                <Nav.Link as={NavLink} to="/music" className="navbarlinks">Music</Nav.Link>
                                <Nav.Link as={NavLink} to="/about" className="navbarlinks">About</Nav.Link>
                                <Nav.Link as={NavLink} to="/contact" className="navbarlinks">Contact</Nav.Link>
                             </Nav>
                        </Row>
                        <Row></Row>
                    </Container>
            </Navbar>
        </div>
                    
    );

}
  
  export default NavigationBar;