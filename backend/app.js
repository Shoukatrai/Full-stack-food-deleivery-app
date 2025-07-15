import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { userModel } from "./models/userSchema.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { checkAuth } from "./middlewares/auth.js";
import { restaurantModel } from "./models/restaurantSchema.js";
const app = express();
dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//SIGNUP
app.post("/signup", async (req, res) => {
  try {
    const body = req.body;
    // CHECK EMAIL
    const isExists = await userModel.findOne({ email: body.email });
    if (isExists) {
      return res.json({
        message: "Email Address Already exists",
        status: false,
        data: null,
      });
    }

    //PASSWORD HASH
    const hashPass = await bcrypt.hash(body.password, 10);
    // SAVE OBJ
    const saveObj = { ...body, password: hashPass };

    const response = await userModel.create(saveObj);

    //SUCCESS RESPONSE SEND
    res.json({
      message: "Signup Successful!",
      status: true,
      data: response,
    });
  } catch (error) {
    res.json({
      message: error.message || "Something went wrong",
      status: false,
      data: null,
    });
  }
});

app.post("/login", async (req, res) => {
  const body = req.body;
  try {
    //CHECK USER EXIST OR NOT
    const user = await userModel.findOne({ email: body.email });
    console.log("user", user);
    if (!user) {
      return res.json({
        message: "User not found",
        status: false,
        data: null,
      });
    }

    //PASS CHECK
    const passCheck = await bcrypt.compare(body.password, user.password);
    console.log("passCheck", passCheck);
    if (!passCheck) {
      return res.json({
        message: "Email or password is incorrect!",
        status: false,
        data: null,
      });
    }

    //CREATE TOEKN
    const token = jwt.sign({ id: user._id }, process.env.JWT_PRIVATE_KEY);

    // SUCCESS RES SEND
    res.json({
      message: "Login Successful!",
      status: true,
      data: user,
      token,
    });
  } catch (error) {
    res.json({
      message: error.message || "Something went wrong",
      status: false,
      data: null,
    });
  }
});

// app.post("/create" ,checkAuth ,(req , res , next)=>{
//     const body = req.body
//     console.log("req" , req)
//     res.json({
//       message: "Create Successful!",
//       status: true,
//       data: null
//     });
// })

//CREATE RESTAURANT
app.post("/create-restaurant", checkAuth, async (req, res) => {
  try {
    const body = req.body;

    const resObj = {
      ...body,
      createBy: req.user.id,
    };
    const response = await restaurantModel.create(resObj);
    console.log("RESTAURANT RESPONSE", response);
    // SUCCESS RES SEND
    res.json({
      message: "Restaurant Created successfully!",
      status: true,
      data: response
    });
  } catch (error) {
    res.json({
      message: error.message || "Something went wrong",
      status: false,
      data: null,
    });
  }
});

//GET RES
app.get("/vendor-restaurant", checkAuth, async (req, res) => {
  try {
    const body = req.body;
    const response = await restaurantModel.find({createBy : req.user.id , isDeleted : false} )
    console.log("RESTAURANT RESPONSE", response);
    // SUCCESS RES SEND
    res.json({
      message: "VENDOR",
      status: true,
      data: response
    });
  } catch (error) {
    res.json({
      message: error.message || "Something went wrong",
      status: false,
      data: null,
    });
  }
});


//SOFT DELETE
app.delete("/vendor-restaurant/:id", checkAuth, async (req, res) => {
  try {
    const id = req.params.id;

    const updateObj = {
      isDeleted : true
    };
    const response = await restaurantModel.findByIdAndUpdate(id , updateObj)
    console.log("RESTAURANT RESPONSE", response);
    // SUCCESS RES SEND
    res.json({
      message: "RES SOFT DELETED",
      status: true,
      data: response
    });
  } catch (error) {
    res.json({
      message: error.message || "Something went wrong",
      status: false,
      data: null,
    });
  }
});

mongoose
  .connect(process.env.URL)
  .then(() => console.log("MongoDB Connected!"))
  .catch((err) => console.log("MongoDB error", err));

app.listen(process.env.PORT, () => console.log("SERVER STARTED!"));
