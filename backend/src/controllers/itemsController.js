import Cell from "../models/TableCell.js";

export async function getAllCells(req, res){
  try{
    const cells = await Cell.find()
    res.status(200).json(cells);
  }catch(error){
    res.status(500).json({message: "Internal Server Error"});
    console.log("Internal Server Error", error);
  }
}

export async function createCell(req,res){
  try{
    const {lang, exp} = req.body
    const newCell = new Cell({lang, exp});

    const savedNote = await newCell.save();
    res.status(201).json(savedNote);
  }catch(error){
    console.error("Error in Cell creation", error);
    res.status(500).json({message: "Internal Server Error"});
  }
}

export async function updateCell(req,res){
  try{
    const {lang, exp} = req.body
    const updatedCell = await Cell.findByIdAndUpdate(req.params.id, {lang, exp}, {new:true});
    if(!updatedCell)return res.status(404).json({message:"Cell not found"});

    res.status(200).json({message: "Updated Successfully"});
  }catch(error){
    res.status(500).json("Internal Server Error");
    console.log("Error Updating Cell", error);
  }
}

export async function deleteCell(req,res){
  try{
    const deletedCell = await Cell.findByIdAndDelete(req.params.id);
    if(!deletedCell) return res.status(404).json({message:"Cell not found"});

    res.status(200).json({message:"Deleted Successfully"});
  }catch(error){
    console.error("Error deleting Cell", error);
    res.status(500).json({message:"Internal Server Error"});
  }
}

export async function getCellById(req, res){
  try{
    const cell = await Cell.findById(req.params.id);
    if(!cell) return res.status(404).json({message:"Cell not found"});

    res.status(200).json({message:"Cell Found by ID"});
  }catch(error){
    console.error("Error in getCellByID controller", error);
    res.status(500).json({message:"Internal Server Error"});
  }
}