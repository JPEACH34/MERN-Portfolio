import StackTab from "../models/StackTab.js";

export async function getAllStackTabs(req, res) {
  try{
    const stackTabs = await StackTab.find();
    res.status(200).json(stackTabs);
  }catch(error){
    console.log("Error getting Stack Tabs");
    res.status(500).json({message: "Internal Server Error"});
  }
}

export async function createStackTab(req,res){
  try{
    const {title, components, extras, exp} = req.body
    const newStackTab = new StackTab({title, components, extras, exp});

    const savedStackTab = await newStackTab.save();
    res.status(201).json(savedStackTab);
  }catch(error){
    console.error("Error in Stack Tab creation", error);
    res.status(500).json({message: "Internal Server Error"});
  }
}
