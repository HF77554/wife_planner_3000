import React from 'react'
import {Container, ListGroup} from 'react-bootstrap'
import RoomRequestForm from './RoomRequestForm'

function RoomRequestAcceptance({rooms}) {
    return (
        <Container>
            <ListGroup>
                    {rooms && rooms.map((room) => <RoomRequestForm key={room._id} room={room} />)}
            </ListGroup>
        </Container>
    )
}

export default RoomRequestAcceptance
