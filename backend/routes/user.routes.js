import express from "express";
import authMiddleware from "../middlewares/auth.middleware.js";
import { getUserProfile, updateUserProfile, deleteUserAccount } from "../controllers/user.controllers.js";

const router = express.Router();

router.get("/me", authMiddleware, getUserProfile);
router.put("/update", authMiddleware, updateUserProfile);
router.delete("/delete", authMiddleware, deleteUserAccount);


export default router;