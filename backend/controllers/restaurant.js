import { restaurantModel } from "../models/restaurantSchema.js";

export const createRes = async (req, res) => {
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

export const getVendorRes = async (req, res) => {
  try {
    const response = await restaurantModel.find({
      createBy: req.user.id,
      isDeleted: false,
    });
    console.log("RESTAURANT RESPONSE", response);
    // SUCCESS RES SEND
    res.json({
      message: "VENDOR",
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

export const deleteVendorRes = async (req, res) => {
  try {
    const id = req.params.id;

    const updateObj = {
      isDeleted: true,
    };
    const response = await restaurantModel.findByIdAndUpdate(id, updateObj, {
      new: true,
    });
    console.log("RESTAURANT RESPONSE", response);
    // SUCCESS RES SEND
    res.json({
      message: "Restaurant Deleted",
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

export const vendorResStatus = async (req, res) => {
  try {
    const id = req.params.id;
    const body = req.body;
    const restaurant = await restaurantModel.findById(id);
    console.log("restaurant", restaurant);
    if (!restaurant?.isApproved) {
      return res.json({
        message:
          "Your Rastaurant is not Approved , wait for approval from the admin!",
        status: false,
        data: null,
      });
    }

    const response = await restaurantModel.findByIdAndUpdate(id, body, {
      new: true,
    });
    console.log("RESTAURANT RESPONSE", response);

    res.json({
      message: "Restaurant Status Changed",
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

export const vendorUpdateStatus = async (req, res) => {
  try {
    const {id} = req.params
    const body = req.body
    const response = await restaurantModel.findByIdAndUpdate(id, body, {
      new: true,
    });
    console.log("RESTAURANT RESPONSE", response);



    res.json({
      message: "Restaurant Updated successfully",
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
