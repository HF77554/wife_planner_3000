import React, {useState, useEffect} from 'react'
import {ListGroup, Button, Row, Col} from 'react-bootstrap'
import UserService from "../../../services/user.service";
import RoomService from "../../../services/room.service";

function Room({room, onRoomSelection, userChangesMade}) {
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

  const roomSelectionHandler = () => {
    onRoomSelection(room)
  }

  const roomDeletionHandler = async (r) => {
    try {
      await UserService.UserRemoveRoomByID(r.adminID, r._id)
      await UserService.UserRemoveRoomByID(r.otherUserID, r._id)
      await RoomService.deleteRoom(r._id).then(userChangesMade())
    } catch (err) {
      console.log({err:err.message})
    }
  }


  return (
    <div>
      {!room.otherUserAcceptance ? "":
        <ListGroup.Item className='text-center m-1'>
          <Row>
            <Col sm={9} onClick={roomSelectionHandler}>
              {employee && <h4>{employee.username} - {room.roomName}</h4>}
            </Col>
            <Col sm={1}>
              <Button variant="outline-primary" size="sm" onClick={roomSelectionHandler}>Y</Button>
            </Col>
            <Col sm={2}>
              <Button variant="outline-danger" size="sm" onClick={() => roomDeletionHandler(room)}>X</Button>
            </Col>
          </Row>
        </ListGroup.Item>
      }
    </div>
  )
}

export default Room
