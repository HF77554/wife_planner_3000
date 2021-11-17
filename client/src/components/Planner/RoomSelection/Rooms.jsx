import React from 'react'
import Room from './Room'

function Rooms({ roomsID, onRoomSelection}) {
    
    return (
        <div>
            {roomsID && roomsID.map((rID) => (
                <Room
                key={rID}
                roomID={rID}
                onRoomSelection={onRoomSelection}
                />
            ))}
        </div>
    )
}

export default Rooms
