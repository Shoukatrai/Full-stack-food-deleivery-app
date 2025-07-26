import express from "express";
import { getUserAllMenu, getUser3topRestaurants , makeNewOrder, getAllRestaurant } from "../controllers/client.js";
import { checkAuth } from "../middlewares/auth.js";


const clientRouter = express.Router()



clientRouter.get("/all-top-restaurants", getUser3topRestaurants )
clientRouter.get("/all-restaurants", checkAuth, getAllRestaurant)
clientRouter.get("/all-menu" , getUserAllMenu)
clientRouter.post("/make-order" ,checkAuth, makeNewOrder)
// clientRouter.post("/login" , login)


export default clientRouter