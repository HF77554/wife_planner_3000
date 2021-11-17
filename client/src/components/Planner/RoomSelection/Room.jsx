import React, {useState, useEffect} from 'react'
import UserService from "../../../services/user.service";

function Room({roomID, onRoomSelection}) {
  const [employee, employeeTask] = useState()

  useEffect(async () => { 
    const room = await UserService.getRoomInfoByID(roomID);
    const employee = await UserService.getUserInfoByID(room.otherUserID);
    if (employee) {
      employeeTask(employee)
    }
  }, []);

  const buttonHandler = () => {
    onRoomSelection(roomID)
  }

  return (
      <div>
          {employee && <h4>{employee.username}</h4>}
          <button onClick={buttonHandler}>
            onRoomSelection
          </button>
      </div>
  )
}

export default Room
