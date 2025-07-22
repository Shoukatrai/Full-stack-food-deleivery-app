import { OrderModel } from "../models/order.js";

export const getAllOrder = async (req, res) => {
  try {
    const response = await OrderModel.find({});
    console.log("response", response);
    res.json({
      status: true,
      message: "all orders",
      data: response,
    });
  } catch (error) {
    res.json({
      status: true,
      message: "all orders",
      data: null,
    });
  }
};

export const updateOrderStatus = async (req, res) => {
  try {
    const id = req.params.id
    const body = {
      orderStatus: req.body.orderStatus
    };
    const response = await OrderModel.findByIdAndUpdate(id , body);
    console.log("response" , response)
    res.json({
      status: true,
      message: "Order Status Updated!",
      data: response,
    });
  } catch (error) {
    res.json({
      status: true,
      message: error.message,
      data: null,
    });
  }
};
