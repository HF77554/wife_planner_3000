import React, {useState, useEffect} from 'react'
import {ListGroup, Button, Container, Row, Col} from 'react-bootstrap'
import UserService from "../../../services/user.service";
import RoomService from "../../../services/room.service";

function Room({room, onRoomSelection, onChangesMade}) {
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
      await RoomService.deleteRoom(r._id).then(onChangesMade())
    } catch (err) {
      console.log({err:err.message})
    }
  }


  return (
    <Container>
      <Row>
        <Col>
          <ListGroup.Item className='text-center mt-1 h3' action onClick={roomSelectionHandler}>
            {employee && <h4>{employee.username}-{room.roomName}</h4>}
          </ListGroup.Item>
        </Col>
        <Col>
          <Button onClick={() => roomDeletionHandler(room)}>X</Button>
        </Col>
      </Row>
    </Container>
  )
}

export default Room
