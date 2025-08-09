import express from "express";
import { getAllProjects, createProject, updateProject } from "../controllers/projectsControllers.js";

const router = express.Router();

router.get("/", getAllProjects);
router.post("/", createProject);
router.post("/:id", updateProject);

export default router;