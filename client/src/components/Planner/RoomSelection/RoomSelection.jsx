import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'

import RoomCreation from './RoomCreation'


function RoomSelection() {
    return (
        <Container className='m-4'>
            <Row>
                <Col>
                    <h3>Select room from list:</h3>
                    List of elements
                </Col>
                <Col>
                    <RoomCreation />
                </Col>
            </Row>
        </Container>
    )
}

export default RoomSelection
