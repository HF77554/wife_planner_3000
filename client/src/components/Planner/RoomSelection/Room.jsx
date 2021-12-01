import React, {useState, useEffect} from 'react'
import {ListGroup, Button, Row, Col} from 'react-bootstrap'
import UserService from "../../../services/user.service";
import RoomService from "../../../services/room.service";

function Room({room, onRoomSelection, userChangesMade}) {
  const [otherUser, otherUserTask] = useState()

  //get other user information
  useEffect(() => {
    const getOtherUserInfo = async () => {
      const otherUser = await UserService.getUserInfoByID(room.otherUserID);
      if (otherUser) {
        otherUserTask(otherUser)
      }
    }
    getOtherUserInfo()
  }, [room]);

  //Pass room info to function at top
  const roomSelectionHandler = () => {
    onRoomSelection(room)
  }

  const roomDeletionHandler = async (r) => {
    try {
      //remove room from admin's Room List - for admin
      await UserService.UserRemoveRoomByID(r.adminID, r._id)
      //remove room from other user's Room List - for admin
      await UserService.UserRemoveRoomByID(r.otherUserID, r._id)
      //remove room from other Rooms List
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
              {otherUser && <h4>{otherUser.username} - {room.roomName}</h4>}
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
