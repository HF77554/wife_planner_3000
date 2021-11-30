import React from 'react'
import {Container, ListGroup} from 'react-bootstrap'
import RoomRequestForm from './RoomRequestForm'

function RoomRequestAcceptance({onUser, rooms, roomChangesMade}) {
    return (
        <Container>
            <ListGroup>
                    {rooms && rooms.map((room) => <RoomRequestForm key={room._id} room={room} onUser={onUser} roomChangesMade={roomChangesMade}/>)}
            </ListGroup>
        </Container>
    )
}

export default RoomRequestAcceptance
