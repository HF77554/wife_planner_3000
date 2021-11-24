import React, {useEffect, useState} from 'react'

import {ListGroup, Row, Col} from 'react-bootstrap'

import UserService from "../../../services/user.service";

function RoomRequestForm({room}) {
    const [employee, employeeTask] = useState()

    useEffect(() => {
        const getEmployeeInfo = async () => {
        const employee = await UserService.getUserInfoByID(room.otherUserID);
        if (employee) {
            employeeTask(employee)
        }
        }
        getEmployeeInfo()
    }, [room]);

    return (
        <div>
            <ListGroup.Item className='text-center mt-1 h3' action>
                <Row>
                    <Col sm={10}>
                        {employee && <h4>{employee.username} wants to start a room!</h4>}
                    </Col>
                    <Col sm={2}>
                        <div>X</div>
                    </Col>
                </Row>
            </ListGroup.Item>
        </div>
    )
}

export default RoomRequestForm
