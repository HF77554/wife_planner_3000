import React, { useState, useEffect } from 'react'
import {Container, Row, Col} from 'react-bootstrap'

import UserService from "../../../services/user.service";

import RoomCreation from './RoomCreation'
import Rooms from './Rooms'

function RoomSelection({onUser , onRoomSelection, userChangesMade}) {
    const [userRooms, userRoomsInfo] = useState()
    const [roomChangesMade, roomChangesMadeTask] = useState(false)
    

    //room info loading, set up prop for reset on changes
    useEffect(() => {
        const getRoomsInfo = async (userRoomID) => {
            const roomsInfo = await Promise.all(userRoomID.map(rID => UserService.getRoomInfoByID(rID)))
            userRoomsInfo(roomsInfo)
        }
        
        //get room Json info
        if (onUser) {
            getRoomsInfo(onUser.delegatedRoomID)
            
        }

    }, [onUser,roomChangesMade]);

    return (
        <Container className='m-4'>
            {userRooms &&
                <Row>
                    <Col>
                        <Rooms rooms={userRooms} onRoomSelection={onRoomSelection} userChangesMade={userChangesMade}/>
                    </Col>
                    <Col>
                        <RoomCreation onUser={onUser} rooms={userRooms} userChangesMade={userChangesMade} roomChangesMade={() => roomChangesMadeTask(!roomChangesMade)}/>
                    </Col>
                </Row>
            }
        </Container>
    )
}

export default RoomSelection