import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import morgan from "morgan";
import { PORT } from "./contants/global.js";
import { connect } from "./config/connectDB.js";
import { initWebRouter } from "./routes/index.route.js";
const app = express();

app.use(bodyParser.json());
app.use(morgan("dev"));
initWebRouter(app);
app.get("/api/v1/test", (req, res) => {
  return res.status(200).json({ test: "ok" });
});
mongoose.connect;
app.listen(PORT, async () => {
  try {
    await connect();
    console.log(`App is running at  http://localhost:${process.env.PORT}.`);
  } catch (error) {
    console.log(error.message);
  }
});
