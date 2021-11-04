import React from 'react'
import {useState} from 'react'
import {Form, Button, Nav} from 'react-bootstrap'
import AuthService from "../services/auth.service";
import { useHistory} from "react-router-dom";
import {LinkContainer} from 'react-router-bootstrap'

const Login = ({onLogin}) => {
    let history = useHistory();
    const [username, setUsername] = useState("");
    const [userpassword, setUserpassword] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();
        if (!username || !userpassword) {
        alert("Missing a value, please add all elements in form");
        return;
        }
        const onReset = () =>{
            setUsername("");
            setUserpassword("");
        }
        try {
            AuthService.login(username, userpassword).then(
                () => {
                    history.push("/profile")
                },
                (err) => {
                    console.log({err:err})
                }
              ).then(onReset()).then(onLogin)
        } catch (err) {
            console.log({err:err})
        }
    
    };

    return (
        <div className='login_class_container jumbotron'>
            <Form onSubmit={onSubmit}>
                
                <Form.Group className="login_form_input mb-3" controlId="formBasicText">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" placeholder="Enter username" value={username} onChange={(e) => setUsername(e.target.value)} />
                </Form.Group>

                <Form.Group className="login_form_input mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" value={userpassword} onChange={(e) => setUserpassword(e.target.value)} />
                </Form.Group>

                <Button className="m-6 btn-lg" variant="primary" type="submit">
                    Submit
                </Button>

            </Form>

            <LinkContainer to="/Home">
                    <Nav.Link className='text-center h5 mt-5'>No Profile? Click Here to Sign up!</Nav.Link>
            </LinkContainer>

        </div>
    )
}


export default Login
