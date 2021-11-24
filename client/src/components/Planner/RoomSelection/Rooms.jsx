import React from 'react'
import Room from './Room'
import {Container, Col, Row, ListGroup} from 'react-bootstrap'

function Rooms({ rooms, onRoomSelection, onChangesMade}) {
    
    return (
        <Container>
            <h3>Select room from list:</h3>
                <ListGroup>
                    {rooms && rooms.map((room) => (
                        <Room
                            key={room._id}
                            room={room}
                            onRoomSelection={onRoomSelection}
                            onChangesMade={onChangesMade}
                        />
                    ))}
                </ListGroup>
        </Container>
    )
}

export default Rooms
