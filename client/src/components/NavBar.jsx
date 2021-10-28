import React from 'react'
import {Navbar, Container, Nav} from 'react-bootstrap'
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand>
                    <Link to={"/home"} className="nav-link">Home</Link>
                </Navbar.Brand>
                <Nav className="me-auto">
                    <Link to={"/Profile"} className="nav-link">Profile</Link>
                </Nav>
                <Nav>
                    <Link to={"/login"} className="nav-link">Login</Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default NavBar

