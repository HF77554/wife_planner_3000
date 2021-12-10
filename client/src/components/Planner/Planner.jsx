import React, {useState, useEffect} from 'react'
import RoomSelection from './RoomSelection/RoomSelection'
import RoomDisplayHub from './RoomDisplay/RoomDisplayHub'

import UserService from "../../services/user.service";

import {Button, Container, Row, Col} from 'react-bootstrap'

function Planner({onVerifiedUser}) {
    const [userInfo, userInfoTask] = useState()
    const [roomSelected, roomSelectedTask] = useState('')
    const [userChangesMade, userChangesMadeTask] = useState(false)
    
    //if user has been verified(logged in) get user information to pass as prop, changes based on change Prop
    useEffect(() => {
        const getUser = async () => {
            if (!onVerifiedUser) return;
            try {
                const user = await UserService.getUserInfo();
                if (user) {
                    userInfoTask(user)
                }
            } catch (err) {
                console.log({ err: err.message })
            }
        } 
        
        getUser()
    }, [onVerifiedUser, userChangesMade]);

    //updates roomSelected prop with Object having the selected room information
    const roomSelectionHandler = (roomInfo) => {
        roomSelectedTask(roomInfo)
    }

    //updates user based on PATCH changes
    /*const userUpdatedHandler = (roomInfo) => {
        roomSelectedTask(roomInfo)
    }*/

    return (
        <div>
            { userInfo &&
                <div className="jumbotron">
                    <h2>Planner:</h2>
                    {roomSelected ?
                        <div>
                            <Container className='text-center mt-3'>
                                <Row>
                                    <Col className='text-decoration-underline'>
                                        <h3>{roomSelected.roomName}</h3>
                                    </Col>
                                    <Col>
                                        <Button className='mb-3' size="lg" onClick={() => roomSelectedTask('')}>Return to Room Selection</Button>
                                    </Col>
                                </Row>
                            </Container>
                            <RoomDisplayHub onUser={userInfo} room={roomSelected} />
                        </div>
                    :
                        <div>
                            {userInfo && <RoomSelection onUser={userInfo} onRoomSelection={roomSelectionHandler} userChangesMade={() => userChangesMadeTask(!userChangesMade)}/>}
                        </div>
                    }
                </div>
            }
        </div>    
    )
}

export default Planner
