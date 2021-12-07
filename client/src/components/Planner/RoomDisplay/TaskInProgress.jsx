import React from 'react'

//import icons from react-icons
import { GoArrowUp, GoArrowDown, GoCheck } from 'react-icons/go';

import {Button, Container, Row, Col} from 'react-bootstrap'

function TaskInProgress({task, onTaskChanges}) {
    
    const onProgressHandler = () => {
        console.log('in Progress!')
    }

    const onArrowHandler = (input) => {
        onTaskChanges(input)
    }

    const onFinishedHandler = () => {
        console.log('Item is finished!')
    }

    return (
        <div>
            {!task.isFinished ?
                <Container className='mb-3 border border-secondary'>
                    <Row className='align-items-center'>
                        <Col sm={1}> 
                            <Row>
                                <Button variant="info" onClick={() => onArrowHandler('Up')}>
                                    <GoArrowUp />
                                </Button>
                            </Row>
                            <Row>
                                <Button variant="info" onClick={() => onArrowHandler('Down')}>
                                    <GoArrowDown />
                                </Button>
                            </Row>
                        </Col>
                        <Col className='text-center' sm={8}>
                                <h4>{task.description}</h4>
                        </Col>
                        <Col sm={2}>
                            {task.inProgress ?
                                <h4>in Progress...</h4>
                                :
                                <Button variant="outline-danger" onClick={onProgressHandler}>
                                    <h4>START</h4>
                                </Button>
                            }
                        </Col>
                        <Col sm={1}>
                            <Button variant="outline-success" onClick={onFinishedHandler}>
                                <GoCheck />
                            </Button>
                        </Col>
                    </Row>
                </Container>
            : ''}
        </div>
    )
}

export default TaskInProgress
