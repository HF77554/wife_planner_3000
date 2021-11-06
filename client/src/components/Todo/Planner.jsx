import React from 'react'
import RoleSelection from './RoleSelection'

function Planner({userAuth}) {
    return (
        <div className="jumbotron"> 
            {userAuth ? 
            <RoleSelection />
            :
            <div>
                <h2>Planner</h2>
                <p>Please Login to access planner interface</p>
            </div>}
        </div>
    )
}

export default Planner
