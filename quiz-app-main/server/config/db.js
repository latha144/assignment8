const mongoose = require("mongoose");

const conn = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected...");
  } catch (err) {
    console.log(err.message);
    process.exit(1);
  }
};

module.exports = conn;
