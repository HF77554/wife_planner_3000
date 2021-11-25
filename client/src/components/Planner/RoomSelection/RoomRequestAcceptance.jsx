import React from 'react'
import {Container, ListGroup} from 'react-bootstrap'
import RoomRequestForm from './RoomRequestForm'

function RoomRequestAcceptance({onUser, rooms}) {
    return (
        <Container>
            <ListGroup>
                    {rooms && rooms.map((room) => <RoomRequestForm key={room._id} room={room} onUser={onUser} />)}
            </ListGroup>
        </Container>
    )
}

export default RoomRequestAcceptance
