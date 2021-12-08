import React, {useState} from 'react'

import Tasks from './Tasks'

function RoomDisplayTasks({userIsAdmin, room}) {
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
            isFinished: false,
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
            isFinished: true,
            inProgress: true,
            Urgent:false,
        }
    ])

    const taskMoveUpHandler = (task) => {
        const arrayIndex = tasks.map( t => {return t.id}).indexOf(task.id)
        const beforeIndexArray = tasks.slice(0,arrayIndex)
        const Array = tasks[arrayIndex]
        const afterIndexArray = tasks.slice(arrayIndex+1)
        console.log(beforeIndexArray)
        console.log(Array)
        console.log(afterIndexArray)
    }

    const taskMoveDownHandler = (task) => {
        console.log('Down')
    }

    const onTaskCreationHandler = (task) => {
        const activeTasks = tasks.filter(task => task.isFinished === false)
        const finishedTasks = tasks.filter(task => task.isFinished === true)
        const newTasks = [...activeTasks, task, ...finishedTasks]
        tasksTask(newTasks)
    }

    const taskFinishHandler = () => {
        console.log('change progress')
    }

    const taskDeleteHandler = (task) => {
        const taskID = task.id
        const newTasks = tasks.filter(task => task.id !== taskID)
        tasksTask(newTasks)
    }
    
    const taskProgressHandler = (task) => {
        console.log(task)
    }

    const taskUrgencyHandler = () => {
        console.log(`urgency pressed`)
    }

    return (
        <div>
            <Tasks 
                userIsAdmin={userIsAdmin} 
                tasks={tasks} 
                onTaskCreation={onTaskCreationHandler} 
                taskFinish={taskFinishHandler}
                taskDelete={taskDeleteHandler}
                taskMoveUp={taskMoveUpHandler}
                taskMoveDown={taskMoveDownHandler}
                taskProgress={taskProgressHandler}
                taskUrgency={taskUrgencyHandler}
            />
        </div>
    )
}

export default RoomDisplayTasks
