import React, {useEffect, useState} from 'react'

import {ListGroup, Row, Col, Button} from 'react-bootstrap'

import UserService from "../../../services/user.service";

function RoomRequestForm({onUser, room}) {
    const [roomNonAdminInfo, roomNonAdminInfoTask] = useState()
    const [roomAdminInfo, roomAdminInfoTask] = useState()
    const [userIsAdmin, userIsAdminTask] = useState(true)
    const [formColor, formColorTask] = useState('bg-info text-white')

    useEffect(() => {
        //accepts room info and gets both users information based on ID
        const getNonAdminInfo = async () => {

            const roomNonAdminInfo = await UserService.getUserInfoByID(room.otherUserID);
            const roomAdminInfo = await UserService.getUserInfoByID(room.otherUserID);

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

        getNonAdminInfo()
    }, [room, onUser]);

    const handleDeletion = () => {
        console.log('Delete')
    }

    const handleAcceptance = () => {
        console.log('Accepted')
    }

    return (
        <div>
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
                        {!userIsAdmin ? <Button variant="outline-primary" size="sm" onClick={() => handleAcceptance()}>Y</Button> : ''}
                    </Col>
                    <Col sm={2}>
                        <Button variant="outline-danger" size="sm" onClick={() => handleDeletion()}>X</Button>
                    </Col>
                </Row>
                }
            </ListGroup.Item>
        </div>
    )
}

export default RoomRequestForm
