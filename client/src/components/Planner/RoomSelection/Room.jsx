import React, {useState, useEffect} from 'react'
import {ListGroup} from 'react-bootstrap'
import UserService from "../../../services/user.service";

function Room({roomID, onRoomSelection}) {
  const [employee, employeeTask] = useState()
  const [roomInfo, roomInfoTask] = useState()

  useEffect(() => {
    const getRoomInfo = async () => {
      const room = await UserService.getRoomInfoByID(roomID);
      const employee = await UserService.getUserInfoByID(room.otherUserID);
      if (employee) {
        employeeTask(employee)
        roomInfoTask(room)
      }
    }
    
    getRoomInfo()
  }, [roomID]);

  const buttonHandler = () => {
    onRoomSelection(roomInfo)
  }

  return (
    <ListGroup.Item className='text-center mt-1 h3' action onClick={buttonHandler}>
      {employee && employee.username}
    </ListGroup.Item>
  )
}

export default Room
