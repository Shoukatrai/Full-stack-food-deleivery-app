import express from "express";
import dotenv from "dotenv";
import cors from "cors"
import authRouter from "./routes/auth.js";
import resRouter from "./routes/restaurant.js";
import { dbConnection } from "./config/db.js";
import imageRouter from "./routes/uploadImage.js";
import { cloudinaryConfig } from "./config/cloudinary.js";
const app = express();
dotenv.config();

app.use(cors());
app.use(express.json()) //body parser
app.use(express.urlencoded({ extended: true }))


app.use("/api/auth", authRouter)
app.use("/api/restaurant", resRouter)
app.use("/api/image", imageRouter)

app.get("/" , (req , res)=>res.send("SERVER UP"))

dbConnection()

app.listen(process.env.PORT, () => console.log("SERVER STARTED!"));
