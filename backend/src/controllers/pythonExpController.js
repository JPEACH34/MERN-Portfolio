import PythonExp from "../models/PythonExp.js";

export async function getAllPythonSkills(req, res) {
  try{
    const pythonSkills = await PythonExp.find();
    res.status(200).json(pythonSkills);
  }catch(error){
    console.log("Error getting Python Experience");
    res.status(500).json({message: "Internal Server Error"});
  }
}

export async function createPythonSkill(req,res){
  try{
    const {title, skills} = req.body
    const newPythonSkill = new PythonExp({title, skills});

    const savedPythonSkill = await newPythonSkill.save();
    res.status(201).json(savedPythonSkill);
  }catch(error){
    console.error("Error in Python Skill creation", error);
    res.status(500).json({message: "Internal Server Error"});
  }
}