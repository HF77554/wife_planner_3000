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
            <Container className="fluid m-1 h4">
                <Nav className="me-auto my-2 my-lg-0 text-light">
                    <Row>
                        <Col>
                            <LinkContainer to="/Home">
                                <Nav.Link>Home</Nav.Link>
                            </LinkContainer>
                        </Col>
                        <Col>
                            <LinkContainer to="/contactUs">
                            <Nav.Link>Contact</Nav.Link>
                            </LinkContainer>
                        </Col>
                        <Col>
                            <LinkContainer to="/profile">
                                <Nav.Link>Profile</Nav.Link>
                            </LinkContainer>
                        </Col>
                        {onVerifiedUser ?
                            <Col>
                                <LinkContainer to="/planner">
                                    <Nav.Link>Planner</Nav.Link>
                                </LinkContainer>
                            </Col>
                            :
                            ""
                        }
                    </Row>
                </Nav>
                <Nav>
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
                </Nav>
            </Container>
        </Navbar>
    )
}

export default NavBar
