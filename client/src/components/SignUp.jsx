import React, {useState} from 'react'
import {Form, Button, Nav} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
import AuthService from "../services/auth.service";
import { useHistory} from "react-router-dom";

const SignUp = () => {
    let history = useHistory();
    const [username, setUsername] = useState("");
    const [userpassword, setUserpassword] = useState("");
    const [email, setEmail] = useState("");
    const [passwordVerification, passwordVerificationTask] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();

        if (!username || !userpassword || !passwordVerification || !email) {
        alert("Missing a value in form, please fill all elements in form");
        return;
        }

        if (userpassword !== passwordVerification) {
            passwordVerificationTask("")
            alert("Passwords do not match, please try again");
            return;
        }

        const onReset = () =>{
            setUsername("");
            setUserpassword("");
            passwordVerificationTask("")
            setEmail("")
        }

        try {
            AuthService.register(username, userpassword, email).then(
                () => {
                    history.push("/login")
                },
                (err) => {
                    console.log({err:err})
                }
              ).then(onReset())
        } catch (err) {
            console.log({err:err})
        }
    };


    return (
        <div className='login_class_container jumbotron'>
            <Form onSubmit={onSubmit}>
                
                <Form.Group className="login_form_input mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)}/>
                </Form.Group>

                <Form.Group className="login_form_input mb-3" controlId="formBasicText">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" placeholder="Enter username" value={username} onChange={(e) => setUsername(e.target.value)} />
                </Form.Group>

                <Form.Group className="login_form_input mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" value={userpassword} onChange={(e) => setUserpassword(e.target.value)} />
                </Form.Group>

                <Form.Group className="login_form_input mb-3" controlId="formBasicPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" placeholder="type password again" value={passwordVerification} onChange={(e) => passwordVerificationTask(e.target.value)} />
                </Form.Group>

                <Button className="m-6 btn-lg" variant="primary" type="submit">
                    SignUp!
                </Button>

            </Form>

            <LinkContainer to="/login">
                    <Nav.Link className='text-center h5 mt-5'>Already have a Profile? Click Here to Sign in!</Nav.Link>
            </LinkContainer>

        </div>
    )
}

export default SignUp
