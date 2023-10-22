const mongoose = require('mongoose')

// To connect with your mongoDB database
// Connecting to database
const dbinit = async () => {
    try {
      mongoose.set("strictQuery", false);
      mongoose.connect(process.env.mongoconnect,
          {
            dbName: "DigitalSalt",
            useNewUrlParser: true,
            useUnifiedTopology: true,
          }
      );
      console.log("Mongo connected");
    } catch (error) {
      console.log(error);
      process.exit();
    }
  };


  module.exports = {
    dbinit
}