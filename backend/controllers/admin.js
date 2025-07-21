import { restaurantModel } from "../models/restaurantSchema.js";

export const getAllRestaurants = async (req, res) => {
  try {
    console.log("req");
    const response = await restaurantModel.find();
    console.log("response", response);
    res.json({
      status: true,
      message: "Got All Restaurants",
      data: response,
    });
  } catch (error) {
    res.json({
      status: false,
      message: error.message,
      data: null,
    });
  }
};

export const approveRestaurant = async (req, res) => {
  try {
    const id = req.params.id;
    const body = req.body;

    const updateObj = {
      isApproved: body.isApproved,
    };

    const response = await restaurantModel.findByIdAndUpdate(id, updateObj, {
      new: true,
    });
    console.log("response", response);
    res.json({
      status: true,
      message: "Status Changed",
      data: response,
    });
  } catch (error) {
    res.json({
      status: false,
      message: error.message,
      data: null,
    });
  }
};

export const adminDeleteRestaurant = async (req, res) => {
  try {
    const id = req.params.id;
    const body = req.body;

    console.log("updateObj" , body , id)
    
    
    const updateObj = {
      isDeleted: body.isDeleted,
    };

    const response = await restaurantModel.findByIdAndUpdate(id, updateObj, {
      new: true,
    });
    console.log("response", response);
    res.json({
      status: true,
      message: "Deleted",
      data: response,
    });
  } catch (error) {
    res.json({
      status: false,
      message: error.message,
      data: null,
    });
  }
};
