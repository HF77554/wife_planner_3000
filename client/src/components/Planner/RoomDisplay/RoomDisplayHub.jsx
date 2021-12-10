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

    return (
        <div>
            <RoomDisplayTasks userIsAdmin={userIsAdmin} room={room}/>
        </div>
    )
}

export default RoomDisplayHub
