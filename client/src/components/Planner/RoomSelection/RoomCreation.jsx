import React from 'react'
import {Container, Col} from 'react-bootstrap'

import RoomCreationForm from './RoomCreationForm'
import RoomRequestAcceptance from './RoomRequestAcceptance'

function RoomCreation({onUser, rooms, userChangesMade, roomChangesMade}) {
    
    return (
        <Container>
            <Col className='m-3'>
                <h3>Create New Room</h3>
                <RoomCreationForm onUser={onUser} userChangesMade={userChangesMade}/>
            </Col>
            <Col className='m-3'>
                <h3>Request Acceptance</h3>
                <RoomRequestAcceptance onUser={onUser} rooms={rooms} roomChangesMade={roomChangesMade}/>
            </Col>
        </Container>
    )
}

export default RoomCreation
