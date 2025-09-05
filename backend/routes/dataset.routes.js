import express from "express";
import upload from "../middlewares/upload.middlewares.js";
import {dataSetUpload} from "../controllers/dataset.controllers.js";

const router=express.Router();
router.post("/upload",upload.single("file"),dataSetUpload);
export default router;