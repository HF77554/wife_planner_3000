import React, {useState} from 'react'

import Tasks from './Tasks'

function RoomDisplayTasks({userIsAdmin, onTaskChanges}) {
    const [tasks, tasksTask] = useState([
        {
            id: 1,
            description: 'Task 1',
            isFinished: false,
            inProgress: false,
            Urgent:false,
        },
        {
            id: 2,
            description: 'Task 2',
            isFinished: true,
            inProgress: false,
            Urgent:false,
        },
        {
            id: 3,
            description: 'Task 3',
            isFinished: false,
            inProgress: true,
            Urgent:false,
        },
        {
            id: 4,
            description: 'Task 4',
            isFinished: false,
            inProgress: true,
            Urgent:true,
        }
    ])

    return (
        <div>
            <Tasks tasks={tasks} onTaskChanges={onTaskChanges}/>
        </div>
    )
}

export default RoomDisplayTasks
