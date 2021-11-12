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
            <Container className="mb-1 h4 d-flex">
                <Nav>
                    <Row>
                        <Col>
                            <LinkContainer to="/Home">
                                <Nav.Link>Home</Nav.Link>
                            </LinkContainer>
                        </Col>
                    </Row>
                </Nav>
                    {onVerifiedUser ?
                        <Nav className="me-auto">
                            <Row>
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
                                    <LinkContainer to="/contacts">
                                        <Nav.Link>Contact</Nav.Link>
                                    </LinkContainer>
                                </Col>
                            </Row>
                        </Nav>
                    : ''
                    }
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
