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
        <h1>Profile</h1>  
        {!userInfo ? 'Please Login' : 
          <div>
            <h2>{userInfo.username}</h2>
            <h3>{userInfo.subscribeDate}</h3>
          </div>
        }     
      </header>
    </div>
  );
};

export default Profile;