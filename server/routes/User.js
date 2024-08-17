import express from "express";
import { 
    UserLogin,
    UserRegister,
    addToCart,
    addToFavorites,
    getAllCartItems,
    getUserFavorites,
    placeOrder,
    getOrders,
    removeFromCart,
    clearAllCartItems,
    removeFromFavorites,} from "../controllers/User.js";
import { verifyToken } from "../middleware/verifyUser.js";

const router = express.Router();

router.post("/signup", UserRegister);
router.post("/signin", UserLogin);

router.post("/cart", verifyToken, addToCart)
router.get("/cart", verifyToken, getAllCartItems);
router.patch("/cart", verifyToken, removeFromCart);
router.patch("/cart", verifyToken, clearAllCartItems);

router.post("/favorite", verifyToken, addToFavorites);
router.get("/favorite", verifyToken, getUserFavorites);
router.patch("/favorite", verifyToken, removeFromFavorites);

//order
router.get("/order", verifyToken, getOrders);
router.post("/order", verifyToken, placeOrder);

export default router;