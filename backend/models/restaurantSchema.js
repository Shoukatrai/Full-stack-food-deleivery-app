import mongoose from "mongoose";

const resSchema = new mongoose.Schema({
  restaurantName: String,
  details: String,
  contactNumber: String,
  address: String,
  email: String,
  category: String,
  isOpen: {
    type: Boolean,
    default: false,
  },
  isApproved: {
    type: Boolean,
    default: false,
  },

  createBy: String, // create user relation using ref

  createAt: {
    type: Date,
    default: Date.now(),
  },
  isDeleted: {
    type: Boolean,
    default: false,
  },
});

export const restaurantModel = mongoose.model("restaurant", resSchema);
