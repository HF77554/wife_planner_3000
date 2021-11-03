import React from 'react'
import {useState, useEffect} from 'react'
import { Route, useHistory } from "react-router-dom";
import NavBar from './NavBar'

import AuthService from "../services/auth.service";

import Home from "./Home";
import Login from "./Login";
import Profile from "./Profile";

const RouterPage = () => {
    let history = useHistory();
    const [userVerification, userVerificationTask] = useState(true);

    useEffect(() => {
        const verifiedUser = AuthService.getCurrentUser();
        if (verifiedUser) {
            userVerificationTask(true);
        }
    }, []);


    const logOut = () => {
        AuthService.logout();
        userVerificationTask(false)
        history.push("/home")
        window.location.reload()
    };

    return (
        <div>
            <NavBar fixed="top" onVerifiedUser={userVerification} onLogOut={() => logOut()}/>
            <div className="container mt-3">
                <Route exact path={["/", "/home"]} component={Home} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/profile" component={Profile} />
            </div>
        </div>
    )
}

export default RouterPage
