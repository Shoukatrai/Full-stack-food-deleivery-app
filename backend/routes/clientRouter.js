import express from "express";
import { getUserAllMenu, getUserAllRestaurants, makeNewOrder } from "../controllers/client.js";
import { checkAuth } from "../middlewares/auth.js";


const clientRouter = express.Router()



clientRouter.get("/all-restaurants", getUserAllRestaurants )
clientRouter.get("/all-menu" , getUserAllMenu)
clientRouter.post("/make-order" ,checkAuth, makeNewOrder)
// clientRouter.post("/login" , login)


export default clientRouter