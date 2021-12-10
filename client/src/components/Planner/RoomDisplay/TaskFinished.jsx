import React from 'react'

//import icons from react-icons
import { GoReply } from 'react-icons/go';
import { BsTrash } from 'react-icons/bs';

import {Button, Container, Row, Col} from 'react-bootstrap'

function TaskFinished({task, userIsAdmin, taskDelete, taskReturn}) {
    return (
        <div>
            {task.isFinished ?
                <Container className='mb-3 bg-dark text-white'>
                    <Row>
                        <Col className='text-center mt-2 mb-2' sm={10}>
                            <del><h4>{task.description}</h4></del>
                        </Col>
                        <Col sm={1}>
                            <Button className='mt-2 mb-2' variant="primary" onClick={() => taskReturn(task)}>
                                <GoReply />
                            </Button>
                        </Col>
                        {userIsAdmin ?
                            <Col sm={1}>
                                <Button className='mt-2 mb-2' variant="danger" onClick={() => taskDelete(task)}>
                                    <BsTrash />
                                </Button>
                            </Col>
                        :''}
                    </Row>    
                </Container>
            : ''}
        </div>
    )
}

export default TaskFinished
