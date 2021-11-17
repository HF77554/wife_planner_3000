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

    return (
        <div className="jumbotron">
            <h2>Planner</h2>
            {roomSelected && onVerifiedUser ?
                "RoomDisplay"
            :
                <RoomSelection onUser={userInfo}/>
            }
        </div>
    )
}

export default Planner
