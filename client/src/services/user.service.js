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

const createRoom = async (adminID, otherUserID, roomName) => {
  try {
    const res = await axios.post(DATABASE_URL + "room/create", {adminID, otherUserID, roomName},
    {
        headers: {"Authorization" : authHeader(), "Content-Type": "application/json"}
    })
    const data = res.data
    await updateRoomsInUserByID(adminID, data._id)
    await updateRoomsInUserByID(otherUserID, data._id)
    return data
  } catch (err) {
    console.log({err:err})
  }
};

//updates room base on inputs
const updateRoomsInUserByID = async (userID, RoomID) => {
  try {
    const user = await getUserInfoByID(userID)
    const delegatedRoomID = [...user.delegatedRoomID, RoomID]
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

//input room ID and it will be removed from delegatedRoomID Array
const UserRemoveRoomByID = async (userID, RoomID) => {
  try {
    const user = await getUserInfoByID(userID)
    console.log(user.delegatedRoomID)
    const delegatedRoomID = user.delegatedRoomID.filter(rID => rID !== RoomID)
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
  updateRoomsInUserByID,
  UserRemoveRoomByID
};

export default exportedObject;