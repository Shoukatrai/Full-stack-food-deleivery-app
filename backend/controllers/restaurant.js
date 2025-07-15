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
      data: response
    });
  } catch (error) {
    res.json({
      message: error.message || "Something went wrong",
      status: false,
      data: null,
    });
  }
}


export const getVendorRes = async (req, res) => {
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
}

export const deleteVendorRes = async (req, res) => {
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
}