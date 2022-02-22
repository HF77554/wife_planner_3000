import axios from "axios";
import authHeader from "./auth-header";

const DATABASE_URL = "http://wifeplanner3000.herokuapp.com/";

const getAllRooms = async () => {
    try {
      const res = await axios.get(DATABASE_URL + "room", { headers: {"Authorization" : authHeader()} })
      const data = res.data
      return data
    } catch (err) {
      console.log({err:err})
    }
  };

//deletes room based on ID
const deleteRoom = async (roomID) => {
    try {
        const res = await axios.delete(DATABASE_URL +"room/"+roomID,
        {
            headers: {"Authorization" : authHeader()}
        })
        const data = res.data
        return data
    } catch (err) {
        console.log({err:err})
    }
};

//updates room based on ID
const updateRoomsByID = async (roomObj) => {
    try{
        const res = await axios.patch(DATABASE_URL + "room/" + roomObj._id, roomObj,
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
        deleteRoom,
        getAllRooms,
        updateRoomsByID
    };
  
export default exportedObject;