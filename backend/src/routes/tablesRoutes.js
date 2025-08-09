import express from "express";
import { getAllTables, createTable } from "../controllers/tablesControllers.js";
const router = express.Router();

router.get("/", getAllTables);
router.post("/", createTable);


export default router;

