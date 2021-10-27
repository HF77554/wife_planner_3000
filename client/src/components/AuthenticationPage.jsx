import React from 'react'
import {useState} from 'react'
import SignIn from './SignIn'
import UserRelationshipRole from './UserRelationshipRole'
import NavBar from './NavBar'

const AuthenticationPage = () => {
    const [authenticationToken, authenticationTokenTask] = useState()
    const [user, userTask] = useState()

    const signInHandler = (user) => {
        userTask(user)
    };

    return (
        <div>
            <NavBar user={user}/>
            {authenticationToken ? <UserRelationshipRole /> : <SignIn onSignIn={signInHandler} />}
        </div>
    )
}

export default AuthenticationPage
