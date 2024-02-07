import mongoose from "mongoose";

export const connectToDB = async () => {
    try {
      if (mongoose.connection.readyState === 0) {
        await mongoose.connect(process.env.MONG_URL || "");
        console.log("Connected to DB");
      }
      console.log("Connected to MongoDB");
    } catch (error) {
      console.error(error);
    }
  };