import express from "express";
import { createRes, deleteVendorRes, getVendorRes, vendorResStatus } from "../controllers/restaurant.js";
import { checkAuth } from "../middlewares/auth.js";
const resRouter = express.Router();

resRouter.post("/create-restaurant", checkAuth, createRes);
resRouter.get("/vendor-restaurant", checkAuth, getVendorRes);
resRouter.delete("/vendor-restaurant/:id", checkAuth, deleteVendorRes);
resRouter.patch("/vendor-restaurant-status/:id", checkAuth, vendorResStatus);

export default resRouter;
