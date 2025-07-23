import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique : true 
  },
  password: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String
  },
  gender: {
    type: String
  },
  type: {
    type: String,
    enum : ["admin" , "customer" , "vendor"]
  },
  isVerified: {
    type: Boolean,
    default : false
  },
  createdAt :{
    type : Date,
    default : Date.now()
  },
  otp :{
    type : String,
    default : null
  },
  otpExpiry :{
    type : Date,
    default : null
  }
});


export const userModel = mongoose.model("user" , userSchema)