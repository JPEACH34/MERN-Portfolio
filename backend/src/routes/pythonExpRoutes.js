import express from "express";
import { getAllPythonSkills, createPythonSkill } from "../controllers/pythonExpController.js";
const router = express.Router();

router.get("/", getAllPythonSkills);
router.post("/", createPythonSkill);

export default router;