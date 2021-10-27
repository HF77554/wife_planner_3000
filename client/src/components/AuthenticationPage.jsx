import React from 'react'
import {useState} from 'react'
import SignIn from './SignIn'
import UserRelationshipRole from './UserRelationshipRole'
import NavBar from './NavBar'

const AuthenticationPage = () => {
    const [authenticationToken, authenticationTokenTask] = useState()
    const [user, userTask] = useState()

    const signInHandler = async (user) => {
        //alert(user.username)
        const url = 'http://localhost:4000/users/login'
        try {
            const rawResponse = await fetch(url,
                {
                method: 'POST',
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "username": "Helga",
                    "userpassword": "Helga"
                })
              })
            const content = await rawResponse.json();
            console.log(content)
        } catch (err) {
            console.log({err:err})
        }
    };

    return (
        <div>
            <NavBar user={user}/>
            {authenticationToken ? <UserRelationshipRole /> : <SignIn onSignIn={signInHandler} />}
        </div>
    )
}

export default AuthenticationPage
