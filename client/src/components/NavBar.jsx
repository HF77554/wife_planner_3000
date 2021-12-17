import React from 'react'
import {Navbar, Button, Nav, Col, Row} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'

const NavBar = ({onVerifiedUser, onLogOut}) => {

    return (
        <Navbar bg="dark" variant="dark">
            <LinkContainer to="/Home">
                <Navbar.Brand>LOGO</Navbar.Brand>
            </LinkContainer>                
            <Nav className="me-auto my-2 text-light">
                <Row className='me-3 h4'>
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
                </Row>
                {onVerifiedUser ?
                <Row className='me-3 h4'>
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
                </Row>
                : ''} 
            </Nav>
            <Nav className="me-4 h4 text-light">
                <Col>
                    {onVerifiedUser ?
                        '':
                        <LinkContainer to="/SignUp">
                            <Nav.Link>SignUp</Nav.Link>
                        </LinkContainer>
                    }
                </Col>
                <Col>
                    {onVerifiedUser ? 
                        <Button variant="danger" size="lg" onClick={onLogOut}>
                            LogOut
                        </Button>
                        :
                        <LinkContainer to="/Login">
                            <Nav.Link>Login</Nav.Link>
                        </LinkContainer>
                    }
                </Col>
            </Nav>
        </Navbar>
    )
}

export default NavBar
