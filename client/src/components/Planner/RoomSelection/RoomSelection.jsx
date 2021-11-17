import React, { useState, useEffect} from 'react'
import {Container, Row, Col, ListGroup} from 'react-bootstrap'

import RoomCreation from './RoomCreation'
import Rooms from './Rooms'

function RoomSelection({onUser}) {
    return (
        <Container className='m-4'>
            <Row>
                <Col>
                    <h3>Select room from list:</h3>
                    {onUser && <Rooms roomsID={onUser.delegatedRoomID} />}
                </Col>
                <Col>
                    <RoomCreation />
                </Col>
            </Row>
        </Container>
    )
}

export default RoomSelection

//<lu>{onUser.delegatedRoomID.map(rID => <li>{rID}</li>)}</lu>