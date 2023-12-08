import mongoose from "mongoose";
import { MONGO_URL } from "../contants/global.js";

// set strict mode
mongoose.set("strictQuery", true);

export const connect = async () => {
  try {
    await mongoose.connect(MONGO_URL);
    console.log("Connected db");
  } catch (error) {
    console.log("Connect failed" + error);
  }
};
