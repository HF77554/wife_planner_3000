import Button from '@restart/ui/esm/Button';
import React from 'react'
import {Navbar, Container, Nav, Col, Row} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'

const NavBar = ({onVerifiedUser, onLogOut}) => {
    return (
        <Navbar bg="dark" variant="dark">
            <LinkContainer to="/Home">
                <Navbar.Brand>LOGO</Navbar.Brand>
            </LinkContainer>
            <Container className="mb-1 h4">
                <Nav className="me-auto">
                    <Row>
                        <Col>
                            <LinkContainer to="/Home">
                                <Nav.Link>Home</Nav.Link>
                            </LinkContainer>
                        </Col>
                        <Col>
                            <LinkContainer to="/profile">
                                <Nav.Link>Profile</Nav.Link>
                            </LinkContainer>
                        </Col>
                        <Col>
                            <LinkContainer to="/planner">
                                <Nav.Link>Planner</Nav.Link>
                            </LinkContainer>
                        </Col>
                        <Col>
                            <LinkContainer to="/contact">
                                <Nav.Link>Contact</Nav.Link>
                            </LinkContainer>
                        </Col>
                    </Row>
                </Nav>
                <Nav>
                    <Row>
                        <Col>
                            <LinkContainer to="/SignUp">
                                <Nav.Link>SignUp</Nav.Link>
                            </LinkContainer>
                        </Col>
                        <Col>
                            {onVerifiedUser ? 
                                <Button className="m-1 bg-danger text-white" onClick={onLogOut}>
                                    LogOut
                                </Button>
                                :
                                <LinkContainer to="/Login">
                                    <Nav.Link>Login</Nav.Link>
                                </LinkContainer>
                            }
                        </Col>                  
                    </Row>
                </Nav>
            </Container>
        </Navbar>

    )
}

export default NavBar

/*<div>
            <nav className="navbar navbar-expand navbar-dark bg-dark">
                    <Navbar.Brand>
                        <Link to={"/"} className="navbar-brand">
                            LOGO
                        </Link>
                    </Navbar.Brand>
                    <Nav className="nav-link h3">
                        <Nav.Link href="/Home">Home</Nav.Link>
                        <Nav.Link href="/Profile">Profile</Nav.Link>
                    {
                        onVerifiedUser ? 
                        <div>
                            <Button onClick={onLogOut}>
                                LogOut
                            </Button>
                        </div>
                        :
                        <div>
                            <Link to={"/login"} className="nav-link">Login</Link>
                        </div>
                    }
                    </Nav>
            </nav>
        </div>*/