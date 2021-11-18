import React from 'react'
import Room from './Room'
import {Container, Col, ListGroup} from 'react-bootstrap'

function Rooms({ roomsID, onRoomSelection}) {
    
    return (
        <Container>
            <h3>Select room from list:</h3>
            <Col xs={5}>
                <ListGroup>
                    {roomsID && roomsID.map((rID) => (
                        <Room
                        key={rID}
                        roomID={rID}
                        onRoomSelection={onRoomSelection}
                        />
                    ))}
                </ListGroup>
            </Col>
        </Container>
    )
}

export default Rooms
