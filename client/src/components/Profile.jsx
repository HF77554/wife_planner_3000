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

  const dateConverter = (date) => {
    const parseDate = new Date(date).toString();
    return parseDate
  }


  return (
    <div className="container">
      <header className="jumbotron">  
        <h2>Profile</h2>  
        {!userInfo ?
          <p>Please Login for access to user information...</p>
          : 
          <div>
            <h4>{userInfo.username}</h4>
            <h4>{userInfo.email}</h4>
            <h5>{dateConverter(userInfo.subscribeDate)}</h5>
          </div>
        }     
      </header>
    </div>
  );
};

export default Profile;