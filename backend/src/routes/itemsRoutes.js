import express from "express";
import { getAllCells, createCell, updateCell, deleteCell, getCellById } from "../controllers/itemsController.js";
const router = express.Router();

router.get("/", getAllCells);
router.post("/", createCell);
router.put("/:id", updateCell);
router.delete("/:id", deleteCell);
router.get("/:id", getCellById);

export default router;

