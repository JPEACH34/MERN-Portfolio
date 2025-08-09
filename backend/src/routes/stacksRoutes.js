import express from "express";
import { getAllStackTabs, createStackTab } from "../controllers/stackTabsController.js";

const router = express.Router();

router.get("/", getAllStackTabs);
router.post("/", createStackTab);

export default router;