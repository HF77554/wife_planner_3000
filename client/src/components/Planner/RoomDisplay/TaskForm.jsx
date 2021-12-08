import React, {useState} from 'react'

import {Form, Container,Row, Button} from 'react-bootstrap'

const TaskForm = ({onTaskCreation}) => {
    const [task, taskHandler] = useState('');
    const [isUrgent, isUrgentHandler] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault();
        if (!task) {
            alert('Must input task in order to submit')
            return
        }
        const newTask = {
            id: Date.now(),
            description: task,
            isFinished: false,
            inProgress: false,
            Urgent: isUrgent,
        }
        taskHandler('')
        onTaskCreation(newTask)
    }

    return (
        <Form className='h3' onSubmit={onSubmit}>
            <Form.Group className="mb-3">
                    <Form.Label>Task to Create</Form.Label>
                    <Form.Control size="lg" type='text' value={task} placeholder="Enter task"  onChange={(e) => taskHandler(e.target.value)}/>
            </Form.Group>
            <Container className="mb-3">
                <Row sm={6}>
                    <Form.Check 
                        className="ms-3"
                        title={isUrgent}
                        type='checkbox'
                        label='Urgent?'
                        onClick={() => isUrgentHandler(!isUrgent)}
                    />
                    <Button className="ms-3" size="lg" type="submit">Submit</Button>
                </Row>
            </Container>
        </Form>
    )
}

export default TaskForm
