import React, {useState, useEffect} from 'react'
import RoomSelection from './RoomSelection/RoomSelection'

import UserService from "../../services/user.service";

function Planner({onVerifiedUser}) {
    const [userInfo, userInfoTask] = useState()
    const [roomSelected, roomSelectedTask] = useState('')
    const [changesMade, changesMadeTask] = useState(false)
    
    //if user has been verified(logged in) get user information to pass as prop
    useEffect(() => {
        const getUser = async () => {
            if (!onVerifiedUser) return;
            try {
                const user = await UserService.getUserInfo();
                if (user) {
                    userInfoTask(user)
                }
            } catch (err) {
                console.log({ err: err.message })
            }
            changesMadeTask(false)
        } 
        
        getUser()
    }, [onVerifiedUser, changesMade]);

    //updates roomSelected prop with Object having the selected room information
    const roomSelectionHandler = (roomInfo) => {
        roomSelectedTask(roomInfo)
    }

    //updates user based on PATCH changes
    const userUpdatedHandler = (roomInfo) => {
        roomSelectedTask(roomInfo)
    }

    return (
        <div>
            { userInfo &&
                <div className="jumbotron">
                    <h2>Planner</h2>
                    {roomSelected ?
                        <div>
                            <button onClick={() => roomSelectedTask('')}>Return to Room Selection</button>
                            <h5>{roomSelected.otherUserID}</h5>
                        </div>
                    :
                        <div>
                            {userInfo && <RoomSelection onUser={userInfo} onRoomSelection={roomSelectionHandler} onChangesMade={() => changesMadeTask(true)}/>}
                        </div>
                    }
                </div>
            }
        </div>    
    )
}

export default Planner
