import React, {useState} from 'react'
import {ButtonGroup, Button} from 'react-bootstrap'

function RoleSelection() {
    const [selectedUser, selecterUserTask] = useState('')

    return (
        <div className='text-center'>
            <h2>User Selection</h2>
            <ButtonGroup size="lg" ClassName="strong"> 
                <Button variant={selectedUser==='WIFE'?"primary":"secondary"} onClick={()=>selecterUserTask('WIFE')}>WIFE</Button>
                <Button variant={selectedUser==='HUSBAND'?"primary":"secondary"} onClick={()=>selecterUserTask('HUSBAND')}>HUSBAND</Button>
            </ButtonGroup>
        </div>
    )
}

export default RoleSelection
