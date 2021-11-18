import React, {useState} from 'react'
import {Form, Button, Container, Row, Col} from 'react-bootstrap'

function RoomCreationForm() {
    const [email, emailTask] = useState()

    const onSubmit = (e) => {
        e.preventDefault();
        if (!email) {
            alert("Missing a value in form, please fill all elements in form");
        return;
        }
        alert(email);
        emailTask('');
    };

    return (
        <div>
            <Form onSubmit={onSubmit}>
                <Container className="login_form_input mb-3">
                    <Form.Label>Username</Form.Label>
                    <Row>
                        <Col>
                            <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => emailTask(e.target.value)} />
                        </Col>
                        <Col>
                            <Button className="m-6 btn-lg" type="submit">
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
