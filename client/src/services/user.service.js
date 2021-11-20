import axios from "axios";
import authHeader from "./auth-header";

const DATABASE_URL = "http://localhost:4000/";

const getUserInfo = async () => {
  try {
    const res = await axios.get(DATABASE_URL + "users", { headers: {"Authorization" : authHeader()} })
    const data = res.data
    return data
  } catch (err) {
    console.log({err:err})
  }
};

const getUserInfoByID = async (userID) => {
  try {
    const res = await axios.get(DATABASE_URL + "users/" + userID, { headers: {"Authorization" : authHeader()} })
    const data = res.data
    return data
  } catch (err) {
    console.log({err:err})
  }
};

const getUserInfoByEmail = async (userEmail) => {
  try {
    const res = await axios.get(DATABASE_URL + "find/" + userEmail, { headers: {"Authorization" : authHeader()} })
    const data = res.data
    return data
  } catch (err) {
    console.log({err:err})
  }
};

const getRoomInfoByID = async (roomID) => {
  try {
    const res = await axios.get(DATABASE_URL + "room/" + roomID, { headers: {"Authorization" : authHeader()} })
    const data = res.data
    return data
  } catch (err) {
    console.log({err:err})
  }
};

const createRoom = async (adminID, otherUserID) => {
  try {
    const res = await axios.post(DATABASE_URL + "room/create", {adminID, otherUserID},
    {
        headers: {"Authorization" : authHeader(), "Content-Type": "application/json"}
    })
    const data = res.data
    await addRoomIDtoUserByID(adminID, data._id)
    await addRoomIDtoUserByID(otherUserID, data._id)
    return data
  } catch (err) {
    console.log({err:err})
  }
};

const addRoomIDtoUserByID = async (userID, delegatedRoomID) => {
  try {
    const res = await axios.patch(DATABASE_URL + "users/" + userID, {delegatedRoomID},
    {
        headers: {"Authorization" : authHeader(), "Content-Type": "application/json"}
    })
    const data = res.data
    return data
  } catch (err) {
    console.log({err:err})
  }
}


const exportedObject = {
  getUserInfo,
  getRoomInfoByID,
  getUserInfoByID,
  getUserInfoByEmail,
  createRoom,
  addRoomIDtoUserByID
};

export default exportedObject;