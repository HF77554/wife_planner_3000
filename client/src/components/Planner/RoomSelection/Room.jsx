import React, {useState, useEffect} from 'react'
import {ListGroup} from 'react-bootstrap'
import UserService from "../../../services/user.service";

function Room({room, onRoomSelection}) {
  const [employee, employeeTask] = useState()

  useEffect(() => {
    const getEmployeeInfo = async () => {
      const employee = await UserService.getUserInfoByID(room.otherUserID);
      if (employee) {
        employeeTask(employee)
      }
    }
    getEmployeeInfo()
  }, [room]);

  const clickHandler = () => {
    onRoomSelection(room)
  }

  return (
    <ListGroup.Item className='text-center mt-1 h3' action onClick={clickHandler}>
      {employee && employee.username}
    </ListGroup.Item>
  )
}

export default Room
