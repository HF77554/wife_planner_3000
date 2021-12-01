import React from 'react'

import {ListGroup} from 'react-bootstrap'

import Task from './Task'


function Tasks({tasks}) {
    return (
        <ListGroup>
            {tasks.map(task => 
                <Task
                    task={task}
                />
            )}
        </ListGroup>
    )
}

export default Tasks
