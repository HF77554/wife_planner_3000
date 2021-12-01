import React from 'react'

import {ListGroup, Container, Row, Col} from 'react-bootstrap'

function Task({task}) {

    const onTaskClickHandler = () => {
        console.log('Clicked')
    }

    const onClickHandler = () => {
        console.log('Clicked Up or Down')
    }

    return (
        <Container>
            <Row>
                <Col> 
                    <Row>
                        <ListGroup.Item action onClick={onClickHandler}>
                            Up
                        </ListGroup.Item>
                    </Row>
                    <Row>
                        <ListGroup.Item action onClick={onClickHandler}>
                            Down
                        </ListGroup.Item>
                    </Row>
                </Col>
                <Col>
                    <ListGroup.Item action onClick={onTaskClickHandler}>
                        <h5>{task.listLocation} - {task.description}</h5>
                    </ListGroup.Item>
                </Col>
                <Col>
                    X
                </Col>
            </Row>
        </Container>
    )
}

export default Task
