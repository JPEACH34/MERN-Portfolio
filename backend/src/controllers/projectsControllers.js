import Project from "../models/ProjectInfo.js";

export async function getAllProjects(req, res) {
  try{
    const projects = await Project.find();
    res.status(200).json(projects);
  }catch(error){
    console.log("Error getting Projects");
    res.status(500).json({message: "Internal Server Error"});
  }
}

export async function createProject(req,res){
  try{
    const {title, mode, desc, techs, github} = req.body
    const newProject = new Project({title, mode, desc, techs, github, pic});

    const savedProject = await newProject.save();
    res.status(201).json(savedProject);
  }catch(error){
    console.error("Error in Project creation", error);
    res.status(500).json({message: "Internal Server Error"});
  }
}

export async function updateProject(req,res){
  try{
    const {title, mode, desc, techs, github, pic} = req.body
    const updatedProject = await Cell.findByIdAndUpdate(req.params.id, {title, mode, desc, techs, github, pic}, {new:true});
    if(!updatedProject)return res.status(404).json({message:"Project not found"});

    res.status(200).json({message: "Updated Successfully"});
  }catch(error){
    res.status(500).json("Internal Server Error");
    console.log("Error Updating Project", error);
  }
}