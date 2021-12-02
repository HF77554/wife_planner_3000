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
        <Container className='m-2 bg-secondary'>
            <Row className='align-items-center'>
                <Col sm={1}> 
                    <Row>
                        <ListGroup.Item variant="primary" className='text-center' action onClick={onClickHandler}>
                            Up
                        </ListGroup.Item>
                    </Row>
                    <Row>
                        <ListGroup.Item variant="primary" className='text-center' action onClick={onClickHandler}>
                            Down
                        </ListGroup.Item>
                    </Row>
                </Col>
                <Col sm={10}>
                    <ListGroup.Item variant="secondary" className='text-center' action onClick={onTaskClickHandler}>
                        <h5>{task.listLocation} - {task.description}</h5>
                    </ListGroup.Item>
                </Col>
                <Col className='text-center' sm={1}>
                    <ListGroup.Item variant="danger" className='text-center' action onClick={onTaskClickHandler}>
                        X
                    </ListGroup.Item>
                </Col>
            </Row>
        </Container>
    )
}

export default Task
