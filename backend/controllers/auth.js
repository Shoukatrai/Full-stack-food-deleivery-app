
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { userModel } from "../models/userSchema.js";

export const signup = async (req, res) => {
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
};


export const login =  async (req, res) => {
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
};