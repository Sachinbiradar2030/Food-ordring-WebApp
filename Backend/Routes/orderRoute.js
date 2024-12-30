import express from "express"
import authMiddleware from "../Middleware/auth.js";
import { placeOrder, verifyOrder,userOrders,listOrders,updateStatus } from "../Controller/orderController.js";

const orderRouter=express.Router();

orderRouter.post("/place",authMiddleware,placeOrder);
orderRouter.post("/verify",verifyOrder);
orderRouter.post("/userorders",authMiddleware,userOrders);
orderRouter.get('/list',listOrders)
orderRouter.post('/status',updateStatus)

export default orderRouter;