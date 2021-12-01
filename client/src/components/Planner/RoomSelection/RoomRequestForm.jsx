import React, {useEffect, useState} from 'react'

import {ListGroup, Row, Col, Button} from 'react-bootstrap'

import UserService from "../../../services/user.service";
import RoomService from "../../../services/room.service";

function RoomRequestForm({onUser, userChangesMade, room, roomChangesMade}) {
    const [roomNonAdminInfo, roomNonAdminInfoTask] = useState()
    const [roomAdminInfo, roomAdminInfoTask] = useState()
    const [userIsAdmin, userIsAdminTask] = useState(true)
    const [formColor, formColorTask] = useState('bg-info text-white')

    useEffect(() => {
        //accepts room info and gets both users information based on ID
        const getRoomInfo = async () => {

            const roomNonAdminInfo = await UserService.getUserInfoByID(room.otherUserID);
            const roomAdminInfo = await UserService.getUserInfoByID(room.adminID);

            if (roomNonAdminInfo && roomAdminInfo) {
                roomNonAdminInfoTask(roomNonAdminInfo)
                roomAdminInfoTask(roomAdminInfo)

                //check if current user is Room admin or nonadmin
                if (roomNonAdminInfo._id === onUser._id) {
                    userIsAdminTask(false)
                    formColorTask('.bg-warning text-dark')
                } else {
                    userIsAdminTask(true)
                    formColorTask('bg-info text-white')
                }
            }
        }

        if (room && onUser) {
            getRoomInfo()
        }
    }, [room, onUser]);

    //removes room
    const handleDeletion = async () => {        
        try {
            //remove room from admin's Room List - for admin
            const admin = await UserService.UserRemoveRoomByID(room.adminID, room._id)
            //remove room from other user's Room List - for admin
            const nonAdmin = await UserService.UserRemoveRoomByID(room.otherUserID, room._id)
            //remove room from other Rooms List
            const roomMessage = await RoomService.deleteRoom(room._id)
      
            if(admin && nonAdmin && roomMessage) {
                userChangesMade()
            }
      
        } catch (err) {
            console.log({err:err.message})
        }
    }

    //changes otherUserAcceptance in database to true
    const handleAcceptance = async (room) => {
        const otherUserAcceptance = true
        const roomObj = {...room, otherUserAcceptance }
        try{
            if (!roomObj) return
            //updates room info, returns updated info
            const updatedRoom = await RoomService.updateRoomsByID(roomObj)
            //once return signals for room updating
            if (updatedRoom){
                roomChangesMade()
            }
        } catch (err) {
            console.log({err:err})
        }
    }

    return (
        <div>
            {!room.otherUserAcceptance &&
                <ListGroup.Item className={`text-center m-1 ${formColor}`}>
                    {roomNonAdminInfo &&
                    <Row>
                        <Col sm={9}>
                            <h5>
                                {userIsAdmin ? `waiting for ${roomNonAdminInfo.username}'s response`
                                :
                                `${roomAdminInfo.username} wants to create a room!`}
                            </h5>
                        </Col>
                        <Col sm={1}>
                            {!userIsAdmin ? <Button variant="outline-primary" size="sm" onClick={() => handleAcceptance(room)}>Y</Button> : ''}
                        </Col>
                        <Col sm={2}>
                            <Button variant="outline-danger" size="sm" onClick={() => handleDeletion()}>X</Button>
                        </Col>
                    </Row>
                    }
                </ListGroup.Item>
            }
        </div>
    )
}

export default RoomRequestForm
