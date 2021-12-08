import React, {useState, useEffect} from 'react'

import RoomDisplayTasks from './RoomDisplayTasks'

function RoomDisplayHub({room, onUser}) {
    const [userIsAdmin, userIsAdminTask] = useState(false)

    useEffect(() => {
        if(room.adminID === onUser._id) {
            userIsAdminTask(true)
        } else {
            userIsAdminTask(false)
        }
    }, [room,onUser]);

    const handleClick = () =>{
        console.log(userIsAdmin)
    }

    return (
        <div>
            <button onClick={()=> handleClick()}>Button</button>
            {userIsAdmin ? 'Admin': 'Not Admin'}
            <RoomDisplayTasks userIsAdmin={userIsAdmin} room={room}/>
        </div>
    )
}

export default RoomDisplayHub
