import React, {useState} from 'react'
import RoomSelection from './RoomSelection/RoomSelection'

function Planner({onVerifiedUser}) {
    const [roomSelected, roomSelectedTask] = useState()
    return (
        <div className="jumbotron">
            <h2>Planner</h2>
            {roomSelected && onVerifiedUser ?
                "RoomDisplay"
            :
                <RoomSelection />
            }
        </div>
    )
}

export default Planner