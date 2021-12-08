import React from 'react'

//import icons from react-icons
import { GoArrowUp, GoArrowDown, GoCheck, GoX } from 'react-icons/go';

import {Button, Container, Row, Col} from 'react-bootstrap'

const TaskInProgress = ({task, userIsAdmin, taskProgress, taskUrgency, taskFinished, taskDelete, taskMoveUp, taskMoveDown}) => {
    
    return (
        <div>
            {!task.isFinished ?
                <Container className='mb-3 border border-secondary' onDoubleClick={taskUrgency}>
                    <Row className='align-items-center'>
                            <Col sm={1}>
                                {userIsAdmin && <div>
                                <Row>
                                    <Button variant="info" onClick={() => taskMoveUp(task)}>
                                        <GoArrowUp />
                                    </Button>
                                </Row>
                                <Row>
                                    <Button variant="info" onClick={() => taskMoveDown(task)}>
                                        <GoArrowDown />
                                    </Button>
                                </Row>
                                </div>}
                                
                            </Col>
                        <Col className='text-center mt-3 mb-3' sm={8}>
                                <h4>{task.description}</h4>
                        </Col>
                        <Col sm={2}>
                            {task.inProgress ?
                                <h4>in Progress...</h4>
                                :
                                <div>
                                    {userIsAdmin ?
                                    ''
                                    :
                                    <Button variant="outline-danger" onClick={() => taskProgress(task)}>
                                        <h4>START</h4>
                                    </Button>}
                                </div>
                            }
                        </Col>
                        <Col sm={1}>
                            {userIsAdmin ?
                            <Button variant="danger" onClick={() => taskDelete(task)}>
                                <GoX />
                            </Button>
                            :
                            <Button variant="outline-success" onClick={taskFinished}>
                                <GoCheck />
                            </Button>
                            }
                        </Col>
                    </Row>
                </Container>
            : ''}
        </div>
    )
}

export default TaskInProgress
