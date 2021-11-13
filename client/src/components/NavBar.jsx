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
            <Nav className='text-light'>
            <Container className="mb-1 h4">
                <Nav className='text-light'>
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
                        <LinkContainer to="/contactUs">
                           <Nav.Link>Contact</Nav.Link>
                        </LinkContainer>
                    </Col>
                </Row>
                </Nav>
                <Nav className='text-light md-auto'>
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
            </Nav>
        </Navbar>
    )
}

export default NavBar
