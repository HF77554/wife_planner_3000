import React, {useState,useEffect} from 'react'

import Tasks from './Tasks'

import RoomService from "../../../services/room.service";

function RoomDisplayTasks({userIsAdmin, room}) {
    const [tasks, tasksTask] = useState(room.delegatedTasks)

    useEffect(() => {
        
        const delegatedTaskUpdate = async(tasks) =>{
            const roomObj = {...room, delegatedTasks:tasks}
            await RoomService.updateRoomsByID(roomObj)
        }
        
        try {
            delegatedTaskUpdate(tasks)
        } catch (err) {
            console.log({err:err})
        }

    }, [tasks, room]);

    //finished, moves task up on working array
    const taskMoveUpHandler = (task) => {
        const arrayIndex = tasks.map( t => {return t.id}).indexOf(task.id)
        //edge cases for moving task up
        if (arrayIndex < 1) return;
        //array parts
        const beforeArray = tasks.slice(0,arrayIndex-1)
        const moveRightArray = tasks[arrayIndex-1]
        const moveLeftArray = tasks[arrayIndex]
        const afterArray = tasks.slice(arrayIndex+1)
        //new array order
        const newArray = [...beforeArray,moveLeftArray,moveRightArray,...afterArray]
        tasksTask(newArray)
    }

    //finished, moves task down on working array
    const taskMoveDownHandler = (task) => {
        const arrayIndex = tasks.map( t => {return t.id}).indexOf(task.id)
        const activeTasksLength = tasks.filter(task => task.isFinished === false).length
        //edge cases for moving task down
        if (arrayIndex+1 >= activeTasksLength) return;
        //array parts
        const beforeArray = tasks.slice(0,arrayIndex)
        const moveRightArray = tasks[arrayIndex]
        const moveLeftArray = tasks[arrayIndex+1]   
        const afterArray = tasks.slice(arrayIndex+2)
        //new array order
        const newArray = [...beforeArray,moveLeftArray,moveRightArray,...afterArray]
        tasksTask(newArray)
    }

    //finished, creates new task
    const onTaskCreationHandler = (task) => {
        const activeTasks = tasks.filter(task => task.isFinished === false)
        const finishedTasks = tasks.filter(task => task.isFinished === true)
        const newTasks = [...activeTasks, task, ...finishedTasks]
        tasksTask(newTasks)
    }

    //finished, marks task as finished, moves to end of list
    const taskFinishHandler = (task) => {
        const newTask = {...task, isFinished:true}
        const oldTasks = tasks.filter(t => t.id !== task.id)
        const newTasks = [...oldTasks,newTask]
        tasksTask(newTasks)
    }

    //marks task as unfinished and moves it to end of working list
    const taskReturnHandler = (task) =>{
        const newTask = {...task, isFinished:false, Urgent:false, inProgress: false}
        const filteredTasks = tasks.filter(t => t.id !== task.id )
        const activeTasks = filteredTasks.filter(t => t.isFinished === false)
        const finishedTasks = filteredTasks.filter(t => t.isFinished === true )
        const newTasks = [...activeTasks, newTask, ...finishedTasks]
        tasksTask(newTasks)
    }

    //finished, deletes task from array
    const taskDeleteHandler = (task) => {
        const newTasks = tasks.filter(t => t.id !== task.id) 
        tasksTask(newTasks)
    }
    
    //finished, updates task value to 
    const taskProgressHandler = (task) => {
        //updates task
        const newTask = {...task, inProgress:true}
        //updates tasks
        const newTasks = tasks.map(t => (t.id===task.id ? newTask : t))
        tasksTask(newTasks)
    }

    //finished, changes task Urgency
    const taskUrgencyHandler = (task) => {
        //only allowed if admin
        if(!userIsAdmin) return
        //updates task
        const newUrgency = !task.Urgent
        const newTask = {...task, Urgent:newUrgency}
        //updates tasks
        const newTasks = tasks.map(t => (t.id===task.id ? newTask : t))
        tasksTask(newTasks)
    }

    return (
        <div>
            {tasks &&
                <Tasks 
                    userIsAdmin={userIsAdmin} 
                    tasks={tasks} 
                    onTaskCreation={onTaskCreationHandler} 
                    taskFinish={taskFinishHandler}
                    taskReturn={taskReturnHandler}
                    taskDelete={taskDeleteHandler}
                    taskMoveUp={taskMoveUpHandler}
                    taskMoveDown={taskMoveDownHandler}
                    taskProgress={taskProgressHandler}
                    taskUrgency={taskUrgencyHandler}
                />
            }
        </div>
    )
}

export default RoomDisplayTasks


/*[
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
        Urgent:true,
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
]*/