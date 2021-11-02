import Button from '@restart/ui/esm/Button';
import React from 'react'
import {Navbar, Container, Nav} from 'react-bootstrap'
import { Link } from "react-router-dom";

const NavBar = ({onVerifiedUser, onLogOut}) => {
    return (
        <div>
            <nav className="navbar navbar-expand navbar-dark bg-dark">
                    <Navbar.Brand>
                        <Link to={"/"} className="navbar-brand">
                            LOGO
                        </Link>
                    </Navbar.Brand>
                    <Container>
                    <div className="navbar-nav mr-auto">
                        <Link to={"/Home"} className="nav-link">Home</Link>
                    </div>
                    <div className="navbar-nav mr-auto">
                        <Link to={"/Profile"} className="nav-link">Profile</Link>
                    </div>
                    {
                        onVerifiedUser ? 
                        <div className="navbar-nav mr-auto">
                            <Button onClick={onLogOut}>
                                LogOut
                            </Button>
                        </div>
                        :
                        <div className="navbar-nav mr-auto">
                            <Link to={"/login"} className="nav-link">Login</Link>
                        </div>
                    }
                    </Container>
            </nav>
        </div>
    )
}

export default NavBar

