import React, {useState, useEffect} from 'react'
import RoomSelection from './RoomSelection/RoomSelection'

import UserService from "../../services/user.service";

function Planner({onVerifiedUser}) {
    const [userInfo, userInfoTask] = useState()
    const [roomSelected, roomSelectedTask] = useState()
    

    useEffect(async () => {
        const user = await UserService.getUserInfo();
        if (user) {
            userInfoTask(user)
        }
    }, []);

    const roomSelectionHandler = async(roomID) => {
        const room = await UserService.getRoomInfoByID(roomID);
        if(room){
            roomSelectedTask(room)
        }
    }

    return (
        <div className="jumbotron">
            <h2>Planner</h2>
            {roomSelected && onVerifiedUser ?
                <h1>{roomSelected.adminID}</h1>
            :
                <RoomSelection onUser={userInfo} onRoomSelection={roomSelectionHandler}/>
            }
        </div>
    )
}

export default Planner
