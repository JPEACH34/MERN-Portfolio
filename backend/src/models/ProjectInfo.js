import mongoose from "mongoose";

const projectTechsSchema = new mongoose.Schema({
  name:{
    type:String,
    required:true
  }
});

const projectSchema = new mongoose.Schema({
  title:{
    type:String,
    required:true
  },

  mode:{
    type:String,
    required:true
  },

  desc:{
    type:String,
    required:true
  },

  techs:[projectTechsSchema],

  github:{
    type:String,
    required:true
  },

  pic:{
    type:String
  }
});



const Project = mongoose.model("Project", projectSchema);

export default Project;