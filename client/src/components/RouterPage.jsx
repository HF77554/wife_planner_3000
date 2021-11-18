import React from 'react'
import {useState, useEffect} from 'react'
import { Route, useHistory } from "react-router-dom";
import NavBar from './NavBar'

//Auth functions
import AuthService from "../services/auth.service";

//components
import Home from "./Home";
import Login from "./Login";
import Profile from "./Profile";
import Planner from "./Planner/Planner";
import ContactUs from "./ContactUs";
import SignUp from "./SignUp";

const RouterPage = () => {
    let history = useHistory();
    const [userVerification, userVerificationTask] = useState(false);

    useEffect(() => {
        const verifiedUser = AuthService.getCurrentUser();
        if (verifiedUser) {
            userVerificationTask(true);
        } else {
            userVerificationTask(false)
        }
    }, []);

    const LogIn = () => {
        const verifiedUser = AuthService.getCurrentUser();
        if (verifiedUser) {
            userVerificationTask(true);
        }
    };

    const logOut = () => {
        AuthService.logout();
        userVerificationTask(false)
        history.push("/home")
    };

    return (
        <div>
            {userVerification && 
                <div>
                    <NavBar fixed="top" onVerifiedUser={userVerification} onLogOut={() => logOut()}/>
                    <div className="container mt-3">
                        <Route exact path={["/", "/home"]} component={Home} />
                        <Route exact path="/login" component={() => (<Login onLogin={() => LogIn()} />)}/>
                        <Route exact path="/profile" component={Profile}/>
                        <Route exact path="/planner" component={() => (<Planner onVerifiedUser={userVerification} />)}/>
                        <Route exact path="/contactUs" component={ContactUs} />
                        <Route exact path="/signup" component={SignUp} />
                    </div>
                </div>
            }
        </div>
    )
}

export default RouterPage