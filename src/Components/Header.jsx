import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container fluid>
                    <Navbar.Brand style={{ color: "red" }} as={Link} to="/"><span style={{ color: "blue" }}>Web</span>Developer</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link>About Us</Nav.Link>
                            <Nav.Link>Services</Nav.Link>
                            <Nav.Link as={Link} to="/signup">Signup</Nav.Link>
                            <Nav.Link as={Link} to="/login">Login</Nav.Link>
                            <Nav.Link as={Link} to="/task1">Task1</Nav.Link>
                            <Nav.Link as={Link} to="/task2">Task2</Nav.Link>
                            <Nav.Link as={Link} to="/task3">Task3</Nav.Link>
                            <Nav.Link as={Link} to="/practice">Practice</Nav.Link>
                            <Nav.Link as={Link} to="/metro">Metro</Nav.Link>
                            {/* <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link> */}
                        </Nav>
                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
           
        </div>
    )
}

export default Header