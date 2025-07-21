import mongoose from "mongoose";

const menuSchema = new mongoose.Schema({
  restaurant: {
    type: String,
    required: true,
  },
  menuName: {
    type: String,
    required: true,
    unique : true 
  },
  menuDetails: {
    type: String,
    required: true,
  },
  menuPrice: {
    type: Number
  },
  menuCategory: {
    type: String
  },
  createdBy: String,
  createdAt :{
    type : Date,
    default : Date.now()
  }
});


export const RestaurantMenuModel = mongoose.model("restaurant-menu" , menuSchema)