import React, {useState, useEffect} from 'react'
import {ListGroup, Button, Row, Col, ButtonGroup, ToggleButton} from 'react-bootstrap'
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
      const admin = await UserService.UserRemoveRoomByID(r.adminID, r._id)
      //remove room from other user's Room List - for admin
      const nonAdmin = await UserService.UserRemoveRoomByID(r.otherUserID, r._id)
      //remove room from other Rooms List
      const roomMessage = await RoomService.deleteRoom(r._id)

      if(admin && nonAdmin && roomMessage) {
        userChangesMade()
      }

    } catch (err) {
      console.log({err:err.message})
    }
  }


  return (
    <div>
      {!room.otherUserAcceptance ? "":
        <ListGroup.Item className='m-3'>
          <Row>

            <Col className='text-center h5 mt-3'>
              {otherUser && <h4>{otherUser.username} - {room.roomName}</h4>}
            </Col>

            <Col>
              <ButtonGroup className="m-2">
                <ToggleButton variant="outline-primary" size="lg" onClick={roomSelectionHandler}>
                  Check Room
                </ToggleButton>
                <ToggleButton variant="outline-danger" size="lg" onClick={() => roomDeletionHandler(room)}>
                  Delete
                </ToggleButton>
              </ButtonGroup>
            </Col>

          </Row>
        </ListGroup.Item>
      }
    </div>
  )
}

export default Room
