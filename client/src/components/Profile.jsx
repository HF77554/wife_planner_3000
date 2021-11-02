import React from "react";
import {useState, useEffect} from 'react'
import UserService from "../services/user.service";

const Profile = () => {
  const [userInfo, userInfoTask] = useState();

  useEffect(async () => {
    const user = await UserService.getUserInfo();
    if (user) {
      userInfoTask(user)
    }
    }, []);


  return (
    <div className="container">
      <header className="jumbotron">  
        <h2>Profile</h2>  
        {!userInfo ? 
          <p>Please Login for access to user information...</p>
          : 
          <div>
            <h3>{userInfo.username}</h3>
            <h3>{userInfo.subscribeDate}</h3>
          </div>
        }     
      </header>
    </div>
  );
};

export default Profile;