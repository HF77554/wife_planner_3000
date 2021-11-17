import React from 'react'
import Room from './Room'

function Rooms({ roomsID }) {
    
    return (
        <div>
            {roomsID && roomsID.map((rID) => (
                <Room
                key={rID}
                roomID={rID}
                />
            ))}
        </div>
    )
}

export default Rooms
