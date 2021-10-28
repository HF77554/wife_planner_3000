import React from "react";
import {useState, useEffect} from 'react'
import UserService from "../services/user.service";

const Profile = () => {
  //const [userInfo, userInfoTask] = useState();
  const userInfo = UserService.getUserInfo();

  /*useEffect(async () => {
    const user = await UserService.getUserInfo();

    if (user) {
        userInfoTask(user);
        console.log(user)
    }
    }, []);*/


  return (
    <div className="container">
      <header className="jumbotron">
        <h3>
          <strong>{userInfo && userInfo.username}</strong>
        </h3>
      </header>
    </div>
  );
};

export default Profile;