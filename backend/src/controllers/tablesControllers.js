import Table from "../models/Table.js";

export async function getAllTables(req, res) {
  try{
    const tables = await Table.find();
    res.status(200).json(tables);
  }catch(error){
    console.log("Error getting Experience Tables");
    res.status(500).json({message: "Internal Server Error"});
  }
}

export async function createTable(req,res){
  try{
    const {title, langs_and_exp} = req.body
    const newTable = new Table({title, langs_and_exp});

    const savedTable = await newTable.save();
    res.status(201).json(savedTable);
  }catch(error){
    console.error("Error in Experience Table creation", error);
    res.status(500).json({message: "Internal Server Error"});
  }
}