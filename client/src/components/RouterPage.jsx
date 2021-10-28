import React from 'react'
import {useState, useEffect} from 'react'
import { Route } from "react-router-dom";
import NavBar from './NavBar'

import AuthService from "../services/auth.service";

import Home from "./Home";
import Login from "./Login";
import Profile from "./Profile";

const RouterPage = () => {
    const [currentUser, setCurrentUser] = useState(undefined);

    useEffect(() => {
        const user = AuthService.getCurrentUser();

        if (user) {
            setCurrentUser(user);
        }
    }, []);


    const logOut = () => {
        AuthService.logout();
    };

    return (
        <div>
            <NavBar />
            <div className="container mt-3">
                <Route exact path={["/", "/home"]} component={Home} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/profile" render={() => <Profile currentUser={currentUser} />} />
            </div>
        </div>
    )
}

export default RouterPage
