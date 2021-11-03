import Button from '@restart/ui/esm/Button';
import React from 'react'
import {Navbar, Container, Nav} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'

const NavBar = ({onVerifiedUser, onLogOut}) => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container className="mb-1 h2">
                <Navbar.Brand href="/Home">LOGO</Navbar.Brand>
                <Nav className="me-auto">
                    <LinkContainer to="/Home">
                        <Nav.Link>Home</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/Profile">
                        <Nav.Link>Profile</Nav.Link>
                    </LinkContainer>
                    <div>
                        {onVerifiedUser ? 
                            <Button onClick={onLogOut}>
                                LogOut
                            </Button>
                            :
                            <LinkContainer to="/Login">
                                <Nav.Link>Login</Nav.Link>
                            </LinkContainer>
                        }
                    </div>
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