import express from "express";
import { userLogin, userRegister,userVerify } from "../controllers/auth.controllers.js";

const router = express.Router();

router.post("/register", userRegister);
router.post("/login",userLogin);
router.get("/verify",userVerify);

export default router;