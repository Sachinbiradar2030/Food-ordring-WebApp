import express from 'express'
import { addTocart,removeFromCart,getCart } from '../Controller/cartController.js'
import authMiddleware from '../Middleware/auth.js';
const cartRouter=express.Router();


cartRouter.post("/add",authMiddleware, addTocart);
cartRouter.post("/remove",authMiddleware,removeFromCart);
cartRouter.post("/get",authMiddleware,getCart);


export default cartRouter;