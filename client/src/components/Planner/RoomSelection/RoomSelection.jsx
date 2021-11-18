import React, { useState, useEffect } from 'react'
import {Container, Row, Col} from 'react-bootstrap'

import UserService from "../../../services/user.service";

import RoomCreation from './RoomCreation'
import Rooms from './Rooms'

function RoomSelection({onUser , onRoomSelection}) {
    const [userRooms, userRoomsInfo] = useState()

    useEffect(() => {
        const getRoomsInfo = async (userRoomID) => {
            const roomsInfo = await Promise.all(userRoomID.map(rID => UserService.getRoomInfoByID(rID)))
            userRoomsInfo(roomsInfo)
        }
        
        //get room Json info
        if (onUser) {
            getRoomsInfo(onUser.delegatedRoomID)
        }

      }, [onUser]);

    return (
        <Container className='m-4'>
            {userRooms &&
                <Row>
                    <Col>
                        <Rooms rooms={userRooms} onRoomSelection={onRoomSelection} />
                    </Col>
                    <Col>
                        <RoomCreation />
                    </Col>
                </Row>
            }
        </Container>
    )
}

export default RoomSelection