const mongoose = require("mongoose");
const DATABASE_URL = process.env.DATABASE_URL

module.exports = () =>
  new Promise(async (resolve, reject) => {
    try {
      const connectPromise = mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser: true,
      });

      const db = mongoose.connection;

      db.on("error", (error) => {
        console.error(error);
        reject(error);
      });

      db.once("open", () => {
        console.log("Connected to Database");
        resolve();
      });

      // Close DB connection on manual process termination
      process.on("SIGTERM", () => {
        console.log("Closing db connection");
        db.close(() => {
          console.log("Closed db connection");
        });
      });

      // await promise in order to be able to catch any errors within this try catch
      await connectPromise;
    } catch (error) {
      console.error("Failed to attempt to connect to database", error);
      throw error;
    }
  });
