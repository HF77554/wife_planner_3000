import React, {useState} from 'react'
import {Form, Button, Container, Row, Col} from 'react-bootstrap'

import UserService from "../../../services/user.service";


function RoomCreationForm({onUser, onChangesMade}) {
    const [email, emailTask] = useState('')

    const onSubmit = async (e) => {
        e.preventDefault();
        if (!email) {
            alert("Missing a value in form, please fill all elements in form");
        return;
        }

        const otherUser = await UserService.getUserInfoByEmail(email);
        try {
            const adminID = onUser._id
            const otherUserID = otherUser._id
            await UserService.createRoom(adminID, otherUserID)
            emailTask('')
            onChangesMade()
        } catch (err) {
            console.log({err:err})
        }
    };

    return (
        <div>
            <Form onSubmit={onSubmit}>
                <Container className="login_form_input m-3">
                    <Form.Label>Username</Form.Label>
                    <Row>
                        <Col>
                            <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => emailTask(e.target.value)} />
                        </Col>
                        <Col>
                            <Button className="btn-lg" type="submit">
                                Send Request!
                            </Button>
                        </Col>
                    </Row>
                </Container>
            </Form>
        </div>
    )
}

export default RoomCreationForm
