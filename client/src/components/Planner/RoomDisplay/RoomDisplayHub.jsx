import React, {useState, useEffect} from 'react'

import RoomDisplayTasks from './RoomDisplayTasks'

function RoomDisplayHub({room, onUser}) {
    const [userIsAdmin, userIsAdminTask] = useState(false)
    const [roomDisplay, roomDisplayTask] = useState(room)

    useEffect(() => {
        if(room.adminID === onUser._id) {
            userIsAdminTask(true)
        } else {
            userIsAdminTask(false)
        }
    }, [room,onUser]);


    const handleClick = () =>{
        console.log(room)
        console.log(onUser)
    }

    return (
        <div>
            <button onClick={()=> handleClick()}>Button</button>
            {userIsAdmin ? 'True': 'False'}
            <h5>{roomDisplay.otherUserID}</h5>
            <RoomDisplayTasks />
        </div>
    )
}

export default RoomDisplayHub
