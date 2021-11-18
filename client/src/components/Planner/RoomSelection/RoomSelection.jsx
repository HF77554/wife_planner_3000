import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'

import RoomCreation from './RoomCreation'
import Rooms from './Rooms'

function RoomSelection({onUser , onRoomSelection}) {

    return (
        <Container className='m-4'>
            <Row>
                <Col>
                    {onUser && <Rooms roomsID={onUser.delegatedRoomID} onRoomSelection={onRoomSelection} />}
                </Col>
                <Col>
                    <RoomCreation />
                </Col>
            </Row>
        </Container>
    )
}

export default RoomSelection