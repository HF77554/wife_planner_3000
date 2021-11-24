import axios from "axios";
import authHeader from "./auth-header";

const DATABASE_URL = "http://localhost:4000/";

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

    const exportedObject = {
        deleteRoom,
        getAllRooms
    };
  
export default exportedObject;