import express from "express";
import { adminDeleteRestaurant, approveRestaurant, getAllRestaurants } from "../controllers/admin.js";
import { adminCheckAuth } from "../middlewares/auth.js";


const adminRouter = express.Router()



adminRouter.get("/all-restaurants" , adminCheckAuth, getAllRestaurants)
adminRouter.patch("/restaurant-approve/:id" , adminCheckAuth, approveRestaurant)
adminRouter.patch("/restaurant-delete/:id" , adminCheckAuth, adminDeleteRestaurant)



export default adminRouter