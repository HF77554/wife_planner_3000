import React, {useState} from 'react'

import Tasks from './Tasks'

function RoomDisplayTasks() {
    const [tasks, tasksTask] = useState([
        {
            listLocation: 1,
            description: 'Task 1',
            inProgress: false,
            Urgent:false,
        },
        {
            listLocation: 2,
            description: 'Task 2',
            inProgress: false,
            Urgent:false,
        },
        {
            listLocation: 3,
            description: 'Task 3',
            inProgress: false,
            Urgent:false,
        }
    ])

    return (
        <div>
            <Tasks tasks={tasks} />
        </div>
    )
}

export default RoomDisplayTasks
