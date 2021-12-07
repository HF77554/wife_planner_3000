import React, {useState, useEffect} from 'react'

import RoomDisplayTasks from './RoomDisplayTasks'

function RoomDisplayHub({room, onUser}) {
    const [userIsAdmin, userIsAdminTask] = useState(false)
    const [delegatedTasks, roomDisplayTask] = useState(room.delegatedTasks)

    useEffect(() => {
        if(room.adminID === onUser._id) {
            userIsAdminTask(true)
        } else {
            userIsAdminTask(false)
        }
    }, [room,onUser]);


    const taskChangesHandler = (tasks) =>{
        console.log(tasks)
    }

    const handleClick = () =>{
        console.log(delegatedTasks)
    }

    return (
        <div>
            <button onClick={()=> handleClick()}>Button</button>
            {userIsAdmin ? 'Admin': 'Not Admin'}
            <RoomDisplayTasks userIsAdmin={userIsAdmin} onTaskChanges={taskChangesHandler}/>
        </div>
    )
}

export default RoomDisplayHub
