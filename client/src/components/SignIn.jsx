import React from 'react'
import {useState} from 'react'
import {Form, Button} from 'react-bootstrap'

const SignIn = ({onSignIn}) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();
        if (!username || !password) {
        alert("Missing a value, please add all elements in form");
        return;
        }

        onSignIn({username, password})
        setUsername("");
        setPassword("");
    };

    return (
        <Form className="sign_in_class_container" onSubmit={onSubmit}>
            <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" placeholder="Enter username" value={username} onChange={(e) => setUsername(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    )
}


export default SignIn
