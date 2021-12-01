import React, {useState} from 'react'

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
            {tasks.map(task => {return(
                <div>
                    <h3>{task.listLocation}</h3>
                    <h5>{task.description}</h5>
                </div>
            )})}
        </div>
    )
}

export default RoomDisplayTasks
