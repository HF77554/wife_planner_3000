import React from 'react'
import {Navbar, Container} from 'react-bootstrap'

const NavBar = ({user}) => {
    return (
        <Navbar>
            <Container>
                <Navbar.Brand href="/">Home Page</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                { user ? <Navbar.Text>Signed in as: {user.username} </Navbar.Text>: <Navbar.Text>User not logged in</Navbar.Text>}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar