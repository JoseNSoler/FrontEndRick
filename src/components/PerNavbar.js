import { Container, Row, Col, Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import { connect, useDispatch, useSelector } from 'react-redux';



const PerNavbar = (props) => {
    return (
        <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
            <Container >
                <Navbar.Brand href="/Front_RickAndMorty/home">I'm a Pickle Mortyyy</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className='perNavBar'>
                    <Nav className="me-auto">
                        <Nav.Link href="/Front_RickAndMorty/all">Universo</Nav.Link>
                        <Nav.Link href="/Front_RickAndMorty/otro">Ricker</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link eventKey={2} href="/Front_RickAndMorty/favorites">
                            Cuenta
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

const stateMapToPros = state => {

    return { data: state.allForOne.navbar }

}


export default connect(stateMapToPros)(PerNavbar)