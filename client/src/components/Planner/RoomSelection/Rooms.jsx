import React from 'react'
import Room from './Room'
import {Container, Row, ListGroup} from 'react-bootstrap'

function Rooms({ rooms, onRoomSelection, userChangesMade}) {
    
    return (
        <Container>
            <h3>Select room from list:</h3>
            <Row xs={8}>
                <ListGroup>
                    {rooms && rooms.map((room) => (
                        <Room
                            key={room._id}
                            room={room}
                            onRoomSelection={onRoomSelection}
                            userChangesMade={userChangesMade}
                        />
                    ))}
                </ListGroup>
            </Row>
        </Container>
    )
}

export default Rooms
