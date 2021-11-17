import React, {useState, useEffect} from 'react'
import UserService from "../../../services/user.service";

function Room({roomID}) {
  const [employeeInfo, employeeInfoTask] = useState()

  useEffect(async () => { 
    const room = await UserService.getRoomInfoByID(roomID);
    console.log(room)
    const roomHusband = await UserService.getUserInfoByID(room.otherUserID);
    if (roomHusband) {
      employeeInfoTask(room)
    }
  }, [employeeInfo]);

  return (
      <div>
          {roomID && <h5>{roomID}</h5>}
          {employeeInfo && <h4>{employeeInfo.username}</h4>}
      </div>
  )
}

export default Room
