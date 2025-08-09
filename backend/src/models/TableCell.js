import mongoose from "mongoose";

const cellSchema = new mongoose.Schema({
  lang:{
    type:String,
    required:true
  },

  exp:{
    type:String,
    required:true
  },
});

const Cell = mongoose.model("Cell", cellSchema);

export default Cell;