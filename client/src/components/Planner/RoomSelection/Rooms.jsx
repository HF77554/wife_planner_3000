import React from 'react'
import Room from './Room'
import {Container, Row, ListGroup} from 'react-bootstrap'

function Rooms({ rooms, onRoomSelection, userChangesMade}) {
    
    return (
        <Container className='m-1'>
            <h3>Select Room From List:</h3>
            {rooms && rooms.map((room) => (
                <Room
                    key={room._id}
                    room={room}
                    onRoomSelection={onRoomSelection}
                    userChangesMade={userChangesMade}
                />
            ))}
        </Container>
    )
}

export default Rooms
