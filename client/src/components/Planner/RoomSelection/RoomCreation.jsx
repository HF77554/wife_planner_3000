import React from 'react'
import {Container, Col} from 'react-bootstrap'

import RoomCreationForm from './RoomCreationForm'
import RoomRequestAcceptance from './RoomRequestAcceptance'

function RoomCreation({onUser, rooms, onChangesMade}) {
    return (
        <Container>
            <Col className='m-3'>
                <h3>Create New Room</h3>
                <RoomCreationForm onUser={onUser} onChangesMade={onChangesMade}/>
            </Col>
            <Col className='m-3'>
                <h3>Request Acceptance</h3>
                <RoomRequestAcceptance rooms={rooms}/>
            </Col>
        </Container>
    )
}

export default RoomCreation
