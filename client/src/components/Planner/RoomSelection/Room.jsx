import React, {useState, useEffect} from 'react'
import UserService from "../../../services/user.service";

function Room({roomID}) {
  /*const [roomInfo, roomInfoTask] = useState()

  useEffect(async () => {
    const room = await UserService.getRoomInfo(roomID);
    console.log(room)
    if (room) {
      roomInfoTask(room)
    }
  }, []);*/

  return (
      <div>
          {roomID && <h4>{roomID}</h4>}
      </div>
  )
}

export default Room
