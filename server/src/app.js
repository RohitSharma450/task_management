import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import testRouter from "./routers/test.router.js";
dotenv.config();
connectDB();

const app = express();

app.use(express.json());
app.use("/test", testRouter);

app.get("/", (req, res) => {
  res.json({ message: "System is running!" });
});

export default app;
