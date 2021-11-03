import Button from '@restart/ui/esm/Button';
import React from 'react'
import {Navbar, Container, Nav} from 'react-bootstrap'
import { Link } from "react-router-dom";

const NavBar = ({onVerifiedUser, onLogOut}) => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/Home">LOGO</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/Home">Home</Nav.Link>
                    <Nav.Link href="/Profile">Profile</Nav.Link>
                    <div className="d-flex">
                        {onVerifiedUser ? 
                            <Button onClick={onLogOut}>
                                LogOut
                            </Button>
                            :
                            <Nav.Link href="/Login">Login</Nav.Link>
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