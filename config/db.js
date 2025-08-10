const mongoose = require("mongoose");

const dbConnect = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.error("Error in database connection:", error.message);
    process.exit(1); // Exit the process with failure
  }
};

module.exports = dbConnect;
