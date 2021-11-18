import React, {useState, useEffect} from 'react'
import RoomSelection from './RoomSelection/RoomSelection'

import UserService from "../../services/user.service";

function Planner({onVerifiedUser}) {
    const [userInfo, userInfoTask] = useState()
    const [roomSelected, roomSelectedTask] = useState()
    
    useEffect(() => {
        const getUser = async () => {
            const user = await UserService.getUserInfo();
            if (user) {
                userInfoTask(user)
            }
        } 
        
        getUser()
    }, []);

    const roomSelectionHandler = (roomInfo) => {
        roomSelectedTask(roomInfo)
    }

    return (
        <div className="jumbotron">
            <h2>Planner</h2>
            {roomSelected && onVerifiedUser ?
                <div>
                    <button onClick={() => roomSelectedTask()}>Return to Room Selection</button>
                    <h5>{roomSelected.otherUserID}</h5>
                </div>
            :
                <RoomSelection onUser={userInfo} onRoomSelection={roomSelectionHandler}/>
            }
        </div>
    )
}

export default Planner
