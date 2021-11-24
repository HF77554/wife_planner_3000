import React, {useState} from 'react'
import {Form, Button, Container, Row} from 'react-bootstrap'

import UserService from "../../../services/user.service";


function RoomCreationForm({onUser, onChangesMade}) {
    const [email, emailTask] = useState('')
    const [roomName, roomNameTask] = useState('')
    const [errorMessage, errorMessageTask] = useState()

    const onSubmit = async (e) => {
        e.preventDefault();
        if (!email || !roomName) {
            alert("Missing a value in form, please fill all elements in form");
        return;
        }

        try {
            const otherUser = await UserService.getUserInfoByEmail(email);
            if (!otherUser) return errorMessageTask('Error: user email not found')
            UserService.createRoom(onUser._id, otherUser._id, roomName).then(emailTask('')).then(errorMessageTask(''))
            onChangesMade()
        } catch (err) {
            const errorM = err.message
            errorMessageTask(errorM)
        }
    };

    return (
        <div>
            <Form className='text-center font-weight-bold' onSubmit={onSubmit}>
                <Container className="login_form_input m-3 ">
                    <Row className='mb-3 mt-3'>
                        <Form.Control type="text" placeholder="Enter room name" value={roomName} onChange={(e) => roomNameTask(e.target.value)} />
                    </Row>
                    <Row className='mb-3'>
                        <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => emailTask(e.target.value)} />
                    </Row>
                    <Row className='d-grid gap-2 mb-3'>
                        <Button variant="primary" size="lg" type="submit">
                            Send Request!
                        </Button>
                    </Row>
                    {errorMessage && <h5>{errorMessage}</h5>}
                </Container>
                <Button variant="primary" size="lg" type="submit">
                    Changes made
                </Button>
            </Form>
        </div>
    )
}

export default RoomCreationForm
