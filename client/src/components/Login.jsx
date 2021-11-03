import React from 'react'
import {useState} from 'react'
import {Form, Button} from 'react-bootstrap'
import AuthService from "../services/auth.service";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

const Login = () => {
    let history = useHistory();
    const [username, setUsername] = useState("");
    const [userpassword, setUserpassword] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();
        if (!username || !userpassword) {
        alert("Missing a value, please add all elements in form");
        return;
        }
        try {
            AuthService.login(username, userpassword).then(
                () => {
                    history.push("/profile")
                    window.location.reload();
                },
                (err) => {
                    console.log({err:err})
                }
              );
            setUsername("");
            setUserpassword("");
        } catch (err) {
            console.log({err:err})
        }
    
    };

    return (
        <Form className="login_class_container" onSubmit={onSubmit}>
            <Form.Group className="login_form_input" controlId="formBasicText">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" placeholder="Enter username" value={username} onChange={(e) => setUsername(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-1" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" value={userpassword} onChange={(e) => setUserpassword(e.target.value)} />
            </Form.Group>
            <Button className="btn-lg" variant="primary" type="submit">
                Submit
            </Button>
            <Link to={"/Home"} className="nav-link">No Profile? Click Here to Sign up!</Link>
        </Form>
    )
}


export default Login
