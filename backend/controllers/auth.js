import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { userModel } from "../models/userSchema.js";
import nodemailer from "nodemailer";
import { userVerificationEmail } from "../templates/userVerificationEmail.js";
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

    //createOtp
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    const otpExpiry = new Date(Date.now() + 10 * 60 * 1000); // 10 minutes
    console.log("otp", otp);
    // SAVE OBJ
    const saveObj = {
      ...body,
      password: hashPass,
      otp: otp,
      otpExpiry: otpExpiry,
    };

    const response = await userModel.create(saveObj);

    //send verification email
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.USER_EMAIL,
        pass: process.env.APP_PASSWORD,
      },
    });
    const mailOptions = {
      from: process.env.USER_EMAIL,
      to: response.email,
      subject: "USER VERIFICATION",
      html: userVerificationEmail(otp),
    };

    const emailResponse = await transporter.sendMail(mailOptions);
    console.log("emailResponse", emailResponse);
    //SUCCESS RESPONSE SEND
    res.json({
      message: "Signup successful. Please check your email.",
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

export const login = async (req, res) => {
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

export const verifyUser = async (req, res) => {
  try {
    const body = req.body;
    console.log("body" , body)
    const user = await userModel.findOne({ email: body.email });
    console.log("user" , user)

    if (!user) {
      return res.json({
        message: "User not found",
        status: false,
        data: null,
      });
    }
    const otp = body.otp
    if (user.otp !== otp || user.otpExpiry < Date.now()) {
      return res.json({
        message: "Invalid or expired OTP",
        status: false,
        data: null,
      });
    }
    const updateObj = {
      otp: null,
      otpExpiry: null,
      isVerified : true
    };
    const response = await userModel.findByIdAndUpdate(user._id, updateObj, { new: true });
    console.log("email verify success response", response);

    return res.json({
      message: "User Verified",
      status: true,
      data: response,
    });
  } catch (error) {
    return res.json({
      message: error.message,
      status: false,
      data: null,
    });
  }
};
