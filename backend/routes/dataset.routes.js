import express from "express";
import upload from "../middlewares/upload.middlewares.js";
import {dataSetUpload} from "../controllers/dataset.controllers.js";
import authMiddleware from "../middlewares/auth.middleware.js";

const router=express.Router();
router.post("/upload",authMiddleware,upload.single("file"),dataSetUpload);
export default router;