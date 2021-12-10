import React, {useState, useEffect} from 'react'

//import icons from react-icons
import { GoArrowUp, GoArrowDown, GoCheck, GoX } from 'react-icons/go';

import {Button, Container, Row, Col} from 'react-bootstrap'

const TaskInProgress = ({task, userIsAdmin, taskProgress, taskUrgency, taskFinish, taskDelete, taskMoveUp, taskMoveDown}) => {
    const [taskBorderColor, taskBorderColorTask] = useState('')
    const [taskBackgroundColor, taskBackgroundColorTask] = useState('')

    useEffect(() => {
        //if task in Progress
        if(task.inProgress) {
            taskBorderColorTask('border border-success')
        } else {
            taskBorderColorTask('border border-secondary')
        }
        
        //if task is urgent
        if(task.Urgent) {
            taskBackgroundColorTask('bg-warning')
        } else {
            taskBackgroundColorTask('')
        }
        
    }, [task]);

    
    return (
        <div>
            {!task.isFinished ?
                <Container className={`mb-3 ${taskBorderColor} ${taskBackgroundColor}`} onDoubleClick={() => taskUrgency(task)}>
                    <Row className='align-items-center'>
                        <Col sm={1}>
                            {userIsAdmin && 
                                <div>
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
                                </div>
                            }
                        </Col>
                        <Col className='text-center text-wrap mt-3 mb-3' sm>
                                <label><h4>{task.description}</h4></label>
                        </Col>
                        <Col sm={2}>
                            {task.inProgress ?
                                <label><h4>in Progress...</h4></label>
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
                            <Button variant="outline-success" onClick={() => taskFinish(task)}>
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
