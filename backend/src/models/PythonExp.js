import mongoose from "mongoose";

const subSkillSchema = new mongoose.Schema({
  name:{
    type:String,
    required:true
  }
});

const pythonExpSchema = new mongoose.Schema({
  title:{
    type:String,
    required:true
  },

  skills:[subSkillSchema]
});

const PythonExp = mongoose.model("PythonExp", pythonExpSchema);

export default PythonExp;