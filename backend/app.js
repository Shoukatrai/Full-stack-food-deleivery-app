import express from "express";
import dotenv from "dotenv";
import cors from "cors"
import authRouter from "./routes/auth.js";
import resRouter from "./routes/restaurant.js";
import { dbConnection } from "./config/db.js";
const app = express();
dotenv.config();

app.use(express.json()) //body parser
app.use(express.urlencoded({ extended: true }))

app.use(cors({
  origin: "http://localhost:5000", // replace with your frontend URL
  credentials: true
}));

app.use("/api/auth", authRouter)
app.use("/api/restaurant", resRouter)

app.get("/" , (req , res)=>res.send("SERVER UP"))

dbConnection()

app.listen(process.env.PORT, () => console.log("SERVER STARTED!"));
